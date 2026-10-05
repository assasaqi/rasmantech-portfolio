import React, { useState } from 'react';
import { Mail, MapPin, Send, MessageSquare, CheckCircle } from 'lucide-react';
import { personalData } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section
      id="contact"
      className="scroll-mt-16 sm:scroll-mt-24 pt-6 pb-10 sm:pt-12 sm:pb-16 px-4 sm:px-6 bg-natural-50/50 dark:bg-natural-950/50 text-natural-900 dark:text-natural-100 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header Section Compact */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent dark:text-emerald-400 text-[11px] sm:text-xs font-semibold mb-1.5">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Mari Berkolaborasi</span>
          </div>
          <h2 className="text-xl sm:text-3xl font-bold tracking-tight text-natural-900 dark:text-natural-50">
            Hubungi Saya
          </h2>
          <p className="text-natural-600 dark:text-natural-400 mt-1 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
            Punya ide proyek menarik atau ingin berdiskusi seputar pembuatan aplikasi web, desain, maupun video? Silakan kirim pesan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-10 items-start">

          {/* Left Side: Contact Information */}
          <div className="space-y-4">
            <div className="glass-card p-4 sm:p-5 flex items-start gap-3.5">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-accent/10 border border-accent/20 rounded-xl flex items-center justify-center text-accent dark:text-emerald-400 shrink-0">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-bold text-natural-900 dark:text-natural-100">Email Direct</h3>
                <p className="text-xs text-natural-600 dark:text-natural-400 mt-0.5">Kirim email kapan saja, saya akan merespons secepat mungkin.</p>
                <a href={`mailto:${personalData?.email}`} className="text-xs font-semibold text-accent dark:text-emerald-400 hover:underline mt-1.5 block break-all">
                  {personalData?.email || "rasmanassaaqi@gmail.com"}
                </a>
              </div>
            </div>

            <div className="glass-card p-4 sm:p-5 flex items-start gap-3.5">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-accent/10 border border-accent/20 rounded-xl flex items-center justify-center text-accent dark:text-emerald-400 shrink-0">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-bold text-natural-900 dark:text-natural-100">Lokasi</h3>
                <p className="text-xs text-natural-600 dark:text-natural-400 mt-0.5">{personalData?.location || "Lombok, Nusa Tenggara Barat, Indonesia"}</p>
                <span className="text-[11px] font-medium text-natural-500 dark:text-natural-400 mt-1.5 block">{personalData?.availability || "Tersedia untuk kerja Remote & Freelance"}</span>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form Compact */}
          <div className="glass-card p-4 sm:p-6 shadow-soft">
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-[11px] font-semibold text-natural-700 dark:text-natural-300 uppercase tracking-wider mb-1">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Masukkan nama Anda"
                  className="w-full px-3 py-2 rounded-lg bg-white/80 dark:bg-natural-900/80 border border-natural-200 dark:border-natural-800 text-natural-900 dark:text-natural-100 focus:outline-none focus:border-accent dark:focus:border-emerald-400 transition-colors text-xs sm:text-sm"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-natural-700 dark:text-natural-300 uppercase tracking-wider mb-1">
                  Alamat Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="nama@email.com"
                  className="w-full px-3 py-2 rounded-lg bg-white/80 dark:bg-natural-900/80 border border-natural-200 dark:border-natural-800 text-natural-900 dark:text-natural-100 focus:outline-none focus:border-accent dark:focus:border-emerald-400 transition-colors text-xs sm:text-sm"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-natural-700 dark:text-natural-300 uppercase tracking-wider mb-1">
                  Pesan Anda
                </label>
                <textarea
                  rows="3"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tuliskan detail proyek atau pertanyaan Anda di sini..."
                  className="w-full px-3 py-2 rounded-lg bg-white/80 dark:bg-natural-900/80 border border-natural-200 dark:border-natural-800 text-natural-900 dark:text-natural-100 focus:outline-none focus:border-accent dark:focus:border-emerald-400 transition-colors text-xs sm:text-sm resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent-dark text-white font-semibold py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-md shadow-accent/20 active:scale-95 text-xs sm:text-sm"
              >
                {submitted ? (
                  <>
                    <CheckCircle className="w-4 h-4 text-white" />
                    <span>Pesan Terkirim!</span>
                  </>
                ) : (
                  <>
                    <span>Kirim Pesan</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
