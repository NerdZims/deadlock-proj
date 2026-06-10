import Card from "../components/Card";
function DisplayItems(data) {
  console.log(data);
  return (
    <div>
      {data.map((item) => (
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
