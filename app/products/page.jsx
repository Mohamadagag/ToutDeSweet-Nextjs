import ProductCard from '@/components/ProductCard'
import allproducts from '@/data/allproducts'

const ProductsPage = async() => {

  return (
    <div className='my-10 grid justify-items-center gap-4 md:grid-cols-2 md:gap-y-24 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-0 xl:px-20'>
      {allproducts.map((product) => {
        return (
          <ProductCard name={product.name} productName={product.name}  key={product.id} link={product.id} imageURL={product.image[0]}/>
          )
        })}
    </div>
  )
}

export default ProductsPage