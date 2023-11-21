import AddTodo from "./AddTodo";
import Cards from "./Card";

export default function CardContainer({ todos, onSubmitHandler }) {
  return (
    <>
      <div style={{ margin: "20px", display: "flex", flexDirection: "row" }}>
        {todos.map((item) => (
          <Cards key={item._id} {...item} />
        ))}
      </div>

      <div>
        <AddTodo onSubmitHandler={onSubmitHandler} />
      </div>
    </>
  );
}
