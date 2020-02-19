import bearer from '@websanova/vue-auth/drivers/auth/bearer'
import axios from '@websanova/vue-auth/drivers/http/axios.1.x'
import router from '@websanova/vue-auth/drivers/router/vue-router.2.x'

const config = {
    auth: bearer,
    http: axios,
    router: router,
    tokenDefaultName: 'login-sigg-system',
    tokenStore: ['localStorage'],
    rolesVar: 'role',
    registerData: {
        url: 'auth/register',
        method: 'post',
        redirect: '/login'
    },
    loginData: {
        url: 'auth/login',
        method: 'post',
        redirect: '/like',
        fetchUser: true
    },
    logoutData: {
        url: 'auth/logout',
        method: 'get',
        redirect: '/login',
        makeRequest: true
    },
    fetchData: {
        url: 'user',
        method: 'GET',
        enabled: true
    },
    refreshData: {
        url: 'auth/refresh',
        method: 'GET',
        enabled: true,
        interval: 30
    }
}

export default config