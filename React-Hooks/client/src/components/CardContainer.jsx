import Cards from "./Card";

export default function CardContainer({ todos }) {
  return (
    <div style={{ margin: "20px" }}>
      {todos.map((item) => (
        <Cards key={item._id} {...item} />
      ))}
    </div>
  );
}
