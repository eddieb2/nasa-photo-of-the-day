import React from 'react';
import Title from './Title';
import Image from './Image';
import Description from './Description';

const Card = (props) => {
  return(
    <div className="card">
      <Description />
      <Image />
      <Title />
    </div>
  );
}

export default Card;