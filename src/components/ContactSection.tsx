"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Mail } from "lucide-react";
import { SiInstagram } from "react-icons/si";

type FAQItemProps = {
  question: string;
  answer: string;
};

function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left font-medium flex justify-between items-center"
      >
        <span>{question}</span>
        <span>{open ? "-" : "+"}</span>
      </button>
      {open && (
        <p className="mt-2 text-sm text-muted-foreground">{answer}</p>
      )}
    </div>
  );
}

const faqs = [
  {
    question: "Quais serviços estão inclusos?",
    answer:
      "Oferecemos serviços completos de design de interiores, desde o conceito até a execução, com acompanhamento personalizado.",
  },
  {
    question: "Como funciona o orçamento?",
    answer:
      "Após uma conversa inicial, realizamos uma avaliação do espaço e definimos um orçamento personalizado com base no projeto e necessidades do cliente.",
  },
  {
    question: "Posso ver projetos anteriores?",
    answer:
      "Sim! Nossa seção de projetos apresenta diversos ambientes que realizamos para inspirar e demonstrar nosso trabalho.",
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode integrar com um serviço de envio de e-mail (EmailJS, Formspree, Resend, etc).
    alert("Mensagem enviada!");
    setForm({ nome: "", email: "", mensagem: "" });
  };

  return (
    <section id="contact" className="py-16 px-4 max-w-[1140px] mx-auto space-y-16">
      {/* Formulário de Contato */}
      <div>
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold mb-2">
            Vamos conversar?
          </h2>
          <p className="text-muted-foreground">
            Tire dúvidas, peça um orçamento ou apenas diga oi :)
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
          <Input
            name="nome"
            placeholder="Seu nome"
            value={form.nome}
            onChange={handleChange}
            required
          />
          <Input
            name="email"
            type="email"
            placeholder="Seu e-mail"
            value={form.email}
            onChange={handleChange}
            required
          />
          <Textarea
            name="mensagem"
            placeholder="Sua mensagem"
            rows={5}
            value={form.mensagem}
            onChange={handleChange}
            required
          />
          <Button type="submit" className="w-full">
            Enviar mensagem
          </Button>
        </form>
      </div>

      {/* FAQ */}
      <div className="max-w-xl mx-auto">
        <h3 className="text-2xl font-semibold text-center mb-4">Perguntas Frequentes</h3>
        <div className="space-y-2">
          {faqs.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>

      {/* Links de Contato */}
      <div className="flex justify-center gap-6">
        <a
          href="https://wa.me/55889996928752"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <MessageCircle size={28} />
        </a>
        <a
          href="https://www.instagram.com/moobarquitetura/"
          target="_blank"
          rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <SiInstagram size={28} />
        </a>
        <a
          href="mailto:moobarquitetura@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Mail size={28} />
        </a>
      </div>
    </section>
  );
}
