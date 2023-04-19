import React, { useEffect, useState }  from "react";
import ListingCard from "./ListingCard";

const baseUrl = 'http://localhost:6001/'
const listingsUrl = baseUrl + 'listings/'

function ListingsContainer({search}) {
  
  const [currentListings, setCurrentListings ] = useState([])

  useEffect(() => {
    fetch(listingsUrl)
      .then(r => r.json())
      .then(data => setCurrentListings(data))
  }, [])
  
  function handleDeleteListing(id) {
    const updatedListings = currentListings.filter(currentListings => currentListings.id !== id)
    setCurrentListings(updatedListings)
  }

  const filteredListings = currentListings.filter(currentListings => {
    return currentListings.description.toLowerCase().includes(search.toLowerCase())
  })

  let cardElements = filteredListings.map(item => {
    return <ListingCard
      key={item.id}
      id={item.id}
      description={item.description}
      image={item.image}
      location={item.location}
      listingsUrl={listingsUrl}
      deleteListing={handleDeleteListing}
    />
  })



  return (
    <main>
      <ul className="cards">
        {cardElements}
      </ul>
    </main>
  );
}

export default ListingsContainer;
