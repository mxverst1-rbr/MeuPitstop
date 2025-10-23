"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Login() {
  const [form, setForm] = useState({ email: "", senha: "" });
  const router = useRouter();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, form);
      const token = res.data.token || res.data.access_token;
      if (token) {
        localStorage.setItem("token", token);
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        router.push("/cadastroOficina");
      }
    } catch (err) {
      alert("Erro ao logar: " + (err.response?.data?.message || err.message));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a1a]">
      <div className="w-full max-w-md p-8 text-center">
        
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src="/images/logompt.png" alt="Meu Pitstop" className="w-58 h-58 mx-auto" />
        </div>

        <h1 className="text-2xl font-bold text-white mb-6">Login</h1>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-left text-gray-300 mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Digite seu email"
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-left text-gray-300 mb-1">Senha</label>
            <input
              type="password"
              name="senha"
              placeholder="Digite sua senha"
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Esqueci senha */}
          <div className="text-right text-sm text-purple-400">
            <button
              type="button"
              onClick={() => alert("Função em desenvolvimento")}
              className="hover:underline"
            >
              Esqueceu a senha? Redefinir
            </button>
          </div>

          {/* Botão Entrar */}
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-full transition"
          >
            Entrar
          </button>
        </form>

        {/* Divisor */}
        <div className="flex items-center my-4">
          <div className="flex-1 h-px bg-gray-700"></div>
          <span className="px-2 text-gray-400">ou</span>
          <div className="flex-1 h-px bg-gray-700"></div>
        </div>

        {/* Botão Cadastro */}
        <button
          onClick={() => router.push("/cadastroUsuario")}
          className="w-full bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 rounded-full transition"
        >
          Cadastre-se
        </button>
      </div>
    </div>
  );
}
