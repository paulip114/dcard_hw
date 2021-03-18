import axios from 'axios';
// api串接

//使用axios
const Request = axios.create({
    baseURL: 'https://ptx.transportdata.tw/MOTC/v2/'
});

//發出request 取得“全部景點列表”
export const ScenicSpotRequest = () => Request.get('Tourism/ScenicSpot?$top=30&$format=JSON').then(response => response.data);

//用 async/await 將收到的Promise data return 
export async function getScenicSpotRequest() {
    try {
        const item = await ScenicSpotRequest();
        // console.log(item);
        return item;
    } catch (err) {
        console.error(err);
    }
}

//old version old version old version old version old version old version old version old version old version
//old version old version old version old version old version old version old version old version old version

// // console.log(getScenicSpotRequest());
// const a = getScenicSpotRequest().then(res => 
//     res[0].Name
// )

// console.log(a);


// function ScenicSpotRequest() {
//     const url = 'https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=30&$format=JSON';
//     var ReceivedObj = axios.get(url)
//         .then(response => response.data)
//         .catch(err => { console.log(err) })
//     return ReceivedObj;
// }

// export async function getScenicSpotRequest() {
//     const response = await ScenicSpotRequest()
//     return (response);
// }