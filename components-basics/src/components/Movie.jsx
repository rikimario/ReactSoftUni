
export default function Movie(props) {
  return (
    <article>
      <h8>Title: {props.data.title}</h8>
      <p>Description: {props.data.description}</p>
    </article>
  )
}