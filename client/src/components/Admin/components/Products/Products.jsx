import React, { useEffect, useState } from 'react'
import { Button, Row, Table } from 'react-bootstrap'
import AddProduct from './AddProduct'
import './product.css'
import { useDispatch, useSelector } from 'react-redux'
import { getAdminProducts } from '../../../../redux/product/product.action'
import ProductRow from './ProductRow'

const Products = () => {
  const [addProduct, setAddProduct] = useState(false)
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch()
  console.log(useSelector((state) => state.products));
  useEffect(() => {
    dispatch(getAdminProducts())
  }, [dispatch])

  const toggleAddProduct = () => {
    setAddProduct(!addProduct)
  }

  return (
    <>
      <div style={{ position: "relative"}}>
        {addProduct && <AddProduct setAddProduct={setAddProduct} toggleAddProduct={toggleAddProduct} />}
        <Button style={{float: "right"}} onClick={toggleAddProduct}>Add Product</Button>
        <Row>
            <h2>Products</h2>
        </Row>
        <Row style={{ margin: "1rem"}}>
          <Table striped bordered hover >
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                {/* <th>Description</th> */}
                <th>Photo</th>
                <th>Category</th>
                <th>Brand</th>
                <th>Stocks</th>
                <th className="text-center">Update</th>
                <th className="text-center">Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                products?.length > 0 ? <>{
                  products.map((product) => {
                    return <ProductRow product={product} />
                  })
                }</> : null
              }
            </tbody>
          </Table>
        </Row>
      </div>
    </>
  )
}

export default Products