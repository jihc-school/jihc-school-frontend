import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useFetchResult = (filters) => {
    return useQuery({
        queryKey: ['results', filters],
        queryFn: async () => {
            
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/get-view-results`, {
                params: filters
            });
            return data.data;
        },
        enabled: !!filters.className && !!filters.examName && !!filters.academicYear,
    });
};

export default useFetchResult;