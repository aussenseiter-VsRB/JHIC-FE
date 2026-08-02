import { useState, useEffect, useCallback, useRef } from "react";
import { ArrowLeft, ArrowRight, RotateCcw, Bot, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./css/nexxa-match.css";
import nexxaMatchData from "./nexxa-match.json";

interface JurusanResult {
  nama_jurusan: string;
  alasan: string;
  persentase_akuntansi: number;
  persentase_pplg: number;
  persentase_hotel: number;
}

const questions = nexxaMatchData.questions;
const jurusanColors: Record<string, string> = nexxaMatchData.jurusanColors;
const jurusanLongName: Record<string, string> = nexxaMatchData.jurusanLongName;

const WEBHOOK_URL = import.meta.env.VITE_N8N_WEBHOOK_URL as string | undefined;
const WEBHOOK_SECRET = import.meta.env.VITE_N8N_WEBHOOK_SECRET as string | undefined;

function isJurusanResult(value: unknown): value is JurusanResult {
  if (typeof value !== "object" || value === null) return false;
  const r = value as Record<string, unknown>;
  return (
    typeof r.nama_jurusan === "string" &&
    typeof r.alasan === "string" &&
    typeof r.persentase_akuntansi === "number" &&
    typeof r.persentase_pplg === "number" &&
    typeof r.persentase_hotel === "number"
  );
}

async function fetchRekomendasi(answers: string[]): Promise<JurusanResult> {
  if (!WEBHOOK_URL) {
    throw new Error("VITE_N8N_WEBHOOK_URL belum diatur di .env.local");
  }

  const payload = Object.fromEntries(
    answers.map((answer, index) => [`jawaban_${index + 1}`, answer]),
  );

  let res: Response;
  try {
    res = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(WEBHOOK_SECRET ? { "x-secret-key": WEBHOOK_SECRET } : {}),
      },
      body: JSON.stringify(payload),
    });
  } catch {
    throw new Error("Tidak dapat terhubung ke server AI. Periksa koneksi internetmu.");
  }

  if (!res.ok) {
    throw new Error(`Server AI merespons dengan status ${res.status}. Pastikan workflow n8n aktif.`);
  }

  let json: unknown;
  try {
    json = await res.json();
  } catch {
    throw new Error("Server AI mengembalikan respons kosong atau bukan JSON.");
  }

  if (!isJurusanResult(json)) {
    throw new Error("Format respons server AI tidak sesuai dengan yang diharapkan.");
  }

  return json;
}

function WavingHand() {
  return (
    <svg
      className="nexxa-match-mascot-arm"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      stroke="rgba(255,255,255,0.85)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 15L9.5 8.5C9.5 7.5 10.5 6.5 11.5 6.5S13 7.5 13 8.5V15" />
      <path d="M13 14.5L13.5 7.5C13.5 6.5 14.5 5.5 15.5 5.5S17 6.5 17 7.5V14.5" />
      <path d="M17 14V9.5C17 8.5 18 7.5 19 7.5S20.5 8.5 20.5 9.5V17C20.5 20 18 22 15 22H11.5C10 22 9 21.5 8 20.5L6 18" />
    </svg>
  );
}

function NexxaMatch() {
  const navigate = useNavigate();
  const [step, setStep] = useState<"intro" | "quiz" | "loading" | "result" | "error">("intro");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>(Array(questions.length).fill(""));
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState<JurusanResult | null>(null);
  const [errorMsg, setErrorMsg] = useState("");

  const [isAnimating, setIsAnimating] = useState(false);
  const [animDir, setAnimDir] = useState<"left" | "right">("left");
  const [animOutQuestion, setAnimOutQuestion] = useState(0);
  const [animNextQuestion, setAnimNextQuestion] = useState(0);
  const [animNextValue, setAnimNextValue] = useState("");

  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (step === "quiz" && !isAnimating) {
      const timer = setTimeout(() => inputRef.current?.focus(), 80);
      return () => clearTimeout(timer);
    }
  }, [currentQuestion, step, isAnimating]);

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setCurrentQuestion(animNextQuestion);
        setInputValue(animNextValue);
        setIsAnimating(false);
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [isAnimating, animNextQuestion, animNextValue]);

  const saveCurrentAnswer = useCallback(
    (value: string) => {
      const newAnswers = [...answers];
      newAnswers[currentQuestion] = value;
      setAnswers(newAnswers);
      return newAnswers;
    },
    [answers, currentQuestion],
  );

  const goNext = useCallback(() => {
    if (inputValue.trim() === "" || isAnimating) return;

    const nextIdx = currentQuestion + 1;
    const newAnswers = saveCurrentAnswer(inputValue);

    if (nextIdx >= questions.length) {
      setStep("loading");
      fetchRekomendasi(newAnswers)
        .then((data) => {
          setResult(data);
          setStep("result");
        })
        .catch((err: unknown) => {
          const message = err instanceof Error ? err.message : "Terjadi kesalahan";
          setErrorMsg(message);
          setStep("error");
        });
      return;
    }

    setAnimOutQuestion(currentQuestion);
    setAnimNextQuestion(nextIdx);
    setAnimNextValue(newAnswers[nextIdx] || "");
    setAnimDir("left");
    setIsAnimating(true);
  }, [inputValue, isAnimating, currentQuestion, saveCurrentAnswer]);

  const goBack = useCallback(() => {
    if (currentQuestion === 0 || isAnimating) return;

    const prevIdx = currentQuestion - 1;
    const newAnswers = saveCurrentAnswer(inputValue);

    setAnimOutQuestion(currentQuestion);
    setAnimNextQuestion(prevIdx);
    setAnimNextValue(newAnswers[prevIdx] || "");
    setAnimDir("right");
    setIsAnimating(true);
  }, [currentQuestion, isAnimating, inputValue, saveCurrentAnswer]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        goNext();
      }
    },
    [goNext],
  );

  const resetQuiz = useCallback(() => {
    setStep("intro");
    setCurrentQuestion(0);
    setAnswers(Array(questions.length).fill(""));
    setInputValue("");
    setIsAnimating(false);
    setResult(null);
    setErrorMsg("");
  }, []);

  if (step === "intro") {
    return <IntroSection onStart={() => setStep("quiz")} />;
  }

  if (step === "loading") {
    return <LoadingSection />;
  }

  if (step === "error") {
    return <ErrorSection message={errorMsg} onRetry={resetQuiz} />;
  }

  if (step === "result" && result) {
    return <ResultSection result={result} onRetry={resetQuiz} onDaftar={() => navigate("/daftar")} />;
  }


  const isFirst = currentQuestion === 0;
  const isLast = currentQuestion === questions.length - 1;
  const inputEmpty = inputValue.trim() === "";

  return (
    <div className="bg-pearl pt-32 pb-20">
      <div className="mx-auto max-w-2xl px-4">
        <div className="mb-8">
          <div className="mb-2 flex items-center justify-between text-sm font-medium text-slate">
            <span>Pertanyaan {currentQuestion + 1} dari {questions.length}</span>
            <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
            <div
              className="h-full rounded-full bg-blue transition-all duration-500 ease-out"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl">
          {isAnimating && (
            <div
              key={`out-${animOutQuestion}`}
              className={`${animDir === "left" ? "slide-out-left" : "slide-out-right"}`}
            >
              <QuestionCard
                questionNumber={animOutQuestion + 1}
                questionText={questions[animOutQuestion]}
                value={answers[animOutQuestion]}
                readOnly
              />
            </div>
          )}

          <div
            key={`in-${isAnimating ? animNextQuestion : currentQuestion}`}
            className={`${isAnimating ? (animDir === "left" ? "slide-in-right" : "slide-in-left") : ""}`}
          >
            {isAnimating ? (
              <QuestionCard
                questionNumber={animNextQuestion + 1}
                questionText={questions[animNextQuestion]}
                value={animNextValue}
                readOnly
              />
            ) : (
              <div className="rounded-2xl bg-white shadow-lg shadow-black/5">
                <div className="p-8">
                  <p className="mb-1 text-sm font-semibold text-slate">
                    Pertanyaan {currentQuestion + 1}
                  </p>
                  <h2 className="mb-6 font-heading text-xl leading-snug text-navy">
                    {questions[currentQuestion]}
                  </h2>

                  <div className="relative">
                    <textarea
                      ref={inputRef}
                      id={`q-${currentQuestion}`}
                      rows={3}
                      placeholder=" "
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyDown={handleKeyDown}
                      className="peer w-full resize-none rounded-xl border-2 border-gray-200 bg-white px-4 pt-6 pb-3 text-base text-navy outline-none transition-all duration-200 placeholder:text-transparent focus:border-blue focus:ring-0"
                      aria-label="Tulis jawabanmu di sini"
                    />
                    <label
                      htmlFor={`q-${currentQuestion}`}
                      className="pointer-events-none absolute left-4 top-2 bg-white px-1 text-xs text-blue transition-all duration-200 peer-placeholder-shown:top-[14px] peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue"
                    >
                      Tulis jawabanmu di sini...
                    </label>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-gray-100 px-8 py-4">
                  <button
                    type="button"
                    onClick={goBack}
                    disabled={isFirst}
                    className={`flex items-center gap-1.5 rounded-lg px-4 py-2 font-body text-sm font-semibold transition-all duration-200 ${isFirst
                        ? "cursor-not-allowed text-gray-300"
                        : "text-navy hover:bg-navy/5 active:scale-95"
                      }`}
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Kembali
                  </button>

                  <button
                    type="button"
                    onClick={goNext}
                    disabled={inputEmpty}
                    className={`flex items-center gap-1.5 rounded-xl px-6 py-2.5 font-body text-sm font-semibold text-white shadow-md transition-all duration-200 active:scale-95 ${inputEmpty
                        ? "cursor-not-allowed bg-gray-300 shadow-none"
                        : "bg-blue hover:bg-blue-dark hover:shadow-lg"
                      }`}
                  >
                    {isLast ? "Lihat Hasil" : "Lanjut"}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function IntroSection({ onStart }: { onStart: () => void }) {
  return (
    <section className="nexxa-match-header-section">
      <div className="nexxa-match-header-orb nexxa-match-header-orb--1" />
      <div className="nexxa-match-header-orb nexxa-match-header-orb--2" />
      <div className="nexxa-match-header-dots" />

      <div className="nexxa-match-header-inner">
        <div className="flex justify-center md:justify-end">
          <div className="nexxa-match-mascot-box">
            <div className="nexxa-match-mascot-robot">
              <Bot className="h-32 w-32 text-white/80 md:h-36 md:w-36" />
              <WavingHand />
            </div>
            <div className="nexxa-match-speech-bubble">
              Hi! 👋
            </div>
          </div>
        </div>

        <div>
          <h1 className="nexxa-match-title">
            Bingung Mau Masuk
            <br />
            Jurusan Apa?
          </h1>
          <p className="nexxa-match-subtitle">
            Jawab 8 pertanyaan singkat, dan kami akan bantu carikan jurusan
            yang paling cocok buat kamu.
          </p>
          <button
            type="button"
            onClick={onStart}
            className="nexxa-match-cta-button"
          >
            Mulai Kuis
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="pointer-events-none absolute top-1/3 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue/[0.08] blur-[140px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-[300px] w-[300px] rounded-full bg-sky/[0.06] blur-[100px]" />
    </section>
  );
}

function QuestionCard({
  questionNumber,
  questionText,
  value,
  readOnly,
}: {
  questionNumber: number;
  questionText: string;
  value: string;
  readOnly?: boolean;
}) {
  return (
    <div className="rounded-2xl bg-white shadow-lg shadow-black/5">
      <div className="p-8">
        <p className="mb-1 text-sm font-semibold text-slate">
          Pertanyaan {questionNumber}
        </p>
        <h2 className="mb-6 font-heading text-xl leading-snug text-navy">
          {questionText}
        </h2>

        <div className="relative">
          <textarea
            rows={3}
            placeholder=" "
            value={value}
            readOnly={readOnly}
            className="peer w-full resize-none rounded-xl border-2 border-gray-200 bg-white px-4 pt-6 pb-3 text-base text-navy outline-none transition-all duration-200 placeholder:text-transparent focus:border-blue focus:ring-0"
            aria-label="Tulis jawabanmu di sini"
          />
          <label className="pointer-events-none absolute left-4 top-2 bg-white px-1 text-xs text-blue transition-all duration-200 peer-placeholder-shown:top-[14px] peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue">
            Tulis jawabanmu di sini...
          </label>
        </div>
      </div>
    </div>
  );
}

function LoadingSection() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-pearl">
      <div className="text-center">
        <div className="mb-8 flex justify-center">
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-gray-200 border-t-blue" />
        </div>
        <h3 className="mb-3 font-heading text-xl text-navy">
          Menganalisis Jawabanmu
        </h3>
        <p className="text-base text-slate">
          Sedang menganalisis jawabanmu...
        </p>
        <div className="mt-6 flex justify-center gap-1.5">
          <span className="loading-dot inline-block h-2 w-2 rounded-full bg-blue" />
          <span className="loading-dot inline-block h-2 w-2 rounded-full bg-blue" />
          <span className="loading-dot inline-block h-2 w-2 rounded-full bg-blue" />
        </div>
      </div>
    </div>
  );
}

function ResultSection({
  result,
  onRetry,
  onDaftar,
}: {
  result: JurusanResult;
  onRetry: () => void;
  onDaftar: () => void;
}) {
  const entries: { label: string; value: number; color: string }[] = [
    { label: "Akuntansi", value: result.persentase_akuntansi, color: jurusanColors.Akuntansi },
    { label: "PPLG", value: result.persentase_pplg, color: jurusanColors.PPLG },
    { label: "Perhotelan", value: result.persentase_hotel, color: jurusanColors.Perhotelan },
  ];

  return (
    <div className="bg-pearl pt-32 pb-20">
      <div className="mx-auto max-w-2xl px-4">
        <p className="mb-6 text-center text-base leading-relaxed text-navy/70 md:text-lg">
          Berdasarkan jawabanmu, ini jurusan yang paling cocok:
        </p>

        <div className="animate-fade-up rounded-2xl bg-white shadow-xl shadow-black/10">
          <div className="p-8">
            <p className="mb-1 text-sm font-semibold text-slate">
              {jurusanLongName[result.nama_jurusan]}
            </p>
            <h2 className="mb-6 font-heading text-3xl leading-tight text-navy md:text-4xl">
              {result.nama_jurusan}
            </h2>

            <p className="text-base leading-relaxed text-slate">
              {result.alasan}
            </p>
          </div>

          <div className="border-t border-gray-100 px-8 py-6">
            <h3 className="mb-5 font-heading text-lg font-bold text-navy">
              Breakdown Kecocokan
            </h3>
            <div className="flex flex-col gap-4">
              {entries.map((entry) => (
                <div key={entry.label}>
                  <div className="mb-1.5 flex items-center justify-between text-sm">
                    <span className="font-semibold text-navy">{entry.label}</span>
                    <span className="font-bold" style={{ color: entry.color }}>
                      {entry.value}%
                    </span>
                  </div>
                  <div className="h-2.5 w-full overflow-hidden rounded-full bg-gray-100">
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${entry.value}%`,
                        backgroundColor: entry.color,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 border-t border-gray-100 px-8 py-6 sm:flex-row sm:justify-between">
            <button
              type="button"
              onClick={onRetry}
              className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-gray-200 px-6 py-3 font-body text-sm font-semibold text-navy transition-all duration-200 hover:border-navy/30 hover:bg-navy/5 active:scale-95 sm:w-auto"
            >
              <RotateCcw className="h-4 w-4" />
              Coba Lagi
            </button>
            <button
              type="button"
              onClick={onDaftar}
              className="nexxa-match-daftar-btn flex w-full items-center justify-center gap-2 rounded-xl bg-blue px-8 py-3 font-body text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-blue-dark hover:shadow-lg active:scale-95 sm:w-auto"
            >
              Daftar ke Jurusan Ini
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ErrorSection({ message, onRetry }: { message: string; onRetry: () => void }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-pearl">
      <div className="mx-auto max-w-md px-4 text-center">
        <div className="mb-6 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
            <AlertCircle className="h-8 w-8 text-red-500" />
          </div>
        </div>
        <h3 className="mb-3 font-heading text-xl text-navy">
          Gagal Menganalisis Jawaban
        </h3>
        <p className="mb-2 text-sm text-slate">
          Terjadi kendala saat menghubungi server AI.
        </p>
        <p className="mb-8 rounded-lg bg-red-50 px-4 py-2 font-mono text-xs text-red-600">
          {message}
        </p>
        <button
          type="button"
          onClick={onRetry}
          className="inline-flex items-center gap-2 rounded-xl bg-blue px-8 py-3 font-body text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-blue-dark active:scale-95"
        >
          <RotateCcw className="h-4 w-4" />
          Coba Lagi dari Awal
        </button>
      </div>
    </div>
  );
}

export default NexxaMatch;
