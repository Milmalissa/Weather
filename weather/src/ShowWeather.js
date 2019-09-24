import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud, faCloudRain, faCloudSun, faSnowflake, faSun, faTemperatureHigh, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

export default function Weather(props) {
    if (props.responseWeather === '') {
        return (

            <div>
                <label>Leer</label>
                <FontAwesomeIcon icon={faCloud} />
                <FontAwesomeIcon icon={faCloudRain} />
                <FontAwesomeIcon icon={faCloudSun} />
                <FontAwesomeIcon icon={faSnowflake} />
                <FontAwesomeIcon icon={faSun} />
                <FontAwesomeIcon icon={faTemperatureHigh} />
            </div>
        );
    }
    else {
        window.console.log(props.responseWeather);
        return (
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
                                            <th scope="col">Regen</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>15:00</td>
                                            <td>12°C</td>
                                            <td><FontAwesomeIcon icon={faCloudRain} /></td>
                                            <td>100%</td>
                                        </tr>
                                        <tr>
                                            <td>15:00</td>
                                            <td>12°C</td>
                                            <td><FontAwesomeIcon icon={faCloud} /></td>
                                            <td>89%</td>
                                        </tr>
                                        <tr>
                                            <td>15:00</td>
                                            <td>12°C</td>
                                            <td><FontAwesomeIcon icon={faCloudRain} /></td>
                                            <td>100%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>



                    </div>
                    {/* <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
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