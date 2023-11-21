import { Button, Form } from "react-bootstrap";
import useForm from "../hooks/useForm";

export default function AddTodo(props) {
  const { formValue, changeHandler, todoHandler } = useForm(
    { title: "" },
    props.onSubmitHandler
  );

  return (
    <Form onSubmit={todoHandler} style={{ display: "block", width: "50vw" }}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Todo</Form.Label>
        <Form.Control
          type="text"
          name="title"
          placeholder="walk the dog..."
          value={formValue.name}
          onChange={changeHandler}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Add TODO
      </Button>
    </Form>
  );
}
