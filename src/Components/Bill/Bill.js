import React from 'react';
import { FaPen, FaEye, FaPlusCircle, FaRegTrashAlt } from "react-icons/fa";
import './Bill.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Bill({products, empty, remove}) {       
    var total = products.reduce((amount, item) => (amount+parseInt(item.price)),0);        
    
    const productCount = products.length

    console.log(productCount);

    const handleEmptyBill = () => {
        empty();
    }

    const handlePrint = () => {
        window.print();
    }

    const handleDeleteProduct = (item) => {
        remove(item);
    }

    const notify = () => toast.success("The Order is Saved Successfully",{position: "top-right",autoClose: 3000,});

    return (
        <div className="bill">
            <div className="bill__information">
                <div className="cafe">
                    <div className="customer_name">
                        <div className="seller-info">
                            <h1>WebX Global LLC</h1>
                        </div>
                    <form >
                     <div className="cName">
                    <input placeholder='Walk-in Customer' type="text" id="cname" name="cname"/>
                    <FaPen className="icon" />
                    <FaEye className="icon" />
                    <FaPlusCircle className="icon" />

                     </div> 
                        <div className="wName">
                        <select name="warehouse" id="warehouse">
                        <option value="volvo">Warehouse 1</option>
                        <option value="saab">Warehouse 2</option>
                    </select>
                        </div>

                     <div className="bName">
                    <input placeholder='Scan/Search Product/Code' type="text" id="cname" name="cname"/>
                    <FaPlusCircle className="icon" />
                     </div> 
                    </form>
                    </div>
                    
                </div>              
                <div className="bill__table">
                    <table>
                        <thead>
                            <tr>
                                <th className="items__description">Product</th>
                                <th className="items__qty">Price</th>
                                <th className="items__price">Oty</th>
                                <th className="subtotal-tbl">Subtotal</th>
                                <th className="remove-icon"><FaRegTrashAlt /> </th>
                            </tr>
                        </thead>   
                        <tbody>            
                        {products?.map((item, index) => (                            
                            <tr key={index}>
                                <td className="items__description">{item.name}</td>
                                <td>{item.price}</td>
                                <td>1</td>
                                
                                <td>{item.price}</td>
                                <td onClick={() => handleDeleteProduct(item)} className="remove-icon">❌</td>
                            </tr>                            
                        ))}                                            
                        </tbody>                     
                    </table>
                </div>

                <div className="subtotal">
                      
                    <div className="subtotal__price">                                                      
                        <p>
                        Items <span>{productCount} ({productCount}.00)</span>
                        </p>
                        <p>
                        Total <span>$ {total}</span>
                        </p>
                        <p>
                        Order Tax <span>0.00</span>
                        </p><p>
                        Discount <span>(0.00) 0.00</span>
                        </p>
                        
                    </div>                                     
                                       
                </div>

            </div>
            <div className="bill__actions">
                <button className='total-payable' >Total Payable + <span> $ {total} </span> </button>            
                <button className='suspend'>Suspend</button>
                <button className='order' onClick={notify}>Order</button>
                <button className='payment'  >Payment</button>
                
                <button className='cancel' onClick={() => handleEmptyBill()}>Cancel</button>
                <button className='bill-preview' onClick={() => handlePrint()} >Bill Preview</button>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Bill
