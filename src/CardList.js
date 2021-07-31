import React from 'react';
import Card from './Card';

const CardList = ({ Profiles }) => {



  return (
    <div>
      {
        Profiles.map((user, i) => {
          return (
            <Card
              key={i}
              id={Profiles[i].id}
              name={Profiles[i].name}
              email={Profiles[i].email}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;