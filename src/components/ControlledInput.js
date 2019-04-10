import React, {Component} from 'react'

class Form extends Component {
  constructor() {
    super()

    this.log = this.log.bind(this)
  }
  state = {
    firstName: "John",
    lastName: "Henry"
  }

  handleLastNameChange = (e) => {
    this.setState({
      lastName: e.target.value
    })
  }

  handleFirstNameChange = (e) => {
    this.setState({
      firstName: e.target.value
    })
  }


  

log = () => {
  console.log(this.state)
}



  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    this.log()
  }


  render() {
    return (
      <form>
        <input type="text" name="firstName" value={this.state.firstName} onChange={e => this.handleChange(e)} />
        <input type="text" name="lastName" value={this.state.lastName} onChange={e => this.handleChange(e)}/>
      </form>
    )
  }
}

export default Form
