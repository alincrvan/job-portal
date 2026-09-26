export default function Pagination({ page, totalPages, onPageChange }) {
  return (
    <div className="pagination-controls">
      <button
        className="btn-secondary"
        onClick={() => onPageChange((prev) => prev - 1)}
        disabled={page === 1}
      >
        Back
      </button>

      <p>{`Page ${page} of ${totalPages}`}</p>

      <button
        className="btn-secondary"
        onClick={() => onPageChange((prev) => prev + 1)}
        disabled={page === totalPages}
      >
        Next
      </button>
    </div>
  );
}
