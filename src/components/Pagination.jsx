import React from "react";

const Pagination = ({ page, setPage }) => {
  const nextPage = () => setPage(page + 1);
  const prevPage = () => setPage(page - 1);

  return (
    <div>
      <button onClick={prevPage} disabled={page === 1}>
        Previous
      </button>
      <span>{page}</span>
      <button onClick={nextPage}>Next</button>
    </div>
  );
};

export default Pagination;
