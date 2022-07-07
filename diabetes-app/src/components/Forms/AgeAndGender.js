import { Button, Radio, Typography } from 'antd';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextField from '../Inputs/TextField';

function AgeAndGender({ handleChangeAgeAndGender, prevInfo, next, setStart }) {
  const validationSchema = Yup.object().shape({
    Gender: Yup.number().required('Gender is required'),
    AGE: Yup.number().required('Age is required'),
  });

  return (
    <>
      <Formik
        initialValues={{
          Gender: prevInfo.Gender,
          AGE: prevInfo.AGE,
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          handleChangeAgeAndGender(values);
          next();
        }}
      >
        {({ values, handleChange }) => (
          <Form>
            <div className='row my-2 justify-content-center'>
              <div className='col-md-12'>
                <TextField
                  name='AGE'
                  label='Age'
                  type='number'
                  placeholder='enter your age'
                />
              </div>
              <div className='col-md-12'>
                <Typography className='mb-2'>Gender</Typography>
                <Radio.Group
                  onChange={handleChange}
                  value={values.Gender}
                  name='Gender'
                  size='large'
                >
                  <Radio value={1}>Male</Radio>
                  <Radio value={2}>Female</Radio>
                </Radio.Group>
              </div>

              <div className='d-flex justify-content-end'>
                <Button className='mx-3' onClick={() => setStart(false)}>
                  Prev
                </Button>
                <Button
                  className='text-light'
                  style={{ backgroundColor: '#EF76A1' }}
                  htmlType='submit'
                >
                  Next
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default AgeAndGender;
