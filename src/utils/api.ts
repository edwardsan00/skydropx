import axios from 'axios'

export type BaseAPI = {
  headers?: Record<string, string>
}

export type Get = {
  params?: Record<string, string>
} & BaseAPI

export type Post = {
  body: Record<string, any>
} & BaseAPI

export const baseURL = `${process.env.NEXT_APP_REST_API_LOCATION}${process.env.NEXT_APP_REST_API_VERSION}/`

const instance = axios.create({
  baseURL,
  // timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Token token=${process.env.NEXT_APP_REST_API_KEY}`,
  },
})

export const Post = async (endpoint: string, { body, headers }: Post) => {
  try {
    const result = await instance.post(endpoint, body, { headers })
    return await result.data
  } catch (err) {
    throw err
  }
}
