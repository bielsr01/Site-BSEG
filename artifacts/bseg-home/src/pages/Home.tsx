import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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
  MapPin 
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
import heroSlide3 from "@assets/hero-slide-3.png";
import heroSlide4 from "@assets/hero-slide-4.png";
import heroOfficePath from "@assets/hero-bseg-office.png";
import heroAerialPath from "@assets/hero-bseg-aerial.png";
import logoPath from "@assets/02 Logotipo.png";

const heroSlides = [heroSlide1, heroSlide3, heroSlide4];

const WA_LINK = "https://api.whatsapp.com/send?phone=5545988160990&text=Ol%C3%A1%2C%20tenho%20interesse%20em%20solicitar%20um%20diagn%C3%B3stico%20de%20SST%20para%20minha%20empresa.";

const contactSchema = z.object({
  nome: z.string().min(2, "Nome é obrigatório"),
  empresa: z.string().min(2, "Empresa é obrigatória"),
  telefone: z.string().min(10, "Telefone inválido"),
  necessidade: z.string().min(1, "Selecione uma opção"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Home() {
  const { toast } = useToast();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

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
      empresa: "",
      telefone: "",
      necessidade: "",
    },
  });

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  function onSubmit(values: ContactFormValues) {
    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Um Engenheiro de Segurança entrará em contato em até 24 horas.",
    });
    form.reset();
  }

  const navLinks = [
    { name: "INÍCIO", href: "#hero" },
    { name: "SERVIÇOS", href: "#servicos" },
    { name: "DIFERENCIAIS", href: "#diferenciais" },
    { name: "FAQ", href: "#faq" },
    { name: "CONTATO", href: "#contato" },
  ];

  return (
    <div className="flex min-h-screen flex-col font-sans selection:bg-primary selection:text-white">
      {/* 1. Header fixo */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A1628]/90 backdrop-blur-md border-b border-white/10 transition-all duration-300">
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
      <section id="hero" className="relative pt-24 pb-12 md:pt-36 md:pb-20 min-h-[75vh] flex items-center">
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
          <div className="absolute inset-0 bg-[#0A1628]/55"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] to-transparent opacity-60"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Sua empresa está em dia com todas as documentações e exigências em SST?<br/>
              <span className="text-[#FF6B00]">A BSeg simplifica a gestão em segurança do trabalho do seu negócio.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed font-medium">
              Soluções especializadas para empresas que buscam segurança, saúde ocupacional e conformidade com a legislação trabalhista.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href={WA_LINK} target="_blank" rel="noreferrer" className="w-full sm:w-auto" data-testid="btn-hero-primary">
                <Button size="lg" className="w-full bg-[#FF6B00] hover:bg-[#E66000] text-white h-14 px-8 text-base font-bold shadow-xl shadow-[#FF6B00]/20">
                  Solicitar Diagnóstico Gratuito
                </Button>
              </a>
              <a href="#servicos" className="w-full sm:w-auto" data-testid="btn-hero-secondary">
                <Button size="lg" variant="outline" className="w-full bg-transparent border-white/30 text-white hover:bg-white hover:text-[#0A1628] h-14 px-8 text-base font-bold">
                  Ver nossos serviços
                </Button>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 border-t border-white/20 pt-8">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">+150</span>
                <span className="text-sm text-white/70 font-medium">empresas atendidas</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">+5.000</span>
                <span className="text-sm text-white/70 font-medium">vidas protegidas</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">100%</span>
                <span className="text-sm text-white/70 font-medium">em conformidade com o eSocial</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Barra de autoridade */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">
            Empresas que confiam na BSeg
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale">
            {["Construtora Iguassu", "Ind. Paraná", "Logística Sul", "Varejo ABC", "Agro West", "Saúde Vida"].map((brand) => (
              <span key={brand} className="text-xl md:text-2xl font-black font-serif tracking-tighter">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Problema vs Solução */}
      <section className="py-20 md:py-32 relative bg-[#0A1628] text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroAerialPath} 
            alt="Visão Aérea Industrial" 
            className="w-full h-full object-cover object-center opacity-30 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-[#0A1628]/80"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">O custo do risco vs O valor da segurança</h2>
            <div className="w-24 h-1 bg-[#FF6B00] mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {/* Problema */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-red-950/30 border border-red-900/50 rounded-3xl p-8 md:p-10 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-3">
                <AlertTriangle className="w-8 h-8" />
                O Risco que sua empresa corre hoje
              </h3>
              <ul className="space-y-6">
                {[
                  "Multas de até R$6.000 por falta de documentos obrigatórios.",
                  "Autuações do Ministério do Trabalho por laudos desatualizados.",
                  "Passivos trabalhistas por ausência de PGR, PCMSO e LTCAT.",
                  "Processos judiciais por falta de treinamentos nas NRs."
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-4 h-4 text-red-400" />
                    </div>
                    <span className="text-white/80 font-medium leading-relaxed">{text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Solução */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#228848]/20 border border-[#228848]/40 rounded-3xl p-8 md:p-10 backdrop-blur-sm relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#228848]/10 blur-3xl rounded-full"></div>
              <h3 className="text-2xl font-bold text-[#25D366] mb-6 flex items-center gap-3 relative z-10">
                <CheckCircle2 className="w-8 h-8" />
                Com a BSeg, sua empresa está blindada
              </h3>
              <ul className="space-y-6 relative z-10">
                {[
                  "Gestão completa de documentos e eventos SST no eSocial.",
                  "Laudos e programas elaborados por Engenheiros habilitados.",
                  "Atualização contínua conforme legislação vigente.",
                  "Treinamentos certificados que protegem empresa e colaboradores."
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#25D366]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                    </div>
                    <span className="text-white/90 font-medium leading-relaxed">{text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="text-center">
            <a href={WA_LINK} target="_blank" rel="noreferrer" data-testid="btn-blindar-empresa">
              <Button size="lg" className="bg-[#FF6B00] hover:bg-[#E66000] text-white h-14 px-10 text-lg font-bold shadow-2xl shadow-[#FF6B00]/20">
                Quero blindar minha empresa agora
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* 5. Nossos Serviços */}
      <section id="servicos" className="py-20 md:py-32 bg-[#F4F7FF]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0A1628] mb-6">Soluções Técnicas Especializadas</h2>
            <p className="text-lg md:text-xl text-gray-600">
              Da gestão do eSocial ao laudo técnico, cuidamos de tudo para que você cuide do seu negócio.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                title: "Gestão de SST para o eSocial",
                desc: "Emissão e envio dos eventos S-2210 (acidentes), S-2220 (monitoramento da saúde), S-2240 (condições de trabalho). Sua empresa sempre em dia com o governo.",
                icon: Database
              },
              {
                title: "Programas e Laudos Técnicos",
                desc: "Elaboração de PGR, PCMSO, LTCAT, Laudos de Insalubridade e Periculosidade por Engenheiros de Segurança registrados no CREA.",
                icon: FileText
              },
              {
                title: "Treinamentos de NRs",
                desc: "Capacitações presenciais e online para NR-5, NR-6, NR-10, NR-12, NR-33, NR-35 e demais normas. Certificados válidos e reconhecidos.",
                icon: GraduationCap
              },
              {
                title: "Assistência em Perícias Trabalhistas",
                desc: "Assistência técnica especializada em perícias judiciais e extrajudiciais, com pareceres técnicos robustos para defender sua empresa.",
                icon: Scale
              }
            ].map((srv, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-[#228848]/10 rounded-2xl flex items-center justify-center text-[#228848] mb-6">
                  <srv.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#0A1628] mb-4">{srv.title}</h3>
                <p className="text-gray-600 leading-relaxed font-medium">{srv.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <a href={WA_LINK} target="_blank" rel="noreferrer" data-testid="btn-orcamento-servicos">
              <Button size="lg" className="bg-[#FF6B00] hover:bg-[#E66000] text-white h-14 px-10 text-lg font-bold shadow-xl shadow-[#FF6B00]/20">
                Solicitar orçamento para minha empresa
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* 6. Por que escolher a BSeg? (Diferenciais) */}
      <section id="diferenciais" className="py-20 md:py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-[#228848]/10 rounded-[3rem] transform -rotate-3 z-0"></div>
              <img 
                src={heroOfficePath} 
                alt="Engenheiros no escritório" 
                className="relative z-10 rounded-[2rem] shadow-2xl object-cover aspect-[4/3] w-full"
              />
              <div className="absolute -bottom-8 -right-8 z-20 bg-[#0A1628] text-white p-6 rounded-2xl shadow-xl max-w-[280px]">
                <p className="font-bold text-lg mb-1 text-[#25D366]">Atendimento Local</p>
                <p className="text-sm text-white/80">Atendemos Foz do Iguaçu e toda a região Oeste do Paraná.</p>
              </div>
            </motion.div>

            <div className="lg:pl-8">
              <h2 className="text-3xl md:text-5xl font-bold text-[#0A1628] mb-10">Por que +150 empresas escolheram a BSeg?</h2>
              
              <div className="space-y-8 mb-12">
                {[
                  {
                    title: "Engenharia no comando",
                    desc: "Laudos assinados por Engenheiros de Segurança habilitados no CREA — não apenas técnicos."
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
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
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

              <a href={WA_LINK} target="_blank" rel="noreferrer" data-testid="btn-diagnostico-diferenciais">
                <Button size="lg" className="bg-[#FF6B00] hover:bg-[#E66000] text-white h-14 px-10 text-lg font-bold shadow-xl shadow-[#FF6B00]/20 w-full sm:w-auto">
                  Agendar diagnóstico gratuito
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section id="faq" className="py-20 md:py-32 bg-[#F4F7FF]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0A1628] mb-4">Dúvidas frequentes</h2>
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
              {
                q: "Quanto tempo leva para ter minha empresa regularizada?",
                a: "Em média 15 a 30 dias úteis para a elaboração completa dos programas e laudos. Para urgências, temos atendimento prioritário."
              },
              {
                q: "A BSeg fica em Foz do Iguaçu. Atende outras cidades?",
                a: "Sim! Além de Foz do Iguaçu, atendemos toda a região Oeste do Paraná, incluindo Cascavel, Toledo, Medianeira e cidades vizinhas. Para clientes fora da região, oferecemos atendimento remoto."
              }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-gray-100 last:border-0 py-2">
                <AccordionTrigger className="text-left text-lg font-bold text-[#0A1628] hover:text-[#228848]">
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
      <section id="contato" className="bg-[#0A1628] text-white pt-20 pb-10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 mb-24">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Solicite seu Diagnóstico Gratuito</h2>
              <p className="text-lg text-white/80 mb-12">
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

                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-[#228848] shrink-0 border border-white/10">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm font-semibold uppercase tracking-wider mb-1">Endereço</p>
                    <p className="text-lg font-bold">Rua Jorge Sanwais, 1001<br/>Foz do Iguaçu - PR</p>
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
                    name="empresa"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#0A1628] font-bold">Empresa</FormLabel>
                        <FormControl>
                          <Input placeholder="Nome da sua empresa" {...field} className="h-12 bg-gray-50 border-gray-200" data-testid="input-empresa" />
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
                          <Input placeholder="(00) 00000-0000" {...field} className="h-12 bg-gray-50 border-gray-200" data-testid="input-telefone" />
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

                  <Button type="submit" size="lg" className="w-full bg-[#FF6B00] hover:bg-[#E66000] text-white h-14 text-lg font-bold shadow-xl mt-4" data-testid="btn-submit-contato">
                    Enviar e aguardar contato
                  </Button>
                </form>
              </Form>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <img src={logoPath} alt="BSeg Segurança do Trabalho" className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity" />
            <div className="flex gap-6 text-sm text-white/60 font-medium">
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
