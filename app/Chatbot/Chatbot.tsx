"use client";
import { useState, useRef, useEffect } from "react";
import styles from "./Chatbot.module.css";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<{ sender: "user" | "bot"; text: string }[]>([
    {
      sender: "bot",
      text: "¡Hola! Soy Sergio AI Assistant 🤖\n\nPuedes hacerme cualquier pregunta sobre la trayectoria, proyectos de IA, Flutter o formación de Sergio."
    }
  ]);
  const [input, setInput] = useState("");
  const chatBottomRef = useRef<HTMLDivElement>(null);

  // Auto scroll al último mensaje
  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const QUICK_QUESTIONS = [
    "🚀 Experiencia en IA y PySpark",
    "📱 Desarrollo Flutter / Mobile",
    "🎓 Nota en Full Stack Web",
    "🌐 Idiomas y contacto"
  ];

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    const userText = query.toLowerCase();
    setMessages((prev) => [...prev, { sender: "user", text: query }]);
    if (!textToSend) setInput("");
    setIsTyping(true);

    setTimeout(() => {
      let botReply = "📩 Para discutir proyectos o contrataciones, puedes escribirle directamente a marquezsergiolfm@gmail.com o llamar al +34 600 802 793.";

      if (userText.includes("pyspark") || userText.includes("ia") || userText.includes("big data") || userText.includes("tfm") || userText.includes("fraude")) {
        botReply = "🤖 Especialización en IA & Big Data:\n\n• TFM enfocado en detección de fraude transaccional con PySpark y scikit-learn[cite: 1].\n• Experiencia con modelos predictivos, manejo de desbalance de datos (SMOTE) y Big Data Analytics[cite: 1].";
      } else if (userText.includes("flutter") || userText.includes("mobile") || userText.includes("dam") || userText.includes("green globe") || userText.includes("app")) {
        botReply = "📱 Desarrollo Multiplataforma (DAM):\n\n• Prácticas en Green Globe desarrollando APIs RESTful e integraciones móviles con Flutter en tiempo real[cite: 1].\n• Proyecto 'Ecología Verde' para concienciación ambiental[cite: 1].";
      } else if (userText.includes("full stack") || userText.includes("react") || userText.includes("javascript") || userText.includes("nota") || userText.includes("sobresaliente")) {
        botReply = "💻 Full Stack Web Development (260h):\n\n• Formación integral en Node.js, React, APIs y bases de datos SQL[cite: 1].\n• Calificación oficial: Sobresaliente (9.55) expedido por la Junta de Andalucía[cite: 1].";
      } else if (userText.includes("5g") || userText.includes("iot") || userText.includes("vr") || userText.includes("ciberseguridad") || userText.includes("magerit")) {
        botReply = "🛡️ Certificaciones de Especialización:\n\n• Programación IoT & Smart City en 5G (150h)[cite: 1].\n• Realidad Virtual y Aumentada en 5G (150h)[cite: 1].\n• Análisis de Riesgos y Ciberseguridad con MAGERIT v3 (70h)[cite: 1].";
      } else if (userText.includes("idioma") || userText.includes("frances") || userText.includes("ingles") || userText.includes("aleman")) {
        botReply = "🌐 Idiomas:\n\n• Español: Nativo[cite: 1]\n• Francés: Nativo[cite: 1]\n• Inglés: B2 Profesional[cite: 1]\n• Alemán: A2 Básico[cite: 1]";
      }

      setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
      setIsTyping(false);
    }, 450);
  };

  return (
    <div className={styles.chatWrapper}>
      {!isOpen ? (
        <button className={styles.chatButton} onClick={() => setIsOpen(true)}>
          ⚡ Preguntar a Sergio AI
        </button>
      ) : (
        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>
            <span>🤖 Sergio AI Assistant</span>
            <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>✖</button>
          </div>

          <div className={styles.chatBody}>
            {messages.map((m, i) => (
              <div key={i} className={m.sender === "user" ? styles.msgUser : styles.msgBot}>
                {m.text}
              </div>
            ))}

            {isTyping && <div className={styles.typingIndicator}>Sergio AI está escribiendo...</div>}

            {/* Sugerencias Rápidas */}
            {messages.length < 5 && (
              <div className={styles.suggestions}>
                {QUICK_QUESTIONS.map((q, idx) => (
                  <button key={idx} className={styles.chip} onClick={() => handleSend(q)}>
                    {q}
                  </button>
                ))}
              </div>
            )}

            <div ref={chatBottomRef} />
          </div>

          <div className={styles.chatFooter}>
            <input
              type="text"
              value={input}
              className={styles.input}
              placeholder="Haz una pregunta..."
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button className={styles.sendBtn} onClick={() => handleSend()}>
              Enviar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}