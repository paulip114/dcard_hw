import axios from 'axios';
// api串接

const Request = axios.create({
    baseURL: 'https://ptx.transportdata.tw/MOTC/v2/Tourism/'
});

export async function getFristScenicSpotRequest(topNdata, firstRendered) {
    if (firstRendered === false) {
        try {
            const item = await Request.get('ScenicSpot', { params: { $top: topNdata, $format: 'JSON' } }).then(response => response.data);
            console.log("sent Frist request");
            return item;
        } catch (err) {
            console.error(err);
        }
    }

}

export async function getScenicSpotRequest(topNdata, skipNdata) {
    console.log("skip ScenicSpotRequest:", skipNdata)
    try {
        const item = await Request.get('ScenicSpot',
            {
                params: { $top: topNdata, $skip: skipNdata, $format: 'JSON' }
            })
            .then(response => response.data)
        // .catch(e => {
        //     if (axios.isCancel(e)) return
        //     setError(true)
        // });
        return item;
    } catch (err) {
        console.error(err);
    }
}




















