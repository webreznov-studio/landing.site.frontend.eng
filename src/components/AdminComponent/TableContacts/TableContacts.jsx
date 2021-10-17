import React, { useEffect, useState } from "react";
import { Grommet, Box, DataTable, Meter, Text, CheckBox } from "grommet";
import { grommet } from "grommet/themes";
import axios from "axios";

const columns = [
  {
    property: "createDate",
    header: <Text>Дата</Text>,
    primary: true,
    render: (data) => {
      const dateObj = new Date(data.createDate);
      const month = dateObj.getUTCMonth() + 1; //months from 1-12
      const day = dateObj.getUTCDate();
      const year = dateObj.getUTCFullYear();

      const newdate = day + "." + month + "." + year;
      return newdate;
    },
    size: "xsmall",
  },
  {
    property: "isRead",
    header: "Отвечено",
    render: (data) => <CheckBox checked={data.isRead} />,
    size: "xsmall",
  },
  {
    property: "name",
    header: "Имя",
  },
  {
    property: "phone",
    header: "Телефон",
  },
  {
    property: "email",
    header: "email",
  },
  {
    property: "description",
    header: "Заметки",
  },
];

export const TableContacts = () => {
  const [DATA, setDATA] = useState([]);

  /*
      var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();

newdate = year + "/" + month + "/" + day;
     */

  useEffect(() => {
    axios
      .get(
        "https://webreznov-portfolio.herokuapp.com/api/email/read-user-contact"
      )
      .then((res) => {
        setDATA(res.data);
      });
  }, []);

  return (
    <Box align="center">
      <DataTable
        background="light-3"
        resizeable={false}
        sortable={false}
        size="small"
        columns={columns}
        data={DATA}
        border={true}
        // pad={{"left": "large"}}
      />
    </Box>
  );
};
