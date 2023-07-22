import React, { useEffect, useState } from 'react'
import { Button, Col, Row, Table } from 'react-bootstrap'
import AddProduct from './AddProduct'
import './product.css'
import { useDispatch, useSelector } from 'react-redux'
import { getAdminProducts } from '../../../../redux/product/product.action'

const Products = () => {
  const [addProduct, setAddProduct] = useState(false)
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch()
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
                <th>Description</th>
                <th>Photo</th>
                <th>Category</th>
                <th>Brand</th>
                <th>Stocks</th>
              </tr>
            </thead>
            <tbody>
              {
                products?.length > 0 ? <>{
                  products.map((product) => {
                    return <tr>
                      <td>{product._id}</td>
                      <td>{product.name}</td>
                      <td>{product.price}</td>
                      <td>{product.description}</td>
                      <td>
                        <img src={product.photos[0].secure_url} height={100} alt="" />
                      </td>
                      <td>{product.category}</td>
                      <td>{product.brand}</td>
                      <td>{product.stocks}</td>
                    </tr>
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