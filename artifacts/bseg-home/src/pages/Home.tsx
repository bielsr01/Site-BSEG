import React, { useState } from "react";
import { motion } from "framer-motion";
import { Shield, HeartPulse, GraduationCap, FileSearch, ClipboardList, UserCheck, Stethoscope, Briefcase, Phone, Mail, MapPin, Menu, X } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import logoPath from "@assets/02 Logotipo.png";

const WA_LINK = "https://api.whatsapp.com/send?phone=5545988160990&text=Ol%C3%A1%2C%20tenho%20interesse%20em%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20BSEG%20SST.";

export default function Home() {
  const { toast } = useToast();
  
  const contactSchema = z.object({
    nome: z.string().min(2, "Nome é obrigatório"),
    email: z.string().email("E-mail inválido"),
    telefone: z.string().min(10, "Telefone inválido"),
    mensagem: z.string().min(10, "Mensagem muito curta"),
  });

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      nome: "",
      email: "",
      telefone: "",
      mensagem: "",
    },
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  function onSubmit(values: z.infer<typeof contactSchema>) {
    toast({
      title: "Mensagem enviada!",
      description: "Em breve entraremos em contato.",
    });
    form.reset();
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur supports-[backdrop-filter]:bg-secondary/80 border-b border-white/10">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center">
            <img src={logoPath} alt="B.SEG SST Logo" className="h-12 w-auto" />
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/90">
            <a href="#sobre" className="hover:text-primary transition-colors">QUEM SOMOS</a>
            <a href="#solucoes" className="hover:text-primary transition-colors">SOLUÇÕES</a>
            <a href="#diferenciais" className="hover:text-primary transition-colors">DIFERENCIAIS</a>
            <a href="#form" className="hover:text-primary transition-colors">CONTATO</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href={WA_LINK} target="_blank" rel="noreferrer" data-testid="link-wa-header">
              <Button className="bg-[#25D366] hover:bg-[#20bd5a] text-white hidden md:flex gap-2 font-bold">
                <SiWhatsapp className="w-5 h-5" />
                Fale com um Especialista
              </Button>
            </a>
            <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-white/10" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-secondary border-t border-white/10 p-4">
            <nav className="flex flex-col gap-4 text-sm font-medium text-white/90">
              <a href="#sobre" className="hover:text-primary transition-colors py-2" onClick={toggleMobileMenu}>QUEM SOMOS</a>
              <a href="#solucoes" className="hover:text-primary transition-colors py-2" onClick={toggleMobileMenu}>SOLUÇÕES</a>
              <a href="#diferenciais" className="hover:text-primary transition-colors py-2" onClick={toggleMobileMenu}>DIFERENCIAIS</a>
              <a href="#form" className="hover:text-primary transition-colors py-2" onClick={toggleMobileMenu}>CONTATO</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/40 via-secondary to-secondary"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-white">
              Soluções completas para sua empresa, <span className="text-primary">garantindo conformidade.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl">
              Soluções especializadas para empresas que buscam segurança, saúde ocupacional e conformidade com a legislação trabalhista.
            </p>
            <a href={WA_LINK} target="_blank" rel="noreferrer">
              <Button size="lg" className="bg-[#25D366] hover:bg-[#20bd5a] text-white text-lg h-14 px-8 font-bold gap-2">
                <SiWhatsapp className="w-6 h-6" />
                ENTRE EM CONTATO NO WHATSAPP
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Quem Somos */}
      <section id="sobre" className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Quem somos</h2>
              <div className="w-20 h-1 bg-primary mb-8 rounded-full"></div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A BSeg Segurança do Trabalho é referência em soluções de segurança ocupacional. Nosso compromisso é proteger a saúde dos colaboradores e garantir que sua empresa esteja sempre em conformidade com as normas regulamentadoras. Com uma equipe especializada e um atendimento humanizado, simplificamos processos para que você possa focar no crescimento do seu negócio.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl overflow-hidden shadow-2xl border border-border bg-secondary relative min-h-[320px] flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,_#228848_0%,_#0A1628_70%)] opacity-90" />
              <div className="relative z-10 p-10 text-white text-center">
                <Shield className="w-20 h-20 mx-auto mb-6 text-primary opacity-80" />
                <p className="text-2xl font-bold mb-2">+10 anos de experiência</p>
                <p className="text-white/70 text-lg">Protegendo colaboradores e empresas em todo o Brasil</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Soluções */}
      <section id="solucoes" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Soluções Personalizadas para Sua Empresa</h2>
            <p className="text-lg text-muted-foreground">
              Atuamos em diversas frentes para garantir um ambiente de trabalho seguro e eficiente:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { title: "PGR", desc: "Programa de Gerenciamento de Riscos", icon: Shield },
              { title: "PCMSO", desc: "Controle Médico de Saúde Ocupacional", icon: HeartPulse },
              { title: "Treinamentos NR", desc: "Capacitações e treinamentos normativos", icon: GraduationCap },
              { title: "LTCAT", desc: "Laudo Técnico das Condições Ambientais", icon: FileSearch },
              { title: "Laudos e Perícias", desc: "Laudos técnicos especializados", icon: ClipboardList },
              { title: "PPP", desc: "Perfil Profissiográfico Previdenciário", icon: UserCheck },
              { title: "ASO", desc: "Atestado de Saúde Ocupacional", icon: Stethoscope },
              { title: "Consultoria SST", desc: "Consultoria em Saúde e Segurança do Trabalho", icon: Briefcase },
            ].map((sol, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-background border hover:border-primary hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <sol.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">{sol.title}</h3>
                <p className="text-muted-foreground">{sol.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center">
            <a href={WA_LINK} target="_blank" rel="noreferrer">
              <Button size="lg" variant="outline" className="border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white text-lg h-14 px-8 font-bold gap-2">
                <SiWhatsapp className="w-6 h-6" />
                Entre em contato no whatsapp
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section id="diferenciais" className="py-20 md:py-32 bg-secondary text-white relative">
        <div className="absolute inset-0 bg-primary/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Atendemos empresas como a sua</h2>
              <div className="w-20 h-1 bg-primary mb-8 rounded-full"></div>
              <p className="text-lg text-white/80 mb-8">Nosso trabalho é voltado para:</p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {["Construção Civil", "Indústria e Manufatura", "Logística e Transporte", "Comércio e Varejo", "Saúde e Bem-estar", "Agronegócio"].map((ind, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="font-medium">{ind}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-primary text-primary-foreground p-10 rounded-3xl shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <h3 className="text-3xl font-bold mb-4 relative z-10">Equipe especializada</h3>
              <p className="text-primary-foreground/90 text-lg mb-8 relative z-10">
                Profissionais com ampla experiência em segurança do trabalho, prontos para atender sua empresa com agilidade e qualidade.
              </p>
              <a href={WA_LINK} target="_blank" rel="noreferrer" className="relative z-10 inline-block">
                <Button variant="secondary" size="lg" className="w-full text-primary font-bold gap-2">
                  Fale com nossos especialistas
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="form" className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Entre em contato</h2>
              <p className="text-lg text-muted-foreground mb-12">
                Preencha o formulário e nossa equipe entrará em contato em breve.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary mb-1">Telefone / WhatsApp</h4>
                    <p className="text-muted-foreground">(45) 98816-0990</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary mb-1">E-mail</h4>
                    <p className="text-muted-foreground">contato@bsegsst.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary mb-1">Endereço</h4>
                    <p className="text-muted-foreground">Rua Jorge Sanwais, 1001<br />Foz do Iguaçu, PR</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-border/50">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="nome"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome</FormLabel>
                        <FormControl>
                          <Input placeholder="Seu nome completo" {...field} className="bg-background h-12" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>E-mail</FormLabel>
                        <FormControl>
                          <Input placeholder="seu@email.com" {...field} className="bg-background h-12" />
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
                        <FormLabel>Telefone</FormLabel>
                        <FormControl>
                          <Input placeholder="(00) 00000-0000" {...field} className="bg-background h-12" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="mensagem"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mensagem</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Como podemos ajudar?" className="min-h-[120px] bg-background resize-none" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" size="lg" className="w-full h-14 text-lg font-bold">
                    Enviar Mensagem
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white/80 py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="lg:col-span-2">
              <img src={logoPath} alt="B.SEG SST Logo" className="h-12 w-auto mb-6" />
              <p className="max-w-sm">
                Soluções especializadas para empresas que buscam segurança, saúde ocupacional e conformidade.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Navegação</h4>
              <nav className="flex flex-col gap-3">
                <a href="#sobre" className="hover:text-primary transition-colors">Quem Somos</a>
                <a href="#solucoes" className="hover:text-primary transition-colors">Soluções</a>
                <a href="#diferenciais" className="hover:text-primary transition-colors">Diferenciais</a>
                <a href="#form" className="hover:text-primary transition-colors">Contato</a>
              </nav>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Contato</h4>
              <ul className="flex flex-col gap-3">
                <li>(45) 98816-0990</li>
                <li>contato@bsegsst.com</li>
                <li>Rua Jorge Sanwais, 1001<br />Foz do Iguaçu, PR</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© 2025 B.SEG SST. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a 
        href={WA_LINK} 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform hover:shadow-[#25D366]/40 group"
      >
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 group-hover:opacity-40"></div>
        <SiWhatsapp className="w-8 h-8 relative z-10" />
      </a>
    </div>
  );
}
