import axios from 'axios';
import qs from 'qs';
import popalert from '../popalert';

const ax = (url, data, mask, method = "post") => {
    if (mask) popalert.waitstart();
    let params = !!data ? qs.stringify(data) : '';
    return new Promise(function (resolve, reject) {
        axios({
            method: method,
            url: url,
            data: params,
        }).then(function (res) {
            if (mask) popalert.waitend();
            resolve(res);
        }).catch(function (err) {
            if (mask) popalert.waitend();
            popalert.fade('网络请求错误');
        });
    })
}


export default ax;