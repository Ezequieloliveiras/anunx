export { default } from "next-auth/middleware"

export const config = { matcher: ["/dashboard/:publish*"]} 

//adicionaremos as paginas que queremos proteger, porque apos o logOut não pode simplesmente voltar a página
