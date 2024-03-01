'use client'

import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Formik } from "formik"
import FormControl from "@mui/material/FormControl"
import TemplateDefault from '../templates/Default'

import {
    Container,
    Input,
    Box,
    FormHelperText,
    Button,
    Typography,
    Alert,
    InputLabel,
} from "@mui/material"


import { initialValues, validationSchema } from './js/formValuesTree'

export default function RegisterForm() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const router = useRouter()

    const handleSubmitCredentials = async (e) => {
        e.preventDefault()

        // esse codigo verifica se os campos nao estao inseridos e se estao indisponiveis
        if (!name || !email || !password) {
            setError('Preecha os campos necessários.')
            return
        }

        // aqui estamos verificando se o usuário ja existe no BD
        try {
            const resUserExists = await fetch("api/userExists", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            })

            // estamos apenas retornando que o usuário ja existe
            const { user } = await resUserExists.json()

            if (user) {
                setError("User already exists.")
                return
            }

            // estamos registrando os dados em nosso BD
            const res = await fetch('api/register', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                }),
            })

            if (res.ok) {
                const form = e.target
                form.reset()

                router.push("/")
            } else {
                console.log("User resgistration falied.")
            }
        } catch (error) {
            console.log("Error during resgiatration: ", error)
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
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexDirection:'column',
                                }}>
                                <Typography
                                    variant='h3'
                                    align='center'
                                    color='textPrimary'
                                    gutterBottom
                                >
                                    Registre-se
                                </Typography>
                                <Box
                                    sx={{
                                        backgroundColor: 'white',
                                        padding: '30px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        borderRadius: '5px',
                                        width: '600px'
                                    }}>


                                    <form onSubmit={(e) => {
                                        e.preventDefault(); // Evita o comportamento padrão de recarregar a página
                                        handleSubmit(e); // Chama a primeira função de submissão
                                        handleSubmitCredentials(e); // Chama a segunda função de submissão
                                    }}>

                                        <FormControl
                                            error={
                                                errors.name
                                                && touched.name
                                            }
                                            fullWidth
                                        >
                                            <InputLabel
                                                htmlFor="my-input"
                                            >
                                                Nome
                                            </InputLabel>
                                            <Input
                                                sx={{
                                                    margin: '15px 0px'
                                                }}
                                                onChange={(e) => {
                                                    handleChange(e); // Chama o handleChange fornecido pelo Formik para atualizar os valores do formulário
                                                    setName(e.target.value); // Atualiza o estado local do name
                                                }}
                                                type="text"
                                                name="name"
                                                value={values.name}
                                                error={
                                                    !!errors.name
                                                        && touched.name
                                                        ? errors.name : null
                                                }
                                                fullWidth
                                            />
                                            <FormHelperText>
                                                {
                                                    errors.name
                                                        && touched.name
                                                        ? errors.name : null
                                                }
                                            </FormHelperText>
                                        </FormControl>

                                        <FormControl
                                            error={
                                                errors.email
                                                && touched.email
                                            } fullWidth
                                        >
                                            <InputLabel
                                                htmlFor="my-input"
                                            >
                                                Email
                                            </InputLabel>
                                            <Input
                                                sx={{ margin: '15px 0px' }}
                                                onChange={(e) => {
                                                    handleChange(e); // Chama o handleChange fornecido pelo Formik para atualizar os valores do formulário
                                                    setEmail(e.target.value); // Atualiza o estado local do password
                                                }}
                                                name="email"
                                                type="text"
                                                value={values.email}
                                                error={!!errors.email
                                                    && touched.email
                                                    ? errors.email : null
                                                }
                                                fullWidth
                                            />
                                            <FormHelperText>
                                                {
                                                    errors.email
                                                        && touched.email
                                                        ? errors.email : null
                                                }
                                            </FormHelperText>
                                        </FormControl>

                                        <FormControl
                                            error={
                                                errors.password
                                                && touched.password
                                            } fullWidth
                                        >
                                            <InputLabel
                                                htmlFor="my-input"
                                            >
                                                Senha
                                            </InputLabel>
                                            <Input
                                                sx={{
                                                    margin: '15px 0px'
                                                }}
                                                onChange={(e) => {
                                                    handleChange(e); // Chama o handleChange fornecido pelo Formik para atualizar os valores do formulário
                                                    setPassword(e.target.value); // Atualiza o estado local do password
                                                }}
                                                name="password"
                                                type="password"
                                                value={values.password}
                                                error={
                                                    !!errors.password
                                                        && touched.password
                                                        ? errors.password : null
                                                }
                                                fullWidth
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
                                            sx={{
                                                backgroundColor: '#000000',
                                                color: '#ffffff',
                                                margin: '30px 0px',
                                                '&:hover': {
                                                    backgroundColor:'#212121'
                                                }
                                            }}
                                            type="submit"
                                            fullWidth
                                        >
                                            Registre-se
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
                                        href={'/'}
                                    >
                                        <Typography
                                            variant='subtitle1'
                                            style={{
                                                color: 'grey'
                                            }}
                                        >
                                            Já possui conta? Login
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

// Precisamos criar estados para armazenar os detalhes
// Temos nome, email e senha (campos de entrada)
// Temos que armazená-los dentro do estado para que possamos envia-lo para a API
// Para usar os estados precisamos converter esse componete em um Component Client
// Começando o estado dos campos Name, email, password, erro em branco
// armazenando o error dentro de um objeto
// adicionando evento nos campos onChange={(e) => setName(e.target.value)}
// a função irá armazenar qualquer valor que tenha dentro do campo de entrada desse estado
// criar o submit do form handleSubmit funcao
// após a ciração vamos previnir o evento padrao que e carregar a pagina
// agora e precisso criar a funcao que exige que os campos sejam preechidos, se nao da erro
// agora temos que fazer algo para enviar os dados de entrada para a API
//vamos criar a api agora

// retornando do route agora criamos um try cath
// vamos criar uma chamada para a API