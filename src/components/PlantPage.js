import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [plantFilter, setPlantFilter] = useState('')

  console.log(plantFilter)

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(r => r.json())
    .then(data => setPlants(data))
  }, [])

  // const MappingPlants = plants.map(plant => plant.name)
  // console.log(MappingPlants)
  console.log(plants)
  const filteringPlants = plants.filter(plant => {
    if (plant.name.includes(plantFilter.toUpperCase())) {
      return plant;
    }
    return null;
  })
  // console.log

  

  return (
    <main>
      <NewPlantForm setPlants={setPlants} plants={plants}/>
      <Search plantFilter={plantFilter} setPlantFilter={setPlantFilter}/>
      <PlantList plants={filteringPlants}/>
    </main>
  );
}

export default PlantPage;
