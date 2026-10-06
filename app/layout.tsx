"use client";
import { useEffect } from "react";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    console.log(
      "%c🚀 ¡Ey, Dev! ¿Buscando bugs o cotilleando el código?",
      "color: #39c5bb; font-size: 14px; font-weight: bold; background: #121721; padding: 8px 12px; border-radius: 4px;"
    );
    console.log(
      "%cSi te mola cómo está montado esto, escríbeme a marquezsergiolfm@gmail.com",
      "color: #58a6ff; font-size: 12px;"
    );
  }, []);

  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}