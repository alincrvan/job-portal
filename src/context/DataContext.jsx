import { createContext, useEffect, useState, useMemo } from "react";
import useAxiosFetch from "../hooks/useAxiosFetch";
import useFilteredJobs from "../hooks/useFilteredJobs";
import { INITIAL_FILTERS } from "../constants/filters";

export const DataContext = createContext();

export default function DataProvider({ children }) {
  
  const [jobList, setJobList] = useState([]);

  const [search, setSearch] = useState("");

  const [activeFilters, setActiveFilters] = useState(INITIAL_FILTERS);

  const { data, fetchError, isLoading } = useAxiosFetch(
    "http://localhost:3000/jobs",
  );

  useEffect(() => {
    setJobList(data);
  }, [data]);

  const filteredJobs = useFilteredJobs(jobList, search, activeFilters);

  return (
    <DataContext.Provider
      value={{
        jobList,
        search,
        setSearch,
        filteredJobs,
        activeFilters,
        setActiveFilters,
        isLoading,
        fetchError,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

/* API (/jobs)
    ↓
useAxiosFetch
    ↓
jobList
    ↓
search + filters
    ↓
filteredJobs (Final job List)
    ↓
Any component using DataContext 

*/
