import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // importa seu CSS global

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sustentabilidade em Foco",
  description: "Explorando práticas e jogos sustentáveis 🌿",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} bg-green-50 text-green-900 antialiased`}>
        <header className="bg-green-100 py-6 px-4 shadow-sm">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold flex items-center gap-2">
              ♻️ Sustentabilidade em Foco
            </h1>
            <p className="text-sm text-green-800 mt-1">
              Promovendo o uso consciente dos recursos naturais
            </p>
            <div className="nav-menu">
                            
                    
                            <a href="#" className="nav-link">On Sale</a>
                            <a href="#" className="nav-link">New Arrivals</a>
                            <a href="#" className="nav-link">Brands</a>
                            </div>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-10">
          {children}
        </main>

        <footer className="bg-green-100 text-center py-4 text-green-700 text-sm">
          &copy; {new Date().getFullYear()} - Feito com 🌱 e 💻
        </footer>
      </body>
    </html>
  );
}
