import React, {useMemo} from 'react'
import './index.styled.css'

const ProductsList = (props) => {
    const {products} = props

    const liveProducts = useMemo(() => products, [products])

  return (
    <div>
        {liveProducts?.map((el,index) => (
            <div className="productCard" key={el?.title+index}>
                <img src={el?.image} alt={el?.title} />
                <div>
                    <p>{el?.title}</p>
                    <p>{el?.category}</p>
                    <p>{el?.description}</p>
                    <p>{el?.price}</p>
                </div>
            </div>)
        )}
    </div>
  )
}

export default ProductsList