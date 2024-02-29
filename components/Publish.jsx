"use client"

import { Formik } from 'formik'

import {
    Box,
    Button,
    Container,
    InputAdornment,
    InputLabel,
    Input,
    MenuItem,
    FormControl,
    FormHelperText,
    Select,
    Typography
} from '@mui/material'

import TemplateDefault from '../templates/Default'
import FileUpload from '../components/js/FileUpload'
import { initialValues, validationSchema } from './js/formValuesOne'

const Publish = () => {

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
                        touched,
                        values,
                        errors,
                        handleChange,
                        handleSubmit,
                        setFieldValue,
                    }) => {

                        return (
                            <form onSubmit={handleSubmit} fullWidth
                                style={{
                                    width: '100%',
                                    borderRadius: '5px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center'
                                }}>

                                <Container maxWidth='sm' sx={{marginTop:'0px'}}>
                                    <Typography component='h1' variant='h2' align='center' color='textPrimary' gutterBottom>
                                        Publicar anúncio
                                    </Typography>
                                    <Typography component='h5' variant='h5' align='center' color='textPrimary' gutterBottom 
                                    sx={{marginBottom:'30px'}}
                                    >
                                        Quanto mais detalhado, melhor!
                                    </Typography>
                                </Container>

                                <Container maxWidth='md'
                                    sx={{
                                        backgroundColor: '#ffffff',
                                        borderRadius: '5px',
                                        marginBottom:'20px',
                                    }}>
                                    <Box
                                        sx={{
                                            backgroundColor: '#ffffff',
                                            padding:'20px 0px',
                                            borderRadius: '5px',
                                            marginBottom: '20px'
                                        }}>
                                        <FormControl error={errors.title && touched.title} fullWidth>
                                            <InputLabel sx={{ fontWeight: '700' }} >Titulo do anúncio </InputLabel>
                                            <Input
                                                variant="standard"
                                                name='title'
                                                value={values.title}
                                                onChange={handleChange}
                                                error={!!errors.title && touched.title ? errors.title : null}
                                            />
                                            <FormHelperText>
                                                {errors.title && touched.title ? errors.title : null}
                                            </FormHelperText>
                                        </FormControl>
                                        <br /><br />

                                        <FormControl error={errors.category && touched.category} fullWidth>
                                            <InputLabel sx={{ fontWeight: '700' }} >Categoria</InputLabel>
                                            <Select
                                                variant="standard"
                                                name='category'
                                                value={values.category}
                                                fullWidth
                                                onChange={handleChange}
                                            >
                                                <MenuItem value="Bebê e Criança">Bebê e Criança</MenuItem>
                                                <MenuItem value="Agriculturta">Agriculturta</MenuItem>
                                                <MenuItem value="Moda">Moda</MenuItem>
                                                <MenuItem value="Carros, Motos e Barcos">Carros, Motos e Barcos</MenuItem>
                                                <MenuItem value="Serviços">Serviços</MenuItem>
                                                <MenuItem value="Lazer">Lazer</MenuItem>
                                                <MenuItem value="Animais">Animais</MenuItem>
                                                <MenuItem value="Moveis, Casa e Jardim">Moveis, Casa e Jardim</MenuItem>
                                                <MenuItem value="Imóveis">Imóveis</MenuItem>
                                                <MenuItem value="Equipamentos e Ferramentas">Equipamentos e Ferramentas</MenuItem>
                                                <MenuItem value="Celulares e Tablets">Celulares e Tablets</MenuItem>
                                                <MenuItem value="Esporte">Esporte</MenuItem>
                                                <MenuItem value="Tecnologia">Tecnologia</MenuItem>
                                                <MenuItem value="Emprego">Emprego</MenuItem>
                                                <MenuItem value="Outros">Outros</MenuItem>
                                            </Select>
                                            <FormHelperText>
                                                {errors.category && touched.category ? errors.category : null}
                                            </FormHelperText>
                                        </FormControl>
                                    </Box>
                                </Container>

                                <Container maxWidth='md'
                                    sx={{
                                        backgroundColor: '#ffffff',
                                        padding:'0px',
                                        borderRadius: '5px'
                                    }}>
                                    <Box
                                        sx={{
                                            backgroundColor: '#ffffff',
                                            padding:'20px 0px',
                                            borderRadius: '5px',
                                        }}>
                                        <FileUpload
                                            files={values.files}
                                            errors={errors.files}
                                            touched={touched.files}
                                            setFieldValue={setFieldValue}
                                        />
                                    </Box>
                                </Container>
                                <Container maxWidth='md'
                                    sx={{
                                        backgroundColor: '#ffffff',
                                        padding:'0px',
                                        borderRadius: '5px',
                                        marginTop: '20px'
                                    }}>
                                    <Box sx={{
                                        backgroundColor: '#ffffff',
                                        paddingBottom:'20px',
                                        paddingTop:'20px',
                                        borderRadius: '5px'
                                    }}>
                                        <FormControl error={errors.description && touched.description} fullWidth>
                                            <InputLabel sx={{ fontWeight: '700' }} >Escreva os detalhes do que está vendendo.</InputLabel>
                                            <Input
                                                name='description'
                                                multiline
                                                rows={6}
                                                variant='outlined'
                                                onChange={handleChange}
                                            />
                                            <FormHelperText>
                                                {errors.description && touched.description ? errors.description : null}
                                            </FormHelperText>
                                        </FormControl>
                                    </Box>
                                </Container>
                                <Container maxWidth='md'
                                    sx={{
                                        backgroundColor: '#ffffff',
                                        padding:'0px',
                                        borderRadius: '5px',
                                        marginTop: '20px'
                                    }}>
                                    <Box
                                        sx={{
                                            backgroundColor: '#ffffff',
                                            padding:'20px 0px',
                                            borderRadius: '5px'
                                        }}>
                                        <FormControl error={errors.price && touched.price} fullWidth>
                                            <InputLabel sx={{ fontWeight: '700' }} >Preço de venda</InputLabel>
                                            <Input
                                                name='price'
                                                variant='outlined'
                                                onChange={handleChange}
                                                startAdornment={<InputAdornment position='start'>R$</InputAdornment>}
                                            />
                                            <FormHelperText>
                                                {errors.price && touched.phone ? errors.price : null}
                                            </FormHelperText>
                                        </FormControl>
                                    </Box>
                                </Container>

                                <Container maxWidth='md'
                                    sx={{
                                        backgroundColor: '#ffffff',
                                        borderRadius: '5px',
                                        marginBottom: '20px',
                                        marginTop: '20px'
                                    }}>
                                    <Box
                                        sx={{
                                            padding:'20px 0px',
                                            borderRadius: '5px'
                                        }}>
                                        <Typography component='h6' variant='h6' color='textPrimary' gutterBottom >
                                            Dados de Contato
                                        </Typography>
                                        <FormControl error={errors.name && touched.name} fullWidth>
                                            <InputLabel sx={{ fontWeight: '700' }} >Nome</InputLabel>
                                            <Input
                                                variant="standard"
                                                name='name'
                                                value={values.name}
                                                onChange={handleChange}
                                                error={!!errors.name && touched.name ? errors.name : null}
                                            />
                                            <FormHelperText>
                                                {errors.name && touched.name ? errors.name : null}
                                            </FormHelperText>
                                        </FormControl>
                                        <br /><br />
                                        <FormControl error={errors.email && touched.email} fullWidth>
                                            <InputLabel sx={{ fontWeight: '700' }} >E-mail</InputLabel>
                                            <Input
                                                variant="standard"
                                                name='email'
                                                value={values.email}
                                                onChange={handleChange}
                                                error={!!errors.email && touched.email ? errors.email : null}
                                            />
                                            <FormHelperText>
                                                {errors.email && touched.email ? errors.email : null}
                                            </FormHelperText>
                                        </FormControl>
                                        <br /><br />
                                        <FormControl error={errors.phone && touched.phone} fullWidth>
                                            <InputLabel sx={{ fontWeight: '700' }} >Telefone</InputLabel>
                                            <Input
                                                variant="standard"
                                                name='phone'
                                                value={values.phone}
                                                onChange={handleChange}
                                                error={!!errors.phone && touched.phone ? errors.phone : null}
                                            />
                                            <FormHelperText>
                                                {errors.phone && touched.phone ? errors.phone : null}
                                            </FormHelperText>
                                        </FormControl>
                                    </Box>
                                </Container>
                                <Container maxWidth='md'
                                    sx={{
                                        width: '100%',
                                        padding:'20px 0px',
                                        borderRadius: '5px',
                                    
                                    }}>
                                    <Box textAlign='right' sx={{ width: '100%' }}>
                                        <Button type='submit' variant='contained' 
                                        sx={{
                                            backgroundColor:'#000000',
                                            '&:hover': {
                                                backgroundColor:'#333333'
                                            }
                                        }} 
                                        
                                        >
                                            Publicar Anúncio
                                        </Button>
                                    </Box>
                                </Container>
                            </form>
                        )
                    }
                }
            </Formik>
        </TemplateDefault>
    )
}

export default Publish