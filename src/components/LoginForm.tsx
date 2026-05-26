import { useState } from "react";
import handleLogin from "../hooks/handleLogin";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (handleLogin(password, email)) {
      navigate("/dashboard");
    } else {
      alert("Email ou senha inválidos");
    }
  }

  return (
    <div className="flex h-screen">
      <form
        className="m-auto w-full max-w-sm border border-gray-200 rounded-2xl flex flex-col gap-5 p-8 bg-white shadow-md"
        onSubmit={onSubmit}
      >
        <h1 className="text-center text-2xl font-bold text-gray-800">Entrar no Sistema</h1>
        <input
          className="p-2.5 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="p-2.5 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="p-2.5 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 font-semibold transition-colors"
          type="submit"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}