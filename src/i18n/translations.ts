import { Category, DistroFamily } from '@/types'

export type Language = 'en' | 'fr'

type LocalizedStep = {
  title: string
  description: string
}

type LocalizedFaq = {
  question: string
  answer: string
}

type DistroLocalizedInfo = {
  title: string
  description: string
  shortDescription: string
  maintenanceCardTitle: string
}

export interface AppMessages {
  navbar: {
    starOnGitHub: string
    starAria: string
  }
  languageToggle: {
    aria: string
  }
  themeToggle: {
    switchToDark: string
    switchToLight: string
  }
  hero: {
    title: string
    description: string
    startBuilding: string
    badges: {
      manualReview: string
      oneGroupedCommand: string
      manualExecution: string
    }
  }
  home: {
    seoTitle: string
    howItWorksTitle: string
    howItWorksDescription: string
    steps: LocalizedStep[]
    whyTrustTitle: string
    whyTrustDescription: string
    communitySectionTitle: string
    communitySectionDescription: string
    linuxCommunityTitle: string
    popularAppsTitle: string
    trustCards: {
      noHiddenExecutionTitle: string
      noHiddenExecutionBody: string
      fullControlTitle: string
      fullControlBody: string
      oneCleanOutputTitle: string
      oneCleanOutputBody: string
    }
  }
  faq: {
    title: string
    description: string
    items: LocalizedFaq[]
  }
  footer: {
    navigation: string
    distros: string
    home: string
    distroChooser: string
    arch: string
    fedora: string
    debian: string
    opensuse: string
    alpine: string
    ubuntu: string
    kali: string
    manjaro: string
    mint: string
    popos: string
    zorin: string
    parrot: string
    endeavouros: string
    garuda: string
    nobara: string
    cachyos: string
    brandDescription: string
    manualNotice: string
    copyright: string
  }
  chooserPage: {
    seoTitle: string
    seoDescription: string
    title: string
    description: string
    totalFamiliesBadge: string
    packageManagersBadge: string
    summaryNote: string
    archDescription: string
    fedoraDescription: string
    debianDescription: string
    opensuseDescription: string
    alpineDescription: string
    ubuntuDescription: string
    kaliDescription: string
    manjaroDescription: string
    mintDescription: string
    poposDescription: string
    zorinDescription: string
    parrotDescription: string
    endeavourosDescription: string
    garudaDescription: string
    nobaraDescription: string
    cachyosDescription: string
    archLogoAlt: string
    fedoraLogoAlt: string
    debianLogoAlt: string
    opensuseLogoAlt: string
    alpineLogoAlt: string
    ubuntuLogoAlt: string
    kaliLogoAlt: string
    manjaroLogoAlt: string
    mintLogoAlt: string
    poposLogoAlt: string
    zorinLogoAlt: string
    parrotLogoAlt: string
    endeavourosLogoAlt: string
    garudaLogoAlt: string
    nobaraLogoAlt: string
    cachyosLogoAlt: string
  }
  distroPage: {
    seoTitleSuffix: string
    maintenanceSectionTitle: string
    maintenanceSectionDescription: string
    packageSelectionTitle: string
    packageSelectionDescription: string
    selected: string
    sourceModeAria: string
    officialSourceLabel: string
    communitySourceLabel: string
    communityModeHint: string
    noPackagesMatch: string
    clearSelection: string
    getYourLilite: string
    yourLiliteCommand: string
    selectPackagesPlaceholder: string
  }
  common: {
    back: string
    skipToContent: string
    copyCommand: string
    copied: string
    searchPackagesAria: string
    searchPlaceholder: string
    filterByCategoryAria: string
    all: string
    openPackageBuilder: string
    selectLabelPrefix: string
    logoAlt: string
  }
  notFound: {
    seoTitle: string
    seoDescription: string
    title: string
    description: string
    backToHome: string
    codeLabel: string
  }
  terminalPreview: {
    title: string
    placeholder: string
    reviewMessage: string
  }
  chatWidget: {
    toggleAria: string
    dialogAria: string
    title: string
    clearHistoryAria: string
    closeAria: string
    emptyState: string
    assistantTyping: string
    jumpToLatest: string
    jumpToLatestAria: string
    launcherHint: string
    inputPlaceholder: string
    inputAria: string
    sendAria: string
    errors: {
      noResponseBody: string
      fetchFailed: string
    }
  }
  categories: Record<Category, string>
  distroInfo: Record<DistroFamily, DistroLocalizedInfo>
}

export const translations: Record<Language, AppMessages> = {
  en: {
    navbar: {
      starOnGitHub: 'Star on GitHub',
      starAria: 'Star Lilite on GitHub',
    },
    languageToggle: {
      aria: 'Switch language',
    },
    themeToggle: {
      switchToDark: 'Switch to dark mode',
      switchToLight: 'Switch to light mode',
    },
    hero: {
      title: 'Build Linux install commands with clarity, not guesswork',
      description:
        'Select packages from official repositories and generate one grouped install command. Lilite never executes anything automatically.',
      startBuilding: 'Start Building',
      badges: {
        manualReview: 'Manual review',
        oneGroupedCommand: 'One grouped command',
        manualExecution: 'Manual execution',
      },
    },
    home: {
      seoTitle: 'Lilite | Linux Package Command Builder',
      howItWorksTitle: 'How Lilite Works',
      howItWorksDescription: 'A quick four-step flow focused on transparency and control.',
      steps: [
        {
          title: 'Choose your distribution family',
          description: 'Select your Linux family so Lilite generates the correct package manager syntax.',
        },
        {
          title: 'Find and select packages',
          description: 'Use category filters and search to quickly choose only what you need.',
        },
        {
          title: 'Review one grouped install command',
          description: 'The live preview updates instantly and always stays as a single command.',
        },
        {
          title: 'Copy and run manually',
          description: 'You stay in control by running the command yourself in your terminal.',
        },
      ],
      whyTrustTitle: 'Why Trust Lilite',
      whyTrustDescription: 'Lilite stays minimal, inspectable, and predictable.',
      communitySectionTitle: 'Built with Linux Community Spirit',
      communitySectionDescription: 'A visual catalog inspired by open-source ecosystems and the apps people use every day.',
      linuxCommunityTitle: 'Linux Community',
      popularAppsTitle: 'Popular App Pack',
      trustCards: {
        noHiddenExecutionTitle: 'No hidden execution',
        noHiddenExecutionBody: 'No login required, no backend command execution, and no automatic installs.',
        fullControlTitle: 'Full control',
        fullControlBody: 'Review, copy, and run commands in your own terminal.',
        oneCleanOutputTitle: 'One clear output',
        oneCleanOutputBody: 'All selected packages are grouped into one clean install command.',
      },
    },
    faq: {
      title: 'FAQ',
      description: 'Quick answers about how Lilite keeps package installation safe, transparent, and fully manual.',
      items: [
        {
          question: 'Does Lilite install software automatically?',
          answer: 'No. Lilite only generates commands. You manually copy, review, and run them in your terminal.',
        },
        {
          question: 'Where do package names come from?',
          answer: 'Lilite uses local typed datasets that reference package names from official repositories for each supported distribution family.',
        },
        {
          question: 'Can Lilite generate scripts?',
          answer: 'No. Lilite intentionally outputs one grouped install command to keep behavior transparent and easy to inspect.',
        },
        {
          question: 'Are third-party package sources supported?',
          answer: 'No. Flatpak, Snap, AUR, COPR, AppImage, and other external sources are intentionally excluded.',
        },
      ],
    },
    footer: {
      navigation: 'Navigation',
      distros: 'Distributions',
      home: 'Home',
      distroChooser: 'Choose a Distro',
      arch: 'Arch',
      fedora: 'Fedora',
      debian: 'Debian',
      opensuse: 'openSUSE',
      alpine: 'Alpine',
      ubuntu: 'Ubuntu',
      kali: 'Kali',
      manjaro: 'Manjaro',
      mint: 'Linux Mint',
      popos: 'Pop!_OS',
      zorin: 'Zorin',
      parrot: 'Parrot',
      endeavouros: 'EndeavourOS',
      garuda: 'Garuda',
      nobara: 'Nobara',
      cachyos: 'CachyOS',
      brandDescription:
        'Lilite helps you generate one grouped install command from official repositories across major Linux distribution families.',
      manualNotice: 'Manual review and execution only. No automatic installation. No third-party repositories.',
      copyright: 'All rights reserved.',
    },
    chooserPage: {
      seoTitle: 'Choose a Distribution Family',
      seoDescription:
        'Select your Linux distribution family and generate one grouped install command with the right package manager.',
      title: 'Choose Your Distribution Family',
      description: 'Pick your Linux family to generate install commands with the correct package manager and package names.',
      totalFamiliesBadge: '16 distribution families',
      packageManagersBadge: 'apt / pacman / yay / dnf / zypper / apk',
      summaryNote: 'Choose once, generate clean commands instantly.',
      archDescription: 'Pacman workflow for Arch Linux and related distributions.',
      fedoraDescription: 'DNF workflow for Fedora and Fedora-like RPM systems.',
      debianDescription: 'APT workflow for Debian, Ubuntu, and Debian derivatives.',
      opensuseDescription: 'Zypper workflow for openSUSE and SUSE-compatible systems.',
      alpineDescription: 'APK workflow for Alpine Linux and Alpine derivatives.',
      ubuntuDescription: 'APT workflow for Ubuntu and Ubuntu-like systems.',
      kaliDescription: 'APT workflow for Kali Linux and security-focused Debian derivatives.',
      manjaroDescription: 'Pacman workflow for Manjaro and Arch-derived systems.',
      mintDescription: 'APT workflow for Linux Mint and Ubuntu-derived systems.',
      poposDescription: 'APT workflow for Pop!_OS and Ubuntu-derived systems.',
      zorinDescription: 'APT workflow for Zorin OS and Ubuntu-derived systems.',
      parrotDescription: 'APT workflow for Parrot Security and Debian-derived systems.',
      endeavourosDescription: 'Pacman workflow for EndeavourOS and Arch-derived systems.',
      garudaDescription: 'Pacman workflow for Garuda Linux and Arch-derived systems.',
      nobaraDescription: 'DNF workflow for Nobara and Fedora-derived systems.',
      cachyosDescription: 'Pacman workflow for CachyOS and Arch-derived systems.',
      archLogoAlt: 'Arch Linux logo',
      fedoraLogoAlt: 'Fedora logo',
      debianLogoAlt: 'Debian logo',
      opensuseLogoAlt: 'openSUSE logo',
      alpineLogoAlt: 'Alpine Linux logo',
      ubuntuLogoAlt: 'Ubuntu logo',
      kaliLogoAlt: 'Kali Linux logo',
      manjaroLogoAlt: 'Manjaro logo',
      mintLogoAlt: 'Linux Mint logo',
      poposLogoAlt: 'Pop!_OS logo',
      zorinLogoAlt: 'Zorin logo',
      parrotLogoAlt: 'Parrot logo',
      endeavourosLogoAlt: 'EndeavourOS logo',
      garudaLogoAlt: 'Garuda logo',
      nobaraLogoAlt: 'Nobara logo',
      cachyosLogoAlt: 'CachyOS logo',
    },
    distroPage: {
      seoTitleSuffix: 'Package Builder',
      maintenanceSectionTitle: 'System Maintenance Commands',
      maintenanceSectionDescription: 'Run these maintenance commands before installing additional packages.',
      packageSelectionTitle: 'Package Selection',
      packageSelectionDescription:
        'Filter packages, select what you need, then click Get Your Lilite to generate one grouped install command.',
      selected: 'Selected',
      sourceModeAria: 'Package source mode',
      officialSourceLabel: 'Official',
      communitySourceLabel: 'Community (yay)',
      communityModeHint: 'Community mode uses yay -S to install packages commonly provided through AUR on Arch-based systems.',
      noPackagesMatch: 'No packages match your current search and category filters.',
      clearSelection: 'Clear Selection',
      getYourLilite: 'Get Your Lilite',
      yourLiliteCommand: 'Your Lilite Command',
      selectPackagesPlaceholder: '# Select packages to generate your command',
    },
    common: {
      back: 'Back',
      skipToContent: 'Skip to content',
      copyCommand: 'Copy Command',
      copied: 'Copied',
      searchPackagesAria: 'Search packages',
      searchPlaceholder: 'Search by app, package, or description',
      filterByCategoryAria: 'Filter packages by category',
      all: 'All',
      openPackageBuilder: 'Open package builder',
      selectLabelPrefix: 'Select',
      logoAlt: 'Lilite logo',
    },
    notFound: {
      seoTitle: 'Page Not Found',
      seoDescription: 'The page you requested could not be found. Return to Lilite and continue building Linux install commands safely.',
      title: 'Page not found',
      description: "The page you're looking for doesn't exist. Return home and continue with Lilite.",
      backToHome: 'Back to Home',
      codeLabel: '404',
    },
    terminalPreview: {
      title: 'Terminal Preview',
      placeholder: '# Select packages to generate one grouped install command',
      reviewMessage: 'Review this command carefully before running it in your terminal.',
    },
    chatWidget: {
      toggleAria: 'Toggle Lilo assistant',
      dialogAria: 'Lilo assistant',
      title: 'Lilo',
      clearHistoryAria: 'Reset chat',
      closeAria: 'Close Lilo',
      emptyState: 'Ask Lilo beginner-friendly Linux package questions.',
      assistantTyping: 'Lilo is typing...',
      jumpToLatest: 'Latest',
      jumpToLatestAria: 'Scroll to the latest messages',
      launcherHint: 'Start chatting about Linux',
      inputPlaceholder: 'Type your message...',
      inputAria: 'Chat input',
      sendAria: 'Send message',
      errors: {
        noResponseBody: 'No response body from the server.',
        fetchFailed: 'Unable to fetch the assistant response.',
      },
    },
    categories: {
      Browsers: 'Browsers',
      Development: 'Development',
      Communication: 'Communication',
      Media: 'Media',
      Utilities: 'Utilities',
      Terminals: 'Terminals',
      Others: 'Others',
    },
    distroInfo: {
      'arch-based': {
        title: 'Arch Family',
        description:
          'Arch-based distributions use pacman. Select curated packages from official repositories and generate one grouped install command.',
        shortDescription: 'Rolling-release systems using pacman and official repositories.',
        maintenanceCardTitle: 'Refresh and upgrade system',
      },
      'debian-based': {
        title: 'Debian Family',
        description:
          'Debian-based distributions use apt. Choose commonly used packages and copy one grouped install command for manual execution.',
        shortDescription: 'Stable systems using apt and official package sources.',
        maintenanceCardTitle: 'Refresh and upgrade system',
      },
      'fedora-based': {
        title: 'Fedora Family',
        description:
          'Fedora-based distributions use dnf. Pick useful packages from official repositories and generate one grouped install command.',
        shortDescription: 'RPM-based systems powered by dnf and official repositories.',
        maintenanceCardTitle: 'Refresh and upgrade system',
      },
      'opensuse-based': {
        title: 'openSUSE Family',
        description:
          'openSUSE-based distributions use zypper. Pick useful packages from official repositories and generate one grouped install command.',
        shortDescription: 'RPM-based systems powered by zypper and official repositories.',
        maintenanceCardTitle: 'Refresh and upgrade system',
      },
      'alpine-based': {
        title: 'Alpine Family',
        description:
          'Alpine-based distributions use apk. Pick useful packages from official repositories and generate one grouped install command.',
        shortDescription: 'Lightweight systems using apk and official repositories.',
        maintenanceCardTitle: 'Refresh and upgrade system',
      },
      'ubuntu-based': {
        title: 'Ubuntu Family',
        description:
          'Ubuntu-based distributions use apt. Pick useful packages from official repositories and generate one grouped install command.',
        shortDescription: 'Ubuntu-derived systems using apt and official repositories.',
        maintenanceCardTitle: 'Refresh and upgrade system',
      },
      'kali-based': {
        title: 'Kali Family',
        description:
          'Kali-based distributions use apt. Pick useful packages from official repositories and generate one grouped install command.',
        shortDescription: 'Security-focused systems using apt package management.',
        maintenanceCardTitle: 'Refresh and upgrade system',
      },
      'manjaro-based': {
        title: 'Manjaro Family',
        description:
          'Manjaro-based distributions use pacman. Pick useful packages from official repositories and generate one grouped install command.',
        shortDescription: 'Arch-derived systems using pacman and official repositories.',
        maintenanceCardTitle: 'Refresh and upgrade system',
      },
      'mint-based': {
        title: 'Linux Mint Family',
        description: 'Linux Mint-based distributions use apt. Pick useful packages from official repositories and generate one grouped install command.',
        shortDescription: 'Ubuntu-derived systems using apt and official repositories.',
        maintenanceCardTitle: 'Refresh and upgrade system',
      },
      'popos-based': {
        title: 'Pop!_OS Family',
        description: 'Pop!_OS-based distributions use apt. Pick useful packages from official repositories and generate one grouped install command.',
        shortDescription: 'Ubuntu-derived systems using apt and official repositories.',
        maintenanceCardTitle: 'Refresh and upgrade system',
      },
      'zorin-based': {
        title: 'Zorin Family',
        description: 'Zorin-based distributions use apt. Pick useful packages from official repositories and generate one grouped install command.',
        shortDescription: 'Ubuntu-derived systems using apt and official repositories.',
        maintenanceCardTitle: 'Refresh and upgrade system',
      },
      'parrot-based': {
        title: 'Parrot Family',
        description: 'Parrot-based distributions use apt. Pick useful packages from official repositories and generate one grouped install command.',
        shortDescription: 'Security-focused Debian-derived systems using apt.',
        maintenanceCardTitle: 'Refresh and upgrade system',
      },
      'endeavouros-based': {
        title: 'EndeavourOS Family',
        description: 'EndeavourOS-based distributions use pacman. Pick useful packages from official repositories and generate one grouped install command.',
        shortDescription: 'Arch-derived systems using pacman and official repositories.',
        maintenanceCardTitle: 'Refresh and upgrade system',
      },
      'garuda-based': {
        title: 'Garuda Family',
        description: 'Garuda-based distributions use pacman. Pick useful packages from official repositories and generate one grouped install command.',
        shortDescription: 'Arch-derived systems using pacman and official repositories.',
        maintenanceCardTitle: 'Refresh and upgrade system',
      },
      'nobara-based': {
        title: 'Nobara Family',
        description: 'Nobara-based distributions use dnf. Pick useful packages from official repositories and generate one grouped install command.',
        shortDescription: 'Fedora-derived systems using dnf and official repositories.',
        maintenanceCardTitle: 'Refresh and upgrade system',
      },
      'cachyos-based': {
        title: 'CachyOS Family',
        description: 'CachyOS-based distributions use pacman. Pick useful packages and generate one grouped install command.',
        shortDescription: 'Arch-derived systems using pacman and official repositories.',
        maintenanceCardTitle: 'Refresh and upgrade system',
      },
    },
  },
  fr: {
    navbar: {
      starOnGitHub: 'Mettre une étoile sur GitHub',
      starAria: 'Mettre une étoile à Lilite sur GitHub',
    },
    languageToggle: {
      aria: 'Changer la langue',
    },
    themeToggle: {
      switchToDark: 'Passer en mode sombre',
      switchToLight: 'Passer en mode clair',
    },
    hero: {
      title: "Créez des commandes d'installation Linux claires et fiables",
      description:
        "Sélectionnez des paquets depuis les dépôts officiels et générez une commande d'installation groupée unique. Lilite n'exécute rien automatiquement.",
      startBuilding: 'Commencer',
      badges: {
        manualReview: 'Vérification manuelle',
        oneGroupedCommand: 'Commande groupée unique',
        manualExecution: 'Exécution manuelle',
      },
    },
    home: {
      seoTitle: 'Lilite | Générateur de commandes Linux',
      howItWorksTitle: 'Comment fonctionne Lilite',
      howItWorksDescription: 'Un parcours rapide en quatre étapes, conçu pour la transparence et le contrôle.',
      steps: [
        {
          title: 'Choisissez votre famille de distribution',
          description: 'Sélectionnez votre famille Linux pour générer la bonne syntaxe de gestionnaire de paquets.',
        },
        {
          title: 'Trouvez et sélectionnez vos paquets',
          description: 'Utilisez les filtres par catégorie et la recherche pour choisir rapidement ce dont vous avez besoin.',
        },
        {
          title: 'Vérifiez une commande groupée unique',
          description: "L'aperçu en direct se met à jour instantanément et reste toujours une seule commande.",
        },
        {
          title: 'Copiez et exécutez manuellement',
          description: 'Vous gardez le contrôle total en lançant vous-même la commande dans votre terminal.',
        },
      ],
      whyTrustTitle: 'Pourquoi faire confiance à Lilite',
      whyTrustDescription: 'Lilite reste minimal, vérifiable et prévisible.',
      communitySectionTitle: "Conçu avec l'esprit de la communauté Linux",
      communitySectionDescription: "Un catalogue visuel inspiré de l'écosystème open source et des outils utilisés au quotidien.",
      linuxCommunityTitle: 'Communauté Linux',
      popularAppsTitle: "Pack d'applications populaires",
      trustCards: {
        noHiddenExecutionTitle: 'Aucune exécution cachée',
        noHiddenExecutionBody: "Pas de connexion requise, pas d'exécution de commandes côté serveur, et aucune installation automatique.",
        fullControlTitle: 'Contrôle total',
        fullControlBody: 'Vérifiez, copiez et exécutez les commandes vous-même dans votre terminal.',
        oneCleanOutputTitle: 'Un résultat clair',
        oneCleanOutputBody: "Toutes les sélections sont regroupées dans une commande d'installation claire.",
      },
    },
    faq: {
      title: 'FAQ',
      description: "Réponses rapides sur la manière dont Lilite rend l'installation de paquets sûre, transparente et 100 % manuelle.",
      items: [
        {
          question: 'Lilite installe-t-il les logiciels automatiquement ?',
          answer: 'Non. Lilite génère uniquement des commandes. Vous copiez, vérifiez et exécutez manuellement dans votre terminal.',
        },
        {
          question: "D'où viennent les noms de paquets ?",
          answer: 'Lilite utilise des jeux de données typés locaux avec des noms issus des dépôts officiels pour chaque famille supportée.',
        },
        {
          question: 'Lilite peut-il générer des scripts ?',
          answer: 'Non. Lilite produit volontairement une seule commande groupée pour garder un comportement transparent et vérifiable.',
        },
        {
          question: 'Les sources de paquets tierces sont-elles prises en charge ?',
          answer: 'Non. Flatpak, Snap, AUR, COPR, AppImage et les sources externes sont volontairement exclus.',
        },
      ],
    },
    footer: {
      navigation: 'Navigation',
      distros: 'Distributions',
      home: 'Accueil',
      distroChooser: 'Choisir une distribution',
      arch: 'Arch',
      fedora: 'Fedora',
      debian: 'Debian',
      opensuse: 'openSUSE',
      alpine: 'Alpine',
      ubuntu: 'Ubuntu',
      kali: 'Kali',
      manjaro: 'Manjaro',
      mint: 'Linux Mint',
      popos: 'Pop!_OS',
      zorin: 'Zorin',
      parrot: 'Parrot',
      endeavouros: 'EndeavourOS',
      garuda: 'Garuda',
      nobara: 'Nobara',
      cachyos: 'CachyOS',
      brandDescription:
        "Lilite vous aide à générer une commande d'installation groupée unique depuis les dépôts officiels, pour les principales familles de distributions Linux.",
      manualNotice: 'Vérification et exécution manuelles uniquement. Aucune installation automatique. Aucun dépôt tiers.',
      copyright: 'Tous droits réservés.',
    },
    chooserPage: {
      seoTitle: 'Choisir une famille de distributions',
      seoDescription:
        'Sélectionnez votre famille de distributions Linux et générez une commande groupée unique avec le bon gestionnaire de paquets.',
      title: 'Choisissez votre famille de distribution',
      description: 'Choisissez votre famille de distro pour générer des commandes avec le bon gestionnaire de paquets.',
      totalFamiliesBadge: '16 familles de distributions',
      packageManagersBadge: 'apt / pacman / yay / dnf / zypper / apk',
      summaryNote: 'Choisissez une fois, générez des commandes propres instantanément.',
      archDescription: 'Flux pacman pour Arch Linux et distributions associées.',
      fedoraDescription: 'Flux dnf pour Fedora et systèmes RPM similaires.',
      debianDescription: 'Flux apt pour Debian, Ubuntu et dérivées Debian.',
      opensuseDescription: 'Flux zypper pour openSUSE et systèmes compatibles SUSE.',
      alpineDescription: 'Flux apk pour Alpine Linux et distributions dérivées.',
      ubuntuDescription: 'Flux apt pour Ubuntu et systèmes compatibles Ubuntu.',
      kaliDescription: 'Flux apt pour Kali Linux et distributions Debian orientées sécurité.',
      manjaroDescription: 'Flux pacman pour Manjaro et systèmes dérivés d’Arch.',
      mintDescription: 'Flux apt pour Linux Mint et systèmes dérivés d’Ubuntu.',
      poposDescription: 'Flux apt pour Pop!_OS et systèmes dérivés d’Ubuntu.',
      zorinDescription: 'Flux apt pour Zorin OS et systèmes dérivés d’Ubuntu.',
      parrotDescription: 'Flux apt pour Parrot Security et systèmes dérivés de Debian.',
      endeavourosDescription: 'Flux pacman pour EndeavourOS et systèmes dérivés d’Arch.',
      garudaDescription: 'Flux pacman pour Garuda Linux et systèmes dérivés d’Arch.',
      nobaraDescription: 'Flux dnf pour Nobara et systèmes dérivés de Fedora.',
      cachyosDescription: 'Flux pacman pour CachyOS et systèmes dérivés d’Arch.',
      archLogoAlt: 'Logo Arch Linux',
      fedoraLogoAlt: 'Logo Fedora',
      debianLogoAlt: 'Logo Debian',
      opensuseLogoAlt: 'Logo openSUSE',
      alpineLogoAlt: 'Logo Alpine Linux',
      ubuntuLogoAlt: 'Logo Ubuntu',
      kaliLogoAlt: 'Logo Kali Linux',
      manjaroLogoAlt: 'Logo Manjaro',
      mintLogoAlt: 'Logo Linux Mint',
      poposLogoAlt: 'Logo Pop!_OS',
      zorinLogoAlt: 'Logo Zorin',
      parrotLogoAlt: 'Logo Parrot',
      endeavourosLogoAlt: 'Logo EndeavourOS',
      garudaLogoAlt: 'Logo Garuda',
      nobaraLogoAlt: 'Logo Nobara',
      cachyosLogoAlt: 'Logo CachyOS',
    },
    distroPage: {
      seoTitleSuffix: 'Générateur de paquets',
      maintenanceSectionTitle: 'Commandes de maintenance système',
      maintenanceSectionDescription: "Exécutez ces commandes de maintenance avant d'installer d'autres paquets.",
      packageSelectionTitle: 'Sélection des paquets',
      packageSelectionDescription:
        "Filtrez les paquets, sélectionnez ce dont vous avez besoin, puis cliquez sur Obtenir votre Lilite pour générer une commande groupée unique.",
      selected: 'Sélectionnés',
      sourceModeAria: 'Source des paquets',
      officialSourceLabel: 'Officiel',
      communitySourceLabel: 'Communauté (yay)',
      communityModeHint:
        "Le mode Communauté utilise yay -S pour installer plus facilement des paquets souvent proposés via l'AUR sur les systèmes basés sur Arch.",
      noPackagesMatch: 'Aucun paquet ne correspond à vos filtres actuels.',
      clearSelection: 'Vider la sélection',
      getYourLilite: 'Obtenir votre Lilite',
      yourLiliteCommand: 'Votre commande Lilite',
      selectPackagesPlaceholder: '# Sélectionnez des paquets pour générer votre commande',
    },
    common: {
      back: 'Retour',
      skipToContent: 'Aller au contenu',
      copyCommand: 'Copier la commande',
      copied: 'Copié',
      searchPackagesAria: 'Rechercher des paquets',
      searchPlaceholder: 'Rechercher par application, paquet ou description',
      filterByCategoryAria: 'Filtrer les paquets par catégorie',
      all: 'Tous',
      openPackageBuilder: 'Ouvrir le générateur',
      selectLabelPrefix: 'Sélectionner',
      logoAlt: 'Logo Lilite',
    },
    notFound: {
      seoTitle: 'Page introuvable',
      seoDescription: 'La page demandée est introuvable. Revenez sur Lilite pour continuer à générer vos commandes Linux.',
      title: 'Page introuvable',
      description: "La page demandée n'existe pas. Revenez à l'accueil pour continuer avec Lilite.",
      backToHome: "Retour à l'accueil",
      codeLabel: '404',
    },
    terminalPreview: {
      title: 'Aperçu terminal',
      placeholder: '# Sélectionnez des paquets pour générer une seule commande groupée',
      reviewMessage: "Vérifiez attentivement cette commande avant de l'exécuter dans votre terminal.",
    },
    chatWidget: {
      toggleAria: "Afficher ou masquer l'assistant Lilo",
      dialogAria: 'Assistant Lilo',
      title: 'Lilo',
      clearHistoryAria: 'Réinitialiser le chat',
      closeAria: 'Fermer Lilo',
      emptyState: 'Posez a Lilo des questions simples sur les paquets Linux.',
      assistantTyping: 'Lilo est en train de répondre...',
      jumpToLatest: 'Récent',
      jumpToLatestAria: 'Aller aux derniers messages',
      launcherHint: 'Commencer a parler de Linux',
      inputPlaceholder: 'Écrivez votre message...',
      inputAria: 'Saisie du chat',
      sendAria: 'Envoyer le message',
      errors: {
        noResponseBody: "Aucune réponse n'a été reçue du serveur.",
        fetchFailed: "Impossible de récupérer la réponse de l'assistant.",
      },
    },
    categories: {
      Browsers: 'Navigateurs',
      Development: 'Développement',
      Communication: 'Communication',
      Media: 'Média',
      Utilities: 'Utilitaires',
      Terminals: 'Terminaux',
      Others: 'Autres',
    },
    distroInfo: {
      'arch-based': {
        title: 'Famille Arch',
        description:
          "Les distributions basées sur Arch utilisent pacman. Sélectionnez des paquets des dépôts officiels et générez une commande groupée unique.",
        shortDescription: 'Systèmes rolling release utilisant pacman et les dépôts officiels.',
        maintenanceCardTitle: 'Actualiser et mettre à niveau le système',
      },
      'debian-based': {
        title: 'Famille Debian',
        description:
          "Les distributions basées sur Debian utilisent apt. Choisissez des paquets courants et copiez une commande groupée unique pour une exécution manuelle.",
        shortDescription: 'Systèmes stables utilisant apt et des sources officielles.',
        maintenanceCardTitle: 'Actualiser et mettre à niveau le système',
      },
      'fedora-based': {
        title: 'Famille Fedora',
        description:
          'Les distributions basées sur Fedora utilisent dnf. Choisissez des paquets utiles des dépôts officiels et générez une commande groupée claire.',
        shortDescription: 'Systèmes RPM utilisant dnf et les dépôts officiels.',
        maintenanceCardTitle: 'Actualiser et mettre à niveau le système',
      },
      'opensuse-based': {
        title: 'Famille openSUSE',
        description:
          'Les distributions basées sur openSUSE utilisent zypper. Choisissez des paquets utiles des dépôts officiels et générez une commande groupée claire.',
        shortDescription: 'Systèmes RPM utilisant zypper et les dépôts officiels.',
        maintenanceCardTitle: 'Actualiser et mettre à niveau le système',
      },
      'alpine-based': {
        title: 'Famille Alpine',
        description:
          'Les distributions basées sur Alpine utilisent apk. Choisissez des paquets utiles des dépôts officiels et générez une commande groupée claire.',
        shortDescription: 'Systèmes légers utilisant apk et les dépôts officiels.',
        maintenanceCardTitle: 'Actualiser et mettre à niveau le système',
      },
      'ubuntu-based': {
        title: 'Famille Ubuntu',
        description:
          'Les distributions basées sur Ubuntu utilisent apt. Choisissez des paquets utiles des dépôts officiels et générez une commande groupée claire.',
        shortDescription: 'Systèmes basés sur Ubuntu utilisant apt et les dépôts officiels.',
        maintenanceCardTitle: 'Actualiser et mettre à niveau le système',
      },
      'kali-based': {
        title: 'Famille Kali',
        description:
          'Les distributions basées sur Kali utilisent apt. Choisissez des paquets utiles des dépôts officiels et générez une commande groupée claire.',
        shortDescription: 'Systèmes orientés sécurité utilisant apt.',
        maintenanceCardTitle: 'Actualiser et mettre à niveau le système',
      },
      'manjaro-based': {
        title: 'Famille Manjaro',
        description:
          'Les distributions basées sur Manjaro utilisent pacman. Choisissez des paquets utiles des dépôts officiels et générez une commande groupée claire.',
        shortDescription: 'Systèmes dérivés d’Arch utilisant pacman.',
        maintenanceCardTitle: 'Actualiser et mettre à niveau le système',
      },
      'mint-based': {
        title: 'Famille Linux Mint',
        description:
          'Les distributions basées sur Linux Mint utilisent apt. Choisissez des paquets utiles des dépôts officiels et générez une commande groupée claire.',
        shortDescription: 'Systèmes dérivés d’Ubuntu utilisant apt.',
        maintenanceCardTitle: 'Actualiser et mettre à niveau le système',
      },
      'popos-based': {
        title: 'Famille Pop!_OS',
        description:
          'Les distributions basées sur Pop!_OS utilisent apt. Choisissez des paquets utiles des dépôts officiels et générez une commande groupée claire.',
        shortDescription: 'Systèmes dérivés d’Ubuntu utilisant apt.',
        maintenanceCardTitle: 'Actualiser et mettre à niveau le système',
      },
      'zorin-based': {
        title: 'Famille Zorin',
        description:
          'Les distributions basées sur Zorin utilisent apt. Choisissez des paquets utiles des dépôts officiels et générez une commande groupée claire.',
        shortDescription: 'Systèmes dérivés d’Ubuntu utilisant apt.',
        maintenanceCardTitle: 'Actualiser et mettre à niveau le système',
      },
      'parrot-based': {
        title: 'Famille Parrot',
        description:
          'Les distributions basées sur Parrot utilisent apt. Choisissez des paquets utiles des dépôts officiels et générez une commande groupée claire.',
        shortDescription: 'Systèmes orientés sécurité dérivés de Debian.',
        maintenanceCardTitle: 'Actualiser et mettre à niveau le système',
      },
      'endeavouros-based': {
        title: 'Famille EndeavourOS',
        description:
          'Les distributions basées sur EndeavourOS utilisent pacman. Choisissez des paquets utiles des dépôts officiels et générez une commande groupée claire.',
        shortDescription: 'Systèmes dérivés d’Arch utilisant pacman.',
        maintenanceCardTitle: 'Actualiser et mettre à niveau le système',
      },
      'garuda-based': {
        title: 'Famille Garuda',
        description:
          'Les distributions basées sur Garuda utilisent pacman. Choisissez des paquets utiles des dépôts officiels et générez une commande groupée claire.',
        shortDescription: 'Systèmes dérivés d’Arch utilisant pacman.',
        maintenanceCardTitle: 'Actualiser et mettre à niveau le système',
      },
      'nobara-based': {
        title: 'Famille Nobara',
        description:
          'Les distributions basées sur Nobara utilisent dnf. Choisissez des paquets utiles des dépôts officiels et générez une commande groupée claire.',
        shortDescription: 'Systèmes dérivés de Fedora utilisant dnf.',
        maintenanceCardTitle: 'Actualiser et mettre à niveau le système',
      },
      'cachyos-based': {
        title: 'CachyOS-based',
        description:
          'Les distributions CachyOS-based utilisent pacman. Choisissez des paquets utiles et générez une commande groupée claire.',
        shortDescription: 'Systèmes dérivés d’Arch utilisant pacman.',
        maintenanceCardTitle: 'Actualiser et mettre à niveau le système',
      },
    },
  },
}
