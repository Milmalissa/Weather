import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud, faCloudRain, faSnowflake, faSun, faCalendarAlt, faQuestion } from '@fortawesome/free-solid-svg-icons'

export default function Weather(props) {
    if (props.responseWeather === '') {
        return (
            <div></div>
        );
    }
    else {
        let positionNexDay = getArrayPositionNextDay(props.responseWeather.list);
        let arrayToday = props.responseWeather.list.slice(0, positionNexDay);
        let day1 = props.responseWeather.list.slice(positionNexDay, positionNexDay + 8);
        positionNexDay = positionNexDay + 8
        let day2 = props.responseWeather.list.slice(positionNexDay, positionNexDay + 8);
        positionNexDay = positionNexDay + 8
        let day3 = props.responseWeather.list.slice(positionNexDay, positionNexDay + 8);
        positionNexDay = positionNexDay + 8
        let day4 = props.responseWeather.list.slice(positionNexDay, positionNexDay + 8);
        positionNexDay = positionNexDay + 8
        let day5 = props.responseWeather.list.slice(positionNexDay, props.responseWeather.list.length);
        window.console.log(props.responseWeather.list);

        return (
            <div className="weather">
                {/* Today */}
                <div className="card">
                    <div className="card-header">
                        <FontAwesomeIcon icon={faCalendarAlt} />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                    <b>{formatDate(props.responseWeather.list[0].dt_txt)}</b>

                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-4">
                                <div id="dayInformation">
                                    <FontAwesomeIcon icon={faCloud} />
                                    {props.responseWeather.list[0].main.temp_min}°C / {props.responseWeather.list[0].main.temp_max}°C
                                <br />
                                    Sonnenaufgang: {formatTime(props.responseWeather.city.sunrise)} Uhr
                                <br />
                                    Sonnenuntergang: {formatTime(props.responseWeather.city.sunset)} Uhr
                                <br />
                                    Luftfeuchtigkeit: {props.responseWeather.list[0].main.humidity}%
                        </div>
                            </div>
                            <div className="col-8">
                                <div id="hoursInformation">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col">Uhrzeit</th>
                                                <th scope="col">Temp</th>
                                                <th scope="col">Wetter</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {arrayToday.map(function (arrayT, i) {
                                                return <tr key={i}><td>{formatTime(arrayToday[i].dt)}</td><td>{arrayToday[i].main.temp}°C</td><td>{getWeatherIcon(arrayToday[i].weather[0].main)}</td></tr>

                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Day1 */}
                <div className="card">
                    <div className="card-header">
                        <FontAwesomeIcon icon={faCalendarAlt} />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                    <b>{formatDate(day1[0].dt_txt)}</b>

                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-4">
                                <div id="dayInformation">
                                    <FontAwesomeIcon icon={faCloud} />
                                    {day1[0].main.temp_min}°C / {day1[0].main.temp_max}°C
                                <br />
                                    Sonnenaufgang: {formatTime(props.responseWeather.city.sunrise)} Uhr
                                <br />
                                    Sonnenuntergang: {formatTime(props.responseWeather.city.sunset)} Uhr
                                <br />
                                    Luftfeuchtigkeit: {day1[0].main.humidity}%
                        </div>
                            </div>
                            <div className="col-8">
                                <div id="hoursInformation">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col">Uhrzeit</th>
                                                <th scope="col">Temp</th>
                                                <th scope="col">Wetter</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {day1.map(function (arrayT, i) {
                                                return <tr key={i}><td>{formatTime(day1[i].dt)}</td><td>{day1[i].main.temp}°C</td><td>{getWeatherIcon(day1[i].weather[0].main)}</td></tr>

                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Day2 */}
                <div className="card">
                    <div className="card-header">
                        <FontAwesomeIcon icon={faCalendarAlt} />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                    <b>{formatDate(day2[0].dt_txt)}</b>

                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-4">
                                <div id="dayInformation">
                                    <FontAwesomeIcon icon={faCloud} />
                                    {day2[0].main.temp_min}°C / {day2[0].main.temp_max}°C
                                <br />
                                    Sonnenaufgang: {formatTime(props.responseWeather.city.sunrise)} Uhr
                                <br />
                                    Sonnenuntergang: {formatTime(props.responseWeather.city.sunset)} Uhr
                                <br />
                                    Luftfeuchtigkeit: {day2[0].main.humidity}%
                        </div>
                            </div>
                            <div className="col-8">
                                <div id="hoursInformation">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col">Uhrzeit</th>
                                                <th scope="col">Temp</th>
                                                <th scope="col">Wetter</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {day2.map(function (arrayT, i) {
                                                return <tr key={i}><td>{formatTime(day2[i].dt)}</td><td>{day2[i].main.temp}°C</td><td>{getWeatherIcon(day2[i].weather[0].main)}</td></tr>

                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Day3 */}
                <div className="card">
                    <div className="card-header">
                        <FontAwesomeIcon icon={faCalendarAlt} />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                    <b>{formatDate(day3[0].dt_txt)}</b>

                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-4">
                                <div id="dayInformation">
                                    <FontAwesomeIcon icon={faCloud} />
                                    {day3[0].main.temp_min}°C / {day3[0].main.temp_max}°C
                                <br />
                                    Sonnenaufgang: {formatTime(props.responseWeather.city.sunrise)} Uhr
                                <br />
                                    Sonnenuntergang: {formatTime(props.responseWeather.city.sunset)} Uhr
                                <br />
                                    Luftfeuchtigkeit: {day3[0].main.humidity}%
                        </div>
                            </div>
                            <div className="col-8">
                                <div id="hoursInformation">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col">Uhrzeit</th>
                                                <th scope="col">Temp</th>
                                                <th scope="col">Wetter</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {day3.map(function (arrayT, i) {
                                                return <tr key={i}><td>{formatTime(day3[i].dt)}</td><td>{day3[i].main.temp}°C</td><td>{getWeatherIcon(day3[i].weather[0].main)}</td></tr>

                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Day4 */}
                <div className="card">
                    <div className="card-header">
                        <FontAwesomeIcon icon={faCalendarAlt} />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                    <b>{formatDate(day4[0].dt_txt)}</b>

                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-4">
                                <div id="dayInformation">
                                    <FontAwesomeIcon icon={faCloud} />
                                    {day4[0].main.temp_min}°C / {day4[0].main.temp_max}°C
                                <br />
                                    Sonnenaufgang: {formatTime(props.responseWeather.city.sunrise)} Uhr
                                <br />
                                    Sonnenuntergang: {formatTime(props.responseWeather.city.sunset)} Uhr
                                <br />
                                    Luftfeuchtigkeit: {day4[0].main.humidity}%
                        </div>
                            </div>
                            <div className="col-8">
                                <div id="hoursInformation">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col">Uhrzeit</th>
                                                <th scope="col">Temp</th>
                                                <th scope="col">Wetter</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {day4.map(function (arrayT, i) {
                                                return <tr key={i}><td>{formatTime(day4[i].dt)}</td><td>{day4[i].main.temp}°C</td><td>{getWeatherIcon(day4[i].weather[0].main)}</td></tr>

                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Day5 */}
                <div className="card">
                    <div className="card-header">
                        <FontAwesomeIcon icon={faCalendarAlt} />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                    <b>{formatDate(day5[0].dt_txt)}</b>

                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-4">
                                <div id="dayInformation">
                                    <FontAwesomeIcon icon={faCloud} />
                                    {day5[0].main.temp_min}°C / {day5[0].main.temp_max}°C
                                <br />
                                    Sonnenaufgang: {formatTime(props.responseWeather.city.sunrise)} Uhr
                                <br />
                                    Sonnenuntergang: {formatTime(props.responseWeather.city.sunset)} Uhr
                                <br />
                                    Luftfeuchtigkeit: {day5[0].main.humidity}%
                        </div>
                            </div>
                            <div className="col-8">
                                <div id="hoursInformation">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col">Uhrzeit</th>
                                                <th scope="col">Temp</th>
                                                <th scope="col">Wetter</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {day5.map(function (arrayT, i) {
                                                return <tr key={i}><td>{formatTime(day5[i].dt)}</td><td>{day5[i].main.temp}°C</td><td>{getWeatherIcon(day5[i].weather[0].main)}</td></tr>

                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

function formatDate(date) {
    let formattedDate = new Date(date);
    formattedDate = formattedDate.toLocaleDateString();
    return formattedDate;
}

function formatTime(time) {
    let formattedTime = new Date(time * 1000);
    var hours = formattedTime.getHours();

    // Minutes
    var minutes = "0" + formattedTime.getMinutes();

    // Seconds
    var seconds = "0" + formattedTime.getSeconds();



    return hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
}

function getArrayPositionNextDay(arDays) {
    let iPosition = 0;
    let dateToday = new Date();
    dateToday = dateToday.toLocaleDateString();

    for (let i = 0; i < arDays.length; i++) {
        const dateArray = formatDate(arDays[i].dt_txt)

        if (dateArray !== dateToday) {
            iPosition = i;
            break;
        }
    }
    window.console.log(iPosition);
    return iPosition;
}

function getWeatherIcon(weatherMain) {
    window.console.log(weatherMain);
    if (weatherMain === "Clouds") {
        return <FontAwesomeIcon icon={faCloud} />
    }
    else if (weatherMain === "Rain") {
        return <FontAwesomeIcon icon={faCloudRain} />
    }
    else if (weatherMain === "Sun") {
        return <FontAwesomeIcon icon={faSun} />
    }
    else if (weatherMain === "Snow") {
        return <FontAwesomeIcon icon={faSnowflake} />
    }
    else if(weatherMain === "Clear") {
        return <div><FontAwesomeIcon icon={faQuestion} /><label>Clear</label></div>
    }

}