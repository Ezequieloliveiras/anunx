
import { connectMongoDB } from "@/lib/mongodb"
import User from "@/models/user"
import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"


export async function POST(req) {
    try {
        await connectMongoDB()
        
        const { name, email, password } = await req.json()
        
        const hashedPassword = await bcrypt.hash(password, 10) //password aqui é a string que precisamos para o hash

        await User.create({ name, email, password: hashedPassword }) // essa linha de codigo irá armazenar os dados em no BD

        return NextResponse.json({ message: "User registred." }, { status: 201 })

    } catch (error) {
        
        return NextResponse.json(
            { message: "An error occurred while registering the user." }, { status: 500 })
    }
}

// precisamos criar um api simples primeiro
// precisamos que ela seja asincrona do tipo post
// req recebemos a solicitação
// vamos criar um try cath
// const {name, email, password} = req.json() iremos receber em json
// isso nos retornara uma promessa
// agora iremos retornar ao component de register e criar um bloco try cath