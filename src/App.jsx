import { useState, useEffect, use } from 'react'
import './App.less'

function App() {
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

    if (value != ''){
      setfilteredProducts(products.filter((movie)=> movie.title.startsWith(value)))
    }
    else{
      setfilteredProducts([])
    }
  }

  const addTocard = (el) =>{
    const checkCardtovalue = card.some((item)=> item.id === el.id)
    if(!checkCardtovalue){
      setcard((prevcard) => [...prevcard, el])
    }
  }

  const removeTocard = (index) =>{
    setcard((prevcard) => prevcard.filter((_, i)=> i !== index))
  }

  return (
    <main>
        <div className='searchBlock'>
            <input type="text" value={txt} onChange={hello}/>
            <ul>
              {filteredProducts.map((el)=>(
                <li key={el.id}>
                  <h3>{el.title}</h3>
                  <p>${el.price}</p>
                  <button onClick={()=> addTocard(el)}>Купить</button>
                </li>
              ))}
            </ul>
      </div>

      <div className='productBlock'>
        <div className='allProducts'>
          {
            products.map((el)=>(
              <nav key={el.id}>
                <h1>{el.title}</h1>
                <p>Price: ${el.price}</p>
              </nav>
            ))
          }
        </div>
      </div>
        
      <button className='openBasket' >Open Saved</button>
      {/* <div className="container">
        <article>
          <aside>
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
          <aside className='Payment'>

            <div>
              <h2>Card Details</h2>
            </div>

            <p>Card type</p>
            <nav>

            </nav>
            <form>
              <p>Name on card</p>
              <input type="text" placeholder='name'/>
              <p>Card Number</p>
              <input type="text" placeholder='1111 2222 3333 4444'/>
              <div>
                <nav>
                  <p>Expiration date</p>
                  <input type="text" placeholder='mm/yy'/>
                </nav>
                <nav>
                  <p>CVV</p>
                  <input type="text" placeholder='123' />
                </nav>
              </div>

            </form>
          </aside>  
        </article>
      </div> */}
    </main>
  )
}

export default App











