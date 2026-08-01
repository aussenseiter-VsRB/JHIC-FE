import { useState } from "react";
import { ArrowRight, CheckCircle, ClipboardList, RotateCcw } from "lucide-react";
import { Link } from "react-router-dom";
import daftarData from "./daftar.json";
import "./css/daftar.css";

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

function Daftar() {
  const [values, setValues] = useState<Record<string, string>>({
    ...initialValues,
    jurusan: daftarData.jurusanOptions[0],
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetForm = () => {
    setValues({ ...initialValues, jurusan: daftarData.jurusanOptions[0] });
    setSubmitted(false);
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
          <span className="daftar-badge">{daftarData.badge}</span>
          <h1 className="daftar-title font-heading">{daftarData.title}</h1>
          <p className="daftar-subtitle">{daftarData.subtitle}</p>
        </div>

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

          <button type="submit" className="daftar-btn daftar-btn--primary daftar-submit">
            <ClipboardList className="h-4 w-4" />
            {daftarData.submitLabel}
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Daftar;
