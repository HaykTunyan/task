import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerForm } from "../../../redux/global.slice";
import { Card, Form, Input, Button, Row, Col } from "antd";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const LoginStepOne = ({ navigation }) => {
  const [state, setState] = useState({
    name: "",
    lastName: "",
    email: "",
  });

  const [login, setLogin] = useState(false);
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const loginInput = useSelector((state) => state.global.form);
  console.log("logggggg", loginInput);

  const nextButton = ({ state }) => {
    dispatch(registerForm({ state }));
    if (loginInput) {
      navigation.next();
    }
  };

  return (
    <div className="login_step_one">
      <Row>
        <Col span={12} offset={6}>
          <Card>
            <Form
              {...layout}
              onFinish={(values) => nextButton({ state: values })}
              name="basic"
              initialValues={{ remember: true }}
              form={form}
            >
              <Form.Item
                label="First Name"
                name="name"
                rules={[
                  { required: true, message: "Please input your Gender!" },
                ]}
              >
                <Input type="text" autoComplete="off" />
              </Form.Item>
              <Form.Item
                label="Last Name"
                name="lastName"
                rules={[
                  { required: true, message: "Please input your Department!" },
                ]}
              >
                <Input type="text" autoComplete="off" />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please input your Department!" },
                ]}
              >
                <Input autoComplete="off" type="text" />
              </Form.Item>
              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  Next
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
      {/*         
      {loginInput ? (
        <TableStepFour />
      ) : (
        <div>
          <Row>
          <Col span={12} offset={6}>
            <Card>
              <Form
                {...layout}
                onFinish={values=> nextButton({ state:values })}
                name="basic"
                initialValues={{ remember: true }}
                form={form}
              >
                <Form.Item
                  label="First Name"
                  name="name"
                  rules={[
                    { required: true, message: "Please input your Gender!" },
                  ]}
                >
                  <Input 
                    type="text" 
                    autoComplete="off" 
                  />
                </Form.Item>
                <Form.Item
                  label="Last Name"
                  name="lastName"
                  rules={[
                    { required: true, message: "Please input your Department!" },
                  ]}
                >
                  <Input
                  type="text"  
                   autoComplete="off"
                  />
                </Form.Item>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: "Please input your Department!" },
                  ]}
                >
                  <Input 
                 
                     autoComplete="off" type="text" />
                </Form.Item>
                <Form.Item {...tailLayout}>
                  
                  <Button type="primary" htmlType="submit" onClick={ () => navigation.next() } >
                 
                    Next
                  </Button>
                  
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={state.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Lastname"
            value={state.lastName}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={state.email}
            onChange={handleChange}
          />
          <div
            className="login_step_one_button"
            onClick={() => nextButton( {state} )}
          >
            Next
          </div>
        </div>

      )} */}
    </div>
  );
};

export default LoginStepOne;
