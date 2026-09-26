import { useEffect, useMemo, useState } from "react";

export default function usePagination(data, itemsPerPage = 5) {
    const [page, setPage] = useState(1);

    const totalPages = Math.ceil(data.length / itemsPerPage);

    useEffect(() => {
        setPage(1);
    }, [data]);

    const paginatedData = useMemo(() => {
        const startIndex = (page - 1) * itemsPerPage;

        return data.slice(startIndex, startIndex + itemsPerPage);
    }, [data, page, itemsPerPage]);

    return {
        paginatedData,
        page,
        setPage,
        totalPages,
    };
}
