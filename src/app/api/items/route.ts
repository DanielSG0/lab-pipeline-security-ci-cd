import { NextResponse } from "next/server";

// Simulação de Banco de Dados em Memória
const items = [
  { id: 1, name: "Garrafa de Água Azul", location: "Prédio 3", status: "perdido" },
  { id: 2, name: "Chave de Carro", location: "Biblioteca", status: "achado" }
];

// GET: Rota para listar todos os itens
export async function GET() {
  return NextResponse.json(items);
}

// POST: Rota para cadastrar um novo item
export async function POST(request: Request) {
  // 🚨 SIMULAÇÃO DE VULNERABILIDADE: Senha chumbada no código!
  // No workshop, explique que um hacker varrendo o GitHub acharia isso em segundos.
  const API_KEY = "senha_admin_super_secreta_123";

  // Simulando uma verificação de segurança (aqui sempre vai passar, mas a senha está exposta)
  if (!API_KEY) {
    return NextResponse.json({ error: "Chave de API não encontrada" }, { status: 401 });
  }

  const body = await request.json();
  
  const newItem = {
    id: items.length + 1,
    name: body.name,
    location: body.location,
    status: body.status || "perdido",
  };

  items.push(newItem);
  
  // Apenas imprimindo no terminal do servidor para provar que a senha foi lida
  console.log("Item cadastrado usando a chave:", API_KEY);
  
  return NextResponse.json(newItem, { status: 201 });
}