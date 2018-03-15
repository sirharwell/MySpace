import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDudes } from '../actions/dudes';
import { Container, Grid, Header, Card, Image, Dropdown, Divider, Button } from 'semantic-ui-react';
import DudeForm from './DudeForm'

class Dudes extends React.Component {
  state = { name: '', showForm: false }

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
      visible = dudes.filter( a => a.name === name )

    return visible.map( dude =>
    <Card key={dude.id}>
      <Image src={dude.pic} />
      <Card.Content>
        <Card.Header>
          {dude.name}
        </Card.Header>
        <Card.Meta>
          <span>
            {dude.age}
          </span>
        </Card.Meta>
        <Card.Description>
          {dude.city}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Link to={`/dudes/${dude.id}`}>
          View Person
        </Link>
      </Card.Content>
    </Card>
  )
  }

  nameOptions = () => {
    return this.props.categories.map( (c,i) => { return { key: i, text: c, value: c } })
  }

  render() {
    const { name, showForm } = this.state;
    return (
      <Container>
        <Header as="h3" textAlign="center">Peeps</Header>
        <Button onClick={this.toggleForm}>
          { showForm ? 'Hide Form' : 'Show Form' }
        </Button>
        { showForm ?
          <DudeForm closeForm={this.toggleForm} />
          :
          <div>
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
              { this.dudes() }
            </Card.Group>
          </div>
        }
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  const { dudes } = state
  const categories = [...new Set(dudes.map( a => a.name ))]
  return { dudes, categories}
}

export default connect(mapStateToProps)(Dudes);
