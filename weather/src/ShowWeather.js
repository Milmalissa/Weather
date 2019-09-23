import React from 'react'

export default class Weather extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            city: '',
            responseWeather: ''
        }
    }

    /* componentDidUpdate() {
        window.console.log(this.state.responseWeather)
        window.console.log(this.state.responseWeather["cnt"])

    }
 */
    render() {
        /* let weatherdiv = ""
        if (this.state.responseWeather === '') {
            weatherdiv = <div></div>
        }
        else {
            weatherdiv = <div className="card">
                weatherdiv +=  <div className="card-header">
                    weatherdiv +=Test
              weatherdiv +=</div>
                weatherdiv +=<div className="card-body">
                    weatherdiv +=<h5 className="card-title">Special title treatment</h5>
                    weatherdiv +=<p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                    weatherdiv +=</div>
                weatherdiv +=</div>
        } */
        return (
            <div>Test</div>
        );
    }

}