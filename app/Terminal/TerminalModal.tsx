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

      switch (cmd) {
        case "help":
          response = "Comandos: 'skills', 'education', 'contact', 'clear', 'sudo hire'";
          break;
        case "skills":
          const { languages, aiData, frameworks, tools } = PROFILE.skills;
          response = `Tech Stack -> Lenguajes: [${languages.join(", ")}] | IA/BigData: [${aiData.join(", ")}] | Frameworks: [${frameworks.join(", ")}] | Tools: [${tools.join(", ")}]`;
          break;
        case "education":
          response = PROFILE.education.map(e => `${e.title} [${e.center}]`).join(" | ");
          break;
        case "contact":
          response = `Email: ${PROFILE.email} | Location: ${PROFILE.location}`;
          break;
        case "sudo hire":
          response = "🚀 Acceso concedido. Contactando directamente con Sergio Márquez...";
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