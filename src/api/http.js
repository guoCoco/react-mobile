import axios from 'axios';

axios.defaults.timeout = 100000;
axios.defaults.baseURL = 'http://test.mediastack.cn/';

/**
 * http request 拦截器
 */
axios.interceptors.request.use(
  (config) => {
    config.data = JSON.stringify(config.data);
    config.headers = {
      'Content-Type': 'application/json',
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * http response 拦截器
 */
axios.interceptors.response.use(
  (response) => {
    if (response.data.errCode === 2) {
      console.log('过期');
    }
    return response;
  },
  (error) => {
    console.log('请求出错：', error);
  }
);

const http = (method, url, params) => {
  // get 请求参数 params   post 请求为data
  const methodArr = ['post', 'POST', 'PUT', 'put', 'PATCH']
  const paramKey = methodArr.includes(url) ? 'data' : 'params'
  return new Promise((resolve, reject) => {
    axios({
      url,
      method,
      [paramKey]: params
    }).then(res => {
      if (res.status === 200) {
        resolve(res.data)
      } else {
        reject(res)
      }
    }).catch(err => {
      reject(err)
    })
  })
}

export default http;
