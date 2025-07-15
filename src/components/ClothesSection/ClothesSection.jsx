import ItemCard from "../ItemCard/ItemCard";
import { defaultClothingItems } from "../../utils/constants";

function ClothesSection({ onCardClick }) {
  const clothingItems = defaultClothingItems;
  return (
    <div className="clothes__section">
      <div>
        <p>Your items</p>
        <button>+ Add New</button>
      </div>
      <ul className="clothes__section-list">
        {clothingItems.map((item) => {
          return (
            <ItemCard key={item._id} item={item} onCardClick={onCardClick} />
          );
        })}
      </ul>
    </div>
  );
}

export default ClothesSection;
