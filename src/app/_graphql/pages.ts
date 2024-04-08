import {
  ARCHIVE_BLOCK,
  BRANDS,
  CALL_TO_ACTION,
  CONTENT,
  MEDIA_BLOCK,
  NUMBER_LIST,
  SERVICE,
  SLIDER,
  SLIDING_TEXT,
  TESTIMONIAL,
} from './blocks'
import { LINK_FIELDS } from './link'
import { MEDIA } from './media'
import { META } from './meta'

export const PAGES = `
  query Pages {
    Pages(limit: 300)  {
      docs {
        slug
      }
    }
  }
`

export const PAGE = `
  query Page($slug: String, $draft: Boolean) {
    Pages(where: { slug: { equals: $slug }}, limit: 1, draft: $draft) {
      docs {
        id
        title
        hero {
          type
          title
          subtitle
          richText
          links {
            link ${LINK_FIELDS()}
          }
          ${MEDIA}
          imageStyle
        }
        layout {
          ${CONTENT}
          ${CALL_TO_ACTION}
          ${CONTENT}
          ${MEDIA_BLOCK}
          ${ARCHIVE_BLOCK}
          ${SLIDER}
          ${SLIDING_TEXT}
          ${SERVICE}
          ${TESTIMONIAL}
          ${NUMBER_LIST}
          ${BRANDS}
        }
        ${META}
      }
    }
  }
`
