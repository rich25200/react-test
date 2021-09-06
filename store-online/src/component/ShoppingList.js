import { plantList } from '../datas/plantList'

function ShoppingList() {

    const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	);
    
    console.log(categorie);
    return (
        <ul>
            {plantList.map((plant, index) => (
                <li key={plant.id}>{plant}</li> 
            ))}
        </ul>
    )
}

export default ShoppingList