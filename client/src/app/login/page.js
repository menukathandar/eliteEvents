'use client'

import React from 'react';
import { useEffect,useRef } from 'react';
// import NavBar from '../components/navbar/page'
import Link from 'next/link'
import { useFormik } from 'formik';
import {Button,Input} from "@nextui-org/react";
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation';
 
const SignInSchema = Yup.object().shape({
  username: Yup.string()
    .required('Required'), 
  password: Yup.string()
    .required('Required'), 
  
});
const SignInForm = () => {
  const router = useRouter()
  const inputRef = useRef(null)
  useEffect (() =>{
    if(inputRef.current){
      inputRef.current.focus()
    }
  },[])
  const formik = useFormik({
    initialValues: {
     username:'',
     password:''
    },
    validationSchema:SignInSchema,
    onSubmit: values => {
      loginUser(values)
      // registerUser(values)
    },
  });
  // const registerUser =(values)=>{
  //   fetch(`${process.env.NEXT_PUBLIC_API_URL}/register`)
  // }
  const loginUser =async(values)=>{
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
  };
  
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, requestOptions);
    const data = await response.json()
    if(response.status == '200'){
      toast.success(data.msg)
      // useDispatch(setLoginDetails(data))
    if(data.user.role == 'user'){
      router.push('/dashboard')
    }else{
      router.push('/admin-dashboard')
    }

    }else{
      toast.error(data.msg)
    }
  }

  return (
    <form onSubmit={formik.handleSubmit}>
       <div>
          <div className="flex justify-center ">
           <div className= 'border border-black m-7 w-72 p-2'>
            <div className="mb-2">
            <label htmlFor="username"></label>
              <Input
                ref={inputRef}
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
              <Button type="submit" radius="full" className="bg-gradient-to-tr from-green-500 to-blue-500 text-white shadow-lg">
                Login
              </Button>
              <div>
                Don't have an account? <Link href="/register"><Button radius="full" className="bg-gradient-to-tr from-green-500 to-blue-500 text-white shadow-lg">Sign Up </Button></Link>
              </div>
          </div>
        </div>
      </div>
    </form>
  );
};
export default SignInForm