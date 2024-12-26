import  ImageUrlBuilder  from '@sanity/image-url'
import { createClient } from "next-sanity";

export const client = createClient({
    projectId:'tldk4s5u',
    dataset:'production',
    apiVersion:'2022-03-07',
    useCdn: true,

})

const builder = ImageUrlBuilder(client)

export function urlFor(source:any) {
    return builder.image(source);
}