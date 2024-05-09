import { groq } from "next-sanity";
import { sanityClient } from "./sanity";

const query = groq`*[_type == "panpacificcontact"]`;

export const fetchContact = async () => {
  const cmsContact = await sanityClient.fetch(query);
  return cmsContact;
};
