import React from 'react';

export default function NavArrows({direction, onClick = () => {console.log('Não foi passado nenhuma função')}}) {
  const arrowDirection = direction === 'left' ? 'left' : 'right';
  const arrowClass = `nav-arrow p-2 rounded-full flex items-center duration-300 justify-center ${arrowDirection}`;
  const ariaLabel = direction === 'left' 
    ? 'Navegar para página anterior' 
    : 'Navegar para próxima página';

  return (
    <div className="nav-arrows">
      <button className={arrowClass} onClick={onClick} aria-label={ariaLabel}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.25 4.5L15.75 12L8.25 19.5"
            stroke="currrentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
