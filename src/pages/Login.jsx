import React, { useContext } from 'react'
import { ColorsCtx } from '../styles/Colors'
import { Button, Button2, ContactInput, Container, ErrorMsg, Label } from '../styles/Inputs'
import { ErrorMessage, useFormik } from 'formik'
import axios from 'axios';
import * as Yup from 'yup';
import { Context } from '../utils/Context';
import { Modal } from '../styles/Modal-Title';

const validationSchema = Yup.object({
  username: Yup.string().trim().required('Debe completar este campo'),
  password: Yup.string().required('Debe completar este campo')/*.matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
  )*/,
  confirmPassword:Yup.string().oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir').required('Debe confirmar la contraseña'),
  email: Yup.string().email('Aquí debe ingresar un correo electrónico').required('Debe completar este campo'),
})

const Login = () => {

  const { PrimaryStrong, NoWhite, PrimaryLight, PrimaryDark, Gray } = useContext(ColorsCtx);
  const { showModal, setShowModal } = useContext(Context);

  const { values, handleChange, handleSubmit, handleReset, touched, handleBlur } = useFormik({
    initialValues: {
      username:'',
      password: '',
      confirmPassword:'',
      email:'',
    },
    validationSchema,
    onSubmit: async (values) => {
    const post = await axios.post('http://localhost:5000/api/createUser',
    {
    username: values.username,
    password: values.password
    }
    )
      .then(
        handleReset(),
        setShowModal(true),
        setTimeout(()=> {
          setShowModal(false)
        }, 5000)
      )
      .catch(error => {
        console.error("error", error);
      });
    }
  })


  return (
    <>
      {showModal && 
      <Modal
        bc={PrimaryStrong}
        color={PrimaryDark}
        showModal={showModal}
      > 
        Ingreso exitoso!
      </Modal>}
      <Container onSubmit={handleSubmit}>
        <Label htmlFor="username" color2={PrimaryStrong}>Nombre de usuario:</Label>
        <ContactInput type='text' 
          id='username'
          name='username' 
          value={values.username} 
          onChange={handleChange} 
          bc={PrimaryStrong} 
          bc2={PrimaryLight} 
          color={NoWhite} 
          color2={PrimaryStrong} 
          onBlur={handleBlur}
          autoComplete='off'
        />
        <Label htmlFor="password" color2={PrimaryStrong}>Nueva contraseña:</Label>
        <ContactInput type='password' 
          id="password"
          name='password' 
          value={values.password} 
          onChange={handleChange} 
          bc={PrimaryStrong} 
          bc2={PrimaryLight} 
          color={NoWhite} 
          color2={PrimaryStrong} 
          onBlur={handleBlur}
          autoComplete='off'
        />
        <Button type='submit' 
          onSubmit={handleSubmit} 
          color={PrimaryDark} 
          bgc={PrimaryStrong}> Entrar 
        </Button>
        <Button2
          to='newaccount'
          color={PrimaryLight} 
          bgc={Gray}>Crear nueva cuenta 
        </Button2>

      </Container>
    </>
  )
}

export default Login