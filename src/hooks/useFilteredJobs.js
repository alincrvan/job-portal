import { useMemo } from "react";

export default function useFilteredJobs(jobList, search, activeFilters) {
    return useMemo(() => {
        let filtered = jobList;
        return filtered.filter((job) => {
            // Search match (checks if the search string exists in the title)
            const isSearchMatch = job.title
                .toLowerCase()
                .includes(search.toLowerCase());

            // Filter match (checks if every active filter matches the job properties)
            const isFilterMatch = Object.entries(activeFilters).every(
                ([key, value]) => {
                    if (!value) return true; // If no filter value is selected, it's a match
                    return job[key]?.toLowerCase() === value.toLowerCase();
                }
            );

            return isSearchMatch && isFilterMatch;
        });
    }, [jobList, search, activeFilters]);
}



