import { Clock, ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import "./css/daftar.css";

/*
import { useCallback, useRef, useState } from "react";
import {
  ArrowRight,
  CheckCircle,
  ClipboardList,
  RotateCcw,
  ScanLine,
  AlertCircle,
} from "lucide-react";
import { Link } from "react-router";
import daftarData from "./daftar.json";
import "./css/daftar.css";
import {
  parseKk,
  submitRegistration,
  readKkPrefill,
  clearKkPrefill,
  type KkParseResult,
} from "../../services/spmb";

interface Field {
  name: string;
  label: string;
  type: "text" | "tel" | "textarea" | "select";
  placeholder?: string;
  required: boolean;
  fullWidth?: boolean;
  options?: string[];
}

const fields = daftarData.fields as Field[];
const initialValues: Record<string, string> = Object.fromEntries(
  fields.map((field) => [field.name, field.options?.[0] ?? ""]),
);

function kkToValues(kk: KkParseResult): Record<string, string> {
  const values: Record<string, string> = {};
  for (const key of Object.keys(initialValues) as (keyof KkParseResult)[]) {
    if (key in kk) values[key] = kk[key as keyof KkParseResult];
  }
  return values;
}

function Daftar() {
  const [initial] = useState(() => {
    const kk = readKkPrefill();
    if (kk) clearKkPrefill();
    return { kk };
  });
  const prefill = initial.kk;
  const [values, setValues] = useState<Record<string, string>>({
    ...initialValues,
    ...(prefill ? kkToValues(prefill) : {}),
    jurusan: daftarData.jurusanOptions[0],
  });
  const [kkNotice, setKkNotice] = useState(prefill ? daftarData.aiAssistFilled : "");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [kkFile, setKkFile] = useState<File | null>(null);
  const [childName, setChildName] = useState("");
  const [parsing, setParsing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleParseKk = useCallback(async () => {
    if (!kkFile || !childName.trim() || parsing) return;
    setParsing(true);
    setKkNotice("");
    setErrorMsg("");
    try {
      const kk = await parseKk(kkFile, childName.trim());
      setValues((prev) => ({ ...prev, ...kkToValues(kk) }));
      setKkNotice(daftarData.aiAssistFilled);
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Terjadi kesalahan membaca KK.");
    } finally {
      setParsing(false);
    }
  }, [kkFile, childName, parsing]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setErrorMsg("");
    try {
      await submitRegistration({ ...values, jurusan: values.jurusan });
      clearKkPrefill();
      setSubmitted(true);
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Terjadi kesalahan saat mengirim.");
    } finally {
      setSubmitting(false);
    }
  }, [submitting, values]);

  const resetForm = () => {
    setValues({ ...initialValues, jurusan: daftarData.jurusanOptions[0] });
    setSubmitted(false);
    setErrorMsg("");
    setKkNotice("");
    setKkFile(null);
    setChildName("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  if (submitted) {
    return (
      <div className="daftar bg-pearl pt-32 pb-20">
        <div className="daftar-container">
          <div className="daftar-success">
            <div className="daftar-success-icon">
              <CheckCircle className="h-12 w-12 text-emerald-500" />
            </div>
            <h1 className="daftar-success-title font-heading">{daftarData.successTitle}</h1>
            <p className="daftar-success-message">{daftarData.successMessage}</p>
            <div className="daftar-success-actions">
              <button type="button" onClick={resetForm} className="daftar-btn daftar-btn--ghost">
                <RotateCcw className="h-4 w-4" />
                {daftarData.daftarLagiLabel}
              </button>
              <Link to="/" className="daftar-btn daftar-btn--primary">
                {daftarData.kembaliLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="daftar bg-pearl pt-32 pb-20">
      <div className="daftar-container">
        <div className="daftar-header">
        
          <h1 className="daftar-title font-heading">{daftarData.title}</h1>
          <p className="daftar-subtitle">{daftarData.subtitle}</p>
        </div>

        <div className="daftar-ai">
          <div className="daftar-ai-icon">
            <ScanLine className="h-6 w-6" />
          </div>
          <div className="daftar-ai-body">
            <h2 className="daftar-ai-title font-heading">{daftarData.aiAssistLabel}</h2>
            <p className="daftar-ai-hint">{daftarData.aiAssistHint}</p>
            <div className="daftar-ai-fields">
              <input
                type="text"
                className="daftar-input"
                placeholder={daftarData.aiAssistChildName}
                value={childName}
                onChange={(e) => setChildName(e.target.value)}
              />
              <input
                ref={fileInputRef}
                type="file"
                accept="image/jpeg,image/png,image/webp,application/pdf"
                className="daftar-input"
                onChange={(e) => setKkFile(e.target.files?.[0] ?? null)}
              />
              <button
                type="button"
                className="daftar-btn daftar-btn--ai"
                onClick={handleParseKk}
                disabled={!kkFile || !childName.trim() || parsing}
              >
                <ScanLine className="h-4 w-4" />
                {parsing ? daftarData.aiAssistParsing : daftarData.aiAssistParse}
              </button>
            </div>
            {kkNotice && (
              <p className="daftar-ai-notice">
                <CheckCircle className="h-4 w-4" />
                {kkNotice}
              </p>
            )}
          </div>
        </div>

        {errorMsg && (
          <div className="daftar-error" role="alert">
            <AlertCircle className="h-5 w-5" />
            {errorMsg}
          </div>
        )}

        <form className="daftar-form" onSubmit={handleSubmit} noValidate={false}>
          <div className="daftar-fields">
            {fields.map((field) => (
              <div
                className={`daftar-field ${field.fullWidth ? "daftar-field--full" : ""}`}
                key={field.name}
              >
                <label className="daftar-label" htmlFor={field.name}>
                  {field.label}
                  {field.required && <span className="daftar-required"> *</span>}
                </label>
                {field.type === "textarea" ? (
                  <textarea
                    id={field.name}
                    name={field.name}
                    rows={4}
                    required={field.required}
                    placeholder={field.placeholder}
                    value={values[field.name]}
                    onChange={handleChange}
                    className="daftar-input"
                  />
                ) : field.options ? (
                  <select
                    id={field.name}
                    name={field.name}
                    required={field.required}
                    value={values[field.name]}
                    onChange={handleChange}
                    className="daftar-input"
                  >
                    {field.options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    required={field.required}
                    placeholder={field.placeholder}
                    value={values[field.name]}
                    onChange={handleChange}
                    className="daftar-input"
                  />
                )}
              </div>
            ))}

            <div className="daftar-field">
              <label className="daftar-label" htmlFor="jurusan">
                {daftarData.jurusanLabel}
              </label>
              <select
                id="jurusan"
                name="jurusan"
                value={values.jurusan}
                onChange={handleChange}
                className="daftar-input"
              >
                {daftarData.jurusanOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="daftar-btn daftar-btn--primary daftar-submit"
            disabled={submitting}
          >
            <ClipboardList className="h-4 w-4" />
            {submitting ? daftarData.submitLoadingLabel : daftarData.submitLabel}
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
*/

function Daftar() {
  return (
    <div className="daftar bg-pearl pt-32 pb-20">
      <div className="daftar-container">
        <div className="daftar-coming-soon">
          <div className="daftar-coming-soon-icon">
            <Clock className="h-10 w-10" />
          </div>
          <h1 className="daftar-coming-soon-title font-heading">Coming Soon</h1>
          <p className="daftar-coming-soon-text">
            Halaman pendaftaran sedang dipersiapkan. Silakan kembali lagi nanti.
          </p>
          <Link to="/" className="daftar-btn daftar-btn--primary">
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Daftar;
