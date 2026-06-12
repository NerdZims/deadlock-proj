import Card from "../components/Card";
function DisplayItems(data) {
  const baller = data;
  console.log("This is the DisplayItems function " + baller[0].name, baller[0].id, baller[0].description);
  return (
    <div>
      {baller.map((item) => (
        <Card
          key={item.id}
          img={item.shop_image_webp}
          title={item.name}
          id={item.id}
          desc={item.description}
          
        />
      ))}
    </div>
  );
}

export default DisplayItems;
