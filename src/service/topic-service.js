import { API } from '../constants/api'

export const getTopics = (params = {}) => {
    return fetch(API.TOPICS_LIST, { method: 'GET', params })
        .then((res) => res.json())
}

export const getTopic = (id, params = {}) => {
    return fetch(API.TOPIC.replace(':id', id), { method: 'GET', params })
        .then((res) => res.json())
}
