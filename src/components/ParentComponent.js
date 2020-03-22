import React, { Component } from 'react'
import Form from './Form'
import DisplayData from './DisplayData'
export default class ParentComponent extends Component {
state = {
    firstName : 'hello',
    lastName : 'world'
}

handleChange = event => {
    this.setState({
        [event.target.name]: event.target.value
    })
}

    render() {
        return (
            <div>
                <Form formData={this.state}
                handleChange = {this.handleChange}></Form>
                <DisplayData formData={this.state} />
            </div>
        )
    }
}