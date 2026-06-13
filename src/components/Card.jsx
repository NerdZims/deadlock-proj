import "../styles/Card.scss"
import parse from 'html-react-parser';

function Card({img, title, id, desc}){
    //Create a on click function to the cards
    const handleClick = () => {
        console.log(title + " was clicked.");
    }
    
    return(
        // img desc title cost
        <div className="card-obj" onClick={handleClick}>
            <div className="img-holder">
                <img src={img} alt="Card image"/>
            </div>
            <div className="desc-holder">
                <h4>{title}</h4>

                <br/>
                <p>{id}</p>
            </div>
        </div>
    );
}


export default Card;