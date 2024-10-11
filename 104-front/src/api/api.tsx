import axios, { AxiosInstance } from 'axios'

const DOMAIN = 'http://localhost:8000'

interface Token {
  accessTokem: string
}

const API = (token?: Token): AxiosInstance => {
  const instance: AxiosInstance = axios.create({
    baseURL: `${DOMAIN}/api`,
    headers: {
      Authorization: token ? `Bearer ${token.accessTokem}` : '',
    },
    withCredentials: true,
  })

  return instance
}

export default API
