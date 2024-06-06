'use client'

import React from 'react';
import { useEffect,useRef } from 'react';
// import NavBar from '../components/navbar/page'
import Link from 'next/link'
import { useFormik } from 'formik';
import {Button,Input} from "@nextui-org/react";
import * as Yup from 'yup';
 
const SignInSchema = Yup.object().shape({
  Username: Yup.string()
    .required('Required'), 
  Password: Yup.string()
    .required('Required'), 
  
});
const SignInForm = () => {
  const inputRef = useRef(null)
  useEffect (() =>{
    if(inputRef.current){
      inputRef.current.focus()
    }
  },[])
  const formik = useFormik({
    initialValues: {
     Username:'',
     Password:''
    },
    validationSchema:SignInSchema,
    onSubmit: values => {
      console.log(values)
      // registerUser(values)
    },
  });
  // const registerUser =(values)=>{
  //   fetch('http://localhost:4000/register')
  // }

  return (
    <form onSubmit={formik.handleSubmit}>
       <div>
          <div className="flex justify-center ">
           <div className= 'border border-black m-7 w-72 p-2'>
            <div className="mb-2">
            <label htmlFor="Username"></label>
              <Input
                ref={inputRef}
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