import axios from 'axios';
// api串接

//使用axios
const Request = axios.create({
    baseURL: 'https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/'
});


//發出request 取得"縣市景點列表"
export const SendCityRequest = () => Request.get("Taipei?$top=30&$format=JSON").then(response => response.data);
// export const SendCityRequest = () => Request.get("Taipei?$top=30&$format=JSON").then(response => response.data);

//用 async/await 將收到的Promise data return  
export async function getCityRequest() {
    try {
        const item = await SendCityRequest();
        // console.log(item);
        return item;
    } catch (err) {
        console.error(err);
    }
}

// var url = {props}+'?$top=30&$format=JSON';
