"use client";

import { useState } from "react";
import {
  Menu,
  X,
  Cpu,
  Zap,
  Box,
  Layers,
  Phone,
  Mail,
  CheckCircle2,
  ChevronRight,
  UploadCloud,
  MessageCircle,
  Instagram,
  Facebook,
  Twitter,
  MapPin,
} from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Hizmetler", href: "#services" },
    { name: "Malzemeler", href: "#materials" },
    { name: "Hakkımızda", href: "#about" },
    { name: "İletişim", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-cyan-500/30">
      {/* --- NAVBAR --- */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/10 ring-1 ring-cyan-400/40">
              <span className="text-[10px] font-extrabold tracking-tight text-cyan-400">PR</span>
            </div>
            <div className="leading-tight">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-50">ProRoutek</p>
              <p className="hidden text-[10px] text-slate-400 sm:block">CNC Kesim ve İşleme Merkezi</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-slate-300 transition hover:text-cyan-400"
              >
                {item.name}
              </a>
            ))}
            <a
              href="https://wa.me/905417767617"
              className="rounded-full bg-cyan-500 px-5 py-2 text-xs font-bold text-slate-950 transition hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
            >
              TEKLİF AL
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="text-slate-300 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-full border-b border-slate-800 bg-slate-950 p-6 md:hidden">
            <div className="flex flex-col gap-5">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-medium text-slate-300"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="tel:+905417767617"
                className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 p-4 font-bold text-cyan-400 ring-1 ring-slate-800"
              >
                <Phone size={18} /> 0541 776 76 17
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="mx-auto max-w-7xl px-6 pt-32 md:px-10 lg:px-16">
        {/* --- HERO SECTION --- */}
        <section className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col items-start gap-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1 text-xs font-medium text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Türkiye'nin En Büyük CNC Kesim Merkezi
            </div>

            <h1 className="text-balance text-5xl font-extrabold tracking-tight sm:text-6xl">
              Fikirlerinizi <br />
              <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent">
                Hassasiyetle Kesiyoruz
              </span>
            </h1>

            <p className="max-w-lg text-lg leading-relaxed text-slate-400">
              CNC Router, Lazer ve Strafor kesim teknolojilerimizle ahşap, plastik ve pleksi ürünlerinizi
              <span className="text-slate-100 font-semibold"> aynı gün teslimat</span> avantajıyla üretiyoruz.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="flex items-center gap-2 rounded-full bg-cyan-500 px-8 py-4 text-sm font-bold text-slate-950 transition hover:bg-cyan-400"
              >
                Hızlı Teklif Formu <ChevronRight size={18} />
              </a>
              <a
                href="https://wa.me/905417767617"
                target="_blank"
                className="flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/50 px-8 py-4 text-sm font-bold text-slate-100 transition hover:bg-slate-800"
              >
                <MessageCircle size={18} className="text-emerald-400" /> WhatsApp Destek
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-4 border-t border-slate-900 w-full">
              {[
                ["Aynı Gün", "Teslimat"],
                ["8 mm", "Lazer Kesim"],
                ["0.01mm", "Tolerans"],
              ].map(([top, bot], i) => (
                <div key={i}>
                  <p className="text-xl font-bold text-slate-50">{top}</p>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">{bot}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image - Next/Image Host Hatasını önlemek için standart img kullanıldı */}
          <div className="relative aspect-square overflow-hidden rounded-[2.5rem] border border-slate-800 bg-slate-900 shadow-2xl">
            <img
              src="/images/58.jpg"
              alt="ProRoutek CNC Kesim ve İşleme Merkezi"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-slate-950/90" />
            <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/10 bg-slate-950/50 p-6 backdrop-blur-xl">
              <p className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-1">
                Aktif Parkur
              </p>
              <p className="text-lg font-semibold text-white leading-tight">
                Gelişmiş 4 Eksenli Router & Lazer Sistemleri
              </p>
            </div>
          </div>
        </section>

        {/* --- SERVICES --- */}
        <section id="services" className="py-24 space-y-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold">Uzmanlık Alanlarımız</h2>
            <p className="mt-4 text-slate-400">
              Ahşap kesimden AR-GE odaklı özel projelere kadar geniş yelpazede hizmet veriyoruz.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Cpu,
                title: "CNC Router Kesim",
                desc: "Ahşap ve kompozit gruplarında 4 eksenli yüksek hız.",
              },
              {
                icon: Zap,
                title: "Lazer Kesim",
                desc: "8mm kalınlığa kadar pleksi ve plastiklerde pürüzsüz yüzey.",
              },
              {
                icon: Box,
                title: "Strafor Kesim",
                desc: "Hızlı prototipleme ve dekoratif strafor çözümleri.",
              },
              {
                icon: Layers,
                title: "Özel Üretim",
                desc: "Stand ve mobilya projeleriniz için teknik AR-GE desteği.",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="group relative rounded-3xl border border-slate-800 bg-slate-900/30 p-8 transition-all hover:border-cyan-500/50 hover:bg-slate-900"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 ring-1 ring-slate-800 transition-transform group-hover:scale-110 group-hover:ring-cyan-500/50">
                  <service.icon className="text-cyan-400" size={28} />
                </div>
                <h3 className="text-lg font-bold">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* --- MATERIALS TABLE --- */}
        <section
          id="materials"
          className="rounded-[3rem] border border-slate-800 bg-slate-900/20 p-8 md:p-16"
        >
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Zengin Malzeme Parkuru</h2>
              <p className="text-slate-400 leading-relaxed">
                Tüm malzeme gruplarını{" "}
                <span className="text-slate-100 font-medium">firesiz ve çapaksız</span> şekilde işliyoruz.
                Sadece kesim değil, aynı zamanda malzeme tedariği konusunda da satış hizmetimiz mevcuttur.
              </p>

              <ul className="space-y-4">
                {[
                  "Ahşap (MDF, Kontrplak, OSB, Sunta)",
                  "Plastik (Pleksi, Polikarbon, Dekota)",
                  "Betopan ve Kestamit İşleme",
                ].map((text, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm font-medium text-slate-200"
                  >
                    <CheckCircle2 className="text-emerald-400" size={18} />{" "}
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">
              <div className="bg-slate-900/50 px-6 py-4 border-b border-slate-800 text-center">
                <p className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                  Popüler Malzemeler & Fiyatlandırma
                </p>
              </div>
              <div className="grid grid-cols-2 divide-x divide-y divide-slate-800">
                {[
                  "MDF Kesim",
                  "Kontrplak",
                  "Sunta / OSB",
                  "Dekota (Forex)",
                  "Pleksi Grubu",
                  "Kestamit",
                  "Strafor",
                  "Polikarbon",
                ].map((m) => (
                  <div
                    key={m}
                    className="p-4 text-center text-sm text-slate-300 hover:bg-cyan-500/5 transition cursor-default"
                  >
                    {m}
                  </div>
                ))}
              </div>
              <div className="p-4 bg-slate-900/20 text-center border-t border-slate-800">
                <p className="text-[10px] text-slate-500 italic">
                  Tabaka başına hesaplı fiyatlandırma uygulanır.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- CONTACT FORM --- */}
        <section id="contact" className="py-24 grid gap-16 lg:grid-cols-[0.8fr,1.2fr]">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold">Hızlı Teklif Formu</h2>
            <p className="text-slate-400">
              Teknik çizimlerinizi (DXF, DWG, PDF, AI) bize iletin. Ekibimiz en geç 24 saat içinde
              firesiz kesim planlamasıyla birlikte dönüş yapacaktır.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 ring-1 ring-slate-800">
                  <Phone size={20} className="text-cyan-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Telefon</p>
                  <p className="text-lg font-medium">0541 776 76 17</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 ring-1 ring-slate-800">
                  <Mail size={20} className="text-cyan-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">E-posta</p>
                  <p className="text-lg font-medium">info@proroutek.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 ring-1 ring-slate-800">
                  <MapPin size={20} className="text-cyan-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Adres</p>
                  <p className="text-lg font-medium max-w-xs text-balance">
                    Başiskele Sanayi Sitesi, Sepetlipınar Mahallesi Arpalık Caddesi 8. Blok No: 118/8 İç Kapı No: 8
                    Başiskele / KOCAELİ
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form className="grid gap-4 rounded-[2.5rem] border border-slate-800 bg-slate-900/20 p-8 shadow-xl">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Ad Soyad"
                className="bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-sm outline-none focus:border-cyan-400 transition"
              />
              <input
                type="email"
                placeholder="E-posta"
                className="bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-sm outline-none focus:border-cyan-400 transition"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Telefon"
                className="bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-sm outline-none focus:border-cyan-400 transition"
              />
              <select className="bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-sm outline-none focus:border-cyan-400 transition text-slate-400">
                <option>Hizmet Seçiniz</option>
                <option>Lazer Kesim</option>
                <option>CNC Router Kesim</option>
                <option>Strafor Kesim</option>
              </select>
            </div>
            <textarea
              rows={4}
              placeholder="Projenizden bahsedin..."
              className="bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-sm outline-none focus:border-cyan-400 transition"
            />

            <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-800 bg-slate-950/50 p-6 transition hover:border-cyan-500/50 hover:bg-slate-900">
              <UploadCloud className="mb-2 text-slate-500" />
              <p className="text-xs text-slate-400 font-medium">
                Çizim Dosyanızı Yükleyin (Max 25MB)
              </p>
              <input type="file" className="hidden" />
            </label>

            <button
              type="submit"
              className="w-full rounded-xl bg-cyan-500 py-4 font-bold text-slate-950 transition hover:bg-cyan-400 shadow-lg shadow-cyan-500/20"
            >
              TEKLİF TALEBİNİ GÖNDER
            </button>
          </form>
        </section>
      </main>

      {/* --- FOOTER --- */}
      <footer className="border-t border-slate-900 bg-slate-950 py-12">
        <div className="mx-auto max-w-7xl px-6 md:px-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded bg-cyan-500 flex items-center justify-center">
                <span className="text-[10px] font-bold text-slate-950">PR</span>
              </div>
              <span className="font-bold tracking-tight">ProRoutek CNC</span>
            </div>
            <p className="text-[11px] text-slate-500 italic">
              ProRoutek CNC Kesim ve İşleme Merkezi · Türkiye'nin Güvenilir Çözüm Ortağı
            </p>
          </div>

          <div className="flex gap-8 text-slate-400">
            <a href="#" className="hover:text-cyan-400 transition">
              <Instagram size={18} />
            </a>
            <a href="#" className="hover:text-cyan-400 transition">
              <Facebook size={18} />
            </a>
            <a href="#" className="hover:text-cyan-400 transition">
              <Twitter size={18} />
            </a>
          </div>

          <p className="text-[11px] text-slate-600">
            © {new Date().getFullYear()} ProRoutek CNC Kesim ve İşleme Merkezi. Tüm hakları saklıdır.
          </p>
        </div>
      </footer>
    </div>
  );
}