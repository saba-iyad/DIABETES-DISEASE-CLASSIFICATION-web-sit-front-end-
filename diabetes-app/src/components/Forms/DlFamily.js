import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextField from '../Inputs/TextField';
import MovingButtons from '../Buttons/MovingButtons';

function DlFamily({ handleChangeDlFamily, prevInfo, next, prev }) {
  const validationSchema = Yup.object().shape({
    HDL: Yup.number().required('HDL is required'),
    LDL: Yup.number().required('LDL is required'),
  });

  return (
    <>
      <Formik
        initialValues={{
          HDL: prevInfo.HDL,
          LDL: prevInfo.LDL,
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          handleChangeDlFamily(values);
          next();
        }}
      >
        {() => (
          <Form>
            <div className='row my-2 justify-content-center'>
              <div className='col-md-12'>
                <TextField
                  name='HDL'
                  label='HDL'
                  type='number'
                  placeholder='enter your HDL'
                />
              </div>
              <div className='col-md-12'>
                <TextField
                  name='LDL'
                  label='LDL'
                  type='number'
                  placeholder='enter your LDL'
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

export default DlFamily;
