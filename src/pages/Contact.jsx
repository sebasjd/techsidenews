import React, { useContext } from 'react'
import { ColorsCtx } from '../styles/Colors'
import { Button, ContactInput, Container, Label, TextArea } from '../styles/Inputs'
import { useFormik } from 'formik'
import axios from 'axios';

const Contact = () => {

  const { PrimaryStrong, NoWhite, PrimaryLight } = useContext(ColorsCtx)

  const { values, handleChange, handleSubmit, handleReset } = useFormik({
    initialValues: {
      name:'',
      phone: '',
      email: '',
      ref: '',
      msg: ''
    },
    onSubmit: (values) => {
      axios.post('https://api.telegram.org/bot6006558775:AAFAZzhndvLph-uzxf1M5ut8qK7WtV8Lqz8/sendMessage', 
      {
        chat_id: 5582297042,
        text: `Nuevo mensaje del formulario:\n\nName:\n${values.name}\n\nPhone:\n${values.phone}\n\nEmail:\n${values.email}\n\nReference:\n${values.ref}\n\nMessage:\n${values.msg}`
      })
      .then(
        handleReset()
      )
      .catch(error => {
        console.error(error);
      });
    }
  })



  return (
    <>
      <Container onSubmit={handleSubmit}>
        <Label color2={PrimaryStrong}>Nombte y Apellido:</Label>
        <ContactInput type='text' name='name' value={values.name} onChange={handleChange} bc={PrimaryStrong} bc2={PrimaryLight} color={NoWhite} color2={PrimaryStrong} />
        <Label color2={PrimaryStrong}>Teléfono:</Label>
        <ContactInput type='number' name='phone' value={values.phone} onChange={handleChange} bc={PrimaryStrong} bc2={PrimaryLight} color={NoWhite} color2={PrimaryStrong} />
        <Label color2={PrimaryStrong}>Correo Electrónico:</Label>
        <ContactInput  type='email' name='email' value={values.email} onChange={handleChange} bc={PrimaryStrong} bc2={PrimaryLight} color={NoWhite} color2={PrimaryStrong} />
        <Label color2={PrimaryStrong}>Referencia:</Label>
        <ContactInput  type='text' name='ref' value={values.ref} onChange={handleChange} bc={PrimaryStrong} bc2={PrimaryLight} color={NoWhite} color2={PrimaryStrong} />
        <Label color2={PrimaryStrong}>Mensaje:</Label>
        <TextArea  type='text' name='msg' value={values.msg} onChange={handleChange} bc={PrimaryStrong} bc2={PrimaryLight} color={NoWhite} color2={PrimaryStrong} />
        <Button type='submit' onSubmit={handleSubmit} color={NoWhite} bgc={PrimaryStrong}> Enviar </Button>
      </Container>
    </>
  )
}

export default Contact