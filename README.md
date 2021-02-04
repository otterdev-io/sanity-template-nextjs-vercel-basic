# Barebones Next.js, Vercel, Sanity.io Starter

This starter has a basic Sanity Studio and basic installation of Next.js. From there it displays the data from Sanity on the index.js route.

Post setup - 
Update project title in sanity.json

set the following vars on vercel:
NEXT_PUBLIC_SANITY_DATASET
NEXT_PUBLIC_SANITY_PROJECT_ID
SANITY_STUDIO_PREVIEW_TOKEN
SANITY_STUDIO_PREVIEW_URL
SANITY_API_TOKEN - create at manage.sanity.io

create .env.local:
NEXT_PUBLIC_SANITY_DATASET
NEXT_PUBLIC_SANITY_PROJECT_ID
SANITY_STUDIO_PREVIEW_TOKEN
SANITY_API_TOKEN

create studio/.env.development and .env.production:
SANITY_STUDIO_API_PROJECT_ID
SANITY_STUDIO_API_DATASET
SANITY_STUDIO_PREVIEW_URL="http://localhost:3000"
SANITY_STUDIO_PREVIEW_TOKEN

add "http://localhost:3000" as CORS url at manage.sanity.io
