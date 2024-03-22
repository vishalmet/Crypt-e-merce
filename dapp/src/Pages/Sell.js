import React, { useState } from 'react';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import app from '../firebase';

const Sell = () => {

  const [image, setImage] = useState('');
  const [sellerAddress, setSellerAddress] = useState('');
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [productStatus, setProductStatus] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission, you can send the form data to your backend here

    if (image){
      const storage = getStorage(app);
      const storageRef = ref(storage, image.name);
      await uploadBytesResumable(storageRef, image);
      const downloadURL = await getDownloadURL(storageRef);
      try {
        console.log(downloadURL);
      } catch (error) {
        
      }
    }

    console.log({
      sellerAddress,
      productName,
      category,
      description,
      price,
      productStatus
    });
  };
  return (
    <div className='flex items-center justify-center '>
    <div onSubmit={handleSubmit} className="max-w-md w-full space-y-2">
      <label htmlFor="seller_address" className='font-semibold text-md'>Seller Address:</label><br />
      <input
        className='border-black border-2 rounded-md px-3 py-1 w-full'
        type="text"
        id="seller_address"
        value={sellerAddress}
        onChange={(e) => setSellerAddress(e.target.value)}
        required
      /><br /><br />

      <label htmlFor="product_name" className='font-semibold text-md'>Product Name:</label><br />
      <input
        className='border-black border-2 rounded-md px-3 py-1 w-full'
        type="text"
        id="product_name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        required
      /><br /><br />

      <label htmlFor="category" className='font-semibold text-md'>Category:</label><br />
      <select
        className='border-black border-2 rounded-md px-3 py-1 w-full'
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="vehicle">Vehicle</option>
        <option value="dress">Dress</option>
        <option value="mobile">Mobile</option>
        <option value="furniture">Furniture</option>
      </select><br /><br />

      <label htmlFor="description" className='font-semibold text-md'>Description:</label><br />
      <textarea
        className='border-black border-2 rounded-md px-3 py-1 w-full'
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows="1"
        required
      ></textarea><br /><br />

      <label htmlFor="price" className='font-semibold text-md'>Price:</label><br />
      <input
        className='border-black border-2 rounded-md px-3 py-1 w-full'
        type="number"
        id="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        min="0"
        step="0.01"
        required
      /><br /><br />

      <label htmlFor="product_status" className='font-semibold text-md'>Product Status:</label><br />
      <input
        className='border-black border-2 rounded-md px-3 py-1 w-full'
        type="text"
        id="product_status"
        value={productStatus}
        onChange={(e) => setProductStatus(e.target.value)}
        required
      /><br /><br />

    
         <label htmlFor="image" className='font-semibold text-md'>Upload Image:</label><br />
        <input className='border-black border-2 bg-green-300 rounded-md'
          type="file"
          id="image"
          value={image}
          onChange={(e) => setImage(e.target.files[0])}
          required
        /><br /><br /> 


        
        <button type="submit" value="Submit" className='border-2 border-red-400 text-xl font-bold  px-3 py-2 bg-red-400 rounded-lg hover:bg-black hover:border-white hover:text-red-600'>Submit</button>
      </div>
    </div>
  )
}

export default Sell