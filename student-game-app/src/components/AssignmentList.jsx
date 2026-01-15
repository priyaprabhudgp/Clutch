function AssignmentList({ assignments }) {
  return (
    <ul>
      {assignments.map((a) => (
        <li key={a.id}>
          {a.title} – Due {new Date(a.dueAt).toLocaleDateString()}
        </li>
      ))}
    </ul>
  );
}

export default AssignmentList;