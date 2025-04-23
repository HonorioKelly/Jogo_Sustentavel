import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
        <header className="header-custom">
          <div className="container">
            <Link
              href="/ " className="logo-link">
          <Image
            src="/Logo_Principal.png"
            alt="Sustentabilidade em Foco"
            width={120} // ajuste o tamanho conforme sua necessidade
            height={50}
            className="logo-img"
          />
          
          </Link>
            <p className="sub-titulo">
              Promovendo o uso consciente dos recursos naturais
            </p>
            <div className="nav-menu">
                            
                    
                            <a href="#" className="nav-link">On Sale</a>
                            <a href="#" className="nav-link">New Arrivals</a>
                            <a href="#" className="nav-link">Brands</a>
                            </div>
            </div>
        </header>

        <main className="conteudo-principal">
          {children}
        </main>

        <footer className="rodape">
          &copy; {new Date().getFullYear()} - Feito com 🌱 e 💻
        </footer>
      </body>
    </html>
  );
}