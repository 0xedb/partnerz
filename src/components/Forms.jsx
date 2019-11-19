import 'antd/dist/antd.css';import React, {useState} from 'react';
import {Form, Input, Icon} from 'antd';

 const LoginForm = (props) => {
   const [email, setEmail] = useState('kofi')
  const handleSubmit = event => {
    console.log (event);
  };
  const { getFieldDecorator } = props.form;
  return <Form onSubmit={handleSubmit}><Form.Item>
  {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your email!' }],
          })(
            <Input size="large"
              prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="email"
              value={email}
            />,
          )}
          <Form.Item>{<Input size='large' disabled type='text' placeholder='login code' />}</Form.Item>
          <Form.Item>{<Input size='large' type='submit' value="Get Code" />}</Form.Item>
  </Form.Item></Form>;
};

const SigninForm = Form.create({name: "login_form"})(LoginForm)

export {SigninForm};