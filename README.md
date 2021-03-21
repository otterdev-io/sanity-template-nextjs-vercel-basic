# Barebones Next.js Typescript, Vercel, Sanity.io Starter
This is a sanity 1-click starter. It can be created at https://sanity.io/create?template=otterdev-io/sanity-template-nextjs-vercel-extra
# Running
`npm run dev`

# Accessing - site
`http://localhost:300`

# Accessing - Sanity
http://localhost:3333

# Post setup
You will probably want to perform the following steps to get everything nice after the setup:

- Create an API TOKEN (read/write) at manage.sanity.io
- Ensure the site url, localhost:3333, and localhost:3000 are added as CORS origins at manage.sanity.io

- Update project title in sanity.json

- set the following vars on vercel:
  - SANITY_STUDIO_PREVIEW_TOKEN (come up with whatever you want)
  - SANITY_STUDIO_PREVIEW_URL (the url of your production site)
  - SANITY_API_TOKEN - create at manage.sanity.io

- create .env.local in the root folder with the following vars:
  - NEXT_PUBLIC_SANITY_DATASET
  - NEXT_PUBLIC_SANITY_PROJECT_ID
  - SANITY_STUDIO_PREVIEW_TOKEN (the same token you created on vercel)
  - SANITY_API_TOKEN (the same token you created at manage.sanity.io)

- create studio/.env.development and .env.production with the following vars:
  - SANITY_STUDIO_API_PROJECT_ID
  - SANITY_STUDIO_API_DATASET
  - SANITY_STUDIO_PREVIEW_URL = "http://localhost:3000"
  - SANITY_STUDIO_PREVIEW_TOKEN (the same token you created on vercel)