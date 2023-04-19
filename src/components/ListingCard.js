import React, {useState} from "react";

function ListingCard(props) {
  
  const { id, description, image, location, deleteListing, listingsUrl } = props

  const [isFavorite, setIsFavorite] = useState(false)
  
  function toggleFavorite() {
    setIsFavorite(!isFavorite)
  }

  function handleDelete() {
    fetch(listingsUrl + id, {
      method: 'DELETE'
    })
      .then(r => r.json())
      .then(() => {
        deleteListing(id)
      })
  }

  return (
    <li className="card">
      
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      
      <div className="details">
        {isFavorite ? (
          <button className="emoji-button favorite active"
            onClick={() => toggleFavorite()}>★</button>
        ) : 
        (
            <button className="emoji-button favorite"
              onClick={() => toggleFavorite()}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete"
          onClick={() => handleDelete(id)}>🗑</button>
      </div>
    
    </li>
  );
}

export default ListingCard;
