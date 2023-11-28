import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';

const RegistrationForm = () => {
  const initialValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object({
    username: Yup.string().required('Este campo es obligatorio'),
    email: Yup.string().email('Correo electrónico no válido').required('Este campo es obligatorio'),
    password: Yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres').required('Este campo es obligatorio'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir')
      .required('Este campo es obligatorio'),
  });

  const onSubmit = (values) => {
    // Aquí puedes manejar la lógica de envío del formulario
    console.log('Formulario enviado:', values);
  };

  return (
    <div className="container mt-5">
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form>
          <h1 className="mb-4">Registro de formulario</h1>

          <div className="mb-3">
            <label htmlFor="username" className="form-label">Nombre de usuario:</label>
            <Field type="text" id="username" name="username" className="form-control" />
            <ErrorMessage name="username" component="div" className="text-danger" />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Correo electrónico:</label>
            <Field type="text" id="email" name="email" className="form-control" />
            <ErrorMessage name="email" component="div" className="text-danger" />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Contraseña:</label>
            <Field type="password" id="password" name="password" className="form-control" />
            <ErrorMessage name="password" component="div" className="text-danger" />
          </div>

          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirmar contraseña:</label>
            <Field type="password" id="confirmPassword" name="confirmPassword" className="form-control" />
            <ErrorMessage name="confirmPassword" component="div" className="text-danger" />
          </div>

          <div>
            <button type="submit" className="btn btn-primary">Registrarme</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;

