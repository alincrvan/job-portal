import { useContext, useMemo } from "react";
import { DataContext } from "../../context/DataContext";
import FilterSelect from "./FilterSelect";
import { INITIAL_FILTERS } from "../../constants/filters";
import "../../styles/filter.css";

export default function JobFilters() {

  
  const { jobList, activeFilters, setActiveFilters } = useContext(DataContext);

  const handleReset = () => {
    setActiveFilters(INITIAL_FILTERS);
  };

  const filterOptions = useMemo(() => {
    if (!jobList.length) return {};

    return Object.fromEntries(
      Object.keys(activeFilters).map((key) => [
        key,
        Array.from(new Set(jobList.map((job) => job[key]))),
      ]),
    );
  }, [jobList, activeFilters]);

  const handleSelect = (e, filterLabel) => {
    setActiveFilters((prev) => ({
      ...prev,
      [filterLabel]: e.target.value,
    }));
  };

  return (
    <div className="job-filters">
      {filterOptions &&
        Object.entries(filterOptions).map(([filterLabel, menuItem]) => (
          <FilterSelect
            key={filterLabel}
            label={filterLabel}
            options={menuItem}
            value={activeFilters[filterLabel]}
            onChange={(e) => handleSelect(e, filterLabel)}
          />
        ))}
      <button className="btn-secondary" onClick={handleReset}>
        Reset Filters
      </button>
    </div>
  );
}
