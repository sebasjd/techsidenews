import React, { useContext } from 'react'
import { ColorsCtx } from '../styles/Colors'
import { Button, ContactInput, Container, Label, TextArea } from '../styles/Inputs'
import { useFormik } from 'formik'
import axios from 'axios';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().trim().required('Required'),
  email: Yup.string().trim().email('invalid email format').required('Required'),
  message: Yup.string().trim().required('Required')
})

const Contact = () => {

  const { PrimaryStrong, NoWhite, PrimaryLight, PrimaryDark } = useContext(ColorsCtx)

  const { values, handleChange, handleSubmit, handleReset } = useFormik({
    initialValues: {
      name:'',
      phone: '',
      email: '',
      ref: '',
      message: ''
    },
    validationSchema,
    onSubmit: (values) => {
      axios.post('https://api.telegram.org/bot6006558775:AAFAZzhndvLph-uzxf1M5ut8qK7WtV8Lqz8/sendMessage', 
      {
        chat_id: 5582297042,
        text: `New form message:\n\n\nName:\n\n${values.name}\n\n\nPhone:\n\n${values.phone}\n\n\nEmail:\n\n${values.email}\n\n\nReference:\n\n${values.ref}\n\n\nMessage:\n\n${values.message}`
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
        <Label for="name" color2={PrimaryStrong}>Nombte y Apellido:</Label>
        <ContactInput type='text' 
          id='name'
          name='name' 
          value={values.name} 
          onChange={handleChange} 
          bc={PrimaryStrong} 
          bc2={PrimaryLight} 
          color={NoWhite} 
          color2={PrimaryStrong} 
        />
        <Label for="phone" color2={PrimaryStrong}>Teléfono:</Label>
        <ContactInput type='number' 
          id="phone"
          name='phone' 
          value={values.phone} 
          onChange={handleChange} 
          bc={PrimaryStrong} 
          bc2={PrimaryLight} 
          color={NoWhite} 
          color2={PrimaryStrong} 
        />
        <Label for='ref' color2={PrimaryStrong}>Referencia:</Label>
        <ContactInput  type='text' 
          id='ref'
          name='ref' 
          value={values.ref} 
          onChange={handleChange} 
          bc={PrimaryStrong} 
          bc2={PrimaryLight} 
          color={NoWhite} 
          color2={PrimaryStrong} 
        />
        <Label for='message' color2={PrimaryStrong}>Mensaje:</Label>
        <TextArea  type='text' 
          id='message'
          name='message' 
          value={values.message} 
          onChange={handleChange} 
          bc={PrimaryStrong} 
          bc2={PrimaryLight} 
          color={NoWhite} 
          color2={PrimaryStrong} 
        />
        <Button type='submit' 
          onSubmit={handleSubmit} 
          color={PrimaryDark} 
          bgc={PrimaryStrong}> Enviar 
        </Button>
      </Container>
    </>
  )
}

export default Contact