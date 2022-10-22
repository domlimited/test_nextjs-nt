import http from './http';

const getProduct = async () => {
    const response = await http.get(`${process.env.NEXT_PUBLIC_BASE_API_URL}/course`);
    return response;
};

export { getProduct };