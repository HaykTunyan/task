import React from "react";
import { useSelector } from "react-redux";
import { Button, Divider, Row, Col, Card } from "antd";
import { useHistory } from "react-router-dom";

const TableStepThree = ({ navigation, state }) => {
  const stateData = useSelector((state) => state.global.form);
  const stateDataTwo = useSelector((dataTwo) => dataTwo.global.formTwo);
  
  localStorage.setItem('document',JSON.stringify(stateData));

  let history = useHistory();

  function usersClick() {
    history.push("/table");
  }


  return (
    <Row>
      <Col span={12} offset={6}>
        <Card title="Card title">
        <Divider orientation="left"> User Info</Divider>
        <div className="flex-around"> 
            <span>Name :</span>
            <span> {stateData.state.name} </span>   
        </div>
        <Divider></Divider>
        <div className="flex-around">
          <span> LastName :</span>
          <span>  {stateData.state.lastName} </span>
        </div>
        <Divider></Divider>
        <div className="flex-around">
          <span> Email :</span>
          <span> {stateData.state.email} </span>
        </div>
        <Divider></Divider>
        <div className="flex-around">
          <span> Gender :</span>
          <span> {stateDataTwo.state.gender} </span>
        </div>
        <Divider></Divider>
        <div className="flex-around">
          <span> Department :</span>
          <span> {stateDataTwo.state.department}</span>
        </div>
        <Divider></Divider>
        <div className="flex-around">
          <span> Job :</span>
          <span> {stateDataTwo.state.job} </span>
        </div>
        <Divider></Divider>
        <div className="flex-around">
          <span> Country :</span>
          <span> {stateDataTwo.state.country} </span>
        </div>
        <Divider></Divider>
        <div className="flex-around">
          <span> Citry :</span>
          <span> {stateDataTwo.state.city} </span>
        </div>
        <Divider></Divider>
          <div className="flex-around">
            <Button type="default" onClick={usersClick}>
              Next
            </Button>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default TableStepThree;
