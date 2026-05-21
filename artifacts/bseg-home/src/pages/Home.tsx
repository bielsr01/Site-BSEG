import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { 
  Menu, 
  X, 
  Database, 
  FileText, 
  GraduationCap, 
  Scale, 
  CheckCircle2, 
  AlertTriangle, 
  Phone, 
  Mail, 
  MapPin,
  ClipboardList,
  HeartPulse,
  BarChart2,
  BookOpen,
  Monitor,
  Stethoscope
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import heroSlide1 from "@assets/hero-slide-1.png";
import heroSlideNew from "@assets/Group-29_1779326233053.png";
import heroSlideNew2 from "@assets/Group-27-clean.png";
import heroOfficePath from "@assets/download_(10)_1779334434988.PNG";
import heroAerialPath from "@assets/hero-bseg-aerial.png";
import logoPath from "@assets/02 Logotipo.png";
import sobreGroup6 from "@assets/bseg-sobre-group6.png";
import sobreCard1 from "@assets/bseg-sobre-1.png";
import sobreCard2 from "@assets/bseg-sobre-2.png";
import sobreCard3 from "@assets/bseg-sobre-3.png";
import sobreCard4 from "@assets/bseg-sobre-4.png";
import sobreCard5 from "@assets/bseg-sobre-5.png";
import sobreCard6 from "@assets/bseg-sobre-6.png";
import sobreCard7 from "@assets/bseg-sobre-7.png";
import sobreCard8 from "@assets/bseg-sobre-8.png";
import testimonial1 from "@assets/testimonial_group15.png";
import testimonial2 from "@assets/testimonial_group16.png";
import testimonial3 from "@assets/testimonial_group17.png";
import testimonial4 from "@assets/testimonial_group17_1.png";

const heroSlides = [heroSlide1, heroSlideNew2, heroSlideNew];

const testimonials = [
  { name: "Fernando Tinoco", role: "Empresário", text: "\"Reduzimos significativamente nossos riscos trabalhistas com a consultoria da BSeg. Parceria valiosa!\"" },
  { name: "Carlos Magno", role: "Gestor de RH", text: "\"A BSeg nos ajudou a estruturar um ambiente de trabalho seguro e totalmente em conformidade com as normas. Excelente serviço!\"" },
  { name: "Juliana Ribeiro", role: "Diretora de Segurança Ocupacional", text: "\"Profissionais altamente capacitados e sempre dispostos a oferecer suporte rápido e eficiente. Recomendo!\"" },
  { name: "Ricardo Alves", role: "Diretor de Operações", text: "\"A BSeg transformou nossa gestão de SST. Hoje temos todos os documentos em dia e sem dor de cabeça.\"" },
];

function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [timerKey, setTimerKey] = useState(0);
  const total = testimonials.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c + 1) % total);
    }, 4000);
    return () => clearInterval(timer);
  }, [total, timerKey]);

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + total) % total);
    setTimerKey((k) => k + 1);
  };
  const next = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % total);
    setTimerKey((k) => k + 1);
  };

  const visible = [0, 1, 2].map((offset) => (current + offset) % total);

  const slideTransition = { type: "tween" as const, duration: 0.4, ease: "easeInOut" };

  const CardContent = ({ idx }: { idx: number }) => (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex flex-col gap-3 h-full">
      <div className="w-10 h-1 rounded-full bg-[#228848] shrink-0" />
      <p className="text-gray-700 text-sm leading-relaxed flex-1">{testimonials[idx].text}</p>
      <div className="shrink-0 pt-1 border-t border-gray-50">
        <p className="font-semibold text-[#0A1628] text-sm">{testimonials[idx].name}</p>
        <p className="text-gray-500 text-xs">{testimonials[idx].role}</p>
      </div>
    </div>
  );

  return (
    <section className="py-10 md:py-14 bg-[#F4F7FF] rounded-b-[3rem] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628]">O que nossos clientes dizem</h2>
        </div>

        <div className="relative px-8 sm:px-12 overflow-hidden">
          {/* Desktop: 3 cards, slide horizontal — altura fixa para não ter layout shift */}
          <div className="hidden md:block h-[168px] overflow-hidden relative rounded-2xl">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={current}
                initial={{ x: direction > 0 ? "100%" : "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: direction > 0 ? "-100%" : "100%" }}
                transition={slideTransition}
                className="absolute inset-0 grid grid-cols-3 gap-4"
              >
                {visible.map((idx) => <CardContent key={idx} idx={idx} />)}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile: 1 card — altura generosa para caber qualquer texto */}
          <div className="md:hidden h-[216px] overflow-hidden relative rounded-2xl">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={current}
                initial={{ x: direction > 0 ? "100%" : "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: direction > 0 ? "-100%" : "100%" }}
                transition={slideTransition}
                className="absolute inset-0"
              >
                <CardContent idx={current} />
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-xl text-[#0A1628] hover:bg-[#228848] hover:text-white transition-colors"
            aria-label="Anterior"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-xl text-[#0A1628] hover:bg-[#228848] hover:text-white transition-colors"
            aria-label="Próximo"
          >
            ›
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); setTimerKey((k) => k + 1); }}
              className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? "bg-[#228848] scale-125" : "bg-gray-300"}`}
              aria-label={`Ir para depoimento ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const WA_LINK = "https://api.whatsapp.com/send?phone=5545988160990&text=Ol%C3%A1%2C%20tenho%20interesse%20em%20solicitar%20um%20diagn%C3%B3stico%20de%20SST%20para%20minha%20empresa.";

const contactSchema = z.object({
  nome: z.string().min(2, "Nome é obrigatório"),
  telefone: z.string().min(10, "Telefone inválido"),
  necessidade: z.string().min(1, "Selecione uma opção"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

function applyPhoneMask(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function toWaLink(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  const number = digits.startsWith("55") ? digits : `55${digits}`;
  return `https://wa.me/${number}`;
}

export default function Home() {
  const { toast } = useToast();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      nome: "",
      telefone: "",
      necessidade: "",
    },
  });

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  async function onSubmit(values: ContactFormValues) {
    setIsSending(true);
    const necessidadeLabel: Record<string, string> = {
      esocial: "Regularização eSocial",
      "pgr-pcmso": "PGR / PCMSO",
      treinamentos: "Treinamentos NRs",
      laudos: "Laudos Técnicos",
      "nao-sei": "Diagnóstico gratuito",
    };
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: values.nome,
          telefone: values.telefone,
          wa_link: toWaLink(values.telefone),
          necessidade: necessidadeLabel[values.necessidade] ?? values.necessidade,
          to_email: "bielsr01@gmail.com",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Um Engenheiro de Segurança entrará em contato em até 24 horas.",
      });
      form.reset();
    } catch {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Tente novamente ou entre em contato pelo WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSending(false);
    }
  }

  const navLinks = [
    { name: "INÍCIO", href: "#hero" },
    { name: "SERVIÇOS", href: "#servicos" },
    { name: "DIFERENCIAIS", href: "#diferenciais" },
    { name: "FAQ", href: "#faq" },
    { name: "CONTATO", href: "#contato" },
  ];

  return (
    <div className="flex min-h-screen flex-col font-sans selection:bg-primary selection:text-white overflow-x-hidden w-full">
      {/* 1. Header */}
      <header className="w-full z-50 bg-[#0A1628]/95 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <a href="#hero" className="flex items-center z-50">
            <img src={logoPath} alt="BSeg Segurança do Trabalho" className="h-10 md:h-12 w-auto" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold tracking-wider text-white/90">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="hover:text-primary transition-colors py-2"
                data-testid={`nav-link-${link.name.toLowerCase()}`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a href={WA_LINK} target="_blank" rel="noreferrer" data-testid="btn-header-wa">
              <Button className="bg-[#FF6B00] hover:bg-[#E66000] text-white font-bold h-11 px-6 text-sm uppercase tracking-wide shadow-lg shadow-[#FF6B00]/20">
                Falar com Engenheiro
              </Button>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="lg:hidden text-white hover:bg-white/10 z-50" 
            onClick={toggleMobileMenu}
            data-testid="btn-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>

          {/* Mobile Nav */}
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-20 left-0 right-0 bg-[#0A1628] border-b border-white/10 p-6 flex flex-col gap-6 shadow-2xl lg:hidden"
            >
              <nav className="flex flex-col gap-4 text-base font-semibold tracking-wider text-white/90 text-center">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    className="hover:text-primary transition-colors py-2" 
                    onClick={toggleMobileMenu}
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
              <a href={WA_LINK} target="_blank" rel="noreferrer" className="w-full">
                <Button className="w-full bg-[#FF6B00] hover:bg-[#E66000] text-white font-bold h-12 text-sm uppercase tracking-wide">
                  Falar com Engenheiro
                </Button>
              </a>
            </motion.div>
          )}
        </div>
      </header>

      {/* 2. HERO */}
      <section id="hero" className="relative py-10 md:py-14 min-h-[calc(100vh-80px)] flex items-center rounded-b-[3rem] overflow-hidden">
        {/* Background Slideshow with Cross-fade */}
        <div className="absolute inset-0 z-0">
          {heroSlides.map((slide, i) => (
            <img
              key={i}
              src={slide}
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000"
              style={{ opacity: i === currentSlide ? 1 : 0 }}
            />
          ))}
          <div className="absolute inset-0 bg-[#0A1628]/35"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] to-transparent opacity-40"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-8 md:mb-10">
              Simplifique a gestão de SST da sua empresa.<br/>
              <span className="text-[#FF6B00]">Soluções completas em segurança do trabalho e saúde ocupacional.</span>
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href={WA_LINK} target="_blank" rel="noreferrer" className="w-full sm:w-auto" data-testid="btn-hero-primary">
                <Button size="lg" className="w-full text-white h-14 px-8 text-base font-bold shadow-xl flex items-center gap-3 border-0 transition-all duration-200 hover:scale-[1.03] hover:shadow-2xl" style={{ background: "linear-gradient(135deg, #228848 0%, #25D366 100%)" }}>
                  <SiWhatsapp className="w-5 h-5 shrink-0" />
                  Fale Conosco
                </Button>
              </a>
              <a href="#servicos" className="w-full sm:w-auto" data-testid="btn-hero-secondary">
                <Button size="lg" variant="outline" className="w-full bg-transparent border-white/30 text-white hover:bg-white hover:text-[#0A1628] h-14 px-8 text-base font-bold">
                  Ver nossos serviços
                </Button>
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 md:mt-10">
              {[
                { value: "500+", label: "EMPRESAS\nATENDIDAS" },
                { value: "10+", label: "ANOS DE\nEXPERIÊNCIA" },
                { value: "1.500+", label: "DOCUMENTOS\nEMITIDOS" },
                { value: "100%", label: "SATISFAÇÃO" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl px-4 py-4 flex flex-col items-center text-center">
                  <span className="text-2xl md:text-3xl font-extrabold text-[#228848]">{stat.value}</span>
                  <span className="text-xs font-semibold text-white/70 uppercase tracking-wider mt-1 whitespace-pre-line leading-tight">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Sobre Nós */}
      <section id="sobre" className="py-12 md:py-16 bg-white">
        <div className="w-full max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-8">
          {/* Top: image + text */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <img
                src={sobreGroup6}
                alt="Engenheiros BSeg em campo"
                className="w-full max-w-md lg:max-w-full object-contain rounded-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="min-w-0 w-full overflow-hidden"
            >
              <p className="text-black font-bold text-sm sm:text-lg uppercase tracking-widest mb-3">Quem somos?</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0A1628] leading-tight mb-6 break-words">
                A <span className="text-[#228848]">BSeg Segurança do Trabalho</span> é referência em soluções de segurança ocupacional.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-10 break-words">
                Nosso compromisso é proteger a saúde dos colaboradores e garantir que sua empresa esteja sempre em conformidade com as normas regulamentadoras. Com uma equipe especializada e um atendimento humanizado, simplificamos processos para que você possa focar no crescimento do seu negócio.
              </p>
              <a href={WA_LINK} target="_blank" rel="noreferrer" className="block" data-testid="btn-sobre-wa">
                <Button className="w-full bg-[#228848] hover:bg-[#1a6d3a] text-white h-12 px-6 font-bold flex items-center justify-center gap-3 uppercase tracking-wide text-sm sm:text-base">
                  <SiWhatsapp className="w-5 h-5 shrink-0" />
                  Entre em contato no WhatsApp
                </Button>
              </a>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 4. Nossos Serviços */}
      <section id="servicos" className="py-12 md:py-16 bg-[#F4F7FF] rounded-t-[3rem]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-4">
            <p className="uppercase tracking-widest flex items-center justify-center gap-2 mb-4 text-[#0A1628] font-bold text-base sm:text-[22px]">
              <span className="w-8 h-px inline-block bg-[#0A1628]/40"></span>
              Nossos Serviços
              <span className="w-8 h-px inline-block bg-[#0A1628]/40"></span>
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#0A1628] mb-4">Soluções completas para sua empresa</h2>
            <p className="text-base md:text-lg text-gray-500">
              Oferecemos um portfólio completo de serviços para garantir a segurança e saúde dos seus colaboradores.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-14 mt-12 max-w-4xl mx-auto">
            {[
              { title: "PGR", desc: "Programa de Gerenciamento de Riscos completo, identificando e controlando riscos ocupacionais.", icon: ClipboardList },
              { title: "PCMSO", desc: "Programa de Controle Médico de Saúde Ocupacional, monitorando a saúde dos colaboradores.", icon: HeartPulse },
              { title: "LTCAT", desc: "Laudo Técnico das Condições Ambientais do Trabalho para aposentadoria especial.", icon: BarChart2 },
              { title: "Treinamentos NR", desc: "Capacitação profissional em todas as Normas Regulamentadoras com certificação.", icon: BookOpen },
              { title: "eSocial SST", desc: "Gestão completa dos eventos de SST no eSocial, garantindo envio correto e dentro dos prazos.", icon: Monitor },
              { title: "Exames Ocupacionais", desc: "Admissionais, periódicos, demissionais e complementares com rede credenciada.", icon: Stethoscope }
            ].map((srv, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-5 rounded-2xl hover:-translate-y-1 transition-all duration-300 cursor-default flex flex-col items-center text-center"
                style={{
                  background: "linear-gradient(135deg, #0A1628 0%, #228848 100%)",
                  boxShadow: "0 4px 24px rgba(34,136,72,0.35), 0 1px 4px rgba(10,22,40,0.4)"
                }}
              >
                <div className="w-10 h-10 bg-white/15 rounded-xl flex items-center justify-center text-white mb-4">
                  <srv.icon className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{srv.title}</h3>
                <p className="text-white/75 leading-relaxed text-base">{srv.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center px-4">
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="block w-full sm:w-auto sm:inline-block" data-testid="btn-orcamento-servicos">
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-[#228848] to-[#25D366] hover:from-[#1a6e39] hover:to-[#1db954] text-white h-14 px-8 text-base md:text-lg font-bold shadow-xl shadow-[#228848]/30 gap-3">
                <SiWhatsapp className="w-5 h-5 shrink-0" />
                Entre em contato no WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* 5. Depoimentos */}
      <TestimonialsCarousel />

      {/* 6. Por que escolher a BSeg? (Diferenciais) */}
      <section id="diferenciais" className="py-12 md:py-16 bg-white overflow-hidden rounded-b-[3rem]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative pb-0 lg:pb-12 overflow-hidden rounded-[2rem] min-w-0"
            >
              <div className="absolute inset-0 bg-[#228848]/10 rounded-[2rem] transform -rotate-1 z-0"></div>
              <img 
                src={heroOfficePath} 
                alt="Engenheiros no escritório" 
                className="relative z-10 rounded-[2rem] shadow-2xl object-cover object-top aspect-[4/3] w-full"
              />
              <div className="relative lg:absolute lg:-bottom-8 lg:-left-8 z-20 bg-[#0A1628] text-white p-4 lg:p-6 rounded-2xl shadow-xl mt-4 lg:mt-0 max-w-full lg:max-w-[280px]">
                <p className="font-bold text-base lg:text-lg mb-1 text-[#25D366]">Atendimento Nacional</p>
                <p className="text-sm text-white/80">Atendemos empresas em todo o Brasil com suporte remoto e presencial.</p>
              </div>
            </motion.div>

            <div className="lg:pl-8">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#0A1628] mb-6 md:mb-10">Por que mais de 500 empresas escolheram a BSeg?</h2>
              
              <div className="space-y-8 mb-12">
                {[
                  {
                    title: "Equipe especializada",
                    desc: "Profissionais habilitados com ampla experiência no mercado."
                  },
                  {
                    title: "Entrega ágil",
                    desc: "Relatórios e programas entregues em prazos que não travam sua operação."
                  },
                  {
                    title: "Sem burocracia para você",
                    desc: "Cuidamos de toda a parte técnica e documental. Seu RH foca no que importa."
                  },
                  {
                    title: "Atendimento personalizado",
                    desc: "Cada empresa recebe um diagnóstico exclusivo, não soluções genéricas."
                  }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#228848]/10 flex items-center justify-center shrink-0 mt-1 text-[#228848]">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#0A1628] mb-2">{item.title}</h4>
                      <p className="text-gray-600 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <a href={WA_LINK} target="_blank" rel="noreferrer" className="block w-full sm:w-auto" data-testid="btn-diagnostico-diferenciais">
                <Button size="lg" className="w-full sm:w-auto text-white h-14 px-8 text-base md:text-lg font-bold shadow-xl flex items-center justify-center gap-3 border-0 transition-all duration-200 hover:scale-[1.03] hover:shadow-2xl" style={{ background: "linear-gradient(135deg, #228848 0%, #25D366 100%)" }}>
                  <SiWhatsapp className="w-5 h-5 shrink-0" />
                  Solicitar diagnóstico gratuito
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section id="faq" className="py-20 md:py-32 bg-[#F4F7FF] relative z-10 -mt-[3rem] pt-[3rem]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#0A1628] mb-4">Dúvidas frequentes</h2>
            <div className="w-24 h-1 bg-[#228848] mx-auto rounded-full"></div>
          </div>

          <Accordion type="single" collapsible className="bg-white rounded-3xl p-6 md:p-10 shadow-lg border border-gray-100">
            {[
              {
                q: "Minha empresa é pequena. Preciso mesmo de SST?",
                a: "Sim. A legislação brasileira (CLT, NR-1) exige PGR e PCMSO para toda empresa com funcionários registrados, independente do porte. As multas não diferenciam o tamanho da empresa."
              },
              {
                q: "Como funciona o envio de eventos ao eSocial?",
                a: "A BSeg cuida de todo o processo: levantamento das condições de trabalho, elaboração dos laudos técnicos e transmissão eletrônica dos eventos S-2210, S-2220 e S-2240 diretamente ao eSocial."
              },
              {
                q: "A BSeg atende quais segmentos de empresa?",
                a: "Atendemos todos os segmentos: construção civil, indústria, comércio, logística, saúde, agronegócio e prestadores de serviços. Se sua empresa tem funcionários CLT, podemos ajudar."
              },
              {
                q: "Quanto custa a assessoria de SST?",
                a: "O valor varia conforme o número de funcionários, grau de risco e serviços necessários. Solicite um diagnóstico gratuito — o investimento costuma ser muito menor do que o custo de uma única autuação."
              },
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-gray-100 last:border-0 py-2">
                <AccordionTrigger className="text-left text-base md:text-lg font-bold text-[#0A1628] hover:text-[#228848]">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base leading-relaxed pt-2 pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 8. Formulário de conversão + Footer */}
      <section id="contato" className="bg-[#0A1628] text-white pt-14 pb-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mb-16">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6">Solicite seu Diagnóstico Gratuito</h2>
              <p className="text-base md:text-lg text-white/80 mb-8 md:mb-12">
                Preencha o formulário e um Engenheiro de Segurança entrará em contato em até 24 horas.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-[#25D366] shrink-0 border border-white/10">
                    <SiWhatsapp className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm font-semibold uppercase tracking-wider mb-1">WhatsApp</p>
                    <p className="text-xl font-bold">(45) 98816-0990</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-[#228848] shrink-0 border border-white/10">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm font-semibold uppercase tracking-wider mb-1">E-mail</p>
                    <p className="text-xl font-bold">contato@bsegsst.com</p>
                  </div>
                </div>

              </div>
            </div>

            <div className="bg-white text-[#0A1628] p-8 md:p-10 rounded-3xl shadow-2xl">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="nome"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#0A1628] font-bold">Nome completo</FormLabel>
                        <FormControl>
                          <Input placeholder="Seu nome" {...field} className="h-12 bg-gray-50 border-gray-200" data-testid="input-nome" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="telefone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#0A1628] font-bold">Telefone / WhatsApp</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="(00) 00000-0000"
                            {...field}
                            onChange={(e) => field.onChange(applyPhoneMask(e.target.value))}
                            className="h-12 bg-gray-50 border-gray-200"
                            data-testid="input-telefone"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="necessidade"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#0A1628] font-bold">Necessidade principal</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12 bg-gray-50 border-gray-200" data-testid="select-necessidade">
                              <SelectValue placeholder="Selecione uma opção" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="esocial">Regularização eSocial</SelectItem>
                            <SelectItem value="pgr-pcmso">PGR / PCMSO</SelectItem>
                            <SelectItem value="treinamentos">Treinamentos NRs</SelectItem>
                            <SelectItem value="laudos">Laudos Técnicos</SelectItem>
                            <SelectItem value="nao-sei">Ainda não sei, quero um diagnóstico</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" size="lg" disabled={isSending} className="w-full bg-[#FF6B00] hover:bg-[#E66000] text-white h-14 text-lg font-bold shadow-xl mt-4 disabled:opacity-70" data-testid="btn-submit-contato">
                    {isSending ? "Enviando..." : "Enviar e aguardar contato"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col items-center gap-6 md:flex-row md:justify-between">
            <img src={logoPath} alt="BSeg Segurança do Trabalho" className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity" />
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-white/60 font-medium">
              {navLinks.map(link => (
                <a key={link.name} href={link.href} className="hover:text-white transition-colors">
                  {link.name}
                </a>
              ))}
            </div>
            <p className="text-white/40 text-sm text-center md:text-right">
              © 2025 BSeg Segurança do Trabalho.<br/>Todos os direitos reservados.
            </p>
          </div>
        </div>
      </section>

      {/* 9. Botão flutuante WhatsApp */}
      <a 
        href={WA_LINK} 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 group"
        data-testid="btn-floating-wa"
      >
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 group-hover:opacity-50"></div>
        <SiWhatsapp className="w-8 h-8 relative z-10" />
      </a>
    </div>
  );
}
