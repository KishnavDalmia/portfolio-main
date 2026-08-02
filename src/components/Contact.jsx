import React, { useState } from "react";
import axios from "axios";
import { PROFILE } from "@/data/profile";
import { SectionHead } from "@/components/Work";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ state: "idle", msg: "" });

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus({ state: "error", msg: "Please fill in every field." });
      return;
    }
    setStatus({ state: "loading", msg: "Sending…" });
    try {
      const { data } = await axios.post(`${API}/contact`, form);
      setStatus({
        state: "success",
        msg: data?.message || "Message received. I'll be in touch shortly.",
      });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      const detail =
        err?.response?.data?.detail ||
        err?.response?.data?.message ||
        err?.message ||
        "Something went wrong.";
      setStatus({ state: "error", msg: String(detail) });
    }
  };

  return (
    <section id="contact" data-testid="contact-section" className="py-28 md:py-36 bg-[#0E0E10] border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <SectionHead index="iv" title={<>Let's build <span className="display-italic text-[#BFA46F]">something</span></>} caption="Roughly a 24-hour reply, in IST hours." />

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="display text-3xl leading-[1.2] text-[#ECE6DA]">
              A product, a half-formed idea, a problem worth solving — send a note.
              I read everything.
            </p>

            <div className="mt-12 space-y-1">
              {PROFILE.socials.map((s) => (
                <a
                  key={s.label}
                  data-testid={`social-${s.label.toLowerCase()}`}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between border-b border-white/8 py-4 group hover:border-[#BFA46F]/60 transition-colors"
                >
                  <span className="eyebrow group-hover:text-[#ECE6DA] transition-colors">
                    {s.label}
                  </span>
                  <span className="text-[#ECE6DA] group-hover:text-[#BFA46F] transition-colors text-[15px]">
                    {s.handle} <span aria-hidden className="text-faint">↗</span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          <form
            data-testid="contact-form"
            onSubmit={onSubmit}
            className="lg:col-span-7 border border-white/10 p-8 md:p-12 bg-[#0B0B0C] rounded-sm"
          >
            <div className="serif italic text-[#BFA46F] text-lg mb-8">
              Compose a message
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Field
                label="Your name"
                name="name"
                value={form.name}
                onChange={onChange}
                placeholder="Ada Lovelace"
                testid="contact-input-name"
              />
              <Field
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                placeholder="you@domain.com"
                testid="contact-input-email"
              />
            </div>

            <div className="mt-8">
              <div className="eyebrow !text-[10px] mb-2">Message</div>
              <textarea
                data-testid="contact-input-message"
                name="message"
                rows={6}
                value={form.message}
                onChange={onChange}
                placeholder="Tell me about the project, the deadline, and the dream."
                className="input resize-none"
              />
            </div>

            <div className="mt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
              <div
                data-testid="contact-status"
                className={`text-[13px] min-h-[18px] ${
                  status.state === "error"
                    ? "text-[#D88A5C]"
                    : status.state === "success"
                    ? "text-[#BFA46F]"
                    : "text-faint"
                }`}
              >
                {status.msg || "Ready to send"}
              </div>

              <button
                data-testid="contact-submit-btn"
                type="submit"
                disabled={status.state === "loading"}
                className="btn btn--gold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status.state === "loading" ? "Sending…" : "Send message"}
                <span aria-hidden>→</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, value, onChange, type = "text", placeholder, testid }) {
  return (
    <div>
      <div className="eyebrow !text-[10px] mb-2">{label}</div>
      <input
        data-testid={testid}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="input"
        autoComplete="off"
      />
    </div>
  );
}
