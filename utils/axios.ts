import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import { CharacterResponse } from "@/types/Character";

const config: AxiosRequestConfig = {
    baseURL:  process.env.NEXT_PUBLIC_API_BASE_URL,
    timeout: 10000,
    params: {
        apikey: process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY
    }
}

const client: AxiosInstance = axios.create(config);

export interface Response extends AxiosResponse {
    data: CharacterResponse;
}

export default client;