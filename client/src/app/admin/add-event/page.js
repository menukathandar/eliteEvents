'use client'
import React, { useEffect,useRef } from 'react';
import { useFormik } from 'formik';
import {Button,Input, Radio, RadioGroup} from "@nextui-org/react";
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import Link from 'next/link';
 
const addEventSchema = Yup.object().shape({

  eventName: Yup.string()
    .min(5, 'Too Short!')
    .max(25, 'Too Long!')
    .required('Required'),
  price: Yup.string()
    .required('Required'),
});
const addEvent = () => {
  const inputRef = useRef(null)
  useEffect (() =>{
    if(inputRef.current){
      inputRef.current.focus()
    }
  },[])
  const formik = useFormik({
    initialValues: {
     eventName: '',
     price: ''
    },
    validationSchema:addEventSchema,
    onSubmit: values => {
      console.log('Form values:',values)
      updateEvent(values)
    },
  });
  const updateEvent =async(values)=>{
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
  };
  
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/register`, requestOptions);
    const data = await response.json()
    if(response.status == '200'){
      toast.success(data.msg)
    
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
            <label htmlFor="eventName"></label>
              <Input
                ref={inputRef}
                isClearable
                label="eventName"
                variant="bordered"
                onChange={formik.handleChange}
                name="eventName"
                value={formik.values.eventName}
                placeholder="Enter the name of event"
                className="max-w-xs"
                onClear = {()=>{
                  formik.setFieldValue("eventName",'')
                }}
              />
              {formik.errors.eventName}
            </div>
            <div className="mb-2">
            <label htmlFor="price"></label>
              <Input
                isClearable
                label="price"
                variant="bordered"
                onChange={formik.handleChange}
                name="price"
                value={formik.values.price}
                placeholder="Enter the price"
                className="max-w-xs"
                onClear = {()=>{
                  formik.setFieldValue("price",'')
                }}
              />
              {formik.errors.price}
            </div>
              <Button type="submit" radius="full" className="bg-gradient-to-tr from-green-500 to-blue-500 text-white shadow-lg">
                <Link href="/register">Add</Link>
              </Button>
          </div>
        </div>
      </div>
    </form>
  );
};


export default addEvent