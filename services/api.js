import http from './http';

const getVersion = async () => {
    const response = await http.get(`${process.env.NEXT_PUBLIC_BASE_API_URL}/version`);
    return response;
};

export { getVersion };