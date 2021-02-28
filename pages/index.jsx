import JSONPretty from 'react-json-pretty'

import { imageUrlBuilder, sanityStaticProps, useSanityQuery } from '../utils/sanity'
import { groq } from 'next-sanity'
import { NextSeo } from 'next-seo'
import { withDimensions, SanityImg } from 'sanity-react-extra'

const query = groq`{
  "site": *[_id == "site"][0] {
    ...,
    "logo": ${withDimensions('logo')}
  },
  "landingPage": *[_id == "landingPage"][0]
}`

export const getStaticProps = async (context) => ({
    props: await sanityStaticProps(query, context),
})

export default function Home(props) {
    const {
        data: { site, landingPage },
    } = useSanityQuery(query, props)

    return (
        <div>
            <NextSeo title={landingPage.seo.title} description={landingPage.seo.description} />
            <div className="container mx-auto p-16 flex flex-col items-center">
                <SanityImg builder={imageUrlBuilder} image={site.logo} height={200} />
                <h1 className="text-blue-900 text-4xl my-8">{landingPage.heading}</h1>
                <p className="text-gray-500">{landingPage.description}</p>
            </div>
        </div>
    )
}
