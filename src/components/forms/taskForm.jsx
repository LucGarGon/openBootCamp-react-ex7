/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-alert */
/* eslint-disable no-promise-executor-return */
import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import Task from '../../models/task.model';

const taskSchema = Yup.object().shape(
  {
    name: Yup.string().required('El nombre de usuario es requerido'),
    description: Yup.string().required('Es necesario añadir descripción'),
    level: Yup.string().required('Es necesario selecionnar el nivel'),

  },
);

export default function TaskForm() {
  const initialTask = new Task();
  return (
    <div>
      <h4>
        Crear Tarea
      </h4>
      <Formik
        initialValues={
                initialTask
            }
        validationSchema={taskSchema}
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
              <label htmlFor="name">Nombre</label>
              <Field type="text" id="name" name="name" placeholder="name" />
              {
                     errors.name && touched.name && (
                     <div className="error">
                       <p>{errors.name}</p>
                     </div>
                     )
                                }
              <label htmlFor="descripcion">Descripcion</label>
              <Field type="text" id="descripcion" name="descripcion" placeholder="descripcion" />
              {
                     errors.description && touched.description && (
                     <div className="error">
                       <p>{errors.description}</p>
                     </div>
                     )
                                }
              <label htmlFor="nivel">Nivel</label>
              <Field type="text" id="nivel" name="nivel" placeholder="nivel" />
              {
                     errors.level && touched.level && (
                     <div className="error">
                       <p>{errors.level}</p>
                     </div>
                     )
                                }
              <button type="submit">Crear tarea</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
