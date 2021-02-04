import S from '@sanity/desk-tool/structure-builder'
import { GrEdit, GrView } from 'react-icons/gr'
import * as React from 'react'
import { FaSitemap, FaHome } from 'react-icons/fa'

function SitePreview({ document, options }) {
    if (!process.env.SANITY_STUDIO_PREVIEW_URL) {
        console.warn(
            'SANITY_STUDIO_PREVIEW_URL should be set for preview to work! Falling back to localhost:3000',
        )
    }
    return (
        <iframe
            src={`${
                process.env.SANITY_STUDIO_PREVIEW_URL ?? 'http://localhost:3000'
            }/api/preview?secret=${process.env.SANITY_STUDIO_PREVIEW_TOKEN}&slug=${options.slug}`}
            style={{ width: '100%', height: '100%', border: 0 }}
        />
    )
}

export default () =>
    S.list()
        .title('Content')
        .id('__root__')
        .items([
            S.documentListItem()
                .schemaType('site')
                .id('site')
                .title('Site')
                .icon(FaSitemap)
                .child(S.editor().schemaType('site')),
            S.documentListItem()
                .schemaType('landingPage')
                .id('landingPage')
                .title('Landing Page')
                .icon(FaHome)
                .child(
                    S.editor()
                        .schemaType('landingPage')
                        .views([
                            S.view.form().icon(GrEdit),
                            S.view
                                .component(SitePreview)
                                .icon(GrView)
                                .options({ slug: '' })
                                .title('Preview'),
                        ]),
                ),
            S.divider(),
            ...S.documentTypeListItems().filter(
                (item) => !['site', 'landingPage'].includes(item.getId()),
            ),
        ])
