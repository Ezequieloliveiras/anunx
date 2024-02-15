"use client"
import { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { styled } from '@mui/system'
import { DeleteForever } from '@mui/icons-material'

import {
    Box, Button,
    Container,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Select,
    TextField,
    Typography
} from '@mui/material'

import TemplateDefault from '../../../templates/Default'
import '../../../globals.scss'

const StyledContainer = styled(Container)(({ theme }) => ({
    padding: theme.spacing(8, 0, 4),
}))


const Publish = () => {
    const [files, setFile] = useState([])

    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/img',
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
            <StyledContainer maxWidth='sm'>
                <Typography component='h1' variant='h2' align='center' color='textPrimary' gutterBottom className='teste'>
                    Publicar anúncio
                </Typography>
                <Typography component='h5' variant='h5' align='center' color='textPrimary'>
                    Quanto mais detalhado, melhor!
                </Typography>
            </StyledContainer>
            <Container maxWidth='md'>
                <Box className='box'>
                    <Typography component='h6' variant='h6' color='textPrimary' gutterBottom >
                        Titulo do anúncio
                    </Typography>
                    <TextField
                        label='ex: Bicicleta Aro 18 com garantia'
                        size='small'
                        fullWidth
                    />

                    <br /><br />
                    <Typography component='h6' variant='h6' color='textPrimary' gutterBottom >
                        Categoria
                    </Typography>
                    <Select
                        native
                        value=''
                        fullWidth
                        onChange={() => { }}
                        inputProps={{
                            name: 'age',
                        }}
                    >
                        <option value=''>Selecione</option>
                        <option value={1}>Bebê e Criança</option>
                        <option value={2}>Agriculturta</option>
                        <option value={3}>Moda</option>
                        <option value={3}>Carros, Motos e Barcos</option>
                        <option value={3}>Serviços</option>
                        <option value={3}>Lazer</option>
                        <option value={3}>Animais</option>
                        <option value={3}>Moveis, Casa e Jardim</option>
                        <option value={3}>Imóveis</option>
                        <option value={3}>Equipamentos e Ferramentas</option>
                        <option value={3}>Celulares e Tablets</option>
                        <option value={3}>Esporte</option>
                        <option value={3}>Tecnologia</option>
                        <option value={3}>Emprego</option>
                        <option value={3}>Outros</option>
                    </Select>
                </Box>
            </Container>
            <Container className='boxContainer'>
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
                                <Box className='thumb' sx={{ backgroundImage: `url(${file.preview})` }}>
                                    {
                                        index === 0 ?
                                            <Box key={file.name} className='mainImage' >
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
            <Container className='boxContainer'>
                <Box className='box'>
                    <Typography component='h6' variant='h6' color='textPrimary' gutterBottom >
                        Descrição
                    </Typography>
                    <Typography component='div' variant='body2' color='textPrimary' gutterBottom >
                        Escreva os detalhes do que está vendendo.
                    </Typography>
                    <TextField
                        multiline
                        rows={6}
                        variant='outlined'
                        fullWidth
                    />
                </Box>
            </Container>
            <Container className='boxContainer'>
                <Box className='box'>
                <Typography component='h6' variant='h6' color='textPrimary' gutterBottom >
                        Preço
                    </Typography>
                    <br/>
                    <FormControl fullWidth variant='outlined'>
                    <InputLabel htmlFor="outlined-adornment-amount">Valor</InputLabel>
                        <OutlinedInput 
                            onChange={() => {}}
                            startAdornment={<InputAdornment position='start'>R$</InputAdornment>}
                            labelWidth={40}
                            label="Valor"
                        />
                    </FormControl>
                </Box>
            </Container>

            <Container className='boxContainer'>
                <Box className='box'>
                    <Typography component='h6' variant='h6' color='textPrimary' gutterBottom >
                        Dados de Contato
                    </Typography>
                    <Typography component='div' variant='body2' color='textPrimary' gutterBottom >
                        Escreva os detalhes do que está vendendo.
                    </Typography>
                    <TextField
                        label='Nome'
                        variant='outlined'
                        size='small'
                        fullWidth
                    />
                    <br /><br />
                    <TextField
                        label='E-mail'
                        variant='outlined'
                        size='small'
                        fullWidth
                    />
                    <br /><br />
                    <TextField
                        label='Telefone'
                        variant='outlined'
                        size='small'
                        fullWidth
                    />
                </Box>
            </Container>
            <Container maxWidth='md' className='boxContainer'>
                <Box textAlign='right'>
                    <Button variant='contained' color='primary'>
                        Publicar Anúncio
                    </Button>
                </Box>
            </Container>

        </TemplateDefault>
    )
}

export default Publish