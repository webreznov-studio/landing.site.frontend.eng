import React, {useState} from 'react';
import {Box, Button, Form, FormField, Text, TextInput} from 'grommet';
import axios from 'axios';

export const MoviesTab = () => {
    const [value, setValue] = useState({
        name: '',
        yaer: '',
        epics: '',
        duration: '',
        description: '',
        tag: '',
    });
    let message = value.name && value.email && value.name[0] !== value.email[0] ? 'Mismatched first character' : undefined;

    const resetHandler = () => {
        setValue({
            name: '',
            yaer: '',
            epics: '',
            duration: '',
            description: '',
            tag: '',
        });
    };

    const sendRecordToServer = (dataToServer) => {
        //дописать добавление нового фильма
        axios
            // .put('https://webreznov-portfolio.herokuapp.com/api/movies/write-file', {
            .put('http://localhost:8084/api/movies/write-file', {
                movies: dataToServer,
            })
            .then((res) => {
                resetHandler();
            })
            .catch(() => (message = 'Чет не сохранилось(('));
    };

    return (
        <Box fill align='center' justify='center'>
            <Box width='medium'>
                <Form value={value} onChange={(nextValue) => setValue(nextValue)} onSubmit={({value: nextValue}) => sendRecordToServer(nextValue)}>
                    <FormField label='Название' name='name' required>
                        <TextInput name='name' type='name' />
                    </FormField>

                    <FormField label='Год выхода' name='year' required>
                        <TextInput name='year' type='year' />
                    </FormField>

                    <FormField label='Жанр' name='epics' required>
                        <TextInput name='epics' type='epics' />
                    </FormField>

                    <FormField label='Продолжительность' name='duration' required>
                        <TextInput name='duration' type='duration' />
                    </FormField>

                    <FormField label='Отзыв' name='description' required>
                        <TextInput name='description' type='description' />
                    </FormField>

                    <FormField label='Хэштег' name='tag' required>
                        <TextInput name='tag' type='tag' />
                    </FormField>

                    {message && (
                        <Box pad={{horizontal: 'small'}}>
                            <Text color='status-error'>{message}</Text>
                        </Box>
                    )}

                    <Box direction='row' justify='between' margin={{top: 'medium'}}>
                        <Button type='reset' label='Reset' onClick={() => resetHandler()} />
                        <Button type='submit' label='Добавить' primary />
                    </Box>
                </Form>
            </Box>
        </Box>
    );
};
