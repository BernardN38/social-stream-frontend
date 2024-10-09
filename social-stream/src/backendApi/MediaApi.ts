import axios, { AxiosError } from "axios";
import imageCompression from "browser-image-compression";

export default class MediaApi {
    baseUrl: string;
    endpoint: string = "/api/v1/media";

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
    uploadMedia(payload: File) {
        let start = performance.now()
        let formData = new FormData();
        formData.set("description", "profile image")
        //
        const imageFile = payload;
        console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
        console.log(`originalFile size ${imageFile.size / 1024 / 1024} MB`);

        const options = {
            maxSizeMB: 30,
            maxWidthOrHeight: 1080,
            useWebWorker: true,
        }

        let compressedFile: File;
        if (payload.size > 10 * 1024 * 1024) {
            imageCompression(imageFile, options).then(result => {
                compressedFile = result
                console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                console.log(`compressedFile size ${result.size / 1024 / 1024} MB`); // smaller than maxSizeMB


                formData.set("image", payload)
                axios.post(`${this.baseUrl}${this.endpoint}/upload`, formData, { withCredentials: true }).then((resp) => {
                    console.log(resp.data)
                }).catch((e: AxiosError) => {
                    console.error(e.response)
                })
                let end = performance.now()
                console.log(end - start)
            }).catch(e => {
                console.error(e)
            });
        } else {
            formData.set("image", payload)
            axios.post(`${this.baseUrl}${this.endpoint}/upload`, formData, { withCredentials: true }).then((resp) => {
                console.log(resp.data)
            }).catch((e: AxiosError) => {
                console.error(e.response)
            })
        }

        //
    }
    // loginUser(payload: LoginPayload) {
    //     return axios.post(`${this.baseUrl}${this.endpoint}/login`, payload);
    // }
}