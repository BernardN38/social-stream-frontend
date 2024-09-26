import axios, { Axios, AxiosError } from "axios";


export interface RegisterPayload {
    email: string,
    password: string,
    username: string,
    firstName: string,
    lastName: string,
    dob: string,
}
export interface LoginPayload {
    email: string,
    password: string,
}
export default class AuthApi {
    baseUrl: string;
    endpoint: string = "/api/v1/auth";

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    checkHealth() {
        axios.get(`${this.baseUrl}${this.endpoint}/health`).then((resp) => {
            console.log(resp.data)
        }).catch((e: AxiosError) => {
            console.error(e.response)
        })
    }
    registerUser(payload: RegisterPayload) {
        axios.post(`${this.baseUrl}${this.endpoint}/register`, payload).then((resp) => {
            console.log(resp.data)
        }).catch((e: AxiosError) => {
            console.error(e.response)
        })
    }
    loginUser(payload: LoginPayload) {
        axios.post(`${this.baseUrl}${this.endpoint}/login`, payload).then((resp) => {
            console.log(resp.data)
        }).catch((e: AxiosError) => {
            console.error(e.response)
        })
    }
}