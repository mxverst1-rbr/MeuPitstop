"use client";

import { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function CadastroManutencao() {
  const [form, setForm] = useState({
    veiculo: "",
    servico: "",
    descricao: "",
    data: new Date(),
    horario: "",
    oficina: ""
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleDateChange = (date) =>
    setForm({ ...form, data: date });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const headers = token ? { Authorization: `Bearer ${token}` } : {};
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/manutencoes`, form, {
        headers,
      });
      alert("Manutenção cadastrada com sucesso!");
    } catch (err) {
      alert("Erro ao cadastrar manutenção: " + (err.response?.data?.message || err.message));
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

        <h1 className="text-2xl font-bold text-white mb-6">Novo Agendamento</h1>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">

          {/* Veículo */}
          <div>
            <label className="block text-gray-300 mb-1">Veículo</label>
            <select
              name="veiculo"
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Selecione o veículo</option>
              <option value="Carro 1">Carro 1</option>
              <option value="Carro 2">Carro 2</option>
            </select>
          </div>

          {/* Serviço */}
          <div>
            <label className="block text-gray-300 mb-1">Serviço</label>
            <select
              name="servico"
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Selecione o serviço</option>
              <option value="Troca de óleo">Troca de óleo</option>
              <option value="Problemas no motor">Problemas no motor</option>
              <option value="Problemas elétricos">Problemas elétricos</option>
              <option value="Freios">Freios</option>
              <option value="Suspensão">Suspensão</option>
              <option value="outros">Outros problemas</option>
            </select>
          </div>

          {/* Campo extra para "Outros problemas" */}
          {form.servico === "outros" && (
            <div>
              <label className="block text-gray-300 mb-1">Descreva o problema</label>
              <textarea
                name="descricao"
                placeholder="Digite aqui..."
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          )}

          {/* Oficina */}
          <div>
            <label className="block text-gray-300 mb-1">Oficina</label>
            <select
              name="oficina"
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Selecione a oficina</option>
              <option value="Oficina 1">Auto Peças Cavalinho</option>
              <option value="Oficina 2">Oficina do Max</option>
            </select>
          </div>

          {/* Data e horário só aparecem se veículo, serviço e oficina forem escolhidos */}
          {form.veiculo && form.servico && form.oficina && (
            <>
              {/* Data */}
              <div>
                <label className="block text-gray-300 mb-1">Data</label>
                <DatePicker
                  selected={form.data}
                  onChange={handleDateChange}
                  dateFormat="dd/MM/yyyy"
                  className="w-full px-4 py-2 rounded-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              {/* Horário */}
              <div>
                <label className="block text-gray-300 mb-1">Horário</label>
                <select
                  name="horario"
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="">Selecione o horário</option>
                  <option value="09:00">09:00</option>
                  <option value="10:00">10:00</option>
                  <option value="11:00">11:00</option>
                  <option value="14:00">14:00</option>
                  <option value="15:00">15:00</option>
                  <option value="16:00">16:00</option>
                </select>
              </div>
            </>
          )}

          {/* Botão */}
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-full transition"
          >
            Agendar!
          </button>
        </form>
      </div>
    </div>
  );
}
