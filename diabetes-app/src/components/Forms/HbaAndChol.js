import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextField from '../Inputs/TextField';
import MovingButtons from './../Buttons/MovingButtons';

function HbaAndChol({ handleChangeHbaAndChol, prevInfo, next, prev }) {
  const validationSchema = Yup.object().shape({
    HbA1c: Yup.number().required('HbA1C is required'),
    Chol: Yup.number().required('Chol is required'),
  });

  return (
    <>
      <Formik
        initialValues={{
          HbA1c: prevInfo.HbA1c,
          Chol: prevInfo.Chol,
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          handleChangeHbaAndChol(values);
          next();
        }}
      >
        {() => (
          <Form>
            <div className='row my-2 justify-content-center'>
              <div className='col-md-12'>
                <TextField
                  name='HbA1c'
                  label='HbA1C'
                  type='number'
                  placeholder='enter your HbA1C'
                />
              </div>
              <div className='col-md-12'>
                <TextField
                  name='Chol'
                  label='Chol'
                  type='number'
                  placeholder='enter your Chol'
                />
              </div>

              <div className='d-flex justify-content-end'>
                <MovingButtons prev={prev} />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default HbaAndChol;
