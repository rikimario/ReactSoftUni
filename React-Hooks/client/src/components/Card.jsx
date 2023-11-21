import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Cards() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>state: </Card.Text>
        <Button variant="primary">Change</Button>
      </Card.Body>
    </Card>
  );
}
