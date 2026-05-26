export default function handleLogin(password: string, email: string): boolean {
    if (password === "admin" && email === "admin@email.com") {
        console.log("Login realizado com sucesso");
        return true;
    } else {
        console.log("Login falhou");
        return false;
    }
}