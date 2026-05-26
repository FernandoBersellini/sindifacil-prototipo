import type { Worker } from '../utils/workers';
import { format } from 'date-fns';

interface WorkersTableProps {
    workers: Worker[];
}

export default function WorkersTable({ workers }: WorkersTableProps) {
    return (
        <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 mt-5">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="border border-gray-300 px-4 py-2">ID</th>
                        <th className="border border-gray-300 px-4 py-2">Nome</th>
                        <th className="border border-gray-300 px-4 py-2">CPF</th>
                        <th className="border border-gray-300 px-4 py-2">Nome da Mãe</th>
                        <th className="border border-gray-300 px-4 py-2">Data de Nascimento</th>
                        <th className="border border-gray-300 px-4 py-2">Documento</th>
                    </tr>
                </thead>
                <tbody>
                    {workers.map((worker: Worker) => (
                        <tr key={worker.id}>
                            <td className="border border-gray-300 px-4 py-2">{worker.id}</td>
                            <td className="border border-gray-300 px-4 py-2">{worker.nome}</td>
                            <td className="border border-gray-300 px-4 py-2">{worker.cpf}</td>
                            <td className="border border-gray-300 px-4 py-2">{worker.nomeMae}</td>
                            <td className="border border-gray-300 px-4 py-2">{format(new Date(worker.dataNascimento), 'dd/MM/yyyy')}</td>
                            <td className="border border-gray-300 px-4 py-2">
                                {worker.documento
                                    ? <a className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer" href={worker.documento}>Visualizar</a>
                                    : <span className="text-gray-400">—</span>}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}