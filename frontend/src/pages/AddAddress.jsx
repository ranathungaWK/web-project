import React, { useState } from 'react'
import { assets } from '../assets/assets'

const InputField = ({type, placeholder, name, handleChange, address}) => (
    <input className='w-full px-2 py-2.5 border border-gray-500/30 rounded outline-none
    text-gray-500 focus:border-primary transition'
    type={type}
    placeholder={placeholder}
    onChange={handleChange}
    name={name}
    value={address[name]}
    required
     />
)

const AddAddress = () => {  

    const [address, setAddress] = useState({
        firstname: '',
        lastname: '',
        email: '',
        street: '',
        city: '',
        country: '',
        state: '',
        zipcode: '',
        phone: '',
    })
    
    // ✅ FIXED: was using wrong reference "AddAddress" instead of "prevAddress"
    const handleChange = (e) => {
        const { name, value } = e.target;
        setAddress((prevAddress) => ({
            ...prevAddress,
            [name]: value
        }));
    };

    // ✅ FIXED: moved this outside of handleChange
    const onSubmitHandler = async(e) => {
        e.preventDefault();
    };

    return (
        <div className='mt-16 pb-16'>
        <p className='text-2xl md:text-3xl text-gray-500'>
            Add Shipping <span className='font-semibold text-primary'>Address</span>
        </p>

        <div className='flex flex-col md:flex-row justify-between mt-10 items-start'>

            <div className='flex-1 max-w-md'>
                <form onSubmit={onSubmitHandler} className='space-y-3 mt-6 text-sm'> 
                    <div className='grid grid-cols-2  gap-4'>
                        <InputField handleChange={handleChange} address={address}
                        name='firstname' type='text' placeholder='First Name'/>
                        <InputField handleChange={handleChange} address={address}
                        name='lastname' type='text' placeholder='Last Name'/>
                    </div>
                    <InputField handleChange={handleChange} address={address}
                        name='email' type='email' placeholder='Email Address'/>
                    <InputField handleChange={handleChange} address={address}
                        name='street' type='text' placeholder='Street Address'/> 

                    <div className='grid grid-cols-2 gap-4'>
                        <InputField handleChange={handleChange} address={address}
                        name='city' type='text' placeholder='City'/>
                        <InputField handleChange={handleChange} address={address}
                        name='state' type='text' placeholder='state'/>
                    </div> 
                    <div className='grid grid-cols-2 gap-4'>
                        <InputField handleChange={handleChange} address={address}
                        name='zipcode' type='text' placeholder='Zipcode'/>
                        <InputField handleChange={handleChange} address={address}
                        name='country' type='text' placeholder=' country'/>
                    </div> 
                    <InputField handleChange={handleChange} address={address}
                        name='phone' type='tel' placeholder='Phone Number'/>
                    <button type='submit' className='w-full mt-6 bg-primary text-white py-3
                    hover:bug-primary-dull transtition cursor-pointer uppercase'>
                        Save Address
                    </button>

                </form> 
            </div>

            <div className='flex-shrink-0 md:ml-16'>
                <img 
                    src={assets.add_address_iamge} 
                    alt="add address" 
                    className='w-full max-w-sm mb-8 md:mb-0' 
                />
            </div>
        </div>
        </div>
    )
}

export default AddAddress;
