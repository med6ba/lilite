import { useMemo } from 'react'
import { BackButton } from '@/components/BackButton'
import { DistroCard } from '@/components/DistroCard'
import { SectionHeader } from '@/components/SectionHeader'
import archLogo from '@/assets/arch.png'
import debianLogo from '@/assets/debian.png'
import fedoraLogo from '@/assets/fedora.png'
import { useLanguage } from '@/hooks/useLanguage'
import { useSEO } from '@/hooks/useSEO'
import { getSiteUrl } from '@/lib/site'
import {
  createBreadcrumbSchema,
  createCollectionPageSchema,
  createItemListSchema,
} from '@/lib/structuredData'

export function DistroChooserPage() {
  const { messages } = useLanguage()
  const opensuseLogo = 'https://cdn.simpleicons.org/opensuse'
  const alpineLogo = 'https://cdn.simpleicons.org/alpinelinux'
  const ubuntuLogo = 'https://cdn.simpleicons.org/ubuntu'
  const kaliLogo = 'https://cdn.simpleicons.org/kalilinux'
  const manjaroLogo = 'https://cdn.simpleicons.org/manjaro'
  const mintLogo = 'https://cdn.simpleicons.org/linuxmint'
  const poposLogo = 'https://cdn.simpleicons.org/popos'
  const zorinLogo = 'https://cdn.simpleicons.org/zorin'
  const parrotLogo = 'https://cdn.simpleicons.org/parrotsecurity'
  const endeavourosLogo = 'https://cdn.simpleicons.org/endeavouros'
  const garudaLogo = 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/garuda-linux.svg'
  const nobaraLogo = 'https://cdn.simpleicons.org/fedora'
  const cachyosLogo = 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/cachyos-linux.svg'
  const siteUrl = getSiteUrl()
  const pageUrl = `${siteUrl}/get-started`
  const structuredData = useMemo(
    () => [
      createCollectionPageSchema({
        description: messages.chooserPage.description,
        name: messages.chooserPage.title,
        url: pageUrl,
      }),
      createBreadcrumbSchema([
        { name: 'Lilite', url: `${siteUrl}/` },
        { name: messages.chooserPage.title, url: pageUrl },
      ]),
      createItemListSchema({
        name: messages.chooserPage.title,
        url: pageUrl,
        items: [
          { name: messages.footer.arch, url: `${siteUrl}/distro/arch-based` },
          { name: messages.footer.fedora, url: `${siteUrl}/distro/fedora-based` },
          { name: messages.footer.debian, url: `${siteUrl}/distro/debian-based` },
          { name: messages.footer.opensuse, url: `${siteUrl}/distro/opensuse-based` },
          { name: messages.footer.alpine, url: `${siteUrl}/distro/alpine-based` },
          { name: messages.footer.ubuntu, url: `${siteUrl}/distro/ubuntu-based` },
          { name: messages.footer.kali, url: `${siteUrl}/distro/kali-based` },
          { name: messages.footer.manjaro, url: `${siteUrl}/distro/manjaro-based` },
          { name: messages.footer.mint, url: `${siteUrl}/distro/mint-based` },
          { name: messages.footer.popos, url: `${siteUrl}/distro/popos-based` },
          { name: messages.footer.zorin, url: `${siteUrl}/distro/zorin-based` },
          { name: messages.footer.parrot, url: `${siteUrl}/distro/parrot-based` },
          { name: messages.footer.endeavouros, url: `${siteUrl}/distro/endeavouros-based` },
          { name: messages.footer.garuda, url: `${siteUrl}/distro/garuda-based` },
          { name: messages.footer.nobara, url: `${siteUrl}/distro/nobara-based` },
          { name: messages.footer.cachyos, url: `${siteUrl}/distro/cachyos-based` },
        ],
      }),
    ],
    [messages.chooserPage.description, messages.chooserPage.title, messages.footer, pageUrl, siteUrl],
  )

  useSEO({
    title: messages.chooserPage.seoTitle,
    description: messages.chooserPage.seoDescription,
    pathname: '/get-started',
    keywords: [
      'linux distro chooser',
      'linux distribution family',
      'apt pacman dnf zypper apk',
      'linux package manager selector',
      'choose linux package manager',
    ],
    structuredData,
  })

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 sm:py-8">
      <SectionHeader
        title={messages.chooserPage.title}
        description={messages.chooserPage.description}
        action={<BackButton />}
        as="h1"
      />
      <div className="mb-4 flex flex-col items-start gap-2 rounded-xl border bg-card/70 p-3 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:items-center">
        <span className="rounded-full border bg-background px-2 py-1 text-xs font-medium text-foreground">{messages.chooserPage.totalFamiliesBadge}</span>
        <span className="rounded-full border bg-background px-2 py-1 text-xs font-medium text-foreground">
          {messages.chooserPage.packageManagersBadge}
        </span>
        <span>{messages.chooserPage.summaryNote}</span>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <DistroCard
          to="/distro/arch-based"
          title="Arch"
          description={messages.chooserPage.archDescription}
          logoSrc={archLogo}
          logoAlt={messages.chooserPage.archLogoAlt}
          manager="pacman"
        />
        <DistroCard
          to="/distro/fedora-based"
          title="Fedora"
          description={messages.chooserPage.fedoraDescription}
          logoSrc={fedoraLogo}
          logoAlt={messages.chooserPage.fedoraLogoAlt}
          manager="dnf"
        />
        <DistroCard
          to="/distro/debian-based"
          title="Debian"
          description={messages.chooserPage.debianDescription}
          logoSrc={debianLogo}
          logoAlt={messages.chooserPage.debianLogoAlt}
          manager="apt"
        />
        <DistroCard
          to="/distro/opensuse-based"
          title="openSUSE"
          description={messages.chooserPage.opensuseDescription}
          logoSrc={opensuseLogo}
          logoAlt={messages.chooserPage.opensuseLogoAlt}
          manager="zypper"
        />
        <DistroCard
          to="/distro/alpine-based"
          title="Alpine"
          description={messages.chooserPage.alpineDescription}
          logoSrc={alpineLogo}
          logoAlt={messages.chooserPage.alpineLogoAlt}
          manager="apk"
        />
        <DistroCard
          to="/distro/ubuntu-based"
          title="Ubuntu"
          description={messages.chooserPage.ubuntuDescription}
          logoSrc={ubuntuLogo}
          logoAlt={messages.chooserPage.ubuntuLogoAlt}
          manager="apt"
        />
        <DistroCard
          to="/distro/kali-based"
          title="Kali"
          description={messages.chooserPage.kaliDescription}
          logoSrc={kaliLogo}
          logoAlt={messages.chooserPage.kaliLogoAlt}
          manager="apt"
        />
        <DistroCard
          to="/distro/manjaro-based"
          title="Manjaro"
          description={messages.chooserPage.manjaroDescription}
          logoSrc={manjaroLogo}
          logoAlt={messages.chooserPage.manjaroLogoAlt}
          manager="pacman / yay"
        />
        <DistroCard
          to="/distro/mint-based"
          title="Linux Mint"
          description={messages.chooserPage.mintDescription}
          logoSrc={mintLogo}
          logoAlt={messages.chooserPage.mintLogoAlt}
          manager="apt"
        />
        <DistroCard
          to="/distro/popos-based"
          title="Pop!_OS"
          description={messages.chooserPage.poposDescription}
          logoSrc={poposLogo}
          logoAlt={messages.chooserPage.poposLogoAlt}
          manager="apt"
        />
        <DistroCard
          to="/distro/zorin-based"
          title="Zorin"
          description={messages.chooserPage.zorinDescription}
          logoSrc={zorinLogo}
          logoAlt={messages.chooserPage.zorinLogoAlt}
          manager="apt"
        />
        <DistroCard
          to="/distro/parrot-based"
          title="Parrot"
          description={messages.chooserPage.parrotDescription}
          logoSrc={parrotLogo}
          logoAlt={messages.chooserPage.parrotLogoAlt}
          manager="apt"
        />
        <DistroCard
          to="/distro/endeavouros-based"
          title="EndeavourOS"
          description={messages.chooserPage.endeavourosDescription}
          logoSrc={endeavourosLogo}
          logoAlt={messages.chooserPage.endeavourosLogoAlt}
          manager="pacman / yay"
        />
        <DistroCard
          to="/distro/garuda-based"
          title="Garuda"
          description={messages.chooserPage.garudaDescription}
          logoSrc={garudaLogo}
          logoAlt={messages.chooserPage.garudaLogoAlt}
          manager="pacman / yay"
        />
        <DistroCard
          to="/distro/nobara-based"
          title="Nobara"
          description={messages.chooserPage.nobaraDescription}
          logoSrc={nobaraLogo}
          logoAlt={messages.chooserPage.nobaraLogoAlt}
          manager="dnf"
        />
        <DistroCard
          to="/distro/cachyos-based"
          title="CachyOS"
          description={messages.chooserPage.cachyosDescription}
          logoSrc={cachyosLogo}
          logoAlt={messages.chooserPage.cachyosLogoAlt}
          manager="pacman / yay"
        />
      </div>
    </main>
  )
}
