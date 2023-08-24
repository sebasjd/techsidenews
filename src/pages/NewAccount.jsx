import React, { useContext } from 'react'
import { ColorsCtx } from '../styles/Colors'
import { Button, ContactInput, Container, ErrorMsg, Label } from '../styles/Inputs'
import { useFormik } from 'formik'
import axios from 'axios';
import * as Yup from 'yup';
import { Context } from '../utils/Context';
import { Modal } from '../styles/Modal-Title';
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object({
  password: Yup.string().required('2Debe completar este campo').min(8, 'At least 8 characters'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir').required('Debe confirmar la contraseña'),
  email: Yup.string().email('Aquí debe ingresar un correo electrónico').required('3Debe completar este campo'),
  username: Yup.string().trim().required('1Debe completar este campo'),
})


const NewAccount = () => {

  const { PrimaryStrong, NoWhite, PrimaryLight, PrimaryDark } = useContext(ColorsCtx);
  const { showModal, setShowModal } = useContext(Context);
  const navigate = useNavigate();

  const { values, handleChange, handleSubmit, handleReset, touched, handleBlur } = useFormik({
    initialValues: {
      username:'',
      password: '',
      confirmPassword:'',
      email:'',
    },
    validationSchema,
    onSubmit: async (values) => {
      
    await axios.post('https://apitsn.vercel.app/api/register',
    {
      username: values.username,
      email: values.email,
      password: values.password
    }
    )
    .then(
      handleReset(),
      navigate('https://techsidenews.vercel.app/login'),
      setShowModal(true),
        setTimeout(()=> {
          setShowModal(false)
        }, 5000)
      )
      .catch(error => {
        console.log(error.message);
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
        El registro fue exitoso!
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
        {touched.username && values.username === '' ? <ErrorMsg>* Este campo es obligatorio</ErrorMsg> : null}
        <Label htmlFor="email" color2={PrimaryStrong}>Correo electrónico:</Label>
        <ContactInput type='text' 
          id='email'
          name='email' 
          value={values.email} 
          onChange={handleChange} 
          bc={PrimaryStrong} 
          bc2={PrimaryLight} 
          color={NoWhite} 
          color2={PrimaryStrong} 
          onBlur={handleBlur}
          autoComplete='off'
        />
        {touched.email && values.email === '' ? <ErrorMsg>* Este campo es obligatorio </ErrorMsg> : null}
        {touched.email && values.email !== '' && !values.email.includes("@" && ".") ? <ErrorMsg>* Debe ser un correo electrónico </ErrorMsg> : null}
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
        {touched.password && values.password === '' ? <ErrorMsg>* Este campo es obligatorio</ErrorMsg> : null}
        {touched.password && values.password.length < 8 ? <ErrorMsg>* Debe contener al menos 8 caracteres</ErrorMsg> : null}
        <Label htmlFor="confirmPassword" color2={PrimaryStrong}>Repetir contraseña:</Label>
        <ContactInput type='password' 
          id="confirmPassword"
          name='confirmPassword' 
          value={values.confirmPassword} 
          onChange={handleChange} 
          bc={PrimaryStrong} 
          bc2={PrimaryLight} 
          color={NoWhite} 
          color2={PrimaryStrong} 
          onBlur={handleBlur}
          autoComplete='off'
        />
        {touched.confirmPassword && values.confirmPassword === '' ? <ErrorMsg>* Este campo es obligatorio</ErrorMsg> : null}
        {values.confirmPassword !== '' && values.confirmPassword !== values.password? <ErrorMsg>* Este campo debe coincidir con el anterior </ErrorMsg> : null}
        <Button type='submit' 
          onSubmit={handleSubmit} 
          color={PrimaryDark} 
          bgc={PrimaryStrong}> Registrar 
        </Button>
      </Container>
    </>
  )
}

export default NewAccount