import React from 'react';
import {useSetDocumentTitle} from '../../../../../utils/helpers';
import {ModalWindow, ModalWrapper} from './styled';

export const Modal = ({data}) => {
    const {
        createDate,
        siteType,
        siteExsistUrl,
        clientName,
        email,
        contacts,
        exampleSitesUrls,
        functionOfSite,
        designSite,
        regionAudit,
        anotherContacts,
        auditorsSite,
    } = data;

    useSetDocumentTitle(`Request: ${clientName || 'no name'}`);

    const formatDate = (time) => {
        const dateObj = new Date(+time);
        const month = dateObj.getUTCMonth() + 1; //months from 1-12
        const day = dateObj.getUTCDate();
        const year = dateObj.getUTCFullYear();

        return day + '.' + month + '.' + year;
    };

    return (
        <ModalWrapper>
            <ModalWindow>
                <p>
                    <strong>createDate:</strong> {formatDate(createDate)}
                </p>
                <p>
                    <strong>siteType:</strong> {siteType}
                </p>
                <p>
                    <strong>clientName:</strong> {clientName}
                </p>
                <p>
                    <strong>email:</strong> {email}
                </p>
                <p>
                    <strong>contacts:</strong> {contacts}
                </p>
                <p>
                    <strong>siteExsistUrl:</strong> {siteExsistUrl}
                </p>
                <p>
                    <strong>exampleSitesUrls:</strong> {exampleSitesUrls}
                </p>
                <p>
                    <strong>functionOfSite:</strong> {functionOfSite}
                </p>
                <p>
                    <strong>designSite:</strong> {designSite}
                </p>
                <p>
                    <strong>regionAudit:</strong> {regionAudit}
                </p>
                <p>
                    <strong>anotherContacts:</strong> {anotherContacts}
                </p>
                <p>
                    <strong>auditorsSite:</strong> {auditorsSite}
                </p>
            </ModalWindow>
        </ModalWrapper>
    );
};
