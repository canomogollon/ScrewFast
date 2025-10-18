/** @type {import('tailwindcss').Config} */
export default {
  // 1. Activa la estrategia de modo oscuro por clase
  darkMode: "class",

  // 2. Define los archivos que Tailwind debe escanear
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

  // 3. Extiende el tema por defecto con la identidad de LOGIKIA
  theme: {
    extend: {
      // 4. Define la paleta de colores completa
      colors: {
        // --- COLORES PRIMARIOS DE MARCA ---
        primary: {
          DEFAULT: "#0A2342", // Azul Principal (para fondos, títulos)
          hover: "#1A365D", // Azul para estados hover
          text: "#38BDF8", // Azul vibrante para texto en modo oscuro
        },
        accent: {
          green: {
            DEFAULT: "#2ECC71", // Verde Precisión (modo claro)
            dark: "#4ADE80", // Verde Precisión (modo oscuro)
          },
          orange: {
            DEFAULT: "#E67E22", // Naranja Acción (modo claro)
            dark: "#F97316", // Naranja Acción (modo oscuro)
          },
        },

        // --- COLORES DE FONDO ---
        background: {
          light: "#FFFFFF", // Fondo principal (modo claro)
          dark: "#111827", // Fondo principal (modo oscuro)
        },
        surface: {
          light: "#F8F9FA", // Fondo de tarjetas/secciones (modo claro)
          dark: "#1F2937", // Fondo de tarjetas/secciones (modo oscuro)
        },

        // --- COLORES DE TEXTO ---
        text: {
          main: {
            light: "#1E293B", // Texto principal (modo claro)
            dark: "#F1F5F9", // Texto principal (modo oscuro)
          },
          subtle: {
            light: "#64748B", // Texto secundario (modo claro)
            dark: "#94A3B8", // Texto secundario (modo oscuro)
          },
        },

        // --- COLORES DE BORDES Y LÍNEAS ---
        border: {
          light: "#E2E8F0", // Bordes (modo claro)
          dark: "#334155", // Bordes (modo oscuro)
        },
      },

      // 5. Define la familia de tipografía principal
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },

  // 6. Plugins (puedes agregar más aquí si los necesitas)
  plugins: [],
};
