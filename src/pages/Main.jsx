import Items from "../components/Items.jsx";
import "../styles/Main.scss";
import Counter from "../components/Counter.jsx";
import Footer from "../components/Footer.jsx";

function Main(){
    return(
        <div className="main-ctr">
            <aside class="sidebar">
                <h3>Menu</h3>
                <hr/>
                <nav class="nav">
                <ul>
                    <li><a href="#">Gun</a></li>
                    <li><a href="#">Spirit</a></li>
                    <li><a href="#">Vitality</a></li>
                </ul>
                </nav>
            </aside>
            <div className="main-content-ctr">
                <h1>Hello Scss</h1>
                <p>We want to collect the cards in the game and organize them. Cards collected not yet organized<br/>First by category<br/>Followed by tier<br/>And lastly Alphabetically</p>
                <h5>
                    Below will be the list of purchasable items in deadlock
                </h5>
                <Counter/>
                <div className="item-list">
                    <Items/>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Main;