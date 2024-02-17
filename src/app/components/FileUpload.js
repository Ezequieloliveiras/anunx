import { useDropzone } from 'react-dropzone'
import { DeleteForever } from '@mui/icons-material'

import {
    Box,
    IconButton,
    Typography
} from '@mui/material'


const FileUpload = ({files, errors, touched, setFieldValue}) => {
    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: (acceptFile) => {
            const newFiles = acceptFile.map(file => {
                return Object.assign(file, {
                    preview: URL.createObjectURL(file)
                })
            })

            setFieldValue('files', [
                ...files,
                ...newFiles])
        }
    })

    const handleRemoveFile = fileName => {
        const newFilesState = files.filter(file => file.path !== fileName)
        setFieldValue('files', newFilesState)
    }

    return (
        <>
            <Typography component='h6' variant='h6' color={errors && touched ? 'error' : 'textPrimary'} gutterBottom >
                Imagens
            </Typography>
            <Typography component='div' variant='body2' color={errors ? 'error' : 'textPrimary'} >
                A primeira imagem é a foto principal do seu anúncio.
            </Typography>
            {
                errors && touched
                    ? <Typography variant='body2' color='error' gutterBottom >{errors}</Typography>
                    : null
            }
            <Box className='thumbsContainer'>
                <Box className='dropzone'{...getRootProps()}>
                    <input name='files'{...getInputProps()} />
                    <Typography color={errors ? 'error' : 'textPrimary'}>
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
                                <IconButton color='inherit' onClick={() => { handleRemoveFile(file.path) }}>
                                    <DeleteForever fontSize='large' className='delete' />
                                </IconButton>
                            </Box>
                        </Box>
                    ))
                }
            </Box>
        </>
    )
}

export default FileUpload