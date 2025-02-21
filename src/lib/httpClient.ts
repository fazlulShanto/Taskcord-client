import axios from "axios";
import { getBaseApiUrl } from "./api";

export const apiBaseURL = getBaseApiUrl();

export default function getAxiosClient() {
    const AxiosClient = axios.create({
        baseURL: apiBaseURL,
        timeout: 20 * 1000,
        withCredentials: true,
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
        },
    });
    return AxiosClient;
}

export const HttpClient = getAxiosClient();
