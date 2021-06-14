import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

class Favdigimon extends Component {
    render() {
        return (
            <div style={{display : 'inline-block'}}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.digimon.img} />
                    <Card.Body>
                        <Card.Title>{this.props.digimon.name}</Card.Title>
                        <Card.Text>
                            {this.props.digimon.level}
                        </Card.Text>
                        <Button variant="primary" onClick={()=>this.props.deletDigimon(this.props.idx)}>delete</Button>
                        <Button variant="primary" onClick={()=>this.props.updateForm(this.props.idx)}>update</Button>
                    </Card.Body>
                </Card>
                
            </div>
        )
    }
}

export default Favdigimon
