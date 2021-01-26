import JSONPretty from "react-json-pretty";

import { sanityStaticProps, useSanityQuery } from "../utils/sanity";
import { groq } from "next-sanity";
import { NextSeo } from "next-seo";

const query = groq`*[]`;

export const getStaticProps = async (context) => ({
  props: await sanityStaticProps(query, context),
});

export default function Home(props) {
  const { data } = useSanityQuery(query, props);

  return (
    <div>
      <NextSeo title="Next starter" />
      <JSONPretty
        style={{
          maxWidth: "100ch",
          overflowX: "scroll",
          boxShadow: "0 0 5px rgba(0,0,0,.3",
        }}
        id="json-pretty"
        data={data}
      />
    </div>
  );
}
