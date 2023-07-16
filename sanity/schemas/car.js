import { defineField, defineType } from "sanity";

export default defineType({
  name: "car",
  title: "Coche",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
    }),
    defineField({
      name: "brand",
      title: "Marca",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "brand" }],
        },
      ],
    }),
    defineField({
      name: "model",
      title: "Modelo",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "model" }],
        },
      ],
    }),
    defineField({
      name: "price",
      title: "Precio",
      type: "number",
    }),
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
    }),
    defineField({
      name: "year",
      title: "Año",
      type: "number",
    }),
    defineField({
      name: "doors",
      title: "Puertas",
      type: "number",
    }),
    defineField({
      name: "transmission",
      title: "Transmisión",
      type: "string",
      options: {
        list: [
          { title: "Automático", value: "automatic" },
          { title: "Manual", value: "manual" },
        ],
      },
    }),
    defineField({
      name: "fuel",
      title: "Combustible",
      type: "string",
      options: {
        list: [
          { title: "Gasolina", value: "gasoline" },
          { title: "Diesel", value: "diesel" },
          { title: "Eléctrico", value: "electric" },
          { title: "Híbrido", value: "hybrid" },
        ],
      },
    }),
  ],
});
