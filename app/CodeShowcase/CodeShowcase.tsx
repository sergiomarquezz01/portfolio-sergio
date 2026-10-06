"use client";
import { useState } from "react";
import styles from "./CodeShowcase.module.css";

const PYSPARK_SNIPPET = `# Pipeline de Preprocesamiento y Clasificación ML (PySpark / TFM)[cite: 1]
from pyspark.ml.feature import VectorAssembler, StandardScaler
from pyspark.ml.classification import RandomForestClassifier
from pyspark.ml.evaluation import BinaryClassificationEvaluator

# 1. Ensamblado de vectores para características transaccionales
assembler = VectorAssembler(
    inputCols=["amount", "oldbalanceOrg", "newbalanceOrig"], 
    outputCol="features"
)
df_assembled = assembler.transform(raw_df)

# 2. Normalización de datos
scaler = StandardScaler(inputCol="features", outputCol="scaledFeatures")
scaler_model = scaler.fit(df_assembled)
scaled_data = scaler_model.transform(df_assembled)

# 3. Entrenamiento distribuido del modelo
rf = RandomForestClassifier(labelCol="isFraud", featuresCol="scaledFeatures", numTrees=100)
model = rf.fit(scaled_data)`;

export default function CodeShowcase() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <button className={styles.toggleBtn} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "📂 Ocultar Pipeline PySpark" : "💻 Ver Código Fuente de Inferencia (PySpark)"}
      </button>

      {isOpen && (
        <div className={styles.codeBox}>
          <div className={styles.codeHeader}>src/ml/fraud_pipeline.py</div>
          <pre className={styles.pre}>
            <code>{PYSPARK_SNIPPET}</code>
          </pre>
        </div>
      )}
    </div>
  );
}