import placeholderPdf from '../assets/placeholder.pdf';

export type Worker = {
    id: number;
    nome: string;
    cpf: string;
    nomeMae: string;
    dataNascimento: string;
    documento?: string;
}

export const workers = [
    {
        id: 1,
        nome: "João Carlos Silva",
        cpf: "12345678901",
        nomeMae: "Maria Aparecida Silva",
        dataNascimento: "1990-03-15",
        documento: placeholderPdf
    },
    {
        id: 2,
        nome: "Ana Paula Ferreira",
        cpf: "23456789012",
        nomeMae: "Luzia Ferreira dos Santos",
        dataNascimento: "1985-07-22"
    },
    {
        id: 3,
        nome: "Carlos Eduardo Mendes",
        cpf: "34567890123",
        nomeMae: "Rosa Mendes Oliveira",
        dataNascimento: "1978-11-08",
        documento: placeholderPdf
    },
    {
        id: 4,
        nome: "Fernanda Lima Costa",
        cpf: "45678901234",
        nomeMae: "Teresa Lima Alves",
        dataNascimento: "1995-02-28"
    },
    {
        id: 5,
        nome: "Roberto Souza Neto",
        cpf: "56789012345",
        nomeMae: "Claudia Souza Pereira",
        dataNascimento: "1982-09-14"
    },
    {
        id: 6,
        nome: "Patrícia Gonçalves",
        cpf: "67890123456",
        nomeMae: "Helena Gonçalves Ramos",
        dataNascimento: "1993-05-30",
        documento: placeholderPdf
    },
    {
        id: 7,
        nome: "Marcos Antônio Ribeiro",
        cpf: "78901234567",
        nomeMae: "Vera Lúcia Ribeiro",
        dataNascimento: "1975-12-03"
    },
    {
        id: 8,
        nome: "Juliana Nascimento",
        cpf: "89012345678",
        nomeMae: "Sônia Nascimento Campos",
        dataNascimento: "1998-04-17",
        documento: placeholderPdf
    },
    {
        id: 9,
        nome: "André Luís Carvalho",
        cpf: "90123456789",
        nomeMae: "Irene Carvalho Teixeira",
        dataNascimento: "1988-08-25"
    },
    {
        id: 10,
        nome: "Beatriz Moreira Dias",
        cpf: "01234567890",
        nomeMae: "Marlene Moreira Castro",
        dataNascimento: "1991-01-19",
        documento: placeholderPdf
    },
];

