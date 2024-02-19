'use client'

import { Formik } from 'formik'
import TemplateDefault from '../../../templates/Default'

import {
    Box,
    Button,
    Container,
    FormHelperText,
    FormControl,
    Typography,
    InputLabel,
    Input,
} from '@mui/material'

import { initialValues, validationSchema } from '../../auth/signup/formValues'


const Signup = () => {
    return (
        <TemplateDefault>
            <Container maxWidth='sm' component='main'
                sx={{
                    marginBottom: '30px'
                }}
            >
                <Typography component='h1' variant='h2' align='center' color='textPrimary'>
                    Crie sua conta
                </Typography>
                <Typography component='h5' variant='h5' align='center' color='textPrimary'>
                    E anuncie para todo o Brasil
                </Typography>
            </Container>
            <Container maxWidth='md'>
                <Box
                    sx={{
                        backgroundColor: 'white',
                        padding: '30px',
                    }}>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            console.log('ok form enviado', values)
                        }}
                    >
                        {
                            ({
                                touched,
                                values,
                                errors,
                                handleChange,
                                handleSubmit,
                            }) => {
                                return (
                                    <form
                                        onSubmit={handleSubmit}
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                        }}>
                                        <FormControl fullWdith error={errors.name && touched.name}
                                            sx={{ marginBottom: '20px' }}
                                        >
                                            <InputLabel>Nome</InputLabel>
                                            <Input
                                                name='name'
                                                value={values.name}
                                                onChange={handleChange}
                                            />
                                            <FormHelperText>
                                                {errors.name && touched.name ? errors.name : null}
                                            </FormHelperText>
                                        </FormControl>

                                        <FormControl fullWdith error={errors.email && touched.email}
                                            sx={{ marginBottom: '20px' }}
                                        >
                                            <InputLabel>E-mail</InputLabel>
                                            <Input
                                                name='email'
                                                type='email'
                                                value={values.email}
                                                onChange={handleChange}
                                            />
                                            <FormHelperText>
                                                {errors.email && touched.email ? errors.email : null}
                                            </FormHelperText>
                                        </FormControl>

                                        <FormControl fullWdith error={errors.passwordConf && touched.password}
                                            sx={{ marginBottom: '20px' }}
                                        >
                                            <InputLabel>Senha</InputLabel>
                                            <Input
                                                name='password'
                                                type='password'
                                                value={values.password}
                                                onChange={handleChange}
                                            />
                                            <FormHelperText>
                                                {errors.password && touched.password ? errors.password : null}
                                            </FormHelperText>
                                        </FormControl>

                                        <FormControl fullWdith error={errors.passwordConf && touched.passwordConf}
                                            sx={{ marginBottom: '20px' }}
                                        >
                                            <InputLabel>Confirmação de senha</InputLabel>
                                            <Input
                                                name='passwordConf'
                                                type='password'
                                                value={values.passwordConf}
                                                onChange={handleChange}
                                            />
                                            <FormHelperText>
                                                {errors.passwordConf && touched.passwordConf ? errors.passwordConf : null}
                                            </FormHelperText>
                                        </FormControl>

                                        <Button
                                            type='submit'
                                            fullWdith
                                            variant='contained'
                                            sx={{
                                                backgroundColor: 'black',
                                                marginTop: '20px',
                                                '&:hover': {
                                                    backgroundColor:'#000000'
                                                }
                                            }}
                                        >
                                            Cadastrar
                                        </Button>
                                    </form>
                                )
                            }
                        }
                    </Formik>
                </Box>
            </Container>
        </TemplateDefault>
    )
}
export default Signup