export const Users = ({ names }: { names: string[] }) => (
  <ul>
    {names.map((name, index) => (
      <li key={index}>{name}</li>
    ))}
  </ul>
)
