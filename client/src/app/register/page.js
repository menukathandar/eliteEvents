'use client'

import React, { useEffect,useRef } from 'react';
import { useFormik } from 'formik';
import {Button,Input} from "@nextui-org/react";
import * as Yup from 'yup';
 
const SignupSchema = Yup.object().shape({
  Fullname: Yup.string()
    .min(5, 'Too Short!')
    .max(25, 'Too Long!')
    .required('Required'),
  Address: Yup.string()
    .min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  Email: Yup.string().email('Invalid email').required('Required'),
  Username: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'), 
  Password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'), 
  
});
const SignupForm = () => {
  const inputRef = useRef(null)
  useEffect (() =>{
    if(inputRef.current){
      inputRef.current.focus()
    }
  },[])
  const formik = useFormik({
    initialValues: {
     Fullname: '',
     Address: '',
     Email: '',
     Username:'',
     Password:''
    },
    validationSchema:SignupSchema,
    onSubmit: values => {
      console.log('Form values:',values)
      registerUser(values)
    },
  });
  const registerUser =async(values)=>{
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
  };
  const response = await fetch('http://localhost:4000/register', requestOptions);

     }

  return (
    <form onSubmit={formik.handleSubmit}>
       <div>
          <div className="flex justify-center">
           <div className= 'border border-black m-7 w-72 p-2'>
           <div className="mb-2">
            <label htmlFor="Fullname"></label>
              <Input
                ref={inputRef}
                isClearable
                label="Fullname"
                variant="bordered"
                onChange={formik.handleChange}
                name="Fullname"
                value={formik.values.Fullname}
                placeholder="Enter your Fullname"
                className="max-w-xs"
                onClear = {()=>{
                  formik.setFieldValue("Fullname",'')
                }}
              />
              {formik.errors.Fullname}
            </div>
            <div className="mb-2">
            <label htmlFor="Address"></label>
              <Input
                isClearable
                label="Address"
                variant="bordered"
                onChange={formik.handleChange}
                name="Address"
                value={formik.values.Address}
                placeholder="Enter your Address"
                className="max-w-xs"
                onClear = {()=>{
                  formik.setFieldValue("Address",'')
                }}
              />
              {formik.errors.Address}
            </div>
            {/* <div className="mb-2">
            <label htmlFor="DateOfBirth"></label>
              <Input
                isClearable
                type="date"
                label="DateOfBirth"
                variant="bordered"
                onChange={formik.handleChange}
                name="DateOfBirth"
                value={formik.values.DateOfBirth}
                placeholder="Enter your DateOfBirth"
                defaultValue="junior@nextui.org"
                className="max-w-xs"
                onClear = {()=>{
                  formik.setFieldValue("DateOfBirth",'')
                }}
              />
              {formik.errors.DateOfBirth}
            </div> */}
            <div className="mb-2">
            <label htmlFor="Email"></label>
              <Input
                isClearable
                type="Email"
                label="Email"
                variant="bordered"
                onChange={formik.handleChange}
                name="Email"
                value={formik.values.Email}
                placeholder="Enter your Email"
                defaultValue="junior@nextui.org"
                onClear = {()=>{
                  formik.setFieldValue("Email",'')
                }}
                className="max-w-xs"
              />
              {formik.errors.Email}
            </div>
            <div className="mb-2">
            <label htmlFor="Username"></label>
              <Input
                isClearable
                label="Username"
                variant="bordered"
                onChange={formik.handleChange}
                name="Username"
                value={formik.values.Username}
                placeholder="Enter your Username"
                defaultValue="junior@nextui.org"
                onClear = {()=>{
                  formik.setFieldValue("Username",'')
                }}
                className="max-w-xs"

              />
              {formik.errors.Username}
            </div>
            <div className="mb-2">
            <label htmlFor="Password"></label>
              <Input
                isClearable
                type="Password"
                label="Password"
                variant="bordered"
                onChange={formik.handleChange}
                name="Password"
                value={formik.values.Password}
                placeholder="Enter your Password"
                onClear = {()=>{
                  formik.setFieldValue("Password",'')
                }}
                className="max-w-xs"
              />
              {formik.errors.Password}
            </div>
              <Button type="submit" radius="full" className="bg-gradient-to-tr from-green-500 to-blue-500 text-white shadow-lg">
                Sign Up
              </Button>
          </div>
        </div>
      </div>
    </form>
  );
};


export default SignupForm