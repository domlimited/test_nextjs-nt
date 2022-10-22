import http from "./http";

const getNews = async () => {
    const response = await http.get(`${process.env.NEXT_PUBLIC_BASE_API_URL}/news`);
    return response;
};

export { getNews };