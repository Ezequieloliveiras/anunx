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
    FormHelperText
} from "@mui/material"

import FormControl from '@mui/material/FormControl';
import { Formik } from "formik"
import { initialValues, validationSchema } from './js/formValuesTwo'

export default function LoginForm() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const router = useRouter()

    const handleSubmitCredentials = async (e) => {
        e.preventDefault()

        try {
            const res = await signIn("credentials", {
                email,
                password,
                redirect: false, //por padrão redireciona para alguma página, mas nesse caso é false
            })

            if (res.error) {
                setError("Credenciais inválidas")
                return
            }

            router.replace("dashboard")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                console.log('ok enviou o form', values)
            }}
        >
            {
                ({
                    handleSubmit,
                    values,
                    touched,
                    errors,
                    handleChange,
                }) => {
                    return (
                        <Container
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: '100vh',
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
                                    Insira seus dados
                                </Typography>
                                <form onSubmit={(e) => {
                                    e.preventDefault(); // Evita o comportamento padrão de recarregar a página
                                    handleSubmit(e); // Chama a primeira função de submissão
                                    handleSubmitCredentials(e); // Chama a segunda função de submissão
                                }}>

                                    <FormControl error={errors.email && touched.email} fullWidth>
                                        <InputLabel htmlFor="my-input" >Email</InputLabel>
                                        <Input
                                            onChange={(e) => {
                                                handleChange(e); // Chama o handleChange fornecido pelo Formik para atualizar os valores do formulário
                                                setEmail(e.target.value); // Atualiza o estado local do email
                                            }}
                                            type="text"
                                            name="email"
                                            value={values.email}
                                            error={!!errors.email && touched.email ? errors.email : null}

                                        />
                                        <FormHelperText>
                                            {errors.email && touched.email ? errors.email : null}
                                        </FormHelperText>
                                    </FormControl>
                                    <br /><br />
                                    <FormControl error={errors.password && touched.password} fullWidth>
                                        <InputLabel htmlFor="my-input">Senha</InputLabel>
                                        <Input
                                            onChange={(e) => {
                                                handleChange(e); // Chama o handleChange fornecido pelo Formik para atualizar os valores do formulário
                                                setPassword(e.target.value); // Atualiza o estado local do password
                                            }}
                                            name="password"
                                            type="password"
                                            value={values.password}
                                            error={!!errors.password && touched.password ? errors.password : null}
                                        />
                                        <FormHelperText>
                                            {errors.password && touched.password ? errors.password : null}
                                        </FormHelperText>
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
                                        Entrar
                                    </Button>
                                </form>

                                {error && (
                                    <Alert severity="error" sx={{ marginBottom: '20px' }} fullWidth>
                                        {error}
                                    </Alert>
                                )}
                                <Link
                                    style={{
                                        textDecoration: 'none',
                                        color: 'grey',
                                        fontFamily: 'Roboto'
                                    }}
                                    href={'/register'}><Typography>Não tem uma conta? Registre-se</Typography></Link>
                            </Box>
                        </Container>
                    )
                }
            }
        </Formik >
    )
}
