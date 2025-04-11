import { Link } from "react-router-dom";
import BasketPage from "./BasketPage";


function HomePage(){
    return(
        <main className="main">
            <div className="container">
                <BasketPage/>
            </div>
        </main>
    )
}

export default HomePage;