import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Cards({ _id, title, isFinish }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>state: {isFinish}</Card.Text>
        <Button variant="primary">Change</Button>
      </Card.Body>
    </Card>
  );
}
