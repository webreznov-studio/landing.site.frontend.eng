import {useEffect} from 'react';

export function useSetDocumentTitle(titleName) {
    useEffect(() => {
        document.title = titleName;
    }, [titleName]);
}
