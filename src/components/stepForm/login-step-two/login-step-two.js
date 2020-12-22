import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerFormTwo } from "../../../redux/global.slice";
import { Card, Form, Input, Button, Row, Col } from "antd";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const LoginStepTwo = ({ navigation }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const loginInput = useSelector((state) => state.global.formTwo);
  const nextButton = ({ state }) => {
    dispatch(registerFormTwo({ state }));
    if (loginInput) {
      navigation.next();
      localStorage.setItem("Step Two Info", JSON.stringify(loginInput)  );
    }
  };

  return (
    <div className="">
      <Row>
        <Col span={12} offset={6}>
          <Card>
            <Form
              {...layout}
              name="basic"
              initialValues={{ remember: true }}
              onFinish={(values) => nextButton({ state: values })}
              form={form}
            >
              <Form.Item
                label="Gender"
                name="gender"
                rules={[
                  { required: true, message: "Please input your Gender!" },
                ]}
              >
                <Input autoComplete="off" type="text" />
              </Form.Item>
              <Form.Item
                label="Department"
                name="department"
                rules={[
                  { required: true, message: "Please input your Department!" },
                ]}
              >
                <Input autoComplete="off" type="text" />
              </Form.Item>
              <Form.Item
                label="Jog Title"
                name="job"
                rules={[
                  { required: true, message: "Please input your Job Title!" },
                ]}
              >
                <Input autoComplete="off" type="text" />
              </Form.Item>
              <Form.Item
                label="Country"
                name="country"
                rules={[
                  { required: true, message: "Please input your Country!" },
                ]}
              >
                <Input autoComplete="off" type="text" />
              </Form.Item>
              <Form.Item
                label="City"
                name="city"
                rules={[{ required: true, message: "Please input your city!" }]}
              >
                <Input autoComplete="off" type="text" />
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button type="default" onClick={() => navigation.previous()}>
                  Back
                </Button>
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

export default LoginStepTwo;
