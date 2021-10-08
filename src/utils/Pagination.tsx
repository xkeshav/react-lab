import { useEffect, useState } from 'react';
import { PokeMon } from '../model/pokemon';

type PaginationProps = {
  data: PokeMon[];
  RenderComponent: React.FC<any>;
  title: string;
  pageLimit: number;
  dataLimit: number;
  fetchDataFromServer: (v: number) => void;
};

export const Pagination = ({
  data,
  RenderComponent,
  title,
  pageLimit,
  dataLimit,
  fetchDataFromServer,
}: PaginationProps): JSX.Element => {
  const [pages] = useState(Math.round(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  function changePage(event: any) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPaginationGroup = () => {
    const start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill(0).map((_, idx) => start + idx + 1);
  };

  useEffect(() => {
    fetchDataFromServer(currentPage);
  }, [currentPage, fetchDataFromServer]);

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
              currentPage === item ? 'active' : ''
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
