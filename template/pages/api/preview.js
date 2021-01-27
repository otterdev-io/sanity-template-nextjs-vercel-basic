import previewApi from "@otterdev/next-sanity-extra/api/preview";

export default previewApi({
  token: process.env.SANITY_STUDIO_PREVIEW_TOKEN,
});
