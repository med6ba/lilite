import { useEffect } from 'react'
import { toAbsoluteUrl } from '@/lib/site'
import { StructuredData } from '@/lib/structuredData'

interface SEOOptions {
  title: string
  description: string
  pathname?: string
  noindex?: boolean
  imagePath?: string
  type?: 'website' | 'article'
  keywords?: string[]
  locale?: string
  siteName?: string
  twitterSite?: string
  structuredData?: StructuredData[]
}

const DEFAULT_SITE_URL = 'https://www.lilite.site'
const DEFAULT_IMAGE_PATH = '/og-image.png'
const DEFAULT_SITE_NAME = 'Lilite'
const DEFAULT_LOCALE = 'en_US'
const DEFAULT_KEYWORDS = [
  'lilite',
  'ninite for linux',
  'ninite alternative for linux',
  'linux command builder',
  'linux app installer',
  'linux apps',
  'pro linux apps',
  'linux software installer',
  'package installer command',
  'apt install command',
  'pacman install command',
  'dnf install command',
  'zypper install command',
  'apk add command',
  'arch linux installer',
  'debian package installer',
  'fedora package installer',
  'pop os app installer',
  'pop!_os package installer',
  'pop os linux',
  'cachyos app installer',
  'cachyos linux',
  'cachyos package manager',
]

function upsertMetaByName(name: string, content: string) {
  let tag = document.head.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null

  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('name', name)
    document.head.appendChild(tag)
  }

  tag.setAttribute('content', content)
}

function removeMetaByName(name: string) {
  document.head.querySelector(`meta[name="${name}"]`)?.remove()
}

function upsertMetaByProperty(property: string, content: string) {
  let tag = document.head.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null

  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('property', property)
    document.head.appendChild(tag)
  }

  tag.setAttribute('content', content)
}

function upsertCanonical(url: string) {
  let link = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null

  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }

  link.setAttribute('href', url)
}

function syncStructuredData(items: StructuredData[]) {
  document.head
    .querySelectorAll('script[type="application/ld+json"][data-lilite-seo], script[type="application/ld+json"][data-lilite-static-seo]')
    .forEach((node) => node.remove())

  items.forEach((item, index) => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.dataset.liliteSeo = String(index)
    script.text = JSON.stringify(item)
    document.head.appendChild(script)
  })
}

function resolveCanonicalUrl(pathname: string | undefined, siteUrl: string) {
  if (!pathname) {
    return new URL(window.location.pathname, siteUrl).toString()
  }

  try {
    return new URL(pathname, siteUrl).toString()
  } catch {
    const safePath = pathname.startsWith('/') ? pathname : `/${pathname}`
    return new URL(safePath, siteUrl).toString()
  }
}

export function useSEO({
  title,
  description,
  pathname,
  noindex = false,
  imagePath = DEFAULT_IMAGE_PATH,
  type = 'website',
  keywords = [],
  locale = DEFAULT_LOCALE,
  siteName = DEFAULT_SITE_NAME,
  twitterSite,
  structuredData = [],
}: SEOOptions) {
  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return
    }

    const siteUrl = ((import.meta.env.VITE_SITE_URL as string | undefined) ?? DEFAULT_SITE_URL).replace(/\/+$/, '')
    const titleWithBrand = title.includes(siteName) ? title : `${title} | ${siteName}`
    const canonicalUrl = resolveCanonicalUrl(pathname, siteUrl)
    const imageUrl = toAbsoluteUrl(imagePath, siteUrl)
    const allKeywords = [...new Set([...DEFAULT_KEYWORDS, ...keywords.map((value) => value.trim().toLowerCase()).filter(Boolean)])]
    const keywordsContent = allKeywords.join(', ')

    document.title = titleWithBrand
    upsertMetaByName('description', description)
    upsertMetaByName('keywords', keywordsContent)
    upsertMetaByName('robots', noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large')
    upsertMetaByName('application-name', siteName)
    upsertMetaByName('apple-mobile-web-app-title', siteName)
    upsertMetaByProperty('og:site_name', siteName)
    upsertMetaByProperty('og:locale', locale)
    upsertMetaByProperty('og:type', type)
    upsertMetaByProperty('og:title', titleWithBrand)
    upsertMetaByProperty('og:description', description)
    upsertMetaByProperty('og:url', canonicalUrl)
    upsertMetaByProperty('og:image', imageUrl)
    upsertMetaByProperty('og:image:secure_url', imageUrl)
    upsertMetaByProperty('og:image:alt', `${siteName} preview`)
    upsertMetaByName('twitter:card', 'summary_large_image')
    upsertMetaByName('twitter:title', titleWithBrand)
    upsertMetaByName('twitter:description', description)
    upsertMetaByName('twitter:image', imageUrl)
    upsertMetaByName('twitter:url', canonicalUrl)
    if (twitterSite?.trim()) {
      upsertMetaByName('twitter:site', twitterSite.trim())
    }
    upsertCanonical(canonicalUrl)
    syncStructuredData(structuredData)
  }, [description, imagePath, keywords, locale, noindex, pathname, siteName, structuredData, title, twitterSite, type])
}
