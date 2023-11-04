import React, { useState } from 'react';
import axios from 'axios';

export default function CreateProductForm() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    quantity: '',
    imageUrl: '',
    category: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setFormData({
        ...formData,
        imageUrl: reader.result
      });
    };

    reader.readAsDataURL(file);
  };

  
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/products/', formData)
          .then(() => {
            console.log('Form data sent successfully:', formData);
          })
          .catch(error => {
            console.error('Error sending form data:', error);
          });
      };
      

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Quantity:</label>
        <input
          type="text"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Category:</label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Image:</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
        />
      </div>
      {formData.imageUrl && (
        <div>
          <label>Preview:</label>
          <img src={formData.imageUrl} alt="Preview" width="100" />
        </div>
      )}
      <button type="submit">Submit</button>
    </form>
  );
}
