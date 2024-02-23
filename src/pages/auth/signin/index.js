'use client'

import { Formik } from 'formik'
import { useRouter } from 'next/router'

import {
  Box,
  Button,
  Container,
  FormHelperText,
  FormControl,
  Typography,
  InputLabel,
  Input,
  CircularProgress,
} from '@mui/material'

import { initialValues, validationSchema } from '../../auth/signup/formValues'
import TemplateDefault from '../../../templates/Default'
import signin from '../../../pages/auth/signin'

const Signin = () => {
  const router = useRouter()


  const handleFormSubmit = values => {
    signin('credentials', {
      email: values.email,
      password: values.password,
      callbackUrl: 'http://localhost:3000/user/dashboard/anunx'
    })
  }

  return (
    <TemplateDefault>
      <Container maxWidth='sm' component='main'
        sx={{
          marginBottom: '30px'
        }}
      >
        <Typography component='h1' variant='h2' align='center' color='textPrimary'>
          Entre na sua conta
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
            onSubmit={handleFormSubmit}
          >
            {
              ({
                touched,
                values,
                errors,
                handleChange,
                handleSubmit,
                isSubmitting,
              }) => {
                return (
                  <form onSubmit={handleSubmit}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                    }}>

                    <FormControl fullWidth error={errors.email && touched.email}
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

                    <FormControl fullWidth error={errors.passwordConf && touched.password}
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

                    {
                      isSubmitting ? (
                        <CircularProgress sx={{ display: 'block', margin: '10px auto' }} />
                      ) : (
                        <Button
                          type='submit'
                          fullWidth
                          variant='contained'
                          sx={{
                            backgroundColor: 'black',
                            marginTop: '20px',
                            '&:hover': {
                              backgroundColor: '#000000'
                            }
                          }}
                        >
                          Entrar
                        </Button>
                      )
                    }

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
export default Signin