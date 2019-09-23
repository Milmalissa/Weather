import React from 'react';
import './App.css';
import Weather from './ShowWeather'
import GetCity from './GetCityWeather'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      city: '',
      responseWeather: ''
    }
  }

  changeCity(input) {
    this.setState({city: input}, () => { this.CallWeatherAPI() })
    
  }

  CallWeatherAPI() {
    const Http = new XMLHttpRequest();

    if (this.state.city !== "") {
      const url = "http://api.openweathermap.org/data/2.5/forecast?q=" + this.state.city + "&units=metric&appid=b2746560dddeb5efb83a6fa25367c3a4"      
      let self = this;
      Http.open("GET", url, true)
      Http.onload = function (e) {
        let dataObj = ''
        if (this.status === 200) {
          let data = this.response;
          dataObj = JSON.parse(data);
        }

        self.setState({ responseWeather: dataObj })
        window.console.log(self.state.responseWeather);

      }

      Http.send()
    }

  }

  render() {
    return (
      <div>
        <h1>Wetter</h1>
        <GetCity onClick={(inputCity) => this.changeCity(inputCity)} />
        <Weather responseWeather={this.state.responseWeather} />
      </div>
    );
  }

}

export default App;