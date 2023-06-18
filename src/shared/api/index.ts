import Axios from 'axios'

const BASE_URL = 'https://api.sbercloud.ru/content/v1/bootcamp/frontend'

export const api = Axios.create({
    baseURL: BASE_URL,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
})