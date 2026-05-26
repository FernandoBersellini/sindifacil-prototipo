import { Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Dashboard from "./Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/sindifacil-prototipo" element={<LoginForm />} />
      <Route path="/sindifacil-prototipo/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App
