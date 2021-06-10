import request from '@/utils/request'

export function getList(query) {
    return request({
        url: '/api/external/base/v1/home/getrobots',
        method: 'get',
        params: query
    })
}