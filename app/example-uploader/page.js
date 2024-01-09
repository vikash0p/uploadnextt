"use client";

// // import { UploadButton, UploadDropzone } from "@uploadthing/react";
import { UploadDropzone } from "@/utils/uploadthing";
import Image from "next/image";


import React, { useState } from 'react';

const UploadData = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        images: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));



    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
        // You can add your form submission logic here
    };

    return (
        <div className="container h-screen mx-auto mt-8">
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Your Name"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Your Email"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Your Password"
                    />
                </div>
                <div>

                    {
                        formData.images && (
                            <button
                                type="button"
                                className='bg-gray-800 px-6 py-2 text-lg text-white rounded-md '
                                onClick={() => {
                                    
                                    setFormData((prev) => ({
                                        ...prev,
                                        images: ''
                                    }));
                                    alert('This image is deleted!');
                                }}
                            >
                                Change Image
                            </button>)
                    }
                </div>
                {
                    formData.images ?
                        <Image
                            src={formData.images}
                            width={1000}
                            height={600}
                            alt='images'
                            className="w-full h-64 object-cover my-5"
                        /> : (
                            <UploadDropzone
                                endpoint="imageUploader"

                                onClientUploadComplete={(res) => {
                                    console.log("Files: ", res[0].url);
                                    const imageUrl = res[0].url; // Assuming the URL is the image data
                                    setFormData((prevData) => ({ ...prevData, images: imageUrl }));
                                    console.log("Files: ", imageUrl);
                                    alert("Upload Completed");

                                }}
                                onUploadError={(error) => {
                                    alert(`ERROR! ${error.message}`);
                                }}
                            />
                        )
                }


                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UploadData;
