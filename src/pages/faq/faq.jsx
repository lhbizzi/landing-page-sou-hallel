import React, { useState } from "react";
import ColapseFaq from "../../components/colapseFaq/colapseFaq";
import "./faq.css";

export default function Faq() {
  // Estado para controlar qual FAQ está aberto (apenas um aberto por vez)
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "O que é o programa Sou Hallel?",
      answer:
        "O Sou Hallel é um programa de assinatura com o objetivo de contribuir financeiramente com a obra do Hallel que acontece durante todo o ano. O valor arrecadado é destinado para a expansão da obra, fortalecimento dos mais de 10 grupos que compõem a escola Hallel, custeio de despesas fixas com estrutura física, funcionários e demais contas recorrentes. ",
    },
    {
      question: "Quanto custa participar do programa?",
      answer: "A assinatura custa R$250,00 por ano ou 12x de R$25,00.",
    },
    {
      question: "Existe um tempo mínimo de fidelidade?",
      answer:
        "A assinatura é anual e por isso o prazo mínimo de fidelidade é de 12 meses.",
    },
    {
      question: "Posso cancelar minha assinatura antes dos 12 meses?",
      answer:
        "A assinatura na modalidade de pagamento mensal funciona como uma compra parcelada em 12x, porém com os lançamentos feitos mês a mês, evitando o consumo do limite do cartão. Sendo assim, não é possível cancelar a assinatura antes dos 12 meses. No entanto, é possível cancelar a renovação automática, finalizando a assinatura ao término dos 12 meses.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        <h2 className="faq-title">
          Perguntas{" "}
          <span className="faq-title-highlight">frequentes</span>
        </h2>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <ColapseFaq
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}


