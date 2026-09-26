export default function JobTableHeader({ headers, sort, onSort }) {
  return (
    <tr>
      {headers.map(({ key, label, sortable }) => (
        <th key={key} onClick={() => sortable && onSort(key)}>
          {label}
          {sort.column === key && (sort.direction === "asc" ? " ▲" : " ▼")}
        </th>
      ))}
    </tr>
  );
}
