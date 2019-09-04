import axios from 'axios'

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
    // if(error && error.response){
    //     if(error.response.status=="405"){
    //         return error;
    //     }
    // }else{
    //     router.push("/login");
    //     return error;
    // }
    return error;
})

export default ajax