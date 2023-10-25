
export default function Movie(props) {
  return (
    <article>
      <h3>Title: {props.data.title}</h3>
      <p>Description: {props.data.description}</p>
    </article>
  )
}