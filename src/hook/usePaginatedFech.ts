import{ useEffect, useState } from 'react';
import * as _  from 'lodash';
import { typeSurveyProps } from '../types/type';

function usePaginatedFech({ url, pageSize }: typeSurveyProps) {
    const [loading, setLoding] = useState(true);
    const [data, setData] = useState([]);

    const getData = async () => {
        const response = await fetch(url);
        const data = await response.json();

        const paginatedData = _.chunk(data, pageSize);
        console.log(paginatedData);

        setData(paginatedData);
        setLoding(false);
    };

    useEffect(() => {
        getData();
    }, []);

    return [loading, data];
}

export default usePaginatedFech
