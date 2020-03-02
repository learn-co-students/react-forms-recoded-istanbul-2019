import React from 'react';
import ParentComponent from './ParentComponent'

class Form extends React.Component {
  // state = {
  //   firstName: "John",
  //   lastName: "Henry",
  //   submitData : []

  // }

  // handleChange = event => {
    
  //   this.setState({
  //     [event.target.name] : event.target.value
  //   })
  //   console.log(event.target.value)
  // }

 

  // handleSubmit = event => {
  //   event.preventDefault()
  //   let formData = {
  //     firstName : this.state.firstName,
  //     lastName : this.state.lastName
  //   }
  //   let dataArray = this.state.submitData.concat(formData)
  //   this.setState({
  //     submitData : dataArray
  //   })
  // }

  // listOfSubmissions = () => {
  //   return this.state.submitData.map(data => {
  //     return <div><span>{data.firstName}</span> <span>{data.lastName}</span></div>
  //   })
  // }

  render() {
    return (
     <div>
        <form>
          <input type='text' name='firstName' onChange={e => this.props.handleChange(e)} value={this.props.formData.firstName}>

          </input>
          <input type='text' name='lastName' onChange={e => this.props.handleChange(e)} value={this.props.formData.lastName}>

          </input>
        </form>
     </div>

    )
  }
}

export default Form;