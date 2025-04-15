

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center text-center gap-8">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/natureza.jpg" // coloque sua imagem na pasta public com esse nome
          alt="Natureza sustentável"
          width={400}
          height={300}
          className="rounded-2xl shadow-lg"
        />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-2xl font-semibold text-green-800"
      >
        Bem-vindo ao Mundo da Sustentabilidade!
      </motion.h2>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          href="/jogos"
          className="bg-green-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-green-700 transition"
        >
          🌿 Começar o Jogo
        </Link>
      </motion.div>
    </main>
  );
}
