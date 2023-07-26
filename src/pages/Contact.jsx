import React, { useContext } from 'react'
import { ColorsCtx } from '../styles/Colors'
import { Button, ContactInput, Container, ErrorMsg, Label, TextArea } from '../styles/Inputs'
import { useFormik } from 'formik'
import axios from 'axios';
import * as Yup from 'yup';
import { Context } from '../utils/Context';
import { Modal } from '../styles/Modal-Title';

const validationSchema = Yup.object({
  name: Yup.string().trim().required('Debe completar este campo'),
  phone: Yup.string().required('Debe completar este campo'),
  message: Yup.string().trim().required('Debe completar este campo')
})

const Contact = () => {

  const { PrimaryStrong, NoWhite, PrimaryLight, PrimaryDark } = useContext(ColorsCtx);
  const { showModal, setShowModal } = useContext(Context);

  const { values, handleChange, handleSubmit, handleReset, touched, handleBlur } = useFormik({
    initialValues: {
      name:'',
      phone: '',
      ref: '',
      message: ''
    },
    validationSchema,
    onSubmit: (values) => {
      axios.post('https://api.telegram.org/bot6006558775:AAFAZzhndvLph-uzxf1M5ut8qK7WtV8Lqz8/sendMessage', 
      {
        chat_id: 5582297042,
        text: `New form message:\n\n\n      Name:\n\n${values.name}\n\n\n      Phone:\n\n${values.phone}\n\n\n      Reference:\n\n${values.ref}\n\n\n      Message:\n\n${values.message}`
      })
      .then(
        handleReset(),
        setShowModal(true),
        setTimeout(()=> {
          setShowModal(false)
        }, 5000)
      )
      .catch(error => {
        console.error(error);
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
        El mensaje fue envaido vía Telegram, directo al Dev
      </Modal>}
      <Container onSubmit={handleSubmit}>
        <Label htmlFor="name" color2={PrimaryStrong}>Nombte y Apellido:</Label>
        <ContactInput type='text' 
          id='name'
          name='name' 
          value={values.name} 
          onChange={handleChange} 
          bc={PrimaryStrong} 
          bc2={PrimaryLight} 
          color={NoWhite} 
          color2={PrimaryStrong} 
          onBlur={handleBlur}
          autoComplete='off'
        />
        {touched.name && values.name === '' ? <ErrorMsg>* Este campo es obligatorio</ErrorMsg> : null}
        <Label htmlFor="phone" color2={PrimaryStrong}>Teléfono:</Label>
        <ContactInput type='number' 
          id="phone"
          name='phone' 
          value={values.phone} 
          onChange={handleChange} 
          bc={PrimaryStrong} 
          bc2={PrimaryLight} 
          color={NoWhite} 
          color2={PrimaryStrong} 
          onBlur={handleBlur}
          autoComplete='off'
        />
        {touched.phone && values.phone === '' ? <ErrorMsg>* Este campo es obligatorio</ErrorMsg> : null}
        <Label htmlFor='ref' color2={PrimaryStrong}>Referencia:</Label>
        <ContactInput  type='text' 
          id='ref'
          name='ref' 
          value={values.ref} 
          onChange={handleChange} 
          bc={PrimaryStrong} 
          bc2={PrimaryLight} 
          color={NoWhite} 
          color2={PrimaryStrong} 
          autoComplete='off'
        />
        <Label htmlFor='message' color2={PrimaryStrong}>Mensaje:</Label>
        <TextArea  type='text' 
          id='message'
          name='message' 
          value={values.message} 
          onChange={handleChange} 
          bc={PrimaryStrong} 
          bc2={PrimaryLight} 
          color={NoWhite} 
          color2={PrimaryStrong} 
          onBlur={handleBlur}
        />
        {touched.message && values.message === '' ? <ErrorMsg>* Este campo es obligatorio</ErrorMsg> : null}
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