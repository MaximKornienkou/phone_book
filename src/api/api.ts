import axios, {AxiosResponse} from "axios";

const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    withCredentials: true,
});

export const phoneBookApi = {
    getContacts() {
        return instance.get<AxiosResponse<GetContactsResponseType>>("users");
    }
}

export type GetContactsResponseType = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: UserAddress,
    phone: string,
    website: string,
    company: UserCompany,
}
export type UserAddress = {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: UserGeo,
}
export type UserGeo = {
    lat: string,
    lng: string,
}
export type UserCompany = {
    name: string,
    catchPhrase: string,
    bs: string,
}