import request from '@/utils/request'
import qs from 'qs'

export function login(data) {
    return request({
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        url: '/api/userservice/auth/login_by_cellphone',
        method: 'post',
        data: qs.stringify(data)
    })
}

export function getInfo() {
    return request({
        url: '/api/userservice/admin/user_local_auth/v1/info',
        method: 'get',
    })
}

export function logout() {
    return request({
        url: '/api/userservice/auth/v1/logout',
        method: 'post'
    })
}