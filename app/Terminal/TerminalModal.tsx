"use client";
import { useState } from "react";
import { PROFILE } from "../profileData";
import styles from "./TerminalModal.module.css";

export default function TerminalModal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([
    "Escribe 'help' para ver los comandos disponibles."
  ]);

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const cmd = input.trim().toLowerCase();
      let response = "";

      // Usamos el perfil en español para los datos de la terminal
      const data = PROFILE.es;

      switch (cmd) {
        case "help":
          response = "Comandos disponibles: 'skills', 'education', 'specializations', 'workshops', 'contact', 'clear', 'sudo hire'";
          break;
        case "skills":
          const { languages, aiData, frameworks, tools } = PROFILE.skills;
          response = `Tech Stack -> Lenguajes: [${languages.join(", ")}] | IA/BigData: [${aiData.join(", ")}] | Frameworks: [${frameworks.join(", ")}] | Tools: [${tools.join(", ")}]`;
          break;
        case "education":
          response = data.education.map((item: { title: string; center: string }) => `${item.title} [${item.center}]`).join(" | ");
          break;
        case "specializations":
          response = data.specializations.map((spec: { title: string; hours: string }) => `${spec.title} (${spec.hours})`).join(" | ");
          break;
        case "workshops":
          response = data.workshops.map((ws: { title: string; issuer: string }) => `${ws.title} (${ws.issuer})`).join(" | ");
          break;
        case "contact":
          response = `Email: ${PROFILE.email} | Tel: ${PROFILE.phone} | GitHub: ${PROFILE.github}`;
          break;
        case "sudo hire":
          response = "🚀 Acceso concedido. Enviando propuesta directa a marquezsergiolfm@gmail.com...";
          break;
        case "clear":
          setHistory([]);
          setInput("");
          return;
        default:
          response = `Comando no reconocido: '${cmd}'. Prueba con 'help'.`;
      }

      setHistory((prev) => [...prev, `$ ${input}`, response]);
      setInput("");
    }
  };

  return (
    <div className={styles.terminalCard}>
      <div className={styles.topBar}>
        <div className={styles.dotRed} />
        <div className={styles.dotYellow} />
        <div className={styles.dotGreen} />
        <span className={styles.title}>sergio@dev-terminal:~ (CLI)</span>
      </div>
      <div className={styles.body}>
        {history.map((line, i) => (
          <div key={i} className={styles.line}>
            {line.startsWith("$") ? (
              <span className={styles.commandPrompt}>{line}</span>
            ) : (
              <span className={styles.responseText}>{line}</span>
            )}
          </div>
        ))}
        <div className={styles.inputLine}>
          <span className={styles.commandPrompt}>$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleCommand}
            className={styles.input}
            placeholder="Escribe un comando..."
            autoFocus
          />
        </div>
      </div>
    </div>
  );
}