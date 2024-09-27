import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CRUDForm = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({ id: '', name: '', price: '' });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await axios.get('https://dummyjson.com/products');
    setProducts(response.data.products);
  };

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditing) {
      await axios.put(`https://dummyjson.com/products/${product.id}`, product);
    } else {
      await axios.post('https://dummyjson.com/products/add', product);
    }
    fetchProducts();
    setProduct({ id: '', name: '', price: '' });
    setIsEditing(false);
  };

  const handleEdit = (product) => {
    setProduct(product);
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    await axios.delete(`https://dummyjson.com/products/${id}`);
    fetchProducts();
  };

  return (
    <div className="crud-container">
      <h2>CRUD Operations</h2>
      <form className="crud-form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Product Name" 
          value={product.name} 
          onChange={handleChange} 
          required 
          className="input-field"
        />
        <input 
          type="text" 
          name="price" 
          placeholder="Product Price" 
          value={product.price} 
          onChange={handleChange} 
          required 
          className="input-field"
        />
        <button type="submit" className="submit-button">{isEditing ? 'Update' : 'Create'}</button>
      </form>
      <table className="crud-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <button onClick={() => handleEdit(product)} className="edit-button">Edit</button>
                <button onClick={() => handleDelete(product.id)} className="delete-button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CRUDForm;
