"use client";

import React, { useState } from "react";
import { candidateData } from "@/data/portfolioData";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Copy,
  Linkedin,
  Github,
  MessageSquare,
  MessageCircle,
  ExternalLink,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "ready" | "success">("idle");
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2500);
  };

  const getEncodedSubject = () => {
    return encodeURIComponent(formData.subject || `Opportunity Inquiry from ${formData.name || "Recruiter"}`);
  };

  const getFormattedBody = () => {
    return `Hello Aman,\n\nName: ${formData.name || "[Your Name]"}\nEmail: ${formData.email || "[Your Email]"}\nSubject: ${formData.subject || "[Opportunity]"}\n\nMessage:\n${formData.message || "[Message Details]"}`;
  };

  const handleSendGmailWeb = () => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${candidateData.email}&su=${getEncodedSubject()}&body=${encodeURIComponent(getFormattedBody())}`;
    window.open(gmailUrl, "_blank");
    setStatus("success");
  };

  const handleSendWhatsApp = () => {
    const text = `Hi Aman,\n\n*Name:* ${formData.name || "Recruiter"}\n*Email:* ${formData.email || "N/A"}\n*Topic:* ${formData.subject || "Software Engineering Opportunity"}\n\n*Message:*\n${formData.message || "I reviewed your portfolio and would like to connect."}`;
    const waUrl = `https://wa.me/919835934494?text=${encodeURIComponent(text)}`;
    window.open(waUrl, "_blank");
    setStatus("success");
  };

  const handleSendMailto = () => {
    const mailtoUrl = `mailto:${candidateData.email}?subject=${getEncodedSubject()}&body=${encodeURIComponent(getFormattedBody())}`;
    window.location.href = mailtoUrl;
    setStatus("success");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendGmailWeb();
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Hiring &amp; Collaboration Channel</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get in <span className="text-gradient-cyan">Touch with Aman</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base">
            Actively open for Software Engineering, Full-Stack Development, AI, and Associate Developer
            opportunities across top tech organizations. Feel free to connect directly via email, phone, or LinkedIn.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Email Card */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                    Email Address
                  </span>
                  <p className="text-sm font-semibold text-white mt-0.5 select-all">
                    {candidateData.email}
                  </p>
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${candidateData.email}&su=Software%20Engineering%20Opportunity`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-xs font-bold text-cyan-400 hover:text-cyan-300 bg-cyan-950/60 px-2.5 py-1 rounded-lg border border-cyan-800/40 transition-colors"
                    >
                      <span>Gmail Web</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <a
                      href={`mailto:${candidateData.email}`}
                      className="inline-flex items-center space-x-1 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800 transition-colors"
                    >
                      <span>Default App</span>
                    </a>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleCopy(candidateData.email, "email")}
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 text-xs transition-colors"
                title="Copy Email"
              >
                {copied === "email" ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-300 border border-purple-500/20">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                    Phone &amp; WhatsApp
                  </span>
                  <p className="text-sm font-semibold text-white mt-0.5 select-all">
                    {candidateData.phone}
                  </p>
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    <a
                      href="https://wa.me/919835934494?text=Hi%20Aman,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-xs font-bold text-emerald-400 hover:text-emerald-300 bg-emerald-950/60 px-2.5 py-1 rounded-lg border border-emerald-800/40 transition-colors"
                    >
                      <MessageCircle className="w-3 h-3" />
                      <span>Chat on WhatsApp</span>
                    </a>
                    <a
                      href={`tel:${candidateData.phone}`}
                      className="inline-flex items-center space-x-1 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800 transition-colors"
                    >
                      <span>Direct Call</span>
                    </a>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleCopy(candidateData.phone, "phone")}
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 text-xs transition-colors"
                title="Copy Phone"
              >
                {copied === "phone" ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Location Card */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800 flex items-start space-x-4">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                  Location
                </span>
                <p className="text-sm font-semibold text-white mt-0.5">
                  {candidateData.location}
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Open to relocation for on-site &amp; hybrid software engineering placements.
                </p>
              </div>
            </div>

            {/* Social Links Bar */}
            <div className="glass-card p-4 rounded-2xl border border-slate-800 flex items-center justify-around">
              <a
                href={candidateData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-xs font-semibold text-slate-300 hover:text-cyan-accent transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn Profile</span>
              </a>
              <span className="text-slate-700">|</span>
              <a
                href={candidateData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-xs font-semibold text-slate-300 hover:text-cyan-accent transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repositories</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-3xl border border-slate-800"
          >
            <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-slate-800">
              <MessageSquare className="w-5 h-5 text-cyan-400" />
              <div>
                <h3 className="text-lg font-bold text-white">Send a Direct Message</h3>
                <p className="text-xs text-slate-400">
                  Fill in your requirements — you can dispatch directly via Gmail Web, WhatsApp, or default mail.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium text-slate-300 mb-1"
                  >
                    Your Full Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="e.g. HR Recruiter / Hiring Lead"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium text-slate-300 mb-1"
                  >
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs font-medium text-slate-300 mb-1"
                >
                  Opportunity / Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  placeholder="e.g. Software Engineer / SDE-1 / Full-Stack Role Opportunity"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-medium text-slate-300 mb-1"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Share job specifications, interview details, or project queries..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-xl font-semibold text-xs bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send via Gmail Web</span>
                </button>

                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl font-semibold text-xs bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-600/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Send via WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleCopy(getFormattedBody(), "message")}
                  className="inline-flex items-center justify-center space-x-1.5 px-3.5 py-2.5 rounded-xl text-xs font-medium bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 transition-colors"
                  title="Copy Message Text"
                >
                  {copied === "message" ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Text</span>
                    </>
                  )}
                </button>
              </div>

              {status === "success" && (
                <p className="text-xs text-emerald-400 flex items-center space-x-1.5 pt-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Connection window opened! Your message is ready to send.</span>
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
