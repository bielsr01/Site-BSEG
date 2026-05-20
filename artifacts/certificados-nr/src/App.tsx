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
  MessageCircle,
  Menu,
  X,
  ArrowRight
} from "lucide-react";

const queryClient = new QueryClient();

const WHATSAPP_LINK = "https://wa.me/5511999999999?text=Quero+emitir+meu+certificado+NR+em+24h";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-primary/95 backdrop-blur-md shadow-md py-4" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShieldCheck className={`w-8 h-8 ${scrolled ? "text-secondary" : "text-secondary"}`} />
          <span className={`font-bold text-xl tracking-tight ${scrolled ? "text-white" : "text-white"}`}>
            NR<span className="text-secondary">Rápido</span>
          </span>
        </div>
        <div className="hidden md:flex gap-8 items-center text-sm font-medium">
          <a href="#confianca" className="text-white hover:text-secondary transition-colors">Conformidade</a>
          <a href="#nrs" className="text-white hover:text-secondary transition-colors">Nossas NRs</a>
          <a href="#como-funciona" className="text-white hover:text-secondary transition-colors">Como Funciona</a>
          <a href="#faq" className="text-white hover:text-secondary transition-colors">Dúvidas</a>
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="bg-secondary text-white px-5 py-2.5 rounded-md hover:bg-secondary/90 transition-colors font-bold flex items-center gap-2">
            Emitir Agora <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-20 bg-primary text-white overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary/30 via-primary to-primary"></div>
      
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-secondary">
            <AlertTriangle className="w-4 h-4" />
            <span>Evite multas e paralisações</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
            Precisa de Certificados de NR com <span className="text-secondary">Urgência?</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl">
            Emitimos e Entregamos em Todas as NRs em até <strong className="text-white">24hrs</strong>. Certificados 100% válidos perante o Ministério do Trabalho (MTE) e em total conformidade com a Nota Técnica da Secretaria de Inspeção do Trabalho.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <motion.a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-lg font-bold text-lg overflow-hidden group"
            >
              <span className="absolute inset-0 w-full h-full bg-white/20 group-hover:scale-x-100 origin-left scale-x-0 transition-transform duration-300 ease-out"></span>
              <span className="relative flex items-center gap-2">
                <MessageCircle className="w-6 h-6" />
                Emitir Certificado em até 24h Agora!
              </span>
              <span className="absolute -inset-1 rounded-lg border-2 border-[#25D366] opacity-50 animate-ping"></span>
            </motion.a>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-gray-400 font-medium pt-4">
            <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-secondary" /> Sem travar sua operação</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-secondary" /> Treinamentos práticos</span>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="absolute inset-0 bg-secondary blur-[100px] opacity-20 rounded-full"></div>
          <div className="relative bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-6">
                <div>
                  <h3 className="text-xl font-bold">Certificado Digital</h3>
                  <p className="text-sm text-gray-400">Assinatura ICP-Brasil</p>
                </div>
                <FileSignature className="w-12 h-12 text-secondary" />
              </div>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold">
                      0{i}
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="h-2.5 w-1/3 bg-gray-500 rounded"></div>
                      <div className="h-2 w-1/2 bg-gray-600 rounded"></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                <span className="text-sm text-gray-400">Status: <strong className="text-[#25D366]">Emitido em 24h</strong></span>
                <ShieldCheck className="w-6 h-6 text-[#25D366]" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Trust = () => {
  return (
    <section id="confianca" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center space-y-4"
          >
            <div className="w-16 h-16 mx-auto bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-6">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold">Certificado 100% Legal</h3>
            <p className="text-gray-600">Assinado por profissionais legalmente habilitados em Engenharia de Segurança do Trabalho.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center space-y-4"
          >
            <div className="w-16 h-16 mx-auto bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-6">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold">Conforme CLT e NRs</h3>
            <p className="text-gray-600">Adequado às exigências do Ministério do Trabalho e Nota Técnica da Inspeção do Trabalho.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center space-y-4 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">DESTAQUE</div>
            <div className="w-16 h-16 mx-auto bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-6">
              <FileSignature className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold">Assinado ICP-Brasil</h3>
            <p className="text-gray-600">Validade jurídica inquestionável com certificação digital de padrão nacional.</p>
          </motion.div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block bg-white px-8 py-4 rounded-full shadow-md border border-gray-100">
            <span className="text-gray-600 font-medium mr-4">Investimento transparente:</span>
            <span className="text-3xl font-black text-primary">R$ 129</span>
            <span className="text-gray-500 font-medium ml-2">por certificado</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const NrGrid = () => {
  const nrs = [
    { num: "05", title: "CIPA / Designado", icon: <Users className="w-8 h-8" /> },
    { num: "06", title: "Uso Adequado de EPIs", icon: <HardHat className="w-8 h-8" /> },
    { num: "10", title: "Segurança Elétrica", icon: <Zap className="w-8 h-8" /> },
    { num: "18", title: "Construção Civil", icon: <Mountain className="w-8 h-8" /> }, // Mountain as placeholder for construction/structure
    { num: "20", title: "Inflamáveis", icon: <Flame className="w-8 h-8" /> },
    { num: "33", title: "Espaço Confinado", icon: <BoxSelect className="w-8 h-8" /> },
    { num: "35", title: "Trabalho em Altura", icon: <AlertTriangle className="w-8 h-8" /> }
  ];

  return (
    <section id="nrs" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black text-primary tracking-tight">Treinamentos Disponíveis</h2>
          <p className="text-xl text-gray-600">Emitimos para as principais normas exigidas em fiscalizações e integrações.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {nrs.map((nr, index) => (
            <motion.div
              key={nr.num}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group cursor-pointer p-6 rounded-2xl border-2 border-gray-100 hover:border-secondary hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 mx-auto bg-gray-50 rounded-full flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-white transition-colors duration-300 mb-4">
                {nr.icon}
              </div>
              <h4 className="font-bold text-lg text-primary mb-1">NR-{nr.num}</h4>
              <p className="text-sm text-gray-500 font-medium">{nr.title}</p>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: nrs.length * 0.05 }}
            className="p-6 rounded-2xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-center hover:bg-gray-50 transition-colors"
          >
            <div className="font-bold text-gray-400 mb-2">Outra NR?</div>
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="text-secondary font-bold text-sm hover:underline">
              Consulte no WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-24 bg-primary text-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">Sem burocracia. Sem enrolação.</h2>
          <p className="text-xl text-gray-300">Como funciona o nosso processo express.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2"></div>
          
          {[
            {
              step: "01",
              title: "Envio de Dados",
              desc: "Você escolhe a NR e nos envia os dados via WhatsApp. Rápido e direto ao ponto."
            },
            {
              step: "02",
              title: "Conteúdo Prático",
              desc: "Disponibilizamos o conteúdo conforme as exigências da norma."
            },
            {
              step: "03",
              title: "Emissão em 24h",
              desc: "Emitimos e enviamos o certificado assinado digitalmente pelo Engenheiro Responsável."
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative z-10 text-center space-y-6"
            >
              <div className="w-20 h-20 mx-auto bg-primary border-4 border-secondary rounded-full flex items-center justify-center text-2xl font-black text-white shadow-[0_0_30px_rgba(255,107,0,0.3)]">
                {item.step}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Urgency = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-2xl text-center space-y-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-100 text-red-600 mb-2">
            <AlertTriangle className="w-10 h-10" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-primary tracking-tight">
            Evite multas de até R$ 6.000 por funcionário
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-medium">
            Não paralise a sua obra ou integração por falta de papel. Regularize sua equipe agora.
          </p>
          
          <div className="pt-6">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-10 py-5 rounded-xl font-black text-xl hover:bg-[#20bd5a] transition-colors shadow-lg hover:shadow-xl w-full sm:w-auto"
            >
              <MessageCircle className="w-7 h-7" />
              Chamar no WhatsApp Urgente
            </a>
          </div>
          <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Atendimento imediato horário comercial</p>
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      q: "O certificado é aceito em grandes empresas e construtoras?",
      a: "Sim. Nossos certificados seguem o padrão nacional e são aceitos por construtoras, indústrias, contratantes e órgãos de fiscalização em todo o Brasil."
    },
    {
      q: "Como o documento é assinado?",
      a: "O certificado é assinado digitalmente com certificado ICP-Brasil, garantindo autenticidade e validade jurídica total."
    },
    {
      q: "Empresas têm desconto para fechar turmas ou pacotes?",
      a: "Sim! Para turmas ou pacotes com múltiplos colaboradores, oferecemos condições especiais. Fale diretamente com nosso comercial via WhatsApp."
    },
    {
      q: "Em quanto tempo recebo o certificado?",
      a: "Em até 24 horas úteis após a realização do treinamento e envio dos dados completos."
    },
    {
      q: "O treinamento é presencial ou online?",
      a: "O treinamento pode ser realizado de forma prática e rápida, sem necessidade de deslocamento, adaptado à sua realidade operacional."
    },
    {
      q: "Quais dados preciso fornecer?",
      a: "Nome completo, CPF, função, empresa e a NR desejada. Tudo pode ser enviado diretamente pelo WhatsApp."
    },
    {
      q: "O certificado tem validade legal perante o Ministério do Trabalho?",
      a: "Sim. Todos os nossos certificados são emitidos em conformidade com as normas vigentes do MTE e assinados por Engenheiro de Segurança do Trabalho habilitado."
    },
    {
      q: "Consigo certificado para funcionário temporário ou terceirizado?",
      a: "Sim, atendemos CLT, temporários, terceirizados e prestadores de serviço."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black text-primary tracking-tight">Dúvidas Frequentes</h2>
          <p className="text-xl text-gray-600">Tudo que você precisa saber antes de emitir.</p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="bg-white border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-bold text-lg hover:text-secondary py-6">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-6 text-base leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-primary pt-20 pb-10 text-gray-400 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="w-8 h-8 text-secondary" />
              <span className="font-bold text-2xl text-white tracking-tight">
                NR<span className="text-secondary">Rápido</span>
              </span>
            </div>
            <p className="text-gray-400 max-w-sm">
              Sua parceira estratégica em segurança do trabalho. Soluções rápidas, legais e sem burocracia.
            </p>
          </div>
          <div className="md:text-right">
            <h4 className="text-white font-bold text-lg mb-4">Fale Conosco</h4>
            <a href={WHATSAPP_LINK} className="inline-flex items-center gap-2 text-2xl font-black text-white hover:text-secondary transition-colors">
              <MessageCircle className="w-6 h-6 text-[#25D366]" />
              (11) 9999-9999
            </a>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} NR Rápido. Todos os direitos reservados.</p>
          <p className="mt-2 text-gray-500">O conteúdo deste site não substitui a necessidade de consultoria técnica específica para sua empresa.</p>
        </div>
      </div>
    </footer>
  );
};

const FloatingWhatsApp = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20bd5a] transition-all hover:scale-110 group"
      aria-label="Falar no WhatsApp"
    >
      <span className="absolute -inset-2 rounded-full border-2 border-[#25D366] opacity-50 animate-ping"></span>
      <MessageCircle className="w-8 h-8 relative z-10" />
    </a>
  );
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="font-sans text-foreground bg-background overflow-x-hidden selection:bg-secondary selection:text-white">
          <Header />
          <Hero />
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
