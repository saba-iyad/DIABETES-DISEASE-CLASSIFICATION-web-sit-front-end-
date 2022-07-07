import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextField from '../Inputs/TextField';
import MovingButtons from '../Buttons/MovingButtons';

function TG({ handleChangTg, prevInfo, next, prev }) {
  const validationSchema = Yup.object().shape({
    VLDL: Yup.number().required('VLDL is required'),
    TG: Yup.number().required('TG is required'),
  });

  return (
    <>
      <Formik
        initialValues={{
          VLDL: prevInfo.VLDL,
          TG: prevInfo.TG,
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          handleChangTg(values);
          next();
        }}
      >
        {() => (
          <Form>
            <div className='row my-2 justify-content-center'>
              <div className='col-md-12'>
                <TextField
                  name='VLDL'
                  label='VLDL'
                  type='number'
                  placeholder='enter your VLDL'
                />
              </div>
              <div className='col-md-12'>
                <TextField
                  name='TG'
                  label='TG'
                  type='number'
                  placeholder='enter your TG'
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

export default TG;
