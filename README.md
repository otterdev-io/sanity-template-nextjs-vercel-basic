# Barebones Next.js, Vercel, Sanity.io Starter

# Running
`npm run dev`

# Accessing - site
`http://localhost:300`

# Accessing - Sanity
http://localhost:300/studio

Post setup - 
Update project title in sanity.json

set the following vars on vercel:
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