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
        className="m-auto w-1/4 border rounded-lg flex flex-col gap-5 p-5 bg-[#001e45]"
        onSubmit={onSubmit}
      >
        <h1 className="text-center text-2xl font-bold text-white">Entrar no Sistema</h1>
        <input
          className="p-2 border rounded-lg"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="p-2 border rounded-lg"
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="p-2 border rounded-lg cursor-pointer hover:bg-[#00193a] hover:text-white transition-colors"
          type="submit"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}