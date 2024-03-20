import type { Page } from '../../../payload/payload-types'

export type ArchiveCarouselProps = Extract<Page['layout'][0], { blockType: 'archiveCarousel' }>
