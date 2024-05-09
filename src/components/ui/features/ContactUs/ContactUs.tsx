"use client"
import React, { useEffect, useState } from "react";
import { fetchContact } from "../../../../utils/cms/fetchContact";
import Image from "next/image";
import { urlForThumbnail } from "../../../../utils/cms/imageProcess";
import { GenericSpinner } from "../../elements/GenericSpinner/GenericSpinner";

type ContactType = {
  phonenumber: string
  tollfree: number
  hotelImage: string
  name: string
}


const ContactUs = () => {
    const [contact, setContact] = useState<ContactType[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const getContact = async () => {
      try {
        setLoading(true)
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const contactData = await fetchContact();
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        setContact(contactData);
        setLoading(false)
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    useEffect(() => {
  
      getContact();
    }, []);
    
    // console.log(contact);

    if(loading){
      return (
        <div className="relative flex h-[90vh] items-center justify-center overflow-hidden">
        <GenericSpinner />
      </div>
      )
    }
    
    return (
      <div
        className="pt-9"
        style={{ width: "min(95%,1440px)", margin: "auto" }}
        data-aos="zoom-in-up"
      >
         {contact.map((contact: ContactType, index: number) => (
          <div
            key={index}
            className="relative h-48 w-48 2xl:w-52 transition-transform duration-500 hover:scale-105 hover:transition-transform hover:duration-500"
          >
           <h1>{contact.phonenumber}</h1>
           <h2>{contact.tollfree}</h2>
           <h1>{contact.name}</h1>
           {/* <Image
           src={urlForThumbnail(contact.hotelImage)}
           alt="Hotel Image"
           width={200}
           height={200}
           /> */}
          </div>
        ))}
      </div>
    );
  };
  
export default ContactUs;
