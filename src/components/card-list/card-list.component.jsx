import react from 'react';
import Card from "../card/card.component";
import "./card-list.component.css";

const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => (

        <react.Fragment key={monster.id}>
        <Card monster={monster} />
        </react.Fragment>
      
      )    
      )}
    </div>
  );
};

export default CardList;
