'use client'

import React, { useEffect,useRef, useState } from 'react';
import { useFormik } from 'formik';
import {Button,Input, Radio, RadioGroup} from "@nextui-org/react";
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { Router } from 'next/router';
import { useRouter } from 'next/navigation';

const SignupSchema = Yup.object().shape({
  
  fullname: Yup.string()
    .min(5, 'Too Short!')
    .max(25, 'Too Long!')
    .required('Required'),
  address: Yup.string()
    .min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'), 
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'), 
  
});
const SignupForm = () => {
  const router = useRouter()
  const inputRef = useRef(null)
  useEffect (() =>{
    if(inputRef.current){
      inputRef.current.focus()
    }
  },[])
  const formik = useFormik({
    initialValues: {
     fullname: '',
     address: '',
     email: '',
     username:'',
     password:'',
     role:''
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
    const data = await response.json()
    if(response.status == '200'){
      toast.success(data.msg)
      router.push('/login')
    }else{
      toast.error(data.msg)
    }
  }

  return (
    <form onSubmit={formik.handleSubmit}>
       <div>
          <div className="flex justify-center">
           <div className= 'border border-black m-7 w-72 p-2'>
           <div className="mb-2">
            <label htmlFor="fullname"></label>
              <Input
                ref={inputRef}
                isClearable
                label="fullname"
                variant="bordered"
                onChange={formik.handleChange}
                name="fullname"
                value={formik.values.fullname}
                placeholder="Enter your Fullname"
                className="max-w-xs"
                onClear = {()=>{
                  formik.setFieldValue("fullname",'')
                }}
              />
              {formik.errors.fullname}
            </div>
            <div className="mb-2">
            <label htmlFor="address"></label>
              <Input
                isClearable
                label="address"
                variant="bordered"
                onChange={formik.handleChange}
                name="address"
                value={formik.values.Address}
                placeholder="Enter your Address"
                className="max-w-xs"
                onClear = {()=>{
                  formik.setFieldValue("address",'')
                }}
              />
              {formik.errors.address}
            </div>
            <div className="mb-2">
            <label htmlFor="email"></label>
              <Input
                isClearable
                type="email"
                label="email"
                variant="bordered"
                onChange={formik.handleChange}
                name="email"
                value={formik.values.email}
                placeholder="Enter your Email"
                onClear = {()=>{
                  formik.setFieldValue("email",'')
                }}
                className="max-w-xs"
              />
              {formik.errors.email}
            </div>
            <div className="mb-2">
            <label htmlFor="username"></label>
              <Input
                isClearable
                label="username"
                variant="bordered"
                onChange={formik.handleChange}
                name="username"
                value={formik.values.username}
                placeholder="Enter your Username"
                onClear = {()=>{
                  formik.setFieldValue("username",'')
                }}
                className="max-w-xs"

              />
              {formik.errors.username}
            </div>
            <div className="mb-2">
            <label htmlFor="password"></label>
              <Input
                isClearable
                type="password"
                label="password"
                variant="bordered"
                onChange={formik.handleChange}
                name="password"
                value={formik.values.password}
                placeholder="Enter your Password"
                onClear = {()=>{
                  formik.setFieldValue("password",'')
                }}
                className="max-w-xs"
              />
              {formik.errors.password}
            </div>
            <div className="mb-2">
            <label htmlFor="role"></label>
            <RadioGroup
              label="Select role"
              name="role"
              onChange={formik.handleChange}
              value={formik.values.role}
            >
      <Radio value="user">User</Radio>
    </RadioGroup>

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