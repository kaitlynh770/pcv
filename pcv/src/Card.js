import profile from "./assets/images/prof-image.png";
import "./assets/scss/cover-letter.scss";

function Card({ cardImageSrc, title, children }) {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img className="card-image" src={cardImageSrc} style={{ width: "350px" }} />
          <p className="text-for-card">{title}</p>
          <img className="profile-image-card" src={profile} />
          <p className="text-next-to-photo">Uploaded by kaitlyn</p>
        </div>
        <div className="card-back">
          <p className="text-explanation">{children}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
