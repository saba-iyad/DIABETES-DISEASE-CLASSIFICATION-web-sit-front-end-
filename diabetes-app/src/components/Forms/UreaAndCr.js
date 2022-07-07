import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextField from '../Inputs/TextField';
import MovingButtons from './../Buttons/MovingButtons';

function UreaAndCr({ handleChangeUreaAndCr, prevInfo, next, prev }) {
  const validationSchema = Yup.object().shape({
    Urea: Yup.number().required('Urea is required'),
    Cr: Yup.number().required('Cr is required'),
  });

  return (
    <>
      <Formik
        initialValues={{
          Urea: prevInfo.Urea,
          Cr: prevInfo.Cr,
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          handleChangeUreaAndCr(values);
          next();
        }}
      >
        {() => (
          <Form>
            <div className='row my-2 justify-content-center'>
              <div className='col-md-12'>
                <TextField
                  name='Urea'
                  label='Urea'
                  type='number'
                  placeholder='enter your Urea'
                />
              </div>
              <div className='col-md-12'>
                <TextField
                  name='Cr'
                  label='Cr'
                  type='number'
                  placeholder='enter your Cr'
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

export default UreaAndCr;
