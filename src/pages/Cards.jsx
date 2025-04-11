import { useState, useEffect } from "react"
import './Cards.less'

function Cards() {
    const [txt, setTxt] = useState('')
    const [card, setcard] = useState([])
    const [products, setProducts] = useState([])
    const [filteredProducts, setfilteredProducts] = useState([])
    const [showCart, setShowCart] = useState(false)
  
    useEffect(()=>{
      fetch('/movies.json')
        .then((response)=>response.json())
        .then(data => {
          setProducts(data)
        })
    },[])
  
    const hello = (e)=>{
      const value = e.target.value 
      setTxt(value)
  
      setfilteredProducts(products.filter((movie)=> movie.title.startsWith(value)))
    }
  
    const addTocard = (el) =>{
      setcard((prevcard) => [...prevcard, el])
    }
  
    const removeTocard = (index) =>{
      setcard((prevcard) => prevcard.filter((_, i)=> i !== index))
    }
  
    return(
        <aside className="card">
            <input type="text" value={txt} onChange={hello}/>
            <ul>
                {filteredProducts.map((el)=>(
                <li key={el.id}>
                    {el.title}
                    <button onClick={()=> addTocard(el)}>Купить</button>
                </li>
                
                ))}
            </ul>

            <button onClick={()=> setShowCart(!showCart)}>
                {showCart ? "Закрыть Корзину" : "Открыть Корзину"}
            </button>
            
            {showCart && (
                <ul className='products'>
                {
                card.map((el, index)=>(
                    <li key={index}>
                    {el.title}
                    <button onClick={()=> removeTocard(index)}>Удалить</button>
                    </li>
                ))
                }
            </ul>
            )
            }
              
        </aside>
    )
}

export default Cards;