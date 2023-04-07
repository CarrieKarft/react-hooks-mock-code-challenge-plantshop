import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  console.log(plants)

  const plantsMap = plants.map(plant => {
    console.log(plant)
    return <PlantCard key={plant.id} plant={plant} />
  }) 
  return (
    <ul className="cards">{plantsMap}</ul>
  );
}

export default PlantList;
