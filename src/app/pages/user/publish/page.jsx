"use client"

import { useState } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import { useDropzone } from 'react-dropzone'
import { styled } from '@mui/system'
import { DeleteForever } from '@mui/icons-material'

import {
    Box, Button,
    Container,
    IconButton,
    InputAdornment,
    InputLabel,
    Input,
    MenuItem,
    FormControl,
    FormHelperText,
    Select,
    TextField,
    Typography
} from '@mui/material'

import TemplateDefault from '../../../templates/Default'
import '../../../globals.scss'

const validationSchema = yup.object().shape({
    title: yup.string()
        .min(6, 'Escreva um título maior')
        .max(100, 'Titulo muito grande')
        .required('Campo obrigatório'),
    category: yup.string().required('Campo obrigatório'),
    description: yup.string()
        .min(50, 'Escreva uma descrição com pelo menos 50 caracteres')
        .required('Campo obrigatório'),
        price: yup.number().required('Campo obrigatório'),
        email: yup.string().email('Digite um e-mail válido').required('Campo obrigatório'),
        name: yup.string().required('Campo obrigatório'),
        phone: yup.number().required('Campo obrigatório'),
})

const StyledContainer = styled(Container)(({ theme }) => ({
    padding: theme.spacing(8, 0, 4),
}))


const Publish = () => {
    const [files, setFile] = useState([])

    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: (acceptFile) => {
            const newFiles = acceptFile.map(file => {
                return Object.assign(file, {
                    preview: URL.createObjectURL(file)
                })
            })

            setFile([
                ...files,
                ...newFiles])
        }
    })

    const handleRemoveFile = fileName => {
        const newFilesState = files.filter(file => file.name !== fileName)
        setFile(newFilesState)
    }

    return (
        <TemplateDefault>
            <Formik
                initialValues={{
                    title: '',
                    category: '',
                    description: '',
                    price: '',
                    email: '',
                    nome: '',
                    phone: '',

                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log('ok enviou o form', values)
                }}
            >
                {
                    ({
                        values,
                        errors,
                        handleChange,
                        handleSubmit,
                    }) => {

                        return (
                            <form onSubmit={handleSubmit} className='form'>
                                <StyledContainer maxWidth='sm'>
                                    <Typography component='h1' variant='h2' align='center' color='textPrimary' gutterBottom>
                                        Publicar anúncio
                                    </Typography>
                                    <Typography component='h5' variant='h5' align='center' color='textPrimary'>
                                        Quanto mais detalhado, melhor!
                                    </Typography>
                                </StyledContainer>

                                <Container maxWidth='md' className='box-container'>
                                    <Box className='box'>
                                        <FormControl error={errors.title} fullWidth>
                                            <InputLabel className='input-label' >Titulo do anúncio </InputLabel>
                                            <Input
                                                variant="standard"
                                                name='title'
                                                value={values.title}
                                                onChange={handleChange}
                                                error={!!errors.title}
                                            />
                                            <FormHelperText>
                                                {errors.category}
                                            </FormHelperText>
                                        </FormControl>
                                        <br /><br />

                                        <FormControl error={errors.category} fullWidth>
                                            <InputLabel className='input-label' >Categoria</InputLabel>
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
                                                {errors.category}
                                            </FormHelperText>
                                        </FormControl>
                                    </Box>
                                </Container>

                                <Container className='box-container'>
                                    <Box className='box'>
                                        <Typography component='h6' variant='h6' color='textPrimary' gutterBottom >
                                            Imagens
                                        </Typography>
                                        <Typography component='div' variant='body2' color='textPrimary' >
                                            A primeira imagem é a foto principal do seu anúncio.
                                        </Typography>
                                        <Box className='thumbsContainer'>
                                            <Box className='dropzone'{...getRootProps()}>
                                                <input {...getInputProps()} />
                                                <Typography>
                                                    Clique para adicionar ou arraste a imagem para aqui.
                                                </Typography>
                                            </Box>
                                            {
                                                files.map((file, index) => (
                                                    <Box key={file.name} className='thumb' sx={{ backgroundImage: `url(${file.preview})` }}>
                                                        {
                                                            index === 0 ?
                                                                <Box className='mainImage' >
                                                                    <Typography variant='body2'>
                                                                        Principal
                                                                    </Typography>
                                                                </Box>
                                                                : null
                                                        }
                                                        <Box className='mask'>
                                                            <IconButton color='inherit' onClick={() => { handleRemoveFile(file.name) }}>
                                                                <DeleteForever fontSize='large' className='delete' />
                                                            </IconButton>
                                                        </Box>
                                                    </Box>
                                                ))
                                            }
                                        </Box>
                                    </Box>
                                </Container>
                                <Container className='box-container'>
                                    <Box className='box'>
                                        <FormControl error={errors.description} fullWidth>
                                            <InputLabel className='input-label' >Escreva os detalhes do que está vendendo.</InputLabel>
                                            <Input
                                                name='description'
                                                multiline
                                                rows={6}
                                                variant='outlined'
                                                onChange={handleChange}
                                            />
                                            <FormHelperText>
                                                {errors.description}
                                            </FormHelperText>
                                        </FormControl>
                                    </Box>
                                </Container>
                                <Container className='box-container'>
                                    <Box className='box'>
                                        <FormControl error={errors.price} fullWidth>
                                            <InputLabel className='input-label' >Preço de venda</InputLabel>
                                            <Input
                                                name='price'
                                                variant='outlined'
                                                onChange={handleChange}
                                                startAdornment={<InputAdornment position='start'>R$</InputAdornment>}
                                            />
                                            <FormHelperText>
                                                {errors.price}
                                            </FormHelperText>
                                        </FormControl>
                                       
                                    </Box>
                                </Container>

                                <Container className='box-container'>
                                    <Box className='box'>
                                        <Typography component='h6' variant='h6' color='textPrimary' gutterBottom >
                                            Dados de Contato
                                        </Typography>
                                        <Typography component='div' variant='body2' color='textPrimary' gutterBottom >
                                            Escreva os detalhes do que está vendendo.
                                        </Typography>
                                        <FormControl error={errors.name} fullWidth>
                                            <InputLabel className='input-label' >Nome</InputLabel>
                                            <Input
                                                variant="standard"
                                                name='name'
                                                value={values.name}
                                                onChange={handleChange}
                                                error={!!errors.name}
                                            />
                                            <FormHelperText>
                                                {errors.category}
                                            </FormHelperText>
                                        </FormControl>
                                        <br /><br />
                                        <FormControl error={errors.email} fullWidth>
                                            <InputLabel className='input-label' >E-mail</InputLabel>
                                            <Input
                                                variant="standard"
                                                name='email'
                                                value={values.email}
                                                onChange={handleChange}
                                                error={!!errors.email}
                                            />
                                            <FormHelperText>
                                                {errors.email}
                                            </FormHelperText>
                                        </FormControl>
                                        <br /><br />
                                        <FormControl error={errors.phone} fullWidth>
                                            <InputLabel className='input-label' >Telefone</InputLabel>
                                            <Input
                                                variant="standard"
                                                name='phone'
                                                value={values.phone}
                                                onChange={handleChange}
                                                error={!!errors.phone}
                                            />
                                            <FormHelperText>
                                                {errors.category}
                                            </FormHelperText>
                                        </FormControl>
                                    </Box>
                                </Container>
                                <Container maxWidth='md' className='box-container'>
                                    <Box textAlign='right'>
                                        <Button type='submit' variant='contained' color='primary' >
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