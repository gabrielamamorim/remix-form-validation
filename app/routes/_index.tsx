import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Bem-vindo ao app!</h1>
      <p className="mb-6">Clique abaixo para se cadastrar</p>
      <Link to="/signup" className="bg-blue-500 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-md transition-colors">Cadastre-se</Link>
    </main>
  );
}