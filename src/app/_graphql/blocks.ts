import { CATEGORIES } from './categories'
import { LINK_FIELDS } from './link'
import { MEDIA } from './media'
import { META } from './meta'

export const CALL_TO_ACTION = `
...on Cta {
  blockType
  invertBackground
  richText
  links {
    link ${LINK_FIELDS()}
  }
}
`

export const CONTENT = `
...on Content {
  blockType
  invertBackground
  reverse
  columns {
    size
    richText
    enableLink
    link ${LINK_FIELDS()}
    ${MEDIA}
  }
}
`

export const BRANDS = `
...on Brands {
  blockType
  invertBackground
  title
  items {
    size
    ${MEDIA}
  }
}
`

export const NUMBER_LIST = `
...on NumberList {
  blockType
  invertBackground
  style
  columns {
    sizeField
    sizeNumber
    number
    extension
    title
    richText
  }
}
`

export const SLIDER = `
...on Slider {
  blockType
  slides {
    title
    subtitle
    richText
    ${MEDIA}
  }
}
`

export const TESTIMONIAL = `
...on Testimonial {
  blockType
  title
  items {
    richText
    name
    other
    ${MEDIA}
  }
}
`

export const SLIDING_TEXT = `
...on SlidingText {
  blockType
  first
  second
  type
}
`

export const SERVICE = `
...on Service {
  blockType
  title
  subtitle
  mainLinks {
    link ${LINK_FIELDS()}
  }
  items {
    title
    richText
    links {
      link ${LINK_FIELDS()}
    }
  }
}
`

export const MEDIA_BLOCK = `
...on MediaBlock {
  blockType
  invertBackground
  position
  ${MEDIA}
}
`

export const ARCHIVE_BLOCK = `
...on Archive {
  blockType
  title
  subtitle
  introContent
  displayType
  populateBy
  relationTo
  ${CATEGORIES}
  limit
  selectedDocs {
    relationTo
    value {
      ...on Post {
        id
        slug
        title
        ${META}
      }
      ...on Project {
        id
        slug
        title
        ${META}
      }
    }
  }
  populatedDocs {
    relationTo
    value {
      ...on Post {
        id
        slug
        title
        ${CATEGORIES}
        ${META}
      }
      ...on Project {
        id
        slug
        title
        ${CATEGORIES}
        ${META}
      }
    }
  }
  populatedDocsTotal
}
`
