import axios from 'axios';
import qs from 'qs';

const htpp = {
    post : '',
    get : '',
}

http.post = function (api, data) {
    let params = qs.stringify(data);
    return new Promise((resolve, reject) => {
        axios.post(api, params).then(res => {
            resolve(res);
        })
    })
}


http.get = function (api, data) {
    let params = qs.stringify(data);
    return new Promise((resolve,reject) => {
        resolve(res);
    })
}

export default http;