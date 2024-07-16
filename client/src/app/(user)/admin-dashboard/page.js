'use client'
import React from "react";
import { Button, Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import Link from "next/link";
import SideBar from "@/components/sidebar/page";
import { useRouter } from "next/navigation";


const AdminDashboard = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('admin/add-event')
  };
  const list = [
    {
      title: "Orange",
      img: "/outdoor.jpg",
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: "/outdoor.jpg",
      price: "$3.00",
    },
    {
      title: "Raspberry",
      img: "/outdoor.jpg",
      price: "$10.00",
    },
  ];

  return (
      <div>
        <h4>Welcome Admin</h4>
      {/* <Button type="submit" 
      radius="full" 
      className="bg-gradient-to-tr from-green-500 to-blue-500 text-white shadow-lg"
         onClick={()=>handleClick()}
         >
      Add new Event
      </Button> */}
      </div>
    
  );
}
export default AdminDashboard
