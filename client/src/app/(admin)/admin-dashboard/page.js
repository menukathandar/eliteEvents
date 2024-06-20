'use client'
import React from "react";
import {Button, Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import Link from "next/link";

export default function App() {
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
    {
      title: "Lemon",
      img: "/outdoor.jpg",
      price: "$5.30",
    },
    {
      title: "Avocado",
      img: "/outdoor.jpg",
      price: "$15.70",
    },
    {
      title: "Lemon 2",
      img: "/outdoor.jpg",
      price: "$8.00",
    },
    {
      title: "Banana",
      img: "/outdoor.jpg",
      price: "$7.50",
    },
    {
      title: "Watermelon",
      img: "/outdoor.jpg",
      price: "$12.20",
    },
  ];

  return (
    <div className="p-8 gap-2 grid grid-cols-2 sm:grid-cols-4">
      {list.map((item, index) => (
        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[140px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
      ))}
      <div>
      <Button type="submit" radius="full" className="bg-gradient-to-tr from-green-500 to-blue-500 text-white shadow-lg">
      <Link href="/add-event">Add new Event</Link>
      </Button>
      </div>
    </div>
    
  );
}