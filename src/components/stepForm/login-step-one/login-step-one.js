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
    </div>
  );
};

export default LoginStepOne;
