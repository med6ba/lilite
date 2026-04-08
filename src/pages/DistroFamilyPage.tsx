import { useMemo, useState } from 'react'
import { Trash2 } from 'lucide-react'
import { BackButton } from '@/components/BackButton'
import { categories } from '@/data/constants'
import { distroPackages, maintenanceCommands } from '@/data/packages'
import { usePackageSelection } from '@/hooks/usePackageSelection'
import { buildInstallCommand, supportsCommunityHelper } from '@/lib/commandBuilder'
import { filterPackages } from '@/lib/filterPackages'
import { getSiteUrl } from '@/lib/site'
import {
  createBreadcrumbSchema,
  createCollectionPageSchema,
} from '@/lib/structuredData'
import { Category, DistroFamily } from '@/types'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CategoryFilter } from '@/components/CategoryFilter'
import { CopyButton } from '@/components/CopyButton'
import { MaintenanceCommandCard } from '@/components/MaintenanceCommandCard'
import { PackageCard } from '@/components/PackageCard'
import { SearchBar } from '@/components/SearchBar'
import { SectionHeader } from '@/components/SectionHeader'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useLanguage } from '@/hooks/useLanguage'
import { useSEO } from '@/hooks/useSEO'

interface DistroFamilyPageProps {
  distro: DistroFamily
}

const distroManagerMap: Record<DistroFamily, string> = {
  'alpine-based': 'apk',
  'arch-based': 'pacman',
  'debian-based': 'apt',
  'endeavouros-based': 'pacman',
  'fedora-based': 'dnf',
  'garuda-based': 'pacman',
  'kali-based': 'apt',
  'manjaro-based': 'pacman',
  'mint-based': 'apt',
  'nobara-based': 'dnf',
  'cachyos-based': 'pacman',
  'opensuse-based': 'zypper',
  'parrot-based': 'apt',
  'popos-based': 'apt',
  'ubuntu-based': 'apt',
  'zorin-based': 'apt',
}

export function DistroFamilyPage({ distro }: DistroFamilyPageProps) {
  const { messages } = useLanguage()
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All')
  const [showLiliteCommand, setShowLiliteCommand] = useState(false)
  const [liliteCommand, setLiliteCommand] = useState('')
  const [useCommunityHelper, setUseCommunityHelper] = useState(false)

  const allPackages = distroPackages[distro]
  const { selectedPackages, selectedCount, isSelected, togglePackage, clearSelection } = usePackageSelection(allPackages)

  const filteredPackages = useMemo(
    () => filterPackages(allPackages, searchTerm, activeCategory),
    [allPackages, searchTerm, activeCategory],
  )

  const command = useMemo(
    () => buildInstallCommand(distro, selectedPackages, { useCommunityHelper }),
    [distro, selectedPackages, useCommunityHelper],
  )
  const canUseCommunityHelper = supportsCommunityHelper(distro)
  const siteUrl = getSiteUrl()
  const pageUrl = `${siteUrl}/distro/${distro}`
  const structuredData = useMemo(
    () => [
      createCollectionPageSchema({
        description: messages.distroInfo[distro].description,
        name: messages.distroInfo[distro].title,
        url: pageUrl,
      }),
      createBreadcrumbSchema([
        { name: 'Lilite', url: `${siteUrl}/` },
        { name: messages.chooserPage.title, url: `${siteUrl}/get-started` },
        { name: messages.distroInfo[distro].title, url: pageUrl },
      ]),
    ],
    [
      distro,
      messages.chooserPage.title,
      messages.distroInfo,
      pageUrl,
      siteUrl,
    ],
  )

  useSEO({
    title: `${messages.distroInfo[distro].title} ${messages.distroPage.seoTitleSuffix}`,
    description: messages.distroInfo[distro].description,
    pathname: `/distro/${distro}`,
    keywords: [
      `${messages.distroInfo[distro].title.toLowerCase()} linux package builder`,
      `${distroManagerMap[distro]} install command`,
      'linux package command builder',
      'official repository packages',
      `${messages.distroInfo[distro].title.toLowerCase()} package manager`,
    ],
    structuredData,
  })

  const handleGetLilite = () => {
    setLiliteCommand(command)
    setShowLiliteCommand(true)
  }

  const handleClearSelection = () => {
    clearSelection()
    setShowLiliteCommand(false)
    setLiliteCommand('')
  }

  return (
    <main className="mx-auto w-full max-w-6xl space-y-6 px-4 py-5 sm:space-y-8 sm:px-6 sm:py-8">
      <section>
        <SectionHeader
          title={messages.distroInfo[distro].title}
          description={messages.distroInfo[distro].description}
          action={<BackButton />}
          as="h1"
        />
      </section>

      <section>
        <SectionHeader title={messages.distroPage.maintenanceSectionTitle} description={messages.distroPage.maintenanceSectionDescription} />
        <div className="grid gap-3 md:grid-cols-2">
          {maintenanceCommands[distro].map((item) => (
            <MaintenanceCommandCard key={item.id} title={messages.distroInfo[distro].maintenanceCardTitle} command={item.command} />
          ))}
        </div>
      </section>

      <section>
        <SectionHeader title={messages.distroPage.packageSelectionTitle} description={messages.distroPage.packageSelectionDescription} />

        <div className="mb-3 flex flex-wrap items-center gap-2.5">
          <Badge variant="secondary" className="rounded-md px-3 py-1 text-sm" aria-live="polite" aria-atomic="true">
            {messages.distroPage.selected}: {selectedCount}
          </Badge>
          {canUseCommunityHelper ? (
            <div className="inline-flex flex-wrap items-center gap-1 rounded-lg border bg-card p-1" role="group" aria-label={messages.distroPage.sourceModeAria}>
              <button
                type="button"
                onClick={() => setUseCommunityHelper(false)}
                aria-pressed={!useCommunityHelper}
                className={`min-h-9 rounded-md px-3 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                  !useCommunityHelper ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {messages.distroPage.officialSourceLabel}
              </button>
              <button
                type="button"
                onClick={() => setUseCommunityHelper(true)}
                aria-pressed={useCommunityHelper}
                className={`min-h-9 rounded-md px-3 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                  useCommunityHelper ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {messages.distroPage.communitySourceLabel}
              </button>
            </div>
          ) : null}
        </div>

        {canUseCommunityHelper ? (
          <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
            {messages.distroPage.communityModeHint}
          </p>
        ) : null}

        <div className="space-y-3">
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
          <CategoryFilter categories={categories} selected={activeCategory} onSelect={setActiveCategory} />
        </div>

        <div className="mt-4">
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} checked={isSelected(pkg.id)} onToggle={togglePackage} />
            ))}
          </div>
          {filteredPackages.length === 0 ? (
            <p className="mt-3 rounded-md border border-dashed bg-card/40 p-3 text-sm text-muted-foreground">
              {messages.distroPage.noPackagesMatch}
            </p>
          ) : null}

          <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
            <Button variant="outline" size="sm" className="w-full sm:w-auto" onClick={handleClearSelection} disabled={selectedCount === 0}>
              <Trash2 className="mr-2 h-4 w-4" />
              {messages.distroPage.clearSelection}
            </Button>
            <Button variant="default" size="sm" className="w-full sm:w-auto" onClick={handleGetLilite} disabled={selectedCount === 0}>
              {messages.distroPage.getYourLilite}
            </Button>
          </div>

          {showLiliteCommand ? (
            <Card className="mt-3 rounded-xl border bg-card/80 shadow-sm">
              <CardHeader>
                <CardTitle className="text-base">{messages.distroPage.yourLiliteCommand}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <pre className="min-h-24 overflow-x-auto whitespace-pre-wrap break-words rounded-md border bg-muted/40 p-3 font-mono text-xs leading-relaxed sm:text-sm">
                  {liliteCommand || messages.distroPage.selectPackagesPlaceholder}
                </pre>
                <CopyButton text={liliteCommand} disabled={!liliteCommand.trim()} />
              </CardContent>
            </Card>
          ) : null}
        </div>
      </section>
    </main>
  )
}
