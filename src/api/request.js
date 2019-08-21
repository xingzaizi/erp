import axios from 'axios'
import router from '@/router'

// 创建axios实例
const ajax = axios.create({
    baseURL: 'http://localhost:8080/', // api的base_url
    timeout: 5000 // 请求超时时间
})

//requset拦截器
ajax.interceptors.request.use(config => {
    return config
})

//response拦截器
ajax.interceptors.response.use(config => {
    return config
},function(error){
    if(error && error.response){
        if(error.response.status=="405"){
            MessageBox("请求错误或权限不够，请联系管理员");
            return error;
        }
    }else{
        MessageBox("网络超时，请重新登录");
        router.push("/login");
        return error;
    }
})

export default ajax