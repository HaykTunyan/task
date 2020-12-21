import React from "react";
import { PageHeader, Button } from 'antd';
import { useHistory } from "react-router-dom";

const Header = () => {

  let history = useHistory();

  function usersClick() {
    history.push("/table");
  }

    return (
      <PageHeader
        ghost={false}
        title="Task"
        extra={[
          <Button key="1" type="primary" onClick={usersClick}>
            Users
          </Button>,
        ]}
      >
      </PageHeader>
    );
}

export default Header