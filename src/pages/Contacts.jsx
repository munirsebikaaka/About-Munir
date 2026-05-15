import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";

const Contacts = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(form.current);

    formData.append("access_key", "dd08c29f-6f02-44bb-8985-3a78ae39d416");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        alert("Message sent successfully! I will get back to you soon.");
        form.current.reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.log("Error:", error);
      alert("Failed to connect to the server.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-slate-950 border-t border-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-start">
        <div>
          <p className="text-blue-400 uppercase tracking-[0.2em] text-sm font-semibold mb-4">
            Munir's Contacts
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Let’s Build Something Amazing Together
          </h2>

          <p className="text-slate-400 leading-relaxed mb-10 max-w-xl">
            I’m always open to discussing new projects, freelance opportunities,
            collaborations, or creative ideas. Feel free to reach out anytime.
          </p>

          <div className="space-y-5">
            <a
              href="mailto:munirsebikaka@gmail.com"
              className="flex items-center gap-4 p-4 rounded-2xl border border-slate-800 bg-slate-900/60 hover:border-blue-500/40 transition group">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1">Email</p>
                <p className="text-white font-medium group-hover:text-blue-400 transition">
                  munirsebikaka@gmail.com
                </p>
              </div>
            </a>

            <a
              href="https://wa.me/256742083075"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-2xl border border-slate-800 bg-slate-900/60 hover:border-green-500/40 transition group">
              <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1">WhatsApp</p>
                <p className="text-white font-medium group-hover:text-green-400 transition">
                  +256 742 083075
                </p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 rounded-2xl border border-slate-800 bg-slate-900/60">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-indigo-400" />
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1">Location</p>
                <p className="text-white font-medium">
                  Kampala, Nansana, Uganda
                </p>
              </div>
            </div>
          </div>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 md:p-10 space-y-6 shadow-2xl">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Send Me a Message
            </h3>
            <p className="text-slate-400 text-sm">
              Fill in the form below and your message will be delivered directly
              to my email inbox.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-4 bg-slate-800 border border-slate-700 rounded-xl outline-none focus:border-blue-500 text-white placeholder:text-slate-500 transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-4 bg-slate-800 border border-slate-700 rounded-xl outline-none focus:border-blue-500 text-white placeholder:text-slate-500 transition"
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-4 bg-slate-800 border border-slate-700 rounded-xl outline-none focus:border-blue-500 text-white placeholder:text-slate-500 transition"
          />

          <textarea
            name="message"
            placeholder="Write your message..."
            rows="6"
            required
            className="w-full p-4 bg-slate-800 border border-slate-700 rounded-xl outline-none focus:border-blue-500 text-white placeholder:text-slate-500 transition resize-none"></textarea>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2">
            {isSubmitting ? (
              <>
                Sending... <Loader2 className="w-5 h-5 animate-spin" />
              </>
            ) : (
              <>
                Send Message <Send className="w-5 h-5" />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
