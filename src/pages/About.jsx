import React from 'react'
import { useContext } from 'react'
import { ColorsCtx } from '../styles/Colors'
import { Container, TextAbout } from '../styles/TextAbout'

const About = () => {

  const {NoWhite} = useContext(ColorsCtx)

  return (
    <>
      <Container>
        <TextAbout color={NoWhite}>
          {`      Tech Side News, es una plataforma digital de noticias relacionadas con el mundo de la tecnología.

      Esta idea fue llevada adelante con el objetivo de poner en práctica el uso de herramientas y conceptos aprendidos durante el cursado de la etapa de desarrollo Frontend del Bootcamp Full Stack Web dictado por NUCBA.
      En su código basado en JavaScript se puede apreciar la implementación de React.JS y varias librerías que lo complementan; como React Icons, API Context, Styled Component, React Router, Axios, Formik y Yup.
      Y conceptos como: modularización y especifisidad de los componentes, Props, Hooks y Hooks personalizados, manejo de eventos, DOM, Prog. orientada a Objetos, entre otros.

      El proyercto no se considera aún finalizado, ya que la intención de su desarrollador es continuar iterándolo implementando los nuevos conocimientos que se irán adquiriendo a lo largo de lo que resta del cursado del Bootcamp.
      Además de eso, la plataforma todavía no cuenta con el potencial de ser economicamente autosostenible, por lo que se buscará implementar espacios con publicidad y otras alternativas que puedan generar un rédito económico, y a su vez lograrlo sin perder de vista el objetivo de brindar una experiencia agradable al usuario, logrando que éste vuelva a utilizar la app, permanezca en ella el mayor tiempo posible e interactúe con la misma de la manera esperada. 

      Actualmente el proyecto se encuentra limitado al desarrollo Frontend, por los conocimientos adquiridos hasta el momento. Pero más adelante se agregará una ruta oculta que permitirá a los administradores de la web agregar nuevas noticias y publicidades, teniendo acceso a un editor de texto muy completo e intuitivo que tembién permitirá agregar imágenes al contenido.`}
        </TextAbout>
      </Container>
    </>
  )
}

export default About