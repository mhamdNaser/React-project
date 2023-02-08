import React from "react"
import  CardImg  from "react-bootstrap/Image";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


class Main extends React.Component{
    render(){
        console.log(this.props.message);
        return(
            <div>
            {this.props.message.map(el => (
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={el.bookImage} alt="nnj" />
                    <Card.Body>
                        <Card.Title>{el.Title}</Card.Title>
                        <Card.Text>{el.author}</Card.Text>
                        <Card.Text>{el.description}</Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            ))}
            </div>
        );
        
    }
}

export default Main;