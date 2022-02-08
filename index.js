const axios = require('axios');

const getSingleDeviceRecord = async (di) => {
    const url =`https://accessgudid.nlm.nih.gov/api/v2/devices/lookup.json?di=${di}`;
    try {
        console.log('url='+url);
        const res = await axios.get(url);
        return res.data.gudid.device.brandName;
    }
    catch (error) {
        return error.response.data.error;
    }
}


console.log('---開始');

// 成功する例
getSingleDeviceRecord('00302340989336')
    // 必ず実行される
    .then((res) => {
        console.log(res);
    })
    // エラー時に実行される
    .catch((res) => {
        console.log(res)
    });

// エラーになる例
getSingleDeviceRecord('xxx')
    .then((res) => {
        console.log(res)
    })
    .catch((res) => {
        console.log(res);
    });

console.log('---終了');    
