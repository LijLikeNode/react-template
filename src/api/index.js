import axios from 'axios';
import qs from 'qs';
import popalert from '../popalert';

const http = {
    post: '',
    get: '',
}

http.post = function (api, data, mask) {
    if (mask) popalert.waitstart();
    let params = !!data ? qs.stringify(data) : '';
    return new Promise((resolve, reject) => {
        axios.post(api, params).then(res => {
            if (mask) popalert.waitend();
            resolve(res);
        }).catch(e => {
            if (mask) popalert.waitend();
            popalert.fade('网络请求错误')
        })
    })
}


http.get = function (api, data, mask) {
    if (mask) popalert.waitstart();
    let params = !!data ? qs.stringify(data) : '';
    return new Promise((resolve, reject) => {
        axios.get(api, params).then(res => {
            if (mask) popalert.waitend();
            resolve(res);
        }).catch(e => {
            if (mask) popalert.waitend();
            popalert.fade('网络请求错误')
        })
    })
}

export default http;