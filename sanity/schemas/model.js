import { defineField, defineType } from "sanity";

export default defineType({
  name: "model",
  title: "Modelo",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nombre",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "brand",
      title: "Marca",
      type: "reference",
      to: [{ type: "brand" }],
      // requited
      validation: (Rule) => Rule.required(),
    }),
  ],
});
