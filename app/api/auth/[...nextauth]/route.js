import { connectMongoDB } from "@/lib/mongodb"
import User from "@/models/user"
import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials" // erro pode estar aqui no futuro
import bcrypt from "bcryptjs"

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {}, // como estamos usando campos personalizados deixaremos em branco

            async authorize(credentials) {
                const { email, password } = credentials
                try {
                    await connectMongoDB()
                  const user = await User.findOne({email})

                  if(!user) {
                    return null
                  }

                const passwordMatch = await bcrypt.compare(password, user.password)

                  if(!passwordMatch) {
                    return null
                  }

                  return user
                } catch (error) {
                    console.log("Error: ", error)
                }
            },
        })
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/"
    }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }