import * as yup from 'yup'

const initialValues = {
  name: '',
  email: '',
  password: '',
}

const validationSchema = yup.object().shape({
  name: yup.string().required('Campo obrigatório'),
  email: yup.string().email('Digite um e-mail válido').required('Campo obrigatório'),
  password: yup.string().required('Campo obrigatório'),
})

export {
  initialValues,
  validationSchema,
}