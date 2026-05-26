import type { Worker } from '../utils/workers';
import { format } from 'date-fns';

interface WorkersTableProps {
    workers: Worker[];
}

export default function WorkersTable({ workers }: WorkersTableProps) {
    return (
        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm bg-white">
            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">ID</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Nome</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">CPF</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Nome da Mãe</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Data de Nascimento</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Documento</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {workers.map((worker: Worker) => (
                        <tr key={worker.id} className="hover:bg-gray-50 transition-colors">
                            <td className="px-4 py-3 text-sm text-gray-500">{worker.id}</td>
                            <td className="px-4 py-3 text-sm font-medium text-gray-800">{worker.nome}</td>
                            <td className="px-4 py-3 text-sm text-gray-600">{worker.cpf}</td>
                            <td className="px-4 py-3 text-sm text-gray-600">{worker.nomeMae}</td>
                            <td className="px-4 py-3 text-sm text-gray-600">{format(new Date(worker.dataNascimento), 'dd/MM/yyyy')}</td>
                            <td className="px-4 py-3 text-sm">
                                {worker.documento
                                    ? <a className="text-blue-600 hover:text-blue-800 hover:underline font-medium" target="_blank" rel="noopener noreferrer" href={worker.documento}>Visualizar</a>
                                    : <span className="text-gray-400">—</span>}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}