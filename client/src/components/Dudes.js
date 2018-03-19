import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDudes } from '../actions/dudes';
import { Container, Grid, Header, Card, Image, Dropdown, Divider, Button } from 'semantic-ui-react';
import DudeForm from './DudeForm'
import axios from 'axios';

class Dudes extends React.Component {
  state = { name: '', showForm: false }

  componentDidMount() {
    const { dispatch } = this.props;
    axios.get('/api/dudes')
      .then( res => {
        this.setState({ cats: res.data })
      });
  }

  toggleForm = () => {
    this.setState( state => {
      return { showForm: !state.showForm }
    })
  }

  dudes = () => {
    let { dudes } = this.props;
    let { name } = this.state;
    let visible = dudes;
    if (name)
      visible = dudes.filter( d => d.name === name )

    return visible.map( dude =>
      <Card key={dude.id}>
        <Image src={dude.pic} />
        <Card.Content>
          <Card.Header>
            {dude.name}
          </Card.Header>
          <Card.Meta>
            <span>
              {dude.job}
            </span>
          </Card.Meta>
          <Card.Description>
            {dude.age}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Link to={`/dudes/${dude.id}`}>
            View Dude
          </Link>
        </Card.Content>
      </Card>
    )
  }
  nameOptions = () => {
    return this.props.names.map( (n,i) => { return { key: i, text: n, value: n } })
  }

  clearName = () => {
  this.setState({ name: '' })
}

handleChange = (e, {value}) => {
  this.setState({ name: value })
}

  render() {
    let { name } = this.state;
    return (
      <Container>
        <Header as="h3" textAlign="center">Dudes</Header>
        <Dropdown
          placeholder="Filter by name"
          fluid
          selection
          options={this.nameOptions()}
          onChange={ (e, data) => this.setState({ name: data.value }) }
          value={name}
        />
       { name && <Button fluid basic onClick={ () => this.setState({ name: '' }) }>Clear Filter: {name}</Button> }
       <Divider />
         <Card.Group itemsPerRow={4}>
           <Card.Group itemsPerRow={4}>
              { this.apps() }
            </Card.Group>
          </Card.Group>
      </Container>)
}}


export default connect(Dudes);
