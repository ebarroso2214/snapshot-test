import Card from 'react-bootstrap/Card';
import Picture from "./miyamura.jpg"

function GitHubCard(){
    return(
        <div className="card">
            <Card>

            <Card.Img style= {{width:'18rem',}}variant="top" src={Picture} />

            <Card.Body>
                <Card.Title>Esteban Barroso</Card.Title>
                <Card.Text> 23 year old getting into the world of software development.</Card.Text>
            </Card.Body>
            </Card>
        </div>
    )
}

export default GitHubCard;