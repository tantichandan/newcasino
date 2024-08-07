import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'tldk4s5u', // Match the project ID from CLI config
  dataset: 'production', // Match the dataset from CLI config
  apiVersion: '2023-08-01', // Use the latest API version or your preferred version
  useCdn: true, // Set to false if you need fresh data
});