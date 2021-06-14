import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


class UpdateForm extends Component {
    render() {
        return (
            <div>
                <Form onSubmit={e=>this.props.updateFunc(e)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Digimon Name</Form.Label>
                        <Form.Control type="text" placeholder="digimon Name" value={this.props.digimonName} onChange={e=>this.props.updateName(e)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>digimon Image</Form.Label>
                        <Form.Control type="text" placeholder="digimon Image" value={this.props.digimonImage} onChange={e=>this.props.updateImage(e)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Digimon level</Form.Label>
                        <Form.Control type="text" placeholder="Digimon level" value={this.props.digimonlevel} onChange={e=>this.props.updateLevel(e)}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>

            </div>
        )
    }
}

export default UpdateForm
