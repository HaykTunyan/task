import React from "react";
import { useStep } from "react-hooks-helper";
import { Row, Col, Card, Button } from "antd";
import { useHistory } from "react-router-dom";
import LoginStepTwo from "./login-step-two/login-step-two";
import LoginStepOne from "./login-step-one/login-step-one";
import TableStepThree from "./table-step-three/table-step-three";

const steps = [
  { id: "stepOne" },
  { id: "stepTwo" },
  { id: "stepThree" },
];

export const StepForm = () => {

  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });

  const props = { navigation };

  let history = useHistory();

  function handleClick() {
    history.push("/table");
  }

  switch (step.id) {
    case "stepOne":
      return <LoginStepOne { ...props }/> ;
    case "stepTwo":
      return <LoginStepTwo {...props} />;
    case "stepThree":
      return <TableStepThree {...props} />;
    default:
      return (
        <Row>
          <Col span={12} offset={6}>
            <Card>
              <Button type="primary" htmlType="submit" onClick={handleClick}>
                Open Table
              </Button>
            </Card>
          </Col>
        </Row>
      );
  }
};
