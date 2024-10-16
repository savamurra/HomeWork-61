import './Countries.css';
import * as React from 'react';
interface Props {
  name: string;
  onClick: React.MouseEventHandler;
}


const Countries: React.FC<Props> = ({name, onClick}) => {

  return (
      <p onClick={onClick}>{name}</p>
  );
};

export default Countries;