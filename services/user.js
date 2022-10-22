import http from './http';
import useSWR from "swr";

const getUserAxios = async () => {
    const response = await http.get(`/api/user`);
    return response;
};
export { getUserAxios };

const UseUserSWR = () => {
    const { data,error } = useSWR(`/api/user`);
    // console.log(data);
    return {
        user: data,
        loading: !error && !data,
        error: error
    }
}
export { UseUserSWR };


