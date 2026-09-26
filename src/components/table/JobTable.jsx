import { useContext } from "react";
import { TABLE_HEADERS } from "../../constants/tableHeaders";
import { DataContext } from "../../context/DataContext";
import  usePagination  from "../../hooks/usePagination";
import  useSort from "../../hooks/useSort";
import JobRow from "./JobRow";
import  JobTableHeader  from "./JobTableHeader";
import  Pagination   from "./Pagination";
import "../../styles/table.css";

export default function JobTable() {
  const { filteredJobs } = useContext(DataContext);

  const { sortedData, sort, handleSort } = useSort(filteredJobs);

  const { paginatedData, page, setPage, totalPages } =
    usePagination(sortedData);

  return (
    <section className="job-list">
      <table>
        <thead>
          <JobTableHeader
            headers={TABLE_HEADERS}
            sort={sort}
            onSort={handleSort}
          />
        </thead>

        <tbody>
          {paginatedData.map((job) => (
            <JobRow key={job.id} job={job} headers={TABLE_HEADERS} />
          ))}
        </tbody>

        <tfoot className="table-footer">
          <tr>
            <td
              colSpan={TABLE_HEADERS.length}
            >{`Available Jobs: ${filteredJobs.length}`}</td>
          </tr>
        </tfoot>
      </table>

      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
    </section>
  );
}

/* 
Searched and filteredJobs
↓
useSort
↓
usePagination
↓
render
*/
