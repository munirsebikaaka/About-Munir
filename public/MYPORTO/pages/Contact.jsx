import { useState } from "react";
import { GitBranch, Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import Input from "./ui/Input";

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

  const emailAddress = "[munirsebikaaka@gmail.com]";
  const phoneNumber = "256742083075";

  const handleChanges = (e) => {
    const { name, value } = e.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    setInputErrors((prev) => ({
      ...prev,
      [`${name}Error`]: "",
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const errors = {
      namesError: !values.names.trim() ? "Name is required!" : "",
      subjectError: !values.subject.trim() ? "Subject is required!" : "",
      reasonError: !values.reason.trim() ? "Message is required!" : "",
    };

    setInputErrors(errors);

    if (Object.values(errors).some((error) => error)) {
      return;
    }

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      values.subject,
    )}&body=${encodeURIComponent(
      `Name: ${values.names}\n\nMessage:\n${values.reason}`,
    )}`;

    window.location.href = mailtoLink;

    setValues({
      names: "",
      subject: "",
      reason: "",
    });
  };

  const inputStyles = `w-full rounded-2xl border border-slate-800 bg-slate-950 py-3 px-4 text-slate-100 placeholder:text-slate-600 outline-none transition focus:border-blue-500 resize-none
  `;

  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 px-6 pb-24 pt-32 text-slate-100">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-10 top-8 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-10 left-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-blue-400">
          Munir&apos;s Contact
        </p>
        <div className="mb-14 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Let&apos;s build something great together
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Whether you have a project idea, a question, a job opportunity, or
            simply want to connect, feel free to reach out. I&apos;m always open
            to meaningful conversations and interesting opportunities.
          </p>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-6 rounded-3xl border border-slate-800 bg-slate-900/90 p-8 shadow-2xl shadow-black/20">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
                Get in touch
              </p>

              <h2 className="text-3xl font-bold text-white">
                I&apos;d love to hear from you
              </h2>

              <p className="leading-relaxed text-slate-400">
                Have a project in mind or need help bringing an idea to life?
                Send me a message and I&apos;ll get back to you as soon as
                possible.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href={`mailto:${emailAddress}`}
                className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-950 px-5 py-4 transition hover:border-blue-500 hover:text-blue-400">
                <div className="rounded-xl bg-blue-500/10 p-3">
                  <Mail className="h-5 w-5 text-blue-400" />
                </div>

                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <p className="font-medium text-white">{emailAddress}</p>
                </div>
              </a>

              <a
                href="https://github.com/munirsebikaaka"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-950 px-5 py-4 transition hover:border-blue-500 hover:text-blue-400">
                <div className="rounded-xl bg-blue-500/10 p-3">
                  <GitBranch className="h-5 w-5 text-blue-400" />
                </div>

                <div>
                  <p className="text-sm text-slate-400">GitHub</p>
                  <p className="font-medium text-white">
                    github.com/munirsebikaaka
                  </p>
                </div>
              </a>

              <a
                href={`https://wa.me/${phoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-950 px-5 py-4 transition hover:border-blue-500 hover:text-blue-400">
                <div className="rounded-xl bg-blue-500/10 p-3">
                  <Phone className="h-5 w-5 text-blue-400" />
                </div>

                <div>
                  <p className="text-sm text-slate-400">WhatsApp / Phone</p>
                  <p className="font-medium text-white">0742083075</p>
                </div>
              </a>
            </div>

            {/* Additional Information */}
            <div className="grid gap-4 border-t border-slate-800 pt-6 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-blue-400" />

                <div>
                  <p className="text-sm text-slate-400">Location</p>
                  <p className="text-sm font-medium text-white">Uganda</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 text-blue-400" />

                <div>
                  <p className="text-sm text-slate-400">Response time</p>

                  <p className="text-sm font-medium text-white">
                    Usually within 24 hours
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-5">
              <p className="text-sm leading-relaxed text-slate-300">
                I&apos;m currently open to freelance projects, collaborations,
                and opportunities to work on interesting products and ideas.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-3xl border border-slate-800 bg-slate-900/90 p-8 shadow-2xl shadow-black/20">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
                Send a message
              </p>

              <h2 className="mt-2 text-3xl font-bold text-white">
                Start a conversation
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                Fill in the form below with a few details about your project,
                question, or idea.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Input
                label="Name"
                name="names"
                values={values.names}
                placeholder="Your full name"
                handleChanges={handleChanges}
                inputError={inputErrors.namesError}
              />

              <Input
                label="Subject"
                name="subject"
                values={values.subject}
                placeholder="Project idea or question"
                handleChanges={handleChanges}
                inputError={inputErrors.subjectError}
              />
            </div>

            <label className="relative block space-y-2 text-sm text-slate-300">
              <span>Message</span>

              <textarea
                name="reason"
                value={values.reason}
                onChange={handleChanges}
                rows={7}
                placeholder="Tell me about your project or how I can help..."
                className={`${inputStyles} ${
                  inputErrors.reasonError
                    ? "border-red-400"
                    : "border-slate-800"
                }`}
              />

              {inputErrors.reasonError && (
                <p className="text-sm text-red-400">
                  {inputErrors.reasonError}
                </p>
              )}
            </label>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-3xl bg-blue-600 p-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-700">
              <Send className="h-4 w-4" />
              Send Message
            </button>

            <p className="text-center text-xs text-slate-500">
              Your message will open in your email application so you can send
              it directly to me.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
