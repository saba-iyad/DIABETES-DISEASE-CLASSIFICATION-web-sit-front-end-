import React from 'react';
import { Form, Input } from 'antd';
import { useField } from 'formik';

function TextField({ label, placeholder, ...props }) {
  const [field, meta] = useField(props);

  return (
    <Form.Item
      hasFeedback
      validateStatus={meta.error && meta.touched ? 'error' : null}
      help={meta.error && meta.touched ? meta.error : null}
      label={label}
      labelCol={{ span: 24 }}
    >
      <Input
        {...field}
        {...props}
        placeholder={placeholder}
        iconRender={(visible) => (visible ? 'Hide' : 'Show')}
      />
    </Form.Item>
  );
}

export default TextField;
