import './CityList.css';
import { useHistory } from 'react-router-dom';

function CityList({ city, onChildselceted }) {
    let history = useHistory();

    function handleSelect(e) {
        onChildselceted(e.target.value);    //將所選的 value 傳到父元素
        history.push(`/scenicSpot/${e.target.value}`);  //使用 useHistory 將所選value傳到App.js再傳到City.js

        // var index = e.nativeEvent.target.selectedIndex; //獲取option中的中文字
        // var title = e.nativeEvent.target[index].text; //獲取option中的中文字
        // console.log(title); //獲取option中的中文字
    }

    return (
        <div>
            <div className="border">
                <div className="text">請選擇縣市: </div>
                <select className="custom-select" onChange={handleSelect} defaultValue="" value={city.city}>
                    <option value="" > 全部  </option>
                    <option value="Taipei" >臺北市</option>
                    <option value="NewTaipei"> 新北市  </option>
                    <option value="Taoyuan"> 桃園市  </option>
                    <option value="Taichung"> 臺中市  </option>
                    <option value="Tainan"> 臺南市  </option>
                    <option value="Kaohsiung"> 高雄市  </option>
                    <option value="Keelung"> 基隆市  </option>
                    <option value="Hsinchu"> 新竹市  </option>
                    <option value="HsinchuCounty"> 新竹縣  </option>
                    <option value="MiaoliCounty"> 苗栗縣  </option>
                    <option value="ChanghuaCounty"> 彰化縣  </option>
                    <option value="NantouCounty"> 南投縣  </option>
                    <option value="YunlinCounty"> 雲林縣  </option>
                    <option value="ChiayiCounty"> 嘉義縣  </option>
                    <option value="Chiayi"> 嘉義市  </option>
                    <option value="PingtungCounty"> 屏東縣  </option>
                    <option value="YilanCounty"> 宜蘭縣  </option>
                    <option value="HualienCounty"> 花蓮縣  </option>
                    <option value="TaitungCounty"> 臺東縣  </option>
                    <option value="KinmenCounty"> 金門縣  </option>
                    <option value="PenghuCounty"> 澎湖縣  </option>
                    <option value="LienchiangCounty"> 連江縣  </option>
                </select>
            </div>
        </div>
    )
}

export default CityList;