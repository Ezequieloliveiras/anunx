import { styled } from '@mui/system'
import { useDropzone } from 'react-dropzone'
import { DeleteForever } from '@mui/icons-material'

import {
    Box,
    IconButton,
    Typography
} from '@mui/material'

const StyledBox = styled('box')({
    position: 'absolute',
    display: 'flex',
    color: 'rgb(0, 0, 0, 0.0)',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: '100%',
    width: '100%',

    '&:hover': {
        backgroundColor: 'rgb(0, 0, 0, 0.7)',
        display: 'flex',
        color: 'white'
    },
})

const FileUpload = ({ files, errors, touched, setFieldValue }) => {
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
            <Typography component='div' variant='body2' color={errors ? 'error' : 'textPrimary'} gutterBottom >
                A primeira imagem é a foto principal do seu anúncio.
            </Typography>
            {
                errors && touched
                    ? <Typography variant='body2' color='error' gutterBottom >{errors}</Typography>
                    : null
            }
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    padding:'0px'
                }}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        width: '200px',
                        height: '150px',
                        backgroundColor: 'rgb(242, 244, 245)',
                        border: '2px dashed black',
                        marginRight:'10px'

                    }}{...getRootProps()}>
                    <input name='files'{...getInputProps()} />
                    <Typography color={errors ? 'error' : 'textPrimary'}>
                        Clique para adicionar ou arraste a imagem para aqui.
                    </Typography>
                </Box>
                {
                    files.map((file, index) => (
                        <Box key={file.path}
                            sx={{
                                position: 'relative',
                                backgroundImage: `url(${file.preview})`,
                                width: '200px',
                                height: '150px',
                                backgroundSize: 'cover',
                                margin: '0 10px 10px 0',
                                backgroundPosition: 'center',
                                '&:hover': {
                                    display: 'flex',
                                },
                            }}>
                            {
                                index === 0 ?
                                    <Box sx={{
                                        backgroundColor: 'blue',
                                        padding: '6px 10px',
                                        position: 'absolute',
                                        color: '#ffffff',
                                        bottom: 0,
                                        left: 0,
                                    }} >
                                        <Typography variant='body2'>
                                            Principal
                                        </Typography>
                                    </Box>
                                    : null
                            }
                            <StyledBox>
                                <IconButton color='inherit' onClick={() => { handleRemoveFile(file.path) }}>
                                    <DeleteForever fontSize='large' />
                                </IconButton>
                            </StyledBox>

                        </Box>
                    ))
                }
            </Box >
        </>
    )
}

export default FileUpload