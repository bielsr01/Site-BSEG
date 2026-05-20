import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ShieldCheck,
  FileSignature,
  Clock,
  AlertTriangle,
  CheckCircle2,
  HardHat,
  Flame,
  Zap,
  Mountain,
  Users,
  BoxSelect,
  Package,
  ArrowUpFromLine,
  MessageCircle,
  Menu,
  X,
  ArrowRight,
  BadgeCheck,
  Phone,
  Star,
  Building2,
  UserCheck,
} from "lucide-react";
import bsegLogo from "@assets/02 Logotipo.png";
import certImage from "@assets/download_(5)_1779314587937.png";

const queryClient = new QueryClient();

const WHATSAPP_LINK =
  "https://wa.me/5545988160990?text=Quero+emitir+meu+certificado+NR+em+24h";

/* ─── HEADER ─── */
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "#confianca", label: "Conformidade" },
    { href: "#nrs", label: "Nossas NRs" },
    { href: "#como-funciona", label: "Como Funciona" },
    { href: "#faq", label: "Dúvidas" },
  ];

  return (
    <header className="w-full bg-[#0A1628] shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center shrink-0">
          <img
            src={bsegLogo}
            alt="B.SEG - Saúde e Segurança do Trabalho"
            className="h-12 md:h-20 w-auto object-contain"
            data-testid="logo"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8 items-center text-sm font-semibold">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-gray-300 hover:text-[#FF6B00] transition-colors tracking-wide"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            data-testid="header-cta"
            className="bg-[#FF6B00] text-white px-5 py-2.5 rounded-lg hover:bg-[#e05e00] transition-colors font-bold flex items-center gap-2 shadow-md"
          >
            Emitir Agora <ArrowRight className="w-4 h-4" />
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2 shrink-0"
          onClick={() => setMobileOpen((v) => !v)}
          data-testid="mobile-menu-toggle"
          aria-label="Menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile drawer — expands in the normal document flow */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-white/10 md:hidden"
          >
            <div className="flex flex-col px-6 py-4">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-gray-200 hover:text-[#FF6B00] font-semibold py-3 border-b border-white/10 transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileOpen(false)}
                className="mt-4 bg-[#25D366] text-white text-center py-3 rounded-lg font-bold flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" /> Falar no WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

/* ─── HERO ─── */
const Hero = () => {
  return (
    <section className="relative flex-1 flex items-center bg-[#0A1628] text-white overflow-hidden rounded-b-[3rem]">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF6B00]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-6 py-8 relative z-10 grid lg:grid-cols-2 gap-10 items-center h-full">
        {/* Left: copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF6B00]/15 border border-[#FF6B00]/30 text-sm font-semibold text-[#FF6B00]">
            <AlertTriangle className="w-4 h-4" />
            <span>Certificação de Urgência — Entrega em 24h</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-black leading-[1.05] tracking-tight">
            Precisa de Certificados de NR com{" "}
            <span className="text-[#FF6B00]">Urgência?</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl">
            Emitimos e entregamos em todas as NRs em até{" "}
            <strong className="text-white">24 horas</strong>. Certificados 100%
            válidos perante o{" "}
            <strong className="text-white">
              Ministério do Trabalho (MTE)
            </strong>{" "}
            e em conformidade com a Nota Técnica da Secretaria de Inspeção do
            Trabalho.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <motion.a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              data-testid="hero-whatsapp-cta"
              className="relative inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-xl font-black text-lg shadow-[0_0_30px_rgba(37,211,102,0.35)] overflow-hidden"
            >
              <span className="absolute -inset-1 rounded-xl border-2 border-[#25D366]/60 animate-ping" />
              <MessageCircle className="w-6 h-6 relative z-10" />
              <span className="relative z-10">Emitir Certificado em 24h!</span>
            </motion.a>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-400 font-medium pt-2">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#FF6B00] shrink-0" />
              Sem travar sua operação
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#FF6B00] shrink-0" />
              Assinado por Engenheiro habilitado
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#FF6B00] shrink-0" />
              ICP-Brasil válido
            </span>
          </div>
        </motion.div>

        {/* Right: certificate card preview */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="relative hidden lg:flex items-center justify-center h-full py-4"
        >
          {/* Glow behind card */}
          <div className="absolute inset-0 bg-[#FF6B00]/20 blur-[80px] rounded-3xl" />

          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={certImage}
              alt="Certificado de Conclusão B.SEG - Norma Regulamentadora"
              style={{ maxHeight: "calc(100svh - 160px)" }}
              className="w-auto object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ─── TRUST BADGES ─── */
const Trust = () => {
  const items = [
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Certificado 100% Legal",
      desc: "Emitido por Engenheiro de Segurança do Trabalho legalmente habilitado e registrado.",
      highlight: false,
    },
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: "Conforme MTE e GOV",
      desc: "Adequado às exigências do Ministério do Trabalho e Emprego (MTE) e às diretrizes do Governo Federal.",
      highlight: false,
    },
    {
      icon: <FileSignature className="w-8 h-8" />,
      title: "Assinado ICP-Brasil",
      desc: "Validade jurídica inquestionável com certificação digital de padrão nacional.",
      highlight: true,
    },
  ];

  return (
    <section id="confianca" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-black text-[#0A1628] mb-3">
            Documentação com força legal. Ponto.
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Não existe atalho para conformidade — e a nossa entrega não abre mão
            da validade jurídica.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-8 rounded-2xl border-2 transition-shadow ${
                item.highlight
                  ? "border-[#FF6B00] bg-white shadow-[0_4px_40px_rgba(255,107,0,0.12)]"
                  : "border-gray-100 bg-white shadow-sm hover:shadow-md"
              }`}
            >
              {item.highlight && (
                <span className="absolute top-4 right-4 bg-[#FF6B00] text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full">
                  Destaque
                </span>
              )}
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                  item.highlight
                    ? "bg-[#FF6B00]/10 text-[#FF6B00]"
                    : "bg-[#0A1628]/5 text-[#0A1628]"
                }`}
              >
                {item.icon}
              </div>
              <h3 className="text-xl font-black text-[#0A1628] mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Price highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 flex justify-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-[#0A1628] text-white px-10 py-6 rounded-2xl shadow-xl">
            <div className="text-center sm:text-left">
              <p className="text-sm text-gray-400 uppercase tracking-widest font-semibold">
                Investimento por certificado
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-black text-[#FF6B00]">
                  R$ 129
                </span>
                <span className="text-gray-400 font-medium">/ certificado</span>
              </div>
            </div>
            <div className="hidden sm:block w-px h-16 bg-white/10" />
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              data-testid="trust-cta"
              className="bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#20bd5a] transition-colors flex items-center gap-2 whitespace-nowrap"
            >
              <MessageCircle className="w-5 h-5" />
              Solicitar agora
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ─── NR GRID ─── */
const NrGrid = () => {
  const nrs = [
    {
      num: "06",
      title: "Uso Adequado de EPIs",
      icon: <HardHat className="w-7 h-7" />,
    },
    {
      num: "10",
      title: "Segurança em Instalações Elétricas",
      icon: <Zap className="w-7 h-7" />,
    },
    {
      num: "11",
      title: "Transporte e Movimentação de Materiais",
      icon: <Package className="w-7 h-7" />,
    },
    {
      num: "18",
      title: "Construção Civil",
      icon: <Mountain className="w-7 h-7" />,
    },
    {
      num: "20",
      title: "Inflamáveis e Combustíveis",
      icon: <Flame className="w-7 h-7" />,
    },
    {
      num: "33",
      title: "Espaço Confinado",
      icon: <BoxSelect className="w-7 h-7" />,
    },
    {
      num: "35",
      title: "Trabalho em Altura",
      icon: <ArrowUpFromLine className="w-7 h-7" />,
    },
  ];

  return (
    <section id="nrs" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[#FF6B00] font-black uppercase tracking-widest text-sm mb-3">
            Certificações disponíveis
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-[#0A1628] tracking-tight mb-4">
            Treinamentos para as NRs mais exigidas
          </h2>
          <p className="text-gray-500 text-[20px]">Emitimos para todas as normas cobradas em fiscalizações, integrações e auditorias de RH.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {nrs.map((nr, index) => (
            <motion.a
              key={nr.num}
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              data-testid={`nr-card-${nr.num}`}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              whileHover={{ y: -4 }}
              className="group cursor-pointer p-6 rounded-2xl border border-gray-200 hover:border-[#FF6B00] hover:shadow-[0_8px_30px_rgba(255,107,0,0.12)] transition-all duration-300 text-center bg-white"
            >
              <div className="w-14 h-14 mx-auto bg-gray-50 group-hover:bg-[#FF6B00] rounded-2xl flex items-center justify-center text-[#0A1628] group-hover:text-white transition-all duration-300 mb-4 shadow-sm ml-[125.399px]">
                {nr.icon}
              </div>
              <div className="inline-block bg-[#0A1628]/5 group-hover:bg-[#FF6B00]/10 text-[#0A1628] group-hover:text-[#FF6B00] font-black uppercase tracking-wider px-2 py-1 rounded-md mb-2 transition-colors text-[17px]">
                NR-{nr.num}
              </div>
              <p className="text-gray-700 font-semibold group-hover:text-[#0A1628] transition-colors text-[20px]">
                {nr.title}
              </p>
            </motion.a>
          ))}

          {/* CTA card */}
          <motion.a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: nrs.length * 0.06 }}
            whileHover={{ y: -4 }}
            className="p-6 rounded-2xl border-2 border-dashed border-[#FF6B00]/40 hover:border-[#FF6B00] bg-[#FF6B00]/3 hover:bg-[#FF6B00]/8 flex flex-col items-center justify-center text-center transition-all duration-300 cursor-pointer"
          >
            <MessageCircle className="w-8 h-8 text-[#FF6B00] mb-3" />
            <div className="font-black text-[#0A1628] mb-1 text-[20px]">
              Outra NR?
            </div>
            <span className="text-[#FF6B00] font-bold underline text-[18px]">
              Consulte no WhatsApp
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

/* ─── HOW IT WORKS ─── */
const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      title: "Envie os Dados",
      desc: "Escolha a NR e nos envie os dados dos colaboradores via WhatsApp. Rápido, simples e sem formulário complicado.",
      icon: <Phone className="w-6 h-6" />,
    },
    {
      step: "02",
      title: "Treinamento Facilitado",
      desc: "Disponibilizamos o conteúdo conforme as exigências legais da norma, adaptado à sua realidade operacional.",
      icon: <UserCheck className="w-6 h-6" />,
    },
    {
      step: "03",
      title: "Certificado em 24h",
      desc: "Emitimos e enviamos o certificado assinado digitalmente pelo Engenheiro de Segurança Responsável.",
      icon: <FileSignature className="w-6 h-6" />,
    },
  ];

  return (
    <section id="como-funciona" className="py-24 bg-[#0A1628] text-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-[#FF6B00] font-black uppercase tracking-widest text-sm mb-3">
            Processo Express
          </p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
            Sem burocracia. Sem enrolação.
          </h2>
          <p className="text-lg text-gray-400">
            Em 3 passos simples, sua equipe regularizada e pronta para trabalhar.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-[52px] left-[calc(16.66%+32px)] right-[calc(16.66%+32px)] h-0.5 bg-gradient-to-r from-[#FF6B00]/40 via-[#FF6B00] to-[#FF6B00]/40" />

          {steps.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.18 }}
              className="relative z-10 flex flex-col items-center text-center gap-6"
            >
              {/* Step circle */}
              <div className="relative">
                <div className="w-[104px] h-[104px] rounded-full bg-[#0A1628] border-4 border-[#FF6B00] flex items-center justify-center shadow-[0_0_40px_rgba(255,107,0,0.25)]">
                  <span className="text-3xl font-black text-white">
                    {item.step}
                  </span>
                </div>
                <div className="absolute -bottom-2 -right-2 w-9 h-9 rounded-full bg-[#FF6B00] flex items-center justify-center text-white shadow-lg">
                  {item.icon}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-black mb-3 text-white">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA below steps */}
        <div className="flex justify-center mt-16">
          <motion.a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            data-testid="how-it-works-cta"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 bg-[#25D366] text-white px-10 py-4 rounded-xl font-black text-lg shadow-[0_0_30px_rgba(37,211,102,0.3)] hover:bg-[#20bd5a] transition-colors"
          >
            <MessageCircle className="w-6 h-6" />
            Começar agora pelo WhatsApp
          </motion.a>
        </div>
      </div>
    </section>
  );
};

/* ─── URGENCY ─── */
const Urgency = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-[#FF6B00] to-[#e05300]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-white rounded-3xl p-10 md:p-14 shadow-2xl text-center"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-100 text-red-600 mb-6">
            <AlertTriangle className="w-10 h-10" />
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-[#0A1628] tracking-tight mb-6">
            Evite multas de até{" "}
            <span className="text-red-600">R$ 6.000</span> por funcionário
          </h2>

          <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto mb-4">
            Um único auto de infração pode custar mais do que todos os
            certificados da sua equipe juntos.{" "}
            <strong className="text-[#0A1628]">Não paralise sua obra por falta de documentos.</strong>
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10 mt-8">
            {[
              "Fiscalização iminente",
              "Obra prestes a começar",
              "Integração de funcionários",
              "Auditoria de RH",
            ].map((tag) => (
              <span
                key={tag}
                className="bg-red-50 text-red-700 border border-red-200 text-sm font-semibold px-4 py-2 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Price highlight */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-[#0A1628] text-white px-10 py-6 rounded-2xl shadow-xl mb-8">
            <div className="text-center sm:text-left">
              <p className="text-sm text-gray-400 uppercase tracking-widest font-semibold">
                Investimento por certificado
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-black text-[#FF6B00]">R$ 129</span>
                <span className="text-gray-400 font-medium">/ certificado</span>
              </div>
            </div>
            <div className="hidden sm:block w-px h-16 bg-white/10" />
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#20bd5a] transition-colors flex items-center gap-2 whitespace-nowrap"
            >
              <MessageCircle className="w-5 h-5" />
              Solicitar agora
            </a>
          </div>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            data-testid="urgency-cta"
            className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-10 py-5 rounded-xl font-black text-xl hover:bg-[#20bd5a] transition-colors shadow-lg hover:shadow-xl"
          >
            <MessageCircle className="w-7 h-7" />
            Chamar no WhatsApp Agora
          </a>
          <p className="text-sm text-gray-400 font-medium uppercase tracking-wider mt-5">Atendimento imediato</p>
        </motion.div>
      </div>
    </section>
  );
};

/* ─── FAQ ─── */
const FAQSection = () => {
  const faqs = [
    {
      q: "O certificado é aceito em grandes empresas e construtoras?",
      a: "Sim. Nossos certificados seguem o padrão nacional e são aceitos por construtoras, indústrias, contratantes e órgãos de fiscalização em todo o Brasil.",
    },
    {
      q: "Como o documento é assinado?",
      a: "O certificado é assinado digitalmente com certificado ICP-Brasil, garantindo autenticidade e validade jurídica total.",
    },
    {
      q: "Empresas têm desconto para fechar turmas ou pacotes?",
      a: "Sim! Para turmas ou pacotes com múltiplos colaboradores, oferecemos condições especiais. Fale diretamente com nosso comercial via WhatsApp.",
    },
    {
      q: "Em quanto tempo recebo o certificado?",
      a: "Em até 24 horas úteis após a realização do treinamento e envio dos dados completos.",
    },
    {
      q: "O treinamento é presencial ou online?",
      a: "O treinamento pode ser realizado de forma prática e rápida, sem necessidade de deslocamento, adaptado à sua realidade operacional.",
    },
    {
      q: "Quais dados preciso fornecer?",
      a: "Nome completo, CPF, função, empresa e a NR desejada. Tudo pode ser enviado diretamente pelo WhatsApp.",
    },
    {
      q: "O certificado tem validade legal perante o Ministério do Trabalho?",
      a: "Sim. Todos os nossos certificados são emitidos em conformidade com as normas vigentes do MTE e assinados por Engenheiro de Segurança do Trabalho habilitado.",
    },
    {
      q: "Consigo certificado para funcionário temporário ou terceirizado?",
      a: "Sim, atendemos CLT, temporários, terceirizados e prestadores de serviço sem distinção.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <p className="text-[#FF6B00] font-black uppercase tracking-widest text-sm mb-3">
            Tire suas dúvidas
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-[#0A1628] tracking-tight mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-gray-500">
            Tudo que você precisa saber antes de emitir.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              data-testid={`faq-item-${i}`}
              className="bg-white border border-gray-200 rounded-xl px-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left font-bold text-base md:text-lg text-[#0A1628] hover:text-[#FF6B00] py-5 transition-colors">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-5 text-base leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-4 font-medium">
            Ainda tem dúvidas? Fale direto com a gente.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            data-testid="faq-cta"
            className="inline-flex items-center gap-2 bg-[#0A1628] text-white px-7 py-3.5 rounded-xl font-bold hover:bg-[#0A1628]/85 transition-colors"
          >
            <MessageCircle className="w-5 h-5 text-[#25D366]" />
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

/* ─── FOOTER ─── */
const Footer = () => {
  return (
    <footer className="bg-[#060e1c] pt-16 pb-8 text-gray-400 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
          <div>
            <img
              src={bsegLogo}
              alt="B.SEG - Saúde e Segurança do Trabalho"
              className="h-12 object-contain mb-5"
              data-testid="footer-logo"
            />
            <p className="text-gray-400 max-w-sm leading-relaxed">
              Sua parceira estratégica em segurança do trabalho. Soluções
              rápidas, legais e sem burocracia para manter sua equipe
              regularizada.
            </p>
          </div>
          <div className="md:text-right">
            <h4 className="text-white font-black text-lg mb-5">
              Fale Conosco
            </h4>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              data-testid="footer-whatsapp"
              className="inline-flex items-center gap-3 text-2xl font-black text-white hover:text-[#25D366] transition-colors mb-2"
            >
              <MessageCircle className="w-7 h-7 text-[#25D366]" />
              (45) 98816-0990
            </a>
            <p className="text-sm text-gray-500 mt-2">Atendimento via WhatsApp!</p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3 text-sm">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} B.SEG — Saúde e Segurança do
            Trabalho. Todos os direitos reservados.
          </p>
          <p className="text-gray-600 text-xs text-center md:text-right max-w-md ml-[0px] mr-[0px]">
            O conteúdo deste site não substitui a necessidade de consultoria
            técnica específica para a sua empresa.
          </p>
        </div>
      </div>
    </footer>
  );
};

/* ─── FLOATING WHATSAPP ─── */
const FloatingWhatsApp = () => (
  <a
    href={WHATSAPP_LINK}
    target="_blank"
    rel="noreferrer"
    data-testid="floating-whatsapp"
    aria-label="Falar no WhatsApp"
    className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20bd5a] transition-all hover:scale-110"
  >
    <span className="absolute -inset-2 rounded-full border-2 border-[#25D366]/60 animate-ping" />
    <MessageCircle className="w-8 h-8 relative z-10" />
  </a>
);

/* ─── APP ─── */
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="font-sans text-foreground bg-background overflow-x-hidden selection:bg-[#FF6B00] selection:text-white">
          <div className="h-screen flex flex-col">
            <Header />
            <Hero />
          </div>
          <Trust />
          <NrGrid />
          <HowItWorks />
          <Urgency />
          <FAQSection />
          <Footer />
          <FloatingWhatsApp />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
