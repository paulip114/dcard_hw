import axios from 'axios';
import { useEffect, useState } from 'react';
// api串接

export default function RequestTest(topNdata, skipNdata) {
    const [ScenicSpot, setScenicSpot] = useState([])
    const [hasMore, setHasMore] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setScenicSpot([])
    }, [topNdata])

    useEffect(() => {
        setLoading(true)
        axios({
            method: 'GET',
            url: 'https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot',
            params: { $top: topNdata, $skip: skipNdata },
            // cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            setScenicSpot(res.data)
            // setScenicSpot(prevScenicSpots => {
            //     return [([prevScenicSpots, res.data])]
            //   })
            setHasMore(res.data.length > 0)
            setLoading(false)
        }).catch(err => { console.log(err) })
    }, [topNdata, skipNdata])

    return { loading, ScenicSpot, hasMore }
}




















