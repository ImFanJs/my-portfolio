import axios from 'axios'

export const getInfo = () => {
    return axios.get('/api/v1/myInfo')
}