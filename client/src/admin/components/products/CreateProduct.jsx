import React, { useState } from 'react'
import './createproduct.css'

const CreateProduct = () => {
    const [product, setProduct] = useState({
        name: "", price: 0, desc: "", photos: [], category: "", brand: "", stocks: ""
    })

    const inputHandler = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value,
        })
    }

    const imageHandler = (e) => {
        // console.log(e.target.files);

        setProduct({
            ...product,
            [e.target.name]: e.target.files,
        })

    }
    
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(product);
    }

  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-lg-4 mx-auto mt-4">
                    <form action="">
                        <div className="mb-3">
                            <h2>Create Product</h2>
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder='Enter Product Name' name='name' onChange={inputHandler} />
                        </div>
                        <div className="mb-3">
                            <input type="number" className="form-control" placeholder='Enter Product Price' name='price' onChange={inputHandler} />
                        </div>
                        <div className="mb-3">
                            <textarea rows="3" className="form-control" placeholder="Enter Product Description" name='desc' onChange={inputHandler}></textarea>
                        </div>
                        <div className="mb-3">
                            <input type="file" className="form-control" multiple name='photos' onChange={imageHandler} accept='image/png, image/jpg, image/jpeg'/>
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder='Enter Product Category' name='category' onChange={inputHandler} />
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder='Enter Product Brand' name='brand' onChange={inputHandler} />
                        </div>
                        <div className="mb-3">
                            <input type="number" className="form-control" placeholder='Enter Product Stocks' name='stocks' onChange={inputHandler} />
                        </div>
                        <div className="d-grid gap-2">
                            <input type="submit" className="btn btn-block btn-primary" value="Create Product" onClick={submitHandler} />
                        </div>
                    </form>
                </div>
                <div className="col-lg-6">
                    {JSON.stringify(product)}
                </div>
            </div>
        </div>
    </>
  )
}

export default CreateProduct