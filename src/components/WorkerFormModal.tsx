import { useState } from "react";
import type { Worker } from "../utils/workers";
import { format } from 'date-fns';


interface WorkerFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (worker: Omit<Worker, "id">) => void;
}

function WorkerFormModal({ isOpen, onClose, onSubmit }: WorkerFormModalProps) {
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [nomeMae, setNomeMae] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");

    if (!isOpen) return null;

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!nome.trim() || !cpf.trim() || !nomeMae.trim() || !dataNascimento) return;
        const formatedDate = formatDate(dataNascimento);
        onSubmit({ nome, cpf, nomeMae, dataNascimento: formatedDate });
        setNome("");
        setCpf("");
        setNomeMae("");
        setDataNascimento("");
        onClose();
    }

    function handleOverlayClick(e: React.MouseEvent) {
        if (e.target === e.currentTarget) onClose();
    }

    function formatDate(date: string) {
        return format(date, 'yyyy-MM-dd');
    }

    return (
        <div
            onClick={handleOverlayClick}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
        >
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 mx-4">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">Adicionar colaborador</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 text-2xl leading-none cursor-pointer transition-colors"
                    >
                        ✕
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="worker-nome" className="text-sm font-semibold text-gray-600">
                            Nome
                        </label>
                        <input
                            id="worker-nome"
                            type="text"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            placeholder="Nome completo"
                            required
                            className="border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="worker-cpf" className="text-sm font-semibold text-gray-600">
                            CPF
                        </label>
                        <input
                            id="worker-cpf"
                            type="text"
                            value={cpf}
                            onChange={(e) => setCpf(e.target.value)}
                            placeholder="Apenas números"
                            required
                            className="border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="worker-nomemae" className="text-sm font-semibold text-gray-600">
                            Nome da Mãe
                        </label>
                        <input
                            id="worker-nomemae"
                            type="text"
                            value={nomeMae}
                            onChange={(e) => setNomeMae(e.target.value)}
                            placeholder="Nome completo da mãe"
                            required
                            className="border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="worker-dob" className="text-sm font-semibold text-gray-600">
                            Data de Nascimento
                        </label>
                        <input
                            id="worker-dob"
                            type="text"
                            value={dataNascimento}
                            onChange={(e) => setDataNascimento(e.target.value)}
                            required
                            className="border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            placeholder="dd/mm/aaaa"
                        />
                    </div>

                    <div className="flex gap-3 justify-end mt-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-5 py-2.5 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 cursor-pointer transition-colors"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="px-5 py-2.5 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 cursor-pointer transition-colors"
                        >
                            Adicionar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default WorkerFormModal;
