import {useState, useEffect} from "react";
import Card from "./Card";


export default function Items(){
  //Create state to hold data safely
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  //Use useEffect to fetch data
  useEffect(() => {
    fetch("https://api.deadlock-api.com/v1/assets/items/by-type/upgrade", {
      headers: {
        accept: "application/json",
        "Content-Type": "text/plain",
        shopable: "true"
      },
  })
  .then((res) => res.json())//take response and convert to JSON for easy handling
  .then((data) => {
    //Filter the data
    const filteredItems = data.filter((item) => item.shopable === true && item.cost < 9999);
    //Update the state with the filtered data
    setItems(filteredItems);
    //Data is filtered and prepped now to change Loading state
    setIsLoading(false);
  }).catch((error) => {
    console.error(error);
    setIsLoading(false);
  });
  }, []);//We only want to fetch the data once when mounting, empty array makes that happen<3
  //Something for Loading
  if(isLoading){
    return <p>Loading items in The Cursed Apple...</p>;
  }
  //If there are no items loaded
  if(items.length === 0){
    return <p>No items available in The Cursed Apple.</p>;
  }
  


  return (
    <div className="items-ctr">
      {console.log("The items component has mounted", items.length, "items loaded.", items[0])}
        {items.map((item) => (
          <Card
            key={item.id}
            img={item.shop_image_webp}
            title={item.name}
            id={item.id}
            
          />
        ))}
    </div>
  );
}


/*
{data.map((item) => (
          <Card key={item.id} img={item.shop_image_webp} title={item.name} id={item.id} desc={item.description}/>
        ))}
fetch("https://api.deadlock-api.com/v1/assets/items/by-type/upgrade", {
    headers: {
      accept: "application/json",
      "Content-Type": "text/plain",
      shopable: "true",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      data.forEach((element) => {
        if (element.shopable == true && element.cost < 9999) {
          //console.log(element.name);
          filteredItems.push(element);
        }
      });
      console.log(filteredItems.length);
      DisplayItems(filteredItems);
    })
    .catch((error) => console.error(error));
*/
