import React from 'react';

const Pagination = ({ gifsPerPage, totalGifs, paginate }) => {
  const totalPageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalGifs / gifsPerPage); i++) {
    totalPageNumbers.push(i);
  }

  return (
    <div>
      <ul className='pagination'>
        {totalPageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='!#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;