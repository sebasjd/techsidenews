import React, { useContext } from 'react'
import { ColorsCtx } from '../styles/Colors'
import { Button, Button2, ContactInput, Container, Label } from '../styles/Inputs'
import { useFormik } from 'formik'
import axios from 'axios';
import { Context } from '../utils/Context';
import { Modal } from '../styles/Modal-Title';


const Login = () => {

  const { PrimaryStrong, NoWhite, PrimaryLight, PrimaryDark, Gray } = useContext(ColorsCtx);
  const { showModal, setShowModal } = useContext(Context);
  

  const { values, handleChange, handleSubmit, handleReset, handleBlur } = useFormik({
    initialValues: {
      username:'',
      password: '',
    },
    onSubmit: async (values) => {
    try {
        const response = await axios.post('https://apitsn.vercel.app/api/login',
      {
      username: values.username,
      password: values.password 
      })
      if (response.data.message == 'success') {
        console.log(response)
        handleReset()
        setShowModal(true)
        setTimeout(()=> {
          setShowModal(false)
        }, 5000)
      }
    }
      catch (error) {
        console.log(error.response.data.message);
      };
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
        <Label htmlFor="password" color2={PrimaryStrong}>Contraseña:</Label>
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