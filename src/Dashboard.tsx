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
        <div className="flex flex-col min-h-screen bg-gray-50 p-6">
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
                <h1 className="text-2xl font-bold text-gray-800">Dashboard de colaboradores</h1>
                <button onClick={handleLogout} className="bg-gray-100 cursor-pointer hover:bg-gray-200 text-gray-700 border border-gray-300 px-4 py-2 rounded-lg font-medium transition-colors">
                    Sair
                </button>
            </div>
            <div className="flex justify-between items-center mt-2 mb-4">
                <h2 className="text-xl font-semibold text-gray-700">Tabela de colaboradores</h2>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
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
