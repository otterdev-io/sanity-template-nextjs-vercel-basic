#!/bin/sh
vercel env pull
set -o allexport
source ./.env
for ENV in "development" "preview" "production"
do
	echo -n "$SANITY_STUDIO_API_PROJECT_ID" | vercel env add plain NEXT_PUBLIC_SANITY_PROJECT_ID "$ENV"
	echo -n "$SANITY_STUDIO_API_DATASET" | vercel env add plain NEXT_PUBLIC_SANITY_DATASET "$ENV"
done
vercel env pull
