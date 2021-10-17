import React, { useState } from 'react';
import {useQuery, useQueryClient, QueryClient, QueryClientProvider} from 'react-query';
import {TableContacts} from '../components/AdminComponent/TableContacts';
import {Tab, Tabs} from 'grommet';
import {MoviesTab} from '../components/AdminComponent/MoviesTab/MoviesTab';
import {getMoviesApi} from '../utils/api';

const queryClient = new QueryClient();

export default function AppAdm() {
    return (
        <QueryClientProvider client={queryClient}>
            <IndexAdmin />
        </QueryClientProvider>
    );
}

const IndexAdmin = () => {
    const [index, setIndex] = useState();

    const onActive = nextIndex => setIndex(nextIndex);
    return (
        <div>
            <h1>Admin page</h1>
            <Tabs activeIndex={index} onActive={onActive}>
                <Tab title={'Movies add'}>
                    <MoviesTab />
                </Tab>
                <Tab title={'Table contacts'}>
                    <TableContacts />
                </Tab>
            </Tabs>
        </div>
    );
};
