import { useMemo, useState } from "react";

export default function useSort(data) {
    const [sort, setSort] = useState({
        column: null,
        direction: "asc",
    });

    const handleSort = (column) => {
        setSort((prevSort) => {
            const isCurrentColumn = prevSort.column === column;

            return {
                column,
                direction: isCurrentColumn && prevSort.direction === "asc" ? "desc" : "asc",
            };
        });
    };

    const sortedData = useMemo(() => {
        if (!sort.column) return data;

        const comparator = (a, b) => {
            if (sort.column === "postedDate") {
                return Date.parse(a[sort.column]) - Date.parse(b[sort.column]);
            }

            if (a[sort.column] === b[sort.column]) return 0;

            return a[sort.column] > b[sort.column] ? 1 : -1;
        };

        const sorted = [...data].sort(comparator);

        return sort.direction === "asc" ? sorted : sorted.reverse();
    }, [data, sort]);

    return {
        sortedData,
        sort,
        handleSort,
    };
}
