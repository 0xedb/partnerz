import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { useFormik } from 'formik';
import ErrorMessage from './FormFieldError';

const validate = async (values) => {
  const errors = {};
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!values.email) errors.email = 'required';
  else if (!re.test(values.email.toLowerCase()))
    errors.email = 'invalid email address';
  return errors;
};

const SigninForm = () => {
  const [isSubmitting, setSubmitting] = useState(false);

  const formik = useFormik({
    initialValues: { email: '' },
    onSubmit: (values) => {
      console.log(values);
    }, validate
  });

  const handleSubmitAction = () => {
    formik.submitForm();
  };

  const getCodeButton = (
    <Button onClick={handleSubmitAction} type="link">
      login
    </Button>
  );

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Item>
        <Input
          name="email"
          type="email"
          placeholder="example@example.com"
          required
          {...formik.getFieldProps('email')}
          size="large"
          addonAfter={getCodeButton}
        />
        <ErrorMessage
          touched={formik.touched.email}
          error={formik.errors.email}
        />
      </Form.Item>
    </Form>
  );
};

export { SigninForm };
