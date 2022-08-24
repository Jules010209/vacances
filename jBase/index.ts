import { Axios } from 'axios';

interface arguments {
    id: string,
    url: string,
    password: string
}

export class WebBookAPI {
    constructor(public args?: arguments) {
        let axios = new Axios();

        axios.get(`${args?.url}?id=${args?.id}?pass=${args?.password}`).then(res => {
            console.log(`${args?.url}?id=${args?.id}?pass=${args?.password}`);
            console.log(res.data);
            return res.data;
        });
    };
}

new WebBookAPI({ id: '084084080', url: 'https://api.oxie.fr/webhook', password: 'esdsd/sd!' });