import { FormLogin } from './Components/FormLogin';
import { Formik } from "formik"
import './App.css'
import { useState } from 'react';
import * as Yup from 'yup';

function App() {
  const [loginFormDate, setLoginFormData] = useState({
      email: "",
      password: "",
      firstname: "",
      lastname: "",
  });

  const initialValues = {
      email: "",
      password: "",
      firstname: "",
      lastname: "",
  }

  const pwRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_=+[\]{}|;:'",.<>/?]).{8,}$/;
  const pwMatchError = "Entrez un mot de passe valide";
  const requiredFieldError = "Ce champs est requis";
  const validEmailError = "Entrez une adresse de courriel valide";
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const alphabetRegex = /^[A-Za-z]+$/;
  const alphabetValidationError = "Entrez seulement des caractères valides";

  const validationSchema = Yup.object({
    email: Yup.string().required(requiredFieldError).matches(emailRegex, validEmailError),
    password: Yup.string().required(requiredFieldError).matches(pwRegex, pwMatchError),
    firstname: Yup.string().required(requiredFieldError).matches(alphabetRegex, alphabetValidationError),
    lastname: Yup.string().required(requiredFieldError).matches(alphabetRegex, alphabetValidationError)
  })

  const onSubmit = (values) => {
    console.log(values);
    setLoginFormData(values);
  };

  return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} validateOnChange>
            <FormLogin  email={initialValues.email} 
                        password={initialValues.password} 
                        firstname={initialValues.firstname} 
                        lastname={initialValues.lastname}  />
        </Formik>
  )
}

export default App
