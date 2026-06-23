import "../styles/Card.scss"

function Card({img, title, id, desc}){
    //Create a on click function to the cards
    const handleClick = () => {
        console.log(title + " was clicked.");
    }
    
    return(
        // img desc title cost
        <div className="card-obj" onClick={handleClick} type={desc} id={id}>
            <div className="img-holder">
                <img src={img} alt="Card image"/>
            </div>
            <div className="desc-holder">
                <h4>{title}</h4>

                <br/>
                <p>{desc}</p>
            </div>
        </div>
    );
}


export default Card;