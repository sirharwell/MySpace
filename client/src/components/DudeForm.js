import React from 'react';
import { connect } from 'react-redux'
import { updateDude, addDude } from '../actions/dudes'
import { Form } from 'semantic-ui-react';

class DudeForm extends React.Component {
  initialState = {
    name: '',
    city: '',
    job: '',
    age: '',
    pic: '',
  }

  state = {...this.initialState}

  componentWillMount() {
    if (this.props.id)
      this.setState({ ...this.props })
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const dude = {...this.state}
    const { closeForm, dispatch } = this.props
    const func = this.props.id ? updateDude : addDude
    dispatch(func(dude))
    closeForm()
  }

  render() {
    const { name, job, city, age, pic } = this.props
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name="name"
          required
          defaultValue={name}
          onChange={this.handleChange}
          label="Name"
        />
        <Form.Input
          name="job"
          defaultValue={job}
          onChange={this.handleChange}
          label="Job"
        />
        <Form.Input
          name="city"
          defaultValue={city}
          onChange={this.handleChange}
          label="City"
        />
        <Form.Input
          name="pic"
          defaultValue={pic}
          onChange={this.handleChange}
          label="Pic"
        />
        <Form.Input
          name="age"
          defaultValue={age}
          type="number"
          min="0"
          onChange={this.handleChange}
          label="Age"
        />
        <Form.Button>Save</Form.Button>
      </Form>
    )
  }
}

export default connect()(DudeForm);
