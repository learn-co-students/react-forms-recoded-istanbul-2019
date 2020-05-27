import React from 'react';

class Form extends React.Component {
  render() {
    const { firstName, lastName } = this.props.formData;
    return (
      <div>
        <form>
          <input
            type="text"
            name="firstName"
            onChange={this.props.handleChange}
            value={firstName}
          />
          <input
            type="text"
            name="lastName"
            onChange={this.props.handleChange}
            value={lastName} />
        </form>
      </div>
    )
  }
}

export default Form;