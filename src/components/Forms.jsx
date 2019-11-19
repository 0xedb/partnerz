import 'antd/dist/antd.css'
import React, { useState } from 'react'
import { Form, Input, Icon } from 'antd'
import { useFormik } from 'formik'

const SigninForm = () => {
  const [field, setField] = useState({field: 'email', text: 'Get Code'});

  const handleSubmitAction = () => {
    setField({field: 'code', text: 'Signin'})
  }

  const formik = useFormik({
    initialValues: { email: '', code: '' },
    onSubmit: values => {
      console.log(values)
    }
  })

  return (
    <>
    <Form onSubmit={formik.handleSubmit}>
      <Form.Item label='Email'>
        <Input
          id='email'
          type='email'
          placeholder='example@example.com'
          required
          onChange={formik.handleChange}
          size='large'
          disabled={field.field === 'email' ? false : true}
        />
      </Form.Item>
      <Form.Item>
        <Input
          id='code'
          type='text'
          placeholder='login code'
          disabled={field.field === 'code' ? false : true}
          onChange={formik.handleChange}
          size='large'
        />
      </Form.Item>
      <Form.Item>
        <Input type='submit' value={field.text} size='large' onClick={handleSubmitAction} />
      </Form.Item>
    </Form>
    </>
  )
}

export { SigninForm }
