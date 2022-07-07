import { useState } from 'react';
import { Card } from 'antd';
import { Steps, Divider } from 'antd';
import AgeAndGender from '../components/Forms/AgeAndGender';
import UreaAndCr from './../components/Forms/UreaAndCr';
import HbaAndChol from './../components/Forms/HbaAndChol';
import DlFamily from './../components/Forms/DlFamily';
import BMI from './../components/Forms/BMI';
import TG from './../components/Forms/TGAndVLDL';
import Results from './../components/Results';

function CardContainer({ setStart }) {
  const [current, setCurrent] = useState(0);
  const [finished, setFinsihed] = useState(false);

  const [ageAndGender, setAgeAndGender] = useState({
    AGE: '',
    Gender: '',
  });

  const [ureaAndCr, setUreaAndCr] = useState({
    Urea: '',
    Cr: '',
  });

  const [hbaAndChol, setHbaAndChol] = useState({
    HbA1c: '',
    Chol: '',
  });

  const [dlFamily, setDlFamily] = useState({
    HDL: '',
    LDL: '',
  });

  const [tg, setTg] = useState({
    VLDL: '',
    TG: '',
  });

  const [bmi, setBMI] = useState({
    BMI: '',
  });

  const handleChangeAgeAndGender = (values) => {
    setAgeAndGender({
      ...ageAndGender,
      ...values,
    });
  };

  const handleChangeUreaAndCr = (values) => {
    setUreaAndCr({
      ...ureaAndCr,
      ...values,
    });
  };

  const handleChangeHbaAndChol = (values) => {
    setHbaAndChol({
      ...hbaAndChol,
      ...values,
    });
  };

  const handleChangeDlFamily = (values) => {
    setDlFamily({
      ...dlFamily,
      ...values,
    });
  };

  const handleChangTg = (values) => {
    setTg({
      ...tg,
      ...values,
    });
  };

  const handleChangeBMI = (values) => {
    setBMI({
      ...bmi,
      ...values,
    });
  };

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const { Step } = Steps;

  const steps = [
    {
      title: 'Age And Gender',
      content: (
        <AgeAndGender
          handleChangeAgeAndGender={handleChangeAgeAndGender}
          prevInfo={ageAndGender}
          next={next}
          setStart={setStart}
        />
      ),
    },
    {
      title: 'Urea And Cr',
      content: (
        <UreaAndCr
          handleChangeUreaAndCr={handleChangeUreaAndCr}
          prevInfo={ureaAndCr}
          next={next}
          prev={prev}
        />
      ),
    },
    {
      title: 'HbA1C And Chol',
      content: (
        <HbaAndChol
          handleChangeHbaAndChol={handleChangeHbaAndChol}
          prevInfo={hbaAndChol}
          next={next}
          prev={prev}
        />
      ),
    },
    {
      title: 'LDL And HDL',
      content: (
        <DlFamily
          handleChangeDlFamily={handleChangeDlFamily}
          prevInfo={dlFamily}
          next={next}
          prev={prev}
        />
      ),
    },
    {
      title: 'TG And VLDL',
      content: (
        <TG
          handleChangTg={handleChangTg}
          prevInfo={tg}
          next={next}
          prev={prev}
        />
      ),
    },
    {
      title: 'BMI',
      content: (
        <BMI
          handleChangeBMI={handleChangeBMI}
          prevInfo={bmi}
          next={next}
          prev={prev}
          setFinsihed={setFinsihed}
        />
      ),
    },
  ];

  const Info = {
    ...ageAndGender,
    ...bmi,
    ...dlFamily,
    ...ureaAndCr,
    ...hbaAndChol,
    ...tg,
  };
  return (
    <>
      {!finished ? (
        <Card
          style={{ backgroundColor: '#F7F7F7' }}
          className='mx-3 mx-md-0 border mt-5 shadow'
          title={steps[current].title}
        >
          <Steps size='small' className='d-xl-block d-none' current={current}>
            {steps.map((item) => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
          <Divider className='d-xl-block d-none' />
          <div className='steps-content'>{steps[current].content}</div>
        </Card>
      ) : (
        <Results setStart={setStart} Info={Info} />
      )}
    </>
  );
}

export default CardContainer;
