import 'antd/dist/antd.css'
import React, { useState } from 'react'
import { Form, Input, Button, notification, Alert } from 'antd'
import { useFormik } from 'formik'
import axios from 'axios';

  const handleSubmitAction = () => {
    notification.destroy(); 
     notification.info({
       message: 'Login Code',
       duration: 8,
       description: "The Login Code has been sent to your email",
       placement: 'topLeft', 
     })
  }

const getCodeButton =   <Button onClick={handleSubmitAction} type='link'>get code</Button>

const SigninForm = () => {  

  const formik = useFormik({
    initialValues: { email: '', code: '' },
    onSubmit: values => {
      console.log(values)
    }
  })

  

  return (
    <>
    <Form onSubmit={formik.handleSubmit}>
      <Form.Item>
        <Input
          id='email'
          type='email'
          placeholder='email'
          required
          onChange={formik.handleChange}
          size='large' 
          addonAfter={getCodeButton}
        />
      </Form.Item>
      <Form.Item>
        <Input
          id='code'
          type='text'
          placeholder='code' 
          onChange={formik.handleChange}
          size='large'
          required
        />
      </Form.Item>
      <Form.Item>
        <Input type='submit' value='Login' size='large' />
      </Form.Item>
    </Form>
    </>
  )
}

export { SigninForm }
