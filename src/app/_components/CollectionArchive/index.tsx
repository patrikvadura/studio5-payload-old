'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'
import qs from 'qs'

import type { Post, Project } from '../../../payload/payload-types'
import type { ArchiveBlockProps } from '../../_blocks/ArchiveBlock/types'
import { CardItem } from '../Card'

import classes from './index.module.scss'

type Result = {
  docs: (Post | Project | string)[]
  hasNextPage: boolean
  hasPrevPage: boolean
  nextPage: number
  page: number
  prevPage: number
  totalDocs: number
  totalPages: number
}

export type Props = {
  categories?: ArchiveBlockProps['categories']
  className?: string
  limit?: number
  onResultChange?: (result: Result) => void // eslint-disable-line no-unused-vars
  populateBy?: 'collection' | 'selection'
  populatedDocs?: ArchiveBlockProps['populatedDocs']
  populatedDocsTotal?: ArchiveBlockProps['populatedDocsTotal']
  relationTo?: 'posts' | 'projects'
  selectedDocs?: ArchiveBlockProps['selectedDocs']
  showPageRange?: boolean
  sort?: string
}

export const CollectionArchive: React.FC<Props> = props => {
  const {
    categories: catsFromProps,
    className,
    limit = 10,
    onResultChange,
    populateBy,
    populatedDocs,
    populatedDocsTotal,
    relationTo,
    selectedDocs,
    showPageRange,
    sort = '-createdAt',
  } = props

  const [results, setResults] = useState<Result>({
    // @ts-ignore
    docs: (populateBy === 'collection'
      ? populatedDocs
      : populateBy === 'selection'
      ? selectedDocs
      : []
    )?.map(doc => doc.value),
    hasNextPage: false,
    hasPrevPage: false,
    nextPage: 1,
    page: 1,
    prevPage: 1,
    totalDocs: typeof populatedDocsTotal === 'number' ? populatedDocsTotal : 0,
    totalPages: 1,
  })

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | undefined>(undefined)
  const scrollRef = useRef<HTMLDivElement>(null)
  const hasHydrated = useRef(false)
  const isRequesting = useRef(false)
  const [page, setPage] = useState(1)

  const categories = (catsFromProps || [])
    .map(cat => (typeof cat === 'object' ? cat.id : cat))
    .join(',')

  const scrollToRef = useCallback(() => {
    const { current } = scrollRef
    if (current) {
      // current.scrollIntoView({
      //   behavior: 'smooth',
      // })
    }
  }, [])

  useEffect(() => {
    if (!isLoading && typeof results.page !== 'undefined') {
      // scrollToRef()
    }
  }, [isLoading, scrollToRef, results])

  useEffect(() => {
    let timer: NodeJS.Timeout = null

    if (populateBy === 'collection' && !isRequesting.current) {
      isRequesting.current = true

      // hydrate the block with fresh content after first render
      // don't show loader unless the request takes longer than x ms
      // and don't show it during initial hydration
      timer = setTimeout(() => {
        if (hasHydrated.current) {
          setIsLoading(true)
        }
      }, 500)

      const searchQuery = qs.stringify(
        {
          depth: 1,
          limit,
          page,
          sort,
          where: {
            ...(categories
              ? {
                  categories: {
                    in: categories,
                  },
                }
              : {}),
          },
        },
        { encode: false },
      )

      const makeRequest = async () => {
        try {
          const req = await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/api/${relationTo}?${searchQuery}`,
          )

          const json = await req.json()
          clearTimeout(timer)

          const { docs } = json as { docs: (Post | Project)[] }

          if (docs && Array.isArray(docs)) {
            setResults(json)
            setIsLoading(false)
            if (typeof onResultChange === 'function') {
              onResultChange(json)
            }
          }
        } catch (err) {
          console.warn(err) // eslint-disable-line no-console
          setIsLoading(false)
          setError(`Unable to load "${relationTo} archive" data at this time.`)
        }

        isRequesting.current = false
        hasHydrated.current = true
      }

      void makeRequest()
    }

    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [page, categories, relationTo, onResultChange, sort, limit, populateBy])

  return (
    <>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {results.docs?.map((result, index) => {
          if (typeof result === 'object' && result !== null) {
            return (
              <div key={result.id} className={`${result.id === 1 ? '!col-span-full' : ''}`}>
                <CardItem doc={result} relationTo={relationTo} showCategories changeStyleById />
              </div>
            )
          }

          return null
        })}
      </div>
    </>
  )
}
