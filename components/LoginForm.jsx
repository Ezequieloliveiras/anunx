"use client"
import IconGoogle from '../public/images/google.svg'

import Image from 'next/image'
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
    FormHelperText,

} from "@mui/material"

import FormControl from '@mui/material/FormControl';
import { Formik } from "formik"
import { initialValues, validationSchema } from './js/formValuesTwo'
import TemplateDefault from '../templates/Default.js'

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
        <TemplateDefault>
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
                                    flexDirection: 'column',
                                }}>
                                <Container
                                    sx={{
                                        paddingBottom: '30px'
                                    }}
                                    maxWidth="sm"
                                    component="main" >
                                    <Typography
                                        variant="h3"
                                        align="center"
                                        color="textPrimary">
                                        Entre na sua conta
                                    </Typography>
                                </Container>
                                <Box sx={{
                                    backgroundColor: 'white',
                                    padding: '30px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    borderRadius: '5px',
                                    width: '600px',
                                }}>
                                    <Box display='flex' justifyContent='center'>
                                        <Button
                                            sx={{
                                                backgroundColor: '#000000',
                                                '&:hover': {
                                                    backgroundColor: '#212121'
                                                }
                                            }}
                                            variant="contained"
                                            startIcon={
                                                <Image
                                                    src={IconGoogle}
                                                    width={20}
                                                    height={20}
                                                    alt='Login com Google'
                                                />
                                            } onClick={() => signIn('google')}>
                                            Entrar com Google
                                        </Button>
                                    </Box>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            backgroundColor: '#e8e8e8',
                                            width: '100%',
                                            height: '1px',
                                            margin: '40px 0px',
                                            '& span': {
                                                backgroundColor: '#ffffff',
                                                padding: '0 30px'
                                            }
                                        }}>
                                        <span>ou</span>
                                    </Box>

                                    <form onSubmit={(e) => {
                                        e.preventDefault(); // Evita o comportamento padrão de recarregar a página
                                        handleSubmit(e); // Chama a primeira função de submissão
                                        handleSubmitCredentials(e); // Chama a segunda função de submissão
                                    }}>

                                        <FormControl
                                            error={errors.email
                                                && touched.email
                                            }
                                            fullWidth
                                        >
                                            <InputLabel htmlFor="my-input" >Email</InputLabel>
                                            <Input
                                                onChange={(e) => {
                                                    handleChange(e); // Chama o handleChange fornecido pelo Formik para atualizar os valores do formulário
                                                    setEmail(e.target.value); // Atualiza o estado local do email
                                                }}
                                                type="text"
                                                name="email"
                                                value={values.email}
                                                error={
                                                    !!errors.email
                                                        && touched.email
                                                        ? errors.email : null
                                                }
                                            />
                                            <FormHelperText>
                                                {
                                                    errors.email &&
                                                        touched.email ?
                                                        errors.email : null
                                                }
                                            </FormHelperText>
                                        </FormControl>
                                        <br /><br />
                                        <FormControl
                                            error={
                                                errors.password
                                                && touched.password
                                            }
                                            fullWidth
                                        >
                                            <InputLabel htmlFor="my-input">Senha</InputLabel>
                                            <Input
                                                onChange={(e) => {
                                                    handleChange(e); // Chama o handleChange fornecido pelo Formik para atualizar os valores do formulário
                                                    setPassword(e.target.value); // Atualiza o estado local do password
                                                }}
                                                name="password"
                                                type="password"
                                                value={values.password}
                                                error={!!errors.password
                                                    && touched.password
                                                    ? errors.password : null
                                                }
                                            />
                                            <FormHelperText>
                                                {
                                                    errors.password
                                                        && touched.password
                                                        ? errors.password : null
                                                }
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
                                        <Alert
                                            severity="error"
                                            sx={{
                                                marginBottom: '20px'
                                            }}
                                            fullWidth
                                        >
                                            {error}
                                        </Alert>
                                    )}
                                    <Link
                                        style={{
                                            textDecoration: 'none',
                                            color: 'grey',
                                            fontFamily: 'Roboto'
                                        }}
                                        href={'/register'}
                                    >
                                        <Typography
                                            variant='subtitle1'
                                        >
                                            Não tem uma conta? Registre-se
                                        </Typography>
                                    </Link>
                                </Box>
                            </Container>
                        )
                    }
                }
            </Formik >
        </TemplateDefault>
    )
}
