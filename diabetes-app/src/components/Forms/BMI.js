import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextField from '../Inputs/TextField';
import MovingButtons from './../Buttons/MovingButtons';

function BMI({ handleChangeBMI, prevInfo, next, prev, setFinsihed }) {
  const validationSchema = Yup.object().shape({
    BMI: Yup.number().required('BMI is required'),
  });

  return (
    <>
      <Formik
        initialValues={{
          BMI: prevInfo.BMI,
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          handleChangeBMI(values);
          setFinsihed(true);
          next();
        }}
      >
        {() => (
          <Form>
            <div className='row my-2 justify-content-center'>
              <div className='col-md-12'>
                <TextField
                  name='BMI'
                  label='BMI'
                  type='number'
                  placeholder='enter your BMI'
                />
              </div>

              <div className='d-flex justify-content-end'>
                <MovingButtons submit='submit' prev={prev} />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default BMI;
