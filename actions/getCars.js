import { sanityClient } from "@/lib/sanityClient";
import { groq } from "next-sanity";

export const getCars = async () => {
  const query = groq`
  *[_type == "car"] {
    ...,
    "imageUrl": mainImage.asset->url
  } | order(_createdAt desc)`;

  const cars = await sanityClient.fetch(query);
  return cars;
};
