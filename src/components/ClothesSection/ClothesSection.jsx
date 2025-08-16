import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function ClothesSection({
  onCardClick,
  clothingItems,
  onAddItem,
  onCardLike,
  isLoggedIn,
}) {
  const currentUser = useContext(CurrentUserContext);

  // Filter clothing items to show only those owned by the current user
  const userItems = clothingItems.filter(
    (item) => item.owner === currentUser?._id
  );

  return (
    <div className="clothes__section">
      <div className="clothes__section-header">
        <p>Your items</p>
        <button onClick={onAddItem}>+ Add new</button>
      </div>
      <ul className="clothes__section-list">
        {userItems.map((item) => {
          return (
            <ItemCard
              key={item._id}
              item={item}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              isLoggedIn={isLoggedIn}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ClothesSection;
