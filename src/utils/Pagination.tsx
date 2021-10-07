import { useState } from 'react';

export const Pagination = ({
  data,
  RenderComponent,
  title,
  pageLimit,
  dataLimit,
  fetchDataFromServer,
}: any) => {
  const [pages] = useState(Math.round(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
    const offset = currentPage * dataLimit;
    fetchDataFromServer(offset);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
    const offset = currentPage * dataLimit;
    fetchDataFromServer(offset);
  }

  function changePage(event: any) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
    const offset = pageNumber * dataLimit;
    fetchDataFromServer(offset);
  }

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill(0).map((_, idx) => start + idx + 1);
  };

  return (
    <div>
      <h1>{title}</h1>

      <div className="dataContainer">
        <RenderComponent data={data} />
      </div>

      <div className="pagination">
        <button
          onClick={goToPreviousPage}
          className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
        >
          prev
        </button>

        {getPaginationGroup().map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            className={`pagination--item ${
              currentPage === item ? 'active' : null
            }`}
          >
            <span>{item}</span>
          </button>
        ))}

        <button
          onClick={goToNextPage}
          className={`next ${currentPage === pages ? 'disabled' : ''}`}
        >
          next
        </button>
      </div>
    </div>
  );
};
