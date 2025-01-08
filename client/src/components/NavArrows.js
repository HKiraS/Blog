import React from 'react';
import { ReactComponent as ArrowSvg } from '../assets/icon/right.svg';

export default function NavArrows({
  direction,
  classes,
  onClick = () => {
    console.log('Não foi passado nenhuma função');
  },
}) {
  const arrowDirection = direction === 'left' ? 'left' : 'right';
  const arrowClass = `nav-arrow p-2 rounded-full flex items-center duration-300 justify-center ${arrowDirection} ${classes}`;
  const ariaLabel =
    direction === 'left'
      ? 'Navegar para página anterior'
      : 'Navegar para próxima página';

  return (
    <button className={arrowClass} onClick={onClick} aria-label={ariaLabel}>
      <ArrowSvg />
    </button>
  );
}
