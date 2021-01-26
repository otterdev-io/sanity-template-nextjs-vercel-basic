import previewApi from "@otterdev/next-sanity-extra/api/preview";

export default previewApi({
  token: process.env.SANITY_PREVIEW_TOKEN,
});
