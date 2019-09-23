import React from 'react'

export default class GetCity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputCity: '',
            placeholderText: 'Ort'
        }
    }

    handleInputCity(input) {
        this.setState({inputCity:input}); 
    }

    render() {
        return (
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder={this.state.placeholderText} aria-label={this.state.placeholderText} aria-describedby="btnCity" onChange={event => this.handleInputCity(event.target.value)} />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" id="btnCity" onClick={() => this.props.onClick(this.state.inputCity)}>Suchen</button>
                </div>
            </div>
        );
    }
}