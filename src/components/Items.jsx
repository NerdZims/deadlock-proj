import DisplayItems from "./displayItems";

function Items() {
  const filteredItems = [];
  fetch("https://api.deadlock-api.com/v1/assets/items/by-type/upgrade", {
    headers: {
      "accept" : "application/json",
      'Content-Type': 'text/plain',
      "shopable" : "true"
    }
  })
  .then((res) => res.json())
  .then((data) => {
    data.forEach(element => {
      if(element.shopable == true && element.cost < 9999){
        //console.log(element.name);
        filteredItems.push(element);
      }
      
    });
    console.log(filteredItems.length);
    DisplayItems(filteredItems);
  })
  .catch((error) => console.error(error));
}

export default Items;
/*
{data.map((item) => (
          <Card key={item.id} img={item.shop_image_webp} title={item.name} id={item.id} desc={item.description}/>
        ))}
*/