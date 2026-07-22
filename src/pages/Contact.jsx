import { useState } from "react";
import { GitBranch, Mail } from "lucide-react";
import Input from "../ui/Input";

const Contact = () => {
  const [values, setValues] = useState({
    names: "",
    subject: "",
    reason: "",
  });

  const [inputErrors, setInputErrors] = useState({
    namesError: "",
    subjectError: "",
    reasonError: "",
  });

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!values.names.trim()) {
      setInputErrors((err) => ({
        ...err,
        namesError: "Name required!",
      }));
      return;
    }
    setInputErrors((err) => ({ ...err, namesError: "" }));

    if (!values.subject.trim()) {
      setInputErrors((err) => ({
        ...err,
        subjectError: "Subject required!",
      }));
      return;
    }
    setInputErrors((err) => ({ ...err, subjectError: "" }));

    if (!values.reason.trim()) {
      setInputErrors((err) => ({
        ...err,
        reasonError: "Reason required!",
      }));
      return;
    }
    setInputErrors((err) => ({ ...err, reasonError: "" }));
    setValues((values) => ({ ...values, names: "", subject: "", reason: "" }));

    alert("successfully set!!!");
  };

  const emailAddress = "munirsebikaaka@gmail.com";
  const inputStyles = `w-full rounded-2xl border bg-slate-950 py-1.5 pl-3  outline-none focus:border-blue-500 ${inputErrors.reasonError && values.reason.length < 1 ? "border-red-400" : "border-slate-800"}`;

  return (
    <section className="relative pt-32 pb-24 px-6 min-h-screen bg-slate-950 text-slate-100 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-8 right-10 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <p className="text-blue-400 font-semibold tracking-[0.24em] uppercase text-sm mb-4">
          Munir's Contact
        </p>
        <div className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let&apos;s talk about your next project
          </h1>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto leading-relaxed text-base sm:text-lg">
            Reach out by email or GitHub, or send a quick message below and
            I&apos;ll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] items-start">
          <div className="space-y-6 p-8 rounded-3xl border border-slate-800 bg-slate-900/90 shadow-2xl shadow-black/20">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
                Get in touch
              </p>
              <h2 className="text-3xl font-bold text-white">Talk with me</h2>
              <p className="text-slate-400 leading-relaxed">
                Use the form to send your message directly to my email address.
                You can also connect via GitHub if you prefer.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href={`mailto:${emailAddress}`}
                className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-950 px-5 py-4 text-slate-100 hover:border-blue-500 hover:text-blue-400 transition">
                <Mail className="w-5 h-5" />
                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <p className="text-white font-medium">{emailAddress}</p>
                </div>
              </a>

              <a
                href="https://github.com/munirsebikaaka"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-950 px-5 py-4 text-slate-100 hover:border-blue-500 hover:text-blue-400 transition">
                <GitBranch className="w-5 h-5" />
                <div>
                  <p className="text-sm text-slate-400">GitHub</p>
                  <p className="text-white font-medium">
                    github.com/munirsebikaaka
                  </p>
                </div>
              </a>
              <a
                href="https://github.com/munirsebikaaka"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-950 px-5 py-4 text-slate-100 hover:border-blue-500 hover:text-blue-400 transition">
                <GitBranch className="w-5 h-5" />
                <div>
                  <p className="text-sm text-slate-400">GitHub</p>
                  <p className="text-white font-medium">
                    github.com/munirsebikaaka
                  </p>
                </div>
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 p-8 rounded-3xl border border-slate-800 bg-slate-900/90 shadow-2xl shadow-black/20">
            <div className="grid gap-5 sm:grid-cols-2">
              <Input
                label={"Name"}
                name={"names"}
                values={values.names}
                placeholder={"Your full names"}
                handleChanges={handleChanges}
                inputError={inputErrors.namesError}
              />

              <Input
                label={"Subject"}
                name={"subject"}
                placeholder={"Project idea or question"}
                values={values.subject}
                handleChanges={handleChanges}
                inputError={inputErrors.subjectError}
              />
            </div>

            <label className="relative space-y-2 text-sm text-slate-300">
              <span>Reason</span>
              <textarea
                value={values.reason}
                onChange={handleChanges}
                name="reason"
                rows={4}
                placeholder="Tell me what you need help with"
                className={inputStyles}
              />

              {inputErrors.reasonError && values.reason.length < 1 && (
                <p className="absolute top-0 right-0 text-red-400/90 text-sm pl-[10px]">
                  {inputErrors.reasonError}
                </p>
              )}
            </label>

            <button
              type="submit"
              className="w-full rounded-3xl bg-blue-600 p-2 mt-5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-700 cursor-pointer">
              Send message
            </button>

            <p className="text-xs text-center text-slate-500">
              Send me a message and i will get back to you soon.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
