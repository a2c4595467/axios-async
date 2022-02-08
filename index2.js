/**
 * 同期通信を行う
 */
const axios = require('axios');


const getSingleDeviceRecord = (di) => {
    return new Promise(async (resolve, reject) => {
        const url =`https://accessgudid.nlm.nih.gov/api/v2/devices/lookup.json?di=${di}`;
        try {
            console.log('url='+url);
            const res = await axios.get(url);
            resolve(res.data.gudid.device.brandName);
        }
        catch (error) {
            reject(error.response.data.error);
        }
    });
}

// 呼び出しもと
// asyncを使った関数でしかawaiは呼べない
const getDeviceRecord = async () => {
    // 成功する例
    try {
        const res1 = await getSingleDeviceRecord('00302340989336')
        // 必ず実行される
        .then((res) => {
            console.log(res);
        })
        // エラー時に実行される
        .catch((res) => {
            console.log(res)
        });

        console.log(res1);
    } catch (error) {
        console.log(error);
    }

    // 失敗する例
    try {
        const res2 = await getSingleDeviceRecord('XXX');
        console.log(res2);
    } catch (error) {
        console.log(error);
    }

}

console.log('---開始');

getDeviceRecord();

console.log('---終了');    
