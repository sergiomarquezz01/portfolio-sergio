"use client";
import { useState } from "react";
import styles from "./FraudPredictor.module.css";

export default function FraudPredictor() {
  const [amount, setAmount] = useState<number>(2500);
  const [type, setType] = useState<string>("TRANSFER");
  const [isNewDevice, setIsNewDevice] = useState<boolean>(true);
  const [prediction, setPrediction] = useState<{ risk: number; isFraud: boolean } | null>(null);

  const handlePredict = () => {
    let score = 0;
    if (amount > 4000) score += 45;
    else if (amount > 1000) score += 20;

    if (type === "TRANSFER" || type === "CASH_OUT") score += 30;
    if (isNewDevice) score += 25;

    const isFraud = score >= 50;
    setPrediction({ risk: Math.min(score, 99), isFraud });
  };

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>🤖 Live Demo: Predicción de Fraude (TFM)</h3>
      <p className={styles.subtitle}>Inferencia en tiempo real simulando el modelo ML con PySpark[cite: 1].</p>

      <div className={styles.formGroup}>
        <label className={styles.label}>Monto: <strong>{amount} €</strong></label>
        <input
          type="range" min="10" max="10000" step="50"
          value={amount} onChange={(e) => setAmount(Number(e.target.value))}
          className={styles.slider}
        />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>Tipo de Operación</label>
        <select value={type} onChange={(e) => setType(e.target.value)} className={styles.select}>
          <option value="PAYMENT">PAYMENT (Pago habitual)</option>
          <option value="TRANSFER">TRANSFER (Transferencia)</option>
          <option value="CASH_OUT">CASH_OUT (Retiro efectivo)</option>
        </select>
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>
          <input
            type="checkbox" checked={isNewDevice}
            onChange={(e) => setIsNewDevice(e.target.checked)}
            style={{ marginRight: "8px" }}
          />
          ¿Dispositivo/ubicación no habitual?
        </label>
      </div>

      <button onClick={handlePredict} className={styles.button}>Ejecutar Modelo ML</button>

      {prediction && (
        <div className={`${styles.resultBox} ${prediction.isFraud ? styles.fraud : styles.safe}`}>
          <strong>{prediction.isFraud ? "🚨 Riesgo de Fraude Detectado" : "✅ Transacción Válida"}</strong>
          <p style={{ margin: "0.3rem 0 0 0", fontSize: "0.85rem" }}>
            Probabilidad estimada: {prediction.risk}%
          </p>
        </div>
      )}
    </div>
  );
}