import { useState } from "react";
import { workers as initialWorkers, type Worker } from "./utils/workers";
import WorkersTable from "./components/WorkersTable";
import WorkerFormModal from "./components/WorkerFormModal";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
    const [workers, setWorkers] = useState<Worker[]>(initialWorkers);
    const [isModalOpen, setIsModalOpen] = useState(false);

    function handleAddWorker(data: Omit<Worker, "id">) {
        const newWorker: Worker = {
            id: workers.length > 0 ? Math.max(...workers.map((w) => w.id)) + 1 : 1,
            ...data,
        };
        setWorkers((prev) => [...prev, newWorker]);
    }

    const navigate = useNavigate();
    function handleLogout() {
        navigate('/');
    }

    return (
        <div className="flex flex-col h-screen p-5">
            <div className="flex justify-between mb-5">
                <h1 className="text-2xl font-bold text-white mb-5">Dashboard de colaboradores</h1>
                <button onClick={handleLogout} className="flex justify-end bg-blue-500 cursor-pointer hover:bg-blue-600 text-white px-4 py-2 rounded self-center">
                    Sair
                </button>
            </div>
            <div className="flex justify-between mt-5">
                <h1 className="text-xl font-bold text-white">Tabela de colaboradores</h1>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white px-4 py-2 rounded self-center"
                >
                    Adicionar colaborador
                </button>
            </div>
            <WorkersTable workers={workers} />
            <WorkerFormModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleAddWorker}
            />
        </div>
    );
}
