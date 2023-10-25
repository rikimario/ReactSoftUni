
export default function Movie(props) {
  return (
    <article>
      <h2>Title: {props.data.title}</h2>
      <p>Description: {props.data.description}</p>
    </article>
  )
}