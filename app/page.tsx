"use client";
import { useState } from "react";
import { PROFILE } from "./profileData";
import TerminalModal from "./Terminal/TerminalModal";
import FraudPredictor from "./FraudPredictor/FraudPredictor";
import TechFilter from "./TechFilter/TechFilter";
import CodeShowcase from "./CodeShowcase/CodeShowcase";
import FooterMetrics from "./FooterMetrics/FooterMetrics";
import Chatbot from "./Chatbot/Chatbot";

export default function Home() {
  const [lang, setLang] = useState<"es" | "fr" | "en">("es");
  const content = PROFILE[lang];

  return (
    <main style={{ maxWidth: "880px", margin: "0 auto", padding: "2rem 1rem" }}>
      
      {/* SELETOR DE IDIOMAS */}
      <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.5rem", marginBottom: "1.5rem" }}>
        <button
          onClick={() => setLang("es")}
          style={{
            background: lang === "es" ? "#2ea043" : "#161b22",
            color: lang === "es" ? "#fff" : "#8b949e",
            border: "1px solid #30363d",
            padding: "0.3rem 0.8rem",
            borderRadius: "20px",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          🇪🇸 ES
        </button>
        <button
          onClick={() => setLang("fr")}
          style={{
            background: lang === "fr" ? "#2ea043" : "#161b22",
            color: lang === "fr" ? "#fff" : "#8b949e",
            border: "1px solid #30363d",
            padding: "0.3rem 0.8rem",
            borderRadius: "20px",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          🇫🇷 FR
        </button>
        <button
          onClick={() => setLang("en")}
          style={{
            background: lang === "en" ? "#2ea043" : "#161b22",
            color: lang === "en" ? "#fff" : "#8b949e",
            border: "1px solid #30363d",
            padding: "0.3rem 0.8rem",
            borderRadius: "20px",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          🇬🇧 EN
        </button>
      </div>

      {/* CABEÇALHO E REDES SOCIAIS */}
      <header style={{ borderBottom: "1px solid #21262d", paddingBottom: "2rem", marginBottom: "2.5rem" }}>
        <h1 style={{ fontSize: "2.5rem", color: "#f0f6fc", marginBottom: "0.4rem" }}>{content?.name}</h1>
        <p style={{ color: "#39c5bb", fontSize: "1.2rem", fontWeight: "600", marginBottom: "0.5rem" }}>
          {content?.title}
        </p>
        <p style={{ color: "#8b949e", fontSize: "0.95rem", marginBottom: "1rem" }}>
          📍 {PROFILE.location} | 📞 {PROFILE.phone} | ✉️ {PROFILE.email}
        </p>
        <div style={{ display: "flex", gap: "1rem", marginBottom: "1.2rem" }}>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: "#161b22", color: "#58a6ff", border: "1px solid #30363d", padding: "0.4rem 0.8rem", borderRadius: "6px", textDecoration: "none", fontSize: "0.85rem", fontWeight: "bold" }}
          >
            🐙 GitHub
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: "#161b22", color: "#58a6ff", border: "1px solid #30363d", padding: "0.4rem 0.8rem", borderRadius: "6px", textDecoration: "none", fontSize: "0.85rem", fontWeight: "bold" }}
          >
            💼 LinkedIn
          </a>
        </div>
        <p style={{ color: "#c9d1d9", fontSize: "0.95rem", lineHeight: "1.6" }}>
          {content?.summary}
        </p>
      </header>

      {/* STACK INTERATIVO */}
      <section style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ color: "#58a6ff", fontSize: "1.4rem", marginBottom: "1rem" }}>{content?.sections?.stack}</h2>
        <TechFilter />
      </section>

      {/* PROJETO EM DESTAQUE */}
      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ color: "#58a6ff", fontSize: "1.4rem", marginBottom: "1rem" }}>{content?.sections?.featured}</h2>
        <FraudPredictor />
        <CodeShowcase />
      </section>

      {/* EXPERIÊNCIA PROFISSIONAL */}
      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ color: "#58a6ff", fontSize: "1.4rem", marginBottom: "1rem", borderBottom: "1px solid #21262d", paddingBottom: "0.5rem" }}>
          {content?.sections?.experience}
        </h2>
        {content?.experience?.map((exp, idx) => (
          <div key={idx} style={{ background: "#0d1117", border: "1px solid #30363d", padding: "1.2rem", borderRadius: "8px", marginBottom: "1rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
              <h3 style={{ color: "#f0f6fc", fontSize: "1.1rem" }}>{exp.role}</h3>
              <span style={{ color: "#2ea043", fontSize: "0.85rem", fontWeight: "bold" }}>{exp.period}</span>
            </div>
            <p style={{ color: "#39c5bb", fontSize: "0.9rem", marginBottom: "0.8rem" }}>{exp.company} ({exp.location})</p>
            <ul style={{ paddingLeft: "1.2rem", color: "#8b949e", fontSize: "0.9rem" }}>
              {exp.tasks?.map((task, i) => (
                <li key={i} style={{ marginBottom: "0.4rem" }}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* FORMAÇÃO OFICIAL */}
      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ color: "#58a6ff", fontSize: "1.4rem", marginBottom: "1rem", borderBottom: "1px solid #21262d", paddingBottom: "0.5rem" }}>
          {content?.sections?.education}
        </h2>
        {content?.education?.map((edu, idx) => (
          <div key={idx} style={{ background: "#0d1117", border: "1px solid #30363d", padding: "1rem", borderRadius: "8px", marginBottom: "1rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
              <h3 style={{ color: "#f0f6fc", fontSize: "1rem" }}>{edu.title}</h3>
              <span style={{ color: "#8b949e", fontSize: "0.85rem" }}>{edu.period}</span>
            </div>
            <p style={{ color: "#39c5bb", fontSize: "0.85rem", margin: "0.2rem 0" }}>{edu.center} ({edu.location})</p>
            <p style={{ color: "#8b949e", fontSize: "0.85rem" }}>{edu.details}</p>
          </div>
        ))}
      </section>

      {/* CURSOS DE ESPECIALIZAÇÃO TÉCNICA */}
      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ color: "#58a6ff", fontSize: "1.4rem", marginBottom: "1rem", borderBottom: "1px solid #21262d", paddingBottom: "0.5rem" }}>
          {content?.sections?.specializations}
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))", gap: "1rem" }}>
          {content?.specializations?.map((spec, idx) => (
            <div key={idx} style={{ background: "#0d1117", border: "1px solid #30363d", padding: "1rem", borderRadius: "8px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
                <h3 style={{ color: "#f0f6fc", fontSize: "0.95rem" }}>{spec.title}</h3>
                <span style={{ background: "#161b22", color: "#39c5bb", border: "1px solid #30363d", padding: "0.1rem 0.5rem", borderRadius: "12px", fontSize: "0.75rem", fontWeight: "bold" }}>
                  {spec.hours}
                </span>
              </div>
              <p style={{ color: "#2ea043", fontSize: "0.85rem", marginBottom: "0.3rem" }}>{spec.center}</p>
              <p style={{ color: "#8b949e", fontSize: "0.85rem" }}>{spec.details}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WORKSHOPS E CERTIFICADOS */}
      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ color: "#58a6ff", fontSize: "1.4rem", marginBottom: "1rem", borderBottom: "1px solid #21262d", paddingBottom: "0.5rem" }}>
          {content?.sections?.workshops}
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))", gap: "1rem" }}>
          {content?.workshops?.map((ws, idx) => (
            <div key={idx} style={{ background: "#0d1117", border: "1px solid #30363d", padding: "1rem", borderRadius: "8px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
                <h3 style={{ color: "#f0f6fc", fontSize: "0.95rem" }}>{ws.title}</h3>
                <span style={{ background: "#161b22", color: "#2ea043", border: "1px solid #30363d", padding: "0.1rem 0.5rem", borderRadius: "12px", fontSize: "0.75rem", fontWeight: "bold" }}>
                  {ws.hours}
                </span>
              </div>
              <p style={{ color: "#39c5bb", fontSize: "0.85rem", marginBottom: "0.3rem" }}>{ws.issuer} ({ws.type})</p>
              <p style={{ color: "#8b949e", fontSize: "0.85rem" }}>{ws.details}</p>
            </div>
          ))}
        </div>
      </section>

      {/* IDIOMAS */}
      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ color: "#58a6ff", fontSize: "1.4rem", marginBottom: "1rem", borderBottom: "1px solid #21262d", paddingBottom: "0.5rem" }}>
          {content?.sections?.languages}
        </h2>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          {PROFILE.languages?.map((l, i) => (
            <span key={i} style={{ background: "#161b22", border: "1px solid #30363d", padding: "0.5rem 1rem", borderRadius: "20px", fontSize: "0.9rem" }}>
              <strong>{l.name}:</strong> <span style={{ color: "#8b949e" }}>{l.level}</span>
            </span>
          ))}
        </div>
      </section>

      {/* TERMINAL CLI */}
      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ color: "#58a6ff", fontSize: "1.4rem", marginBottom: "1rem" }}>{content?.sections?.cli}</h2>
        <TerminalModal />
      </section>

      {/* MÉTRICAS DE FOOTER E CHATBOT */}
      <FooterMetrics />
      <Chatbot />

    </main>
  );
}