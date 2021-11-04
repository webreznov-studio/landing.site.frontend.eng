import React from 'react';
import {Box, DataTable, Text, Button} from 'grommet';
import axios from 'axios';
import {useSetDocumentTitle} from '../../../utils/helpers';
import {checkAsRead, deleteRequest} from './api';
import {useQuery, useQueryClient} from 'react-query';

export const TableContacts = () => {
    useSetDocumentTitle('Requests development');
    const queryClient = useQueryClient();

    const {data: DATA} = useQuery('adm_getAllContact', () =>
        axios.get(`http://localhost:8084/api/email/get/all`).then((res) => {
            return res.data;
        }),
    );

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
            property: 'client_name',
            header: 'Имя',
            render: (d) => (
                <a href={`/adm/modal?id=${d.id}`} target='_blank' rel='noreferrer'>
                    {d.client_name}
                </a>
            ),
            size: 'small',
        },
        {
            property: 'site_type',
            header: 'Тип заказа',
            size: 'small',
        },
        {
            property: 'isRead',
            header: 'Действия',
            render: (data) => {
                return (
                    <Box direction='row' justify='around' align='center' pad='small'>
                        <Button label='Прочитано' onClick={() => checkAsRead(data.id)} size='small' style={{display: 'inline-block'}} />
                        <Button
                            primary
                            label='Удалить'
                            onClick={() => deleteRequest(data.id, queryClient)}
                            size='small'
                            style={{display: 'inline-block'}}
                        />
                    </Box>
                );
            },
            size: 'medium',
        },
    ];

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
            />
        </Box>
    );
};
