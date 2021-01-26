import { setupNextSanity } from "@otterdev/next-sanity-extra";

// Standard sanity config
// Don't forget to set:
// SANITY_API_TOKEN (created from sanity admin)
/// SANITY_PREVIEW_TOKEN (generate this yourself)
const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: process.env.NODE_ENV === "production",
  token: process.env.SANITY_API_TOKEN,
};

export const {
  getClient,
  imageUrlBuilder,
  PortableText,
  sanityStaticProps,
  useSanityQuery,
} = setupNextSanity(config);