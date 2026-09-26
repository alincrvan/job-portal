import "../../styles/filter.css";

export default function FilterSelect({ label, options, value, onChange }) {
  return (
    <div className="filter-group">
      <label htmlFor={label} className="filter-label">
        {label}
      </label>
      <select
        id={label}
        value={value}
        onChange={onChange}
        className="filter-select"
      >
        <option value="">Select {label}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
