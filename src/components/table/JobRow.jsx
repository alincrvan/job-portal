import { Link, useNavigate } from "react-router-dom";
import { formatDate } from "../../utils/formatDate";

export default function JobRow({ job, headers }) {
  const navigate = useNavigate();

  return (
    <tr
      className="job-row"
      onClick={() =>
        navigate(`/jobs/${job.id}`, {
          state: { fromHome: true },
        })
      }
    >
      {headers.map(({ key, label }) => (
        <td key={key} data-label={label}>
          <Link to={`/jobs/${job.id}`} state={{ fromHome: true }}>
            {key === "postedDate" ? formatDate(job[key]) : job[key]}
          </Link>
        </td>
      ))}
    </tr>
  );
}
