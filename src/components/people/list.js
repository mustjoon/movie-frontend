export default function PersonList({ people }) {
  return (
    <ul>
      {people.map((person) => (
        <li key={person.id}>
          <h3 className="text-xl font-bold mb-4">
            {person.firstName} {person.lastName}
          </h3>
        </li>
      ))}
    </ul>
  );
}
