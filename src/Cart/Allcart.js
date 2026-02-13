import React from 'react'
import { Link } from 'react-router';
import { useCart,CartProvider } from 'react-use-cart';
import Subnav from '../components/Subnav';
import Header from '../components/Header';
import Footer from '../components/Footer';

    function Cart() {
    
        const { totalUniqueItems, items, cartTotal, updateItemQuantity, removeItem, totalItems, emptyCart, isEmpty } = useCart();
        if (isEmpty) {
            return (
                <div className="container">
                    <div className="row">
                    <h1 className='text-center mt-5'>Your Cart Is Empty</h1>
                    <Link to="/Allshop" className='btn btn-primary p-3 mt-4 w-25 m-auto' >Continue Shopping</Link>
                    </div>
                </div>
            )
            

        }
            
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-10 m-auto text-center">
                        <h1 className='mt-3'>All product <span className="badge badge-primary rounded">{totalUniqueItems}</span></h1>
                        <table className="table table-dark mt-4">

                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item) => (
                            <tr key={item.id}>
                                <td><img src={item.images[0]} alt={item.title} style={{ width: '100px' }} /></td>
                                <td>{item.title}</td>
                                <td>{item.price}$</td>
                                <td>{item.quantity}</td>
                                <td>
                                    <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} className='btn btn-warning mx-2'>-</button>
                                    <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} className='btn btn-success '>+</button>
                                    <button onClick={() => removeItem(item.id)} className='btn btn-danger mx-2'> &times;</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>

                    <tfoot>
                        <tr>
                            <th>Total</th>
                            <th>........</th>
                            
                            <th>{Math.floor(cartTotal)}$</th>
                                    <th>{totalItems}</th>
                            <th><button onClick={() => emptyCart()} className='btn btn-danger'>Empty Cart</button></th>
                        </tr>
                    </tfoot>
                        </table>
                        <Link to="/DataApi" className='btn btn-primary p-3' >Continue Shopping</Link>
            </div>
                </div>
            </div>
  )
}

function Allcart() {
    return (
        <CartProvider>
            <Subnav />
            <Header />
            <Cart />
            <Footer />
        </CartProvider>
    )
}

export default Allcart;