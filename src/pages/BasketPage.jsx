import Cards from "./Cards"
import PaymentPage from "./PaymentPage"
import './BasketPage.less'

function Basket(){
    return(
        <article>
            <Cards/>
            <PaymentPage/>
        </article>
    )
}

export default Basket