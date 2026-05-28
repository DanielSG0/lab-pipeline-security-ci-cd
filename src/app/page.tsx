"use client";

import { useState, useEffect } from "react";

// Tipagem do nosso item para manter o TypeScript feliz
type Item = {
  id: number;
  name: string;
  location: string;
  status: string;
};

export default function Home() {
  const [items, setItems] = useState<Item[]>([]);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  // Busca os itens na nossa API assim que a tela carrega
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const res = await fetch("/api/items");
    const data = await res.json();
    setItems(data);
  };

  // Função para enviar um novo item para a API
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !location) return;

    await fetch("/api/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, location, status: "perdido" }),
    });

    // Limpa os campos e recarrega a lista
    setName("");
    setLocation("");
    fetchItems(); 
  };

  return (
    <main className="min-h-screen p-8 bg-gray-50 text-gray-900">
      <div className="max-w-2xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-center">
          🔍 Achados e Perdidos
        </h1>

        {/* Formulário de Cadastro */}
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4 border border-gray-100">
          <div>
            <label className="block text-sm font-medium mb-1">Item perdido:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded-md p-2 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ex: Carteira preta, Casaco azul..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Onde foi perdido/achado?</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full border rounded-md p-2 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ex: Prédio 3, Biblioteca..."
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
            Registrar Item
          </button>
        </form>

        {/* Lista de Itens */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
          <h2 className="text-xl font-semibold mb-4">Itens Registrados :o</h2>
          <ul className="space-y-3">
            {items.map((item) => (
              <li key={item.id} className="p-3 border rounded-md flex justify-between items-center bg-gray-50">
                <div>
                  <p className="font-medium text-lg">{item.name}</p>
                  <p className="text-sm text-gray-500 flex items-center gap-1">📍 {item.location}</p>
                </div>
                <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                  item.status === 'achado' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {item.status.toUpperCase()}
                </span>
              </li>
            ))}
          </ul>
          {items.length === 0 && (
            <p className="text-center text-gray-500 mt-4">Nenhum item registrado ainda.</p>
          )}
        </div>
      </div>
    </main>
  );
}