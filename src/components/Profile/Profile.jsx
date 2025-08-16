import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";
import "./Profile.css";

function Profile({
  onCardClick,
  clothingItems,
  onEditProfile,
  onAddItem,
  onCardLike,
  onSignOut,
  isLoggedIn,
}) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar onEditProfile={onEditProfile} onSignOut={onSignOut} />
      </section>
      <section className="profile__clothing-items">
        <ClothesSection
          onCardClick={onCardClick}
          clothingItems={clothingItems}
          onAddItem={onAddItem}
          onCardLike={onCardLike}
          isLoggedIn={isLoggedIn}
        />
      </section>
    </div>
  );
}

export default Profile;
