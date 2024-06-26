'use client'
import AutoPopup from "@/components/AutoPopup";
import NavBar from "@/components/navbar/page";
import Image from 'next/image'

const page = () => {
  return (
    <div className="min-h-screen flex flex-col items-center">
    <NavBar />
      <div className="flex flex-col items-center gap-6 mt-8">
        <Image
          src="/outdoor.jpg"
          width={900}
          height={500}
          alt="Outdoor Picture"
          className="rounded-lg shadow-lg"
        />
        <Image
          src="/outdoor.jpg"
          width={900}
          height={500}
          alt="Outdoor Picture"
          className="rounded-lg shadow-lg"
        />
        <Image
          src="/outdoor.jpg"
          width={900}
          height={500}
          alt="Outdoor Picture"
          className="rounded-lg shadow-lg"
        />
      </div>
      {/* <AutoPopup/> */}
    </div>
  
  );
}

export default page