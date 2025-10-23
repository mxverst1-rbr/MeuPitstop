"use client";
import { useState } from "react";
import axios from "axios";

export default function CadastroOficina() {
  const [form, setForm] = useState({
    nome: "",
    responsavel: "",
    telefone: "",
    localizacao: "",
    servicos: ""
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const headers = token ? { Authorization: `Bearer ${token}` } : {};
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/oficinas`,
        form,
        { headers }
      );
      alert("Oficina cadastrada com sucesso!");
    } catch (err) {
      alert("Erro ao cadastrar oficina: " + (err.response?.data?.message || err.message));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a1a]">
      <div className="w-full max-w-md p-8 text-center">

        {/* Logo */}
        <div className="flex justify-center mb-1">
          <img
            src="/images/logompt.png"
            alt="Meu Pitstop"
            className="w-58 h-58 mx-auto"
          />
        </div>

        <h1 className="text-2xl font-bold text-white mb-6">Cadastro de Oficina</h1>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          {/* Nome da Oficina */}
          <div>
            <label className="block text-gray-300 mb-1">Nome da Oficina</label>
            <input
              type="text"
              name="nome"
              placeholder="Ex: Auto Peças Cavalinho"
              onChange={handleChange}
              className="
                w-full px-4 py-2 
                rounded-full 
                bg-gray-800 text-white 
                placeholder-gray-400 
                focus:outline-none focus:ring-2 focus:ring-purple-500
              "
            />
          </div>

          {/* Responsável */}
          <div>
            <label className="block text-gray-300 mb-1">Responsável</label>
            <input
              type="text"
              name="responsavel"
              placeholder="Ex: Charles Leclerc"
              onChange={handleChange}
              className="
                w-full px-4 py-2 
                rounded-full 
                bg-gray-800 text-white 
                placeholder-gray-400 
                focus:outline-none focus:ring-2 focus:ring-purple-500
              "
            />
          </div>

          {/* Telefone */}
          <div>
            <label className="block text-gray-300 mb-1">Telefone</label>
            <input
              type="text"
              name="telefone"
              placeholder="(61) 4002-8922"
              onChange={handleChange}
              className="
                w-full px-4 py-2 
                rounded-full 
                bg-gray-800 text-white 
                placeholder-gray-400 
                focus:outline-none focus:ring-2 focus:ring-purple-500
              "
            />
          </div>

          {/* Localização */}
          <div>
            <label className="block text-gray-300 mb-1">Localização</label>
            <input
              type="text"
              name="localizacao"
              placeholder="Ex: Asa Sul - Brasília"
              onChange={handleChange}
              className="
                w-full px-4 py-2 
                rounded-full 
                bg-gray-800 text-white 
                placeholder-gray-400 
                focus:outline-none focus:ring-2 focus:ring-purple-500
              "
            />
          </div>

          {/* Serviços */}
          <div>
            <label className="block text-gray-300 mb-1">Serviços</label>
            <textarea
              name="servicos"
              placeholder="Ex: Revisões, Manutenções, Vendas de peças..."
              onChange={handleChange}
              rows={3}
              className="
                w-full px-4 py-2 
                rounded-lg 
                bg-gray-800 text-white 
                placeholder-gray-400 
                focus:outline-none focus:ring-2 focus:ring-purple-500
              "
            />
          </div>

          {/* Botão */}
          <button
            type="submit"
            className="
              w-full 
              bg-purple-600 hover:bg-purple-700 
              text-white font-semibold 
              py-2 rounded-full 
              transition
            "
          >
            Cadastrar Oficina
          </button>
        </form>
      </div>
    </div>
  );
}
