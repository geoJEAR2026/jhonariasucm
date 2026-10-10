export default function Fichas({ items = [] }) {
  if (items.length === 0) return null
  return (
    <ul className="fichas">
      {items.map((item) => (
        <li key={item} className="ficha">
          {item}
        </li>
      ))}
    </ul>
  )
}
