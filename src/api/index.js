import axios from 'axios'
import qs from 'qs'
const Service = axios.create({
    // 默认请求地址
    // baseURL:'http://192.168.43.63:8080',
    // 请求超时时间
    timeout: 5000,
    headers: {
        Accept: "applocation/x-www-form-urlencoded;charset=utf-8",
        'Content-Type': 'application/x-www-form-urlencoded'
    }
});
// 请求劫持
Service.interceptors.request.use(
    req => {
        if (localStorage.getItem('Authorization')) {
            req.headers.Authorization = localStorage.getItem('Authorization');
          }
       
          return req;
    },
    err => {
        return Promise.reject(err)
    }
)
// 相应劫持
Service.interceptors.response.use(
    res => {       
        // 成功返回对应的data数据
        return res.data
    },
    err => {
        console.log(err)
        // 失败检测状态码
        if(err && err.response){
            switch (err.response.status){
                case 400 :console.log("请求错误");
                break;
                case 401 :console.log("未授权，请重新登录");
                break;
                case 403 :console.log("拒绝访问");
                break;
                // 如果状态码为404，就跳转到对应的404页面
                
                case 404 : console.log('404') 
                // window.location.href="fail.html";
                break;
                case 500 :console.log("未获取服务器数据");
                break;
                default:console.log("链接错误")
            }
        } else{
            console.log("服务器链接失败")
            
        }
    }
)

// post请求的封装
const postService = function(url,params) {
    return new Promise((resolve,reject) => {
        Service.post(url,qs.stringify(params)).then(res => {
            resolve(res)
        })
        .catch(err => {
            reject(err)
        })
    })
}
// get请求的封装
const getService = function(url,params) {
    return new Promise((resolve,reject) => {
        Service.get(url,{
            params
        }).then(res => {
            resolve(res)
        })
        .catch(err => {
            reject(err)
        })
    })
}
export {
    postService as post,
    getService as get
};