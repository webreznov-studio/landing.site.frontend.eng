import React from 'react';
import axios from 'axios';
import {useQueryParam} from 'use-query-params';
import {QueryClient, QueryClientProvider, useQuery} from 'react-query';
import {Modal} from '../../components/AdminComponent/TableContacts/components/Modal';
import {Box, Text} from 'grommet';

const queryClient = new QueryClient();

export default function AppAdmModal() {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <ModalProvider />
            </QueryClientProvider>
        </>
    );
}

const ModalProvider = () => {
    const [id] = useQueryParam('id');

    const {data: contacts, isLoading} = useQuery('adm_getContactById', () =>
        axios.get(`http://localhost:8084/api/get/contacts/${id}`).then((res) => {
            return res.data;
        }),
    );

    return (
        <>
            {isLoading ? (
                <Box align='center'>
                    <Box width='500px' height='100vh' justify='center'>
                        <Text size='5xl'>Wait please...</Text>
                    </Box>
                </Box>
            ) : (
                <Modal data={contacts} />
            )}
        </>
    );
};
