import axios from 'axios';

export const deleteRequest = (id, queryClient) => {
    axios.delete(`http://localhost:8084/api/contacts/delete/${id}`).then((res) => {
        queryClient.invalidateQueries('adm_getAllContact');
    });
};

export const checkAsRead = (id) => {
    console.log('isRead', id);
};
