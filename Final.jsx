import axios from 'axios'
import React,{useEffect, useState} from 'react'
import { CiSearch } from "react-icons/ci";


const Final = () => {
    let [place, setPlace] = useState("");
    let [details,setDetails]=useState({})
    let [some,setSome]=useState({
        pla:"",
        temp:"",
        humi:"",
        weather:""
    })
	let changePl = (e) => {
		setPlace(e.target.value);
	};
	useEffect(() => {
        let apis = async () => {
        let { data } = await axios.get( `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=5396dc24488bdf9745431426bbecfcda`);
			setDetails(data);
		};
        apis()
	}, [place]);
    let {pla,temp,humi,weather}=some
    let sub = ()=>{
        console.log(details)
        setSome({
            pla : details.name,
            temp : Math.floor(details.main.temp_max-273),
            humi:details.main.humidity,
            weather:details.weather[0].description
        })
    }
  return (
    <div id='hello'>
           
			<input type="text" placeholder="Enter Your Location" value={place} onChange={changePl}/>
			<button onClick={sub}><CiSearch /></button><br />
			<h4>Place: {pla}</h4><br />
			<h4>Temperature: {temp} <sup>o</sup>c</h4><br />
			<h4>Humdity: {humi} kmph</h4><br />
			<h4>Wether Condition: {weather}</h4>
            
		</div>
	)
}
  


export default Final