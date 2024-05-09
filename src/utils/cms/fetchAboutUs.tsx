import { groq } from "next-sanity";
import { sanityClient } from "./sanity";

const query = groq`*[_type == 'panpacificAboutUs']`;

export const fetchAboutUs = async () => {
    const cmsAboutUs = await sanityClient.fetch(query);
    return cmsAboutUs;
}