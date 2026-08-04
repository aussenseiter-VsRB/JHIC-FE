import { useCallback, useRef, useState } from "react";
import { ScanLine, FileText, ArrowRight, Sparkles, Send, AlertCircle } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { parseKk, askSpmb, saveKkPrefill } from "../../../services/spmb";

interface SpmbAssistData {
  aiTitle: string;
  aiSubtitle: string;
  aiChildName: string;
  aiUpload: string;
  aiParse: string;
  aiParsing: string;
  aiFilled: string;
  manualTitle: string;
  manualSubtitle: string;
  manualCta: string;
  qaTitle: string;
  qaPlaceholder: string;
  qaSend: string;
  qaSuggestion: string;
}

const defaultData: SpmbAssistData = {
  aiTitle: "Dibantu AI dengan Kartu Keluarga",
  aiSubtitle: "Upload foto/dokumen KK dan nama anak, formulir akan terisi otomatis. Periksa kembali sebelum dikirim.",
  aiChildName: "Nama anak",
  aiUpload: "Upload KK",
  aiParse: "Isi Otomatis dari KK",
  aiParsing: "Membaca KK...",
  aiFilled: "Data terisi otomatis. Lanjut periksa di halaman pendaftaran.",
  manualTitle: "Isi Formulir Sendiri",
  manualSubtitle: "Lengkapi seluruh data pendaftaran secara manual tanpa bantuan AI.",
  manualCta: "Buka Formulir",
  qaTitle: "Tanya Seputar SPMB",
  qaPlaceholder: "Tulis pertanyaanmu...",
  qaSend: "Kirim",
  qaSuggestion: "Contoh: Apa saja syarat mendaftar SPMB?",
};

interface SpmbAssistProps {
  data?: Partial<SpmbAssistData>;
}

function SpmbAssist({ data = {} }: SpmbAssistProps) {
  const t = { ...defaultData, ...data };
  const navigate = useNavigate();

  const [kkFile, setKkFile] = useState<File | null>(null);
  const [childName, setChildName] = useState("");
  const [parsing, setParsing] = useState(false);
  const [error, setError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [question, setQuestion] = useState("");
  const [asking, setAsking] = useState(false);
  const [answer, setAnswer] = useState("");

  const handleParse = useCallback(async () => {
    if (!kkFile || !childName.trim() || parsing) return;
    setParsing(true);
    setError("");
    try {
      const kk = await parseKk(kkFile, childName.trim());
      saveKkPrefill(kk);
      navigate("/daftar");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Gagal membaca KK.");
    } finally {
      setParsing(false);
    }
  }, [kkFile, childName, parsing, navigate]);

  const handleAsk = useCallback(async () => {
    const q = question.trim();
    if (!q || asking) return;
    setAsking(true);
    setAnswer("");
    try {
      setAnswer(await askSpmb(q));
    } catch (err) {
      setAnswer(err instanceof Error ? err.message : "Gagal mendapatkan jawaban.");
    } finally {
      setAsking(false);
    }
  }, [question, asking]);

  return (
    <div className="ppdb-section">
      <h2 className="ppdb-section-title">Pendaftaran SPMB</h2>
      <span className="ppdb-section-accent" />
      <p className="ppdb-assist-intro">
        Pilih cara mendaftar: dibantu AI membaca Kartu Keluarga, atau isi formulir
        sendiri.
      </p>

      <div className="ppdb-assist-grid">
        <div className="ppdb-assist-card ppdb-assist-card--ai">
          <div className="ppdb-assist-card-icon">
            <ScanLine className="h-6 w-6" />
          </div>
          <h3 className="ppdb-assist-card-title">{t.aiTitle}</h3>
          <p className="ppdb-assist-card-desc">{t.aiSubtitle}</p>

          <div className="ppdb-assist-fields">
            <input
              type="text"
              className="ppdb-assist-input"
              placeholder={t.aiChildName}
              value={childName}
              onChange={(e) => setChildName(e.target.value)}
            />
            <input
              ref={fileInputRef}
              type="file"
              accept="image/jpeg,image/png,image/webp,application/pdf"
              className="ppdb-assist-input"
              onChange={(e) => setKkFile(e.target.files?.[0] ?? null)}
            />
            <button
              type="button"
              className="ppdb-assist-btn"
              onClick={handleParse}
              disabled={!kkFile || !childName.trim() || parsing}
            >
              <ScanLine className="h-4 w-4" />
              {parsing ? t.aiParsing : t.aiParse}
            </button>
          </div>

          {error && (
            <p className="ppdb-assist-error">
              <AlertCircle className="h-4 w-4" />
              {error}
            </p>
          )}
        </div>

        <div className="ppdb-assist-card">
          <div className="ppdb-assist-card-icon ppdb-assist-card-icon--manual">
            <FileText className="h-6 w-6" />
          </div>
          <h3 className="ppdb-assist-card-title">{t.manualTitle}</h3>
          <p className="ppdb-assist-card-desc">{t.manualSubtitle}</p>
          <Link to="/daftar" className="ppdb-assist-btn ppdb-assist-btn--manual">
            {t.manualCta}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="ppdb-assist-qa">
        <h3 className="ppdb-assist-qa-title">
          <Sparkles className="h-5 w-5" />
          {t.qaTitle}
        </h3>
        <p className="ppdb-assist-qa-suggestion">{t.qaSuggestion}</p>
        <div className="ppdb-assist-qa-row">
          <input
            type="text"
            className="ppdb-assist-input"
            placeholder={t.qaPlaceholder}
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <button
            type="button"
            className="ppdb-assist-btn"
            onClick={handleAsk}
            disabled={!question.trim() || asking}
          >
            <Send className="h-4 w-4" />
            {t.qaSend}
          </button>
        </div>
        {answer && <p className="ppdb-assist-qa-answer">{answer}</p>}
      </div>
    </div>
  );
}

export default SpmbAssist;
