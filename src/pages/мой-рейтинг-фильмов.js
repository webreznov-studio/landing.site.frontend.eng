import React, { useState } from 'react';
import {useQuery, useQueryClient, QueryClient, QueryClientProvider} from 'react-query';
import {Link} from 'gatsby';
import {Button, Card, CardBody, CardFooter, CardHeader, Grid, Main, RangeInput, RangeSelector, Spinner} from 'grommet';
import {Favorite, ShareOption} from 'grommet-icons';
import {getMoviesApi} from '../utils/api';

const queryClient = new QueryClient();

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <MoviesTop />
        </QueryClientProvider>
    );
}

const MoviesTop = () => {
    const {data: cards, isLoading} = useQuery('movies', getMoviesApi);

    const data = {
        arr: [
            {
                name: 'ОДНАЖДЫ В ГОЛЛИВУДЕ',
                yaer: '2019',
                epics: 'Комедия/Комедийная драма',
                duration: '2 ч 40 мин',
                description:
                    'И так, через 38 минут от начала фильма легче не стало. Скучный и непонятный фильмец. Ди Каприо играет роль актера, а его друг - его каскадер и водитель.',
                tag: 'япосмотрелэтотфильм',
            },
            {
                name: 'ОДНАЖДЫ В ГОЛЛИВУДЕ2',
                yaer: '2009',
                epics: 'Комедия/Комедийная драма',
                duration: '2 ч 40 мин',
                description:
                    'И так, через 38 минут от начала фильма легче не стало. Скучный и непонятный фильмец. Ди Каприо играет роль актера, а его друг - его каскадер и водитель.',
                tag: 'тыпосмотрелэтотфильм',
            },
        ],
    };

    
    const mapToClient = (dataServer) => {
        return dataServer.map((item) => (
            <TemplateCard item={item} />
        ));
    };

    return (
        <Main pad={'medium'}>
            <h1>MoviesTop</h1>
            <Link to={'/'}>На главную</Link>

            <Grid columns={'medium'}>{isLoading ? <Spinner size='xlarge' /> : mapToClient(data.arr)}</Grid>
        </Main>
    );
};

const TemplateCard = ({item}) => {
    const [range, setValue] = useState(3);
    const onChange = event => setValue(event.target.value);
    return (
        <Card width='medium' background='light-1' margin={'small'}>
                <CardHeader pad='medium'>
                    <strong>{item.name}</strong>
                    <div>
                        <span>{item.yaer}</span>
                        {' - '}
                        <span>{item.epics}</span>
                        {' - '}
                        <span>{item.duration}</span>
                    </div>
                </CardHeader>
                <CardBody pad='medium'>
                    <span>{item.description}</span>
                </CardBody>
                <CardBody pad='medium'>
                    <RangeInput
                        min={0}
                        max={10}
                        step={1}
                        values={range}
                        onChange={onChange}
                    />
                    {range}
                </CardBody>
                <CardFooter pad={{horizontal: 'small'}} background='light-2'>
                    <Button icon={<Favorite color='red' />} hoverIndicator />
                    <a href={`https://yandex.ru/search/?text=%23${item.tag}&lr=11`} target={'_blank'}>
                        #{item.tag}
                    </a>
                    <Button icon={<ShareOption color='plain' />} hoverIndicator />
                </CardFooter>
            </Card>
    )
}