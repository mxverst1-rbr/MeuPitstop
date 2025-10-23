"use client";
import { useState } from "react";
import axios from "axios";

export default function CadastroUsuario() {
  const [form, setForm] = useState({ nome: "", email: "", senha: "", confirmarSenha: "", veiculo: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.senha !== form.confirmarSenha) {
      alert("As senhas não conferem!");
      return;
    }

    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/usuarios`, {
        nome: form.nome,
        email: form.email,
        senha: form.senha,
        veiculo: form.veiculo
      });
      alert("Usuário cadastrado com sucesso!");
    } catch (err) {
      alert("Erro ao cadastrar: " + (err.response?.data?.message || err.message));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a1a]">
      <div className="w-full max-w-md p-8 text-center">

        {/* Logo */}
        <div className="flex justify-center mb-1">
          <img src="/images/logompt.png" alt="Meu Pitstop" className="w-58 h-58 mx-auto" />
        </div>

        <h1 className="text-2xl font-bold text-white mb-6">Cadastro</h1>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div>
            <label className="block text-gray-300 mb-1">Nome</label>
            <input
              type="text"
              name="nome"
              placeholder="Seu nome"
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Digite seu email"
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Senha</label>
            <input
              type="password"
              name="senha"
              placeholder="Digite sua senha"
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Confirmar Senha</label>
            <input
              type="password"
              name="confirmarSenha"
              placeholder="Confirme sua senha"
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Veículo</label>
            <input
              type="text"
              name="veiculo"
              placeholder="Ex: Lamborghini Aventador SVJ"
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-full transition"
          >
            Cadastrar!
          </button>
        </form>
      </div>
    </div>
  );
}
