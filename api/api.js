import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export const API = axios.create({ baseURL: baseUrl, timeout: 15000 });
