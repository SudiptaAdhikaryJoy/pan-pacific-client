"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { urlForThumbnail } from "../../../../utils/cms/imageProcess";
import { fetchAboutUs } from "~/utils/cms/fetchAboutUs";

type AboutUsType = {
  name: string;
  ppHotelDescription: string;
  ppImage: string;
};
const AboutUs = () => {
  const [aboutUs, setAboutUs] = useState<AboutUsType[]>([]);

  const getAboutus = async () => {
    try {
      const fetchAboutData = await fetchAboutUs();
      setAboutUs(fetchAboutData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAboutus();
  }, []);
  
  console.log(aboutUs);

  return (
    <div className="grid grid-cols-4 gap-2">
      <div>
        <p>
          {aboutUs.map((about: AboutUsType, index: number) => (
            <div key={index}>
              <h1>{about.name}</h1>
              <p>{about.ppHotelDescription}</p>
            </div>
          ))}
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
