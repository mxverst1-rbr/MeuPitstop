"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0a0a1a]">
      <div className="w-full max-w-md p-8 text-center space-y-6">
        {/* Logo */}
<div className="flex justify-center mb-0">
  <img
    src="/images/logompt.png"
    alt="Meu Pitstop"
    className="w-[280px] h-auto mx-auto"
  />
</div>


        {/* Frase de impacto */}
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          Seu carro, sua oficina, seu tempo. Tudo num só pitstop.
        </h1>

        {/* Botões de login por perfil */}
        <div className="grid grid-cols-1 gap-3 pt-2">
          <button
            onClick={() => router.push("/login?role=motorista")}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-full transition"
          >
            Entrar como Motorista
          </button>
          <button
            onClick={() => router.push("/login?role=oficina")}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-full transition"
          >
            Entrar como Oficina
          </button>
          <button
            onClick={() => router.push("/login?role=fornecedor")}
            className="w-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold py-3 rounded-full transition"
          >
            Entrar como Fornecedor
          </button>
        </div>

        {/* Cadastrar-se */}
        <div className="pt-2">
          <button
            onClick={() => router.push("/cadastroUsuario")}
            className="w-full bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 rounded-full transition"
          >
            Cadastrar-se
          </button>
        </div>
      </div>
    </main>
  );
}
