"use client"

import Link from "next/link"
import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import {
    Input,
    Box,
    Button,
    Typography,
    Container,
    Alert,
    InputLabel,
} from "@mui/material"

import FormControl from '@mui/material/FormControl';

export default function LoginForm() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const res = await signIn("credentials", {
                email,
                password,
                redirect: false, //por padrão redireciona para alguma página, mas nesse caso é false
            })

            if (res.error) {
                setError("Invalid Credentials")
                return
            }

            router.replace("dashboard")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Container
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
            }}>
            <Box sx={{
                backgroundColor: 'white',
                padding: '30px',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '5px',
                width: '600px',
            }}>
                <Typography
                    variant='h4'
                    align='center'
                    color='textPrimary'
                    gutterBottom
                >
                    Enter the details
                </Typography>
                <form onSubmit={handleSubmit}>

                    <FormControl fullWidth>
                        <InputLabel htmlFor="my-input" >Email address</InputLabel>
                        <Input
                            sx={{ margin: '15px 0px' }}
                            onChange={(e) => setEmail(e.target.value)}
                            type="text"
                            fullWidth

                        />
                    </FormControl>

                    <FormControl fullWidth>
                        <InputLabel htmlFor="my-input">Password address</InputLabel>
                        <Input
                            sx={{ margin: '15px 0px' }}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            fullWidth
                        />
                    </FormControl>

                    <Button
                        style={{
                            backgroundColor: '#000000',
                            color: '#ffffff',
                            margin: '30px 0px'
                        }}
                        type="submit"
                        fullWidth
                    >
                        Login
                    </Button>
                </form>

                {error && (
                    <Alert severity="error" sx={{ marginBottom: '20px' }} fullWidth>
                        {error}
                    </Alert>
                )}
                <Link style={{ textDecoration: 'none', color: 'grey', fontFamily: 'Roboto' }} href={'/register'}>Don't have an account? <span style={{ color: 'grey' }}> Register</span></Link>
            </Box>
        </Container >
    )
}
