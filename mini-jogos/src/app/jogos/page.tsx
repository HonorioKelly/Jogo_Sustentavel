
import Image from "next/image";
import Link from "next/link";
import "./index.css"; // importa seu CSS


export default function JogosGaleria() {
  const jogos = [
    {
      nome: "Nome do jogo",
      imagem: "/Logo_Agua.jpg", // coloque essa imagem na pasta /public/jogos
      link: "/jogos/jogo3",
    },
    {
      nome: "Nome do jogo",
      imagem: "/Logo_Memoria.jpg",
      link: "/jogos/jogo2",
    },
    {
      nome: "Nome do jogo",
      imagem: "/Logo_Logica.jpg",
      link: "/jogos/chess",
    },
  ];

  return (
    <div className="galeria-jogos">
      {jogos.map((jogo) => (
        <Link href={jogo.link} key={jogo.nome} className="group">
          <div className="rounded-3xl overflow-hidden shadow-lg bg-white hover:scale-105 transition-transform">
            <Image
              src={jogo.imagem}
              alt={jogo.nome}
              width={300}
              height={150}
              className="w-full h-auto"
            />
            <div className="text-center p-2 text-black font-semibold text-lg group-hover:text-green-700">
              {jogo.nome}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
