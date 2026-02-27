

import MenuCard from "../Components/MenuCard"

const RestCategory = ({ category, showItems, setIndex,  }) => {


  const handleClick = () => {
    setIndex();
  };

  return (
    <div className="category-accordian">
      {/* Header */}
      <div className="category-header" onClick={handleClick}>
        <span>
          {category.title} ({category.itemCards.length})
        </span>{" "}
        {showItems ? <span>▲ </span> : <span>▼</span> }
      </div> 

      {/* Accordion Body */}
      {showItems && (
        <div className="menu-item-wrapper">
          {category.itemCards.map((itemCard) => {
            return (
				
              <MenuCard
                key={itemCard.card.info.id}
                menuItem={itemCard.card.info}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default RestCategory;