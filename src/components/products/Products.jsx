import './products.scss'
import useFetchCategory from '../../utils/useFetchCategory'
import usefetchData from '../../utils/useFetchData'
import { useRef, useState } from 'react'

const Products = () => {
  const carousel = useRef(null)
  const category = useFetchCategory('https://fakestoreapi.com/products/categories')
  const products = usefetchData('https://fakestoreapi.com/products')
  const [selectedCategory, setSelectedCategory] = useState('electronics')
  const handleCategory = (e) => {
    setSelectedCategory(e)
  }

  const handlePrev = () => {
    let width = carousel.current.offsetWidth;
    carousel.current.scrollLeft -= width;
  }
  const handleNext = () => {
    let width = carousel.current.offsetWidth;
    carousel.current.scrollLeft = carousel.current.scrollLeft + width;
  }

  return (
    <section id='products-wrapper'>
      <div className='productTitle'>
        <h2 >New products</h2>
      </div>
      <img src="/Star 2.png" alt="star2" />
      <section className='product-section'>
        <section className='product-categories'>
          {
            category?.map(e => (
              <p key={e} onClick={() => handleCategory(e)} className={selectedCategory === e ? 'highlight' : ''}>
                {e[0].toUpperCase() + e.slice(1)}
              </p>
            ))
          }
        </section>
        <button className='prev-btn' onClick={handlePrev}>
          <img src="/arrowBack.png" alt="prev-product" />
        </button >
        <button className='next-btn' onClick={handleNext}>
          <img src="/arrowForward.png" alt="next-product" />
        </button>
        <div ref={carousel} className='product-cards'>
          {
            products?.map(prod => (
              <div key={prod.id} className='card'>
                <img src={prod.image} alt={prod.title} />
                <img src="/goTo.png" alt="go to detals" />
                <div className='details'>
                  <h6>{prod.title}</h6>
                  <p>{prod.description}</p>
                  <h6>$ {prod.price}</h6>
                </div>
              </div>
            ))
          }
        </div>
      </section>
    </section>
  )
}

export default Products
