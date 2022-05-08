/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-alert */
/* eslint-disable no-promise-executor-return */
import { Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape(
  {
    email: Yup.string().email('Invalid email format').required(),
    password: Yup.string().required('Password is required'),
  },
);
export default function LoginFormik() {
  const initialCredentials = {
    email: '',
    password: '',
  };
  return (
    <div>
      <h4>Login Formik</h4>
      <Formik
        initialValues={
            initialCredentials
        }
        validationSchema={loginSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        { (props) => {
          const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
          } = props;
          return (
            <Form>
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" placeholder="email" />
              {
                  errors.email && touched.email && (
                  <div className="error">
                    <p>{errors.email}</p>
                  </div>
                  )
              }
              <label htmlFor="password">Password</label>
              <Field
                id="password"
                name="password"
                placeholder="password"
                type="password"
              />
              {
                  errors.password && touched.password && (
                  <div className="error">
                    <p>{errors.password}</p>
                  </div>
                  )
              }
              <button type="submit">Login</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
