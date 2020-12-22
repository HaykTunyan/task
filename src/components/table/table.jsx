import React from "react";
import { Table } from "antd";
import { usersData } from "../../tableData/table";

const TableData = (pagination, filters, sorter, extra ) => {

  const columns = [
    {
      title: "First Name",
      dataIndex: "first_name",
      key: "name",
      sorter: (a, b) => a.first_name.localeCompare(b.first_name),
      sortDirections: ["descend", "ascend"],
      defaultSortOrder: "ascend",
    },
    {
      title: "Last Name",
      dataIndex: "last_name",
      key: "last_name",
      sorter: (a, b) => a.last_name.localeCompare(b.last_name),
      sortDirections: ["descend", "ascend"],
      defaultSortOrder: "ascend",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      sorter: (a, b) => a.email.localeCompare(b.email),
      sortDirections: ["descend", "ascend"],
      defaultSortOrder: "ascend",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
      filters: [
        { text: "Male", value: "Male" },
        { text: "Female", value: "Female" },
      ],
      onFilter: (value, record) => record.gender === value,
    },
    {
      title: "Department",
      dataIndex: "department",
      key: "department",
      sorter: (a, b) => a.department.localeCompare(b.department),
      sortDirections: ["descend", "ascend"],
      defaultSortOrder: "ascend",
    },
    {
      title: "Job Title",
      dataIndex: "job",
      key: "job",
      sorter: (a, b) => a.department.localeCompare(b.department),
      sortDirections: ["descend", "ascend"],
      defaultSortOrder: "ascend",
    },
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
    },
    {
      title: "City",
      dataIndex: "email",
      key: "email",
    },
  ];

  return (
    <div className="">
      <Table dataSource={usersData} columns={columns} />
    </div>
  );
};

export default TableData;
