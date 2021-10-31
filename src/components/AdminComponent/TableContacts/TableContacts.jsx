import React, {useEffect, useState} from 'react';
import {Grommet, Box, DataTable, Meter, Text, CheckBox} from 'grommet';
import {grommet} from 'grommet/themes';
import axios from 'axios';

const columns = [
    {
        property: 'create_date',
        header: <Text>Дата</Text>,
        primary: true,
        render: (data) => {
            const dateObj = new Date(+data.create_date);
            const month = dateObj.getUTCMonth() + 1; //months from 1-12
            const day = dateObj.getUTCDate();
            const year = dateObj.getUTCFullYear();

            return day + '.' + month + '.' + year;
        },
        size: 'xsmall',
    },
    {
        property: 'isRead',
        header: 'Отвечено',
        render: (data) => <CheckBox checked={data.isRead} />,
        size: 'xxsmall',
    },
    {
        property: 'client_name',
        header: 'Имя',
    },
    {
        property: 'another_contacts',
        header: 'Другой контакт',
    },
    {
        property: 'email',
        header: 'email',
    },
    {
        property: 'site_type',
        header: 'Тип заказа',
    },
];

export const TableContacts = () => {
    const [DATA, setDATA] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8084/api/email/get/all').then((res) => {
            setDATA(res.data);
        });
    }, []);

    return (
        <Box align='center' pad='60px 20px'>
            <DataTable
                background='light-3'
                resizeable={false}
                sortable={false}
                size='600'
                columns={columns}
                data={DATA}
                border={true}
                // pad={{"left": "large"}}
            />
        </Box>
    );
};
