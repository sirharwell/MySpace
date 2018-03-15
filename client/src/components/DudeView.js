import React from 'react';
import { connect } from 'react-redux';
import { Divider, Header, Image, Container, Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import DudeForm from './DudeForm';

class DudeView extends React.Component {
  state = { showForm: false }

  toggleForm = () => {
    this.setState( state => {
      return { showForm: !state.showForm }
    })
  }

  render() {
    const { showForm } = this.state;
    const { dude = {} } = this.props;
    return (
      <Container>
        <Link to="/dudes">View All Dudes</Link>
        <Button onClick={this.toggleForm}>
          { showForm ? 'Cancel' : 'Edit' }
        </Button>
        { showForm ?
            <DudeForm {...dude} closeForm={this.toggleForm} />
            :
            <div>
              <Header as="h3" textAlign="center">{dude.name}</Header>
              <Image src={dude.pic} />
              <Table definition>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell />
                    <Table.HeaderCell />
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  <Table.Row>
                    <Table.Cell>Age</Table.Cell>
                    <Table.Cell>{dude.age}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>City</Table.Cell>
                    <Table.Cell>{dude.city}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Job</Table.Cell>
                    <Table.Cell>{dude.job}</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>
          }
      </Container>
    )
  }
}

const mapStateToProps = (state, props) => {
  return { dude: state.dudes.find( a => a.id === parseInt(props.match.params.id )) }
}

export default connect(mapStateToProps)(DudeView);
