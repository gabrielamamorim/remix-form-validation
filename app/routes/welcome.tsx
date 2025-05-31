import { Link } from "@remix-run/react";

export default function Welcome() {
    return (
        <main className="min-h-screen bg-white text-gray-800 flex flex-col items-center justify-center gap-5">
            <h1 className="text-3xl font-bold">Cadastro realizado com sucesso!</h1>
            <Link to="/" className="bg-blue-500 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-semibold transition-colors">Sair</Link>
        </main>
    )
}