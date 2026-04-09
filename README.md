<p align="center">
  <img src="src/assets/logo.png" alt="Lilite Logo" width="96" />
  <br />
  <h2 align="center">Lilite</h2>
  <p align="center">A clean Linux command builder inspired by Ninite.</p>
</p>

<p align="center">
  <img alt="React" src="https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white" />
  <img alt="Vite" src="https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=FFD62E" />
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white" />
  <img alt="shadcn/ui" src="https://img.shields.io/badge/shadcn%2Fui-111827?logo=vercel&logoColor=white" />
  <img alt="License" src="https://img.shields.io/badge/License-MIT-green" />
  <img alt="Status" src="https://img.shields.io/badge/Status-Active-22c55e" />
  <img alt="Chat" src="https://img.shields.io/badge/AI-Groq-blue" />
  <img alt="i18n" src="https://img.shields.io/badge/i18n-English/French-purple" />
  <img alt="Analytics" src="https://img.shields.io/badge/Vercel-Analytics-black" />
</p>

## Overview

Lilite is a Linux command builder inspired by Ninite.  
It helps users generate install commands for common Linux apps and packages across multiple distribution families:

<p>
  <img alt="Arch-based" src="https://img.shields.io/badge/Arch-1793D1?logo=archlinux&logoColor=white" />
  <img alt="Fedora-based" src="https://img.shields.io/badge/Fedora-51A2DA?logo=fedora&logoColor=white" />
  <img alt="Debian-based" src="https://img.shields.io/badge/Debian-A81D33?logo=debian&logoColor=white" />
  <img alt="openSUSE" src="https://img.shields.io/badge/openSUSE-73BA25?logo=opensuse&logoColor=white" />
  <img alt="Alpine" src="https://img.shields.io/badge/Alpine-0D597F?logo=alpinelinux&logoColor=white" />
</p>

> Lilite only generates commands. It never installs software automatically.

## Why Lilite?

- Fast, minimal workflow
- Transparent command output
- Official repositories only
- No scripts, no hidden execution

## Key Features

- **16 Distribution Families**: Arch, Fedora, Debian, openSUSE, Alpine, Ubuntu, Kali, Manjaro, Linux Mint, Pop!_OS, Zorin, Parrot, EndeavourOS, Garuda, Nobara, CachyOS
- **Package Selection UI**: Category filters, search, and organized package lists
- **Live Command Preview**: Real-time command generation as you select packages
- **One Grouped Install Command**: Single command output for easy review
- **Copy with One Click**: Quick copy functionality
- **Lilo AI Assistant**: Beginner-friendly chat helper powered by Groq for Linux package questions
- **Internationalization**: Full English and French language support
- **Dark/Light Theme**: System theme preference support with toggle
- **SEO Optimized**: Meta tags, structured data, and accessibility features
- **Vercel Analytics**: Built-in analytics integration
- **Accessibility**: Skip links, ARIA labels, keyboard navigation
- **Official repositories only** (no AUR, Snap, Flatpak, COPR, AppImage, or external repos)

## Supported Package Managers

| Family | Package Manager |
| ------ | --------------- |
| Arch-based | pacman / yay |
| Fedora-based | dnf |
| Debian-based | apt |
| openSUSE-based | zypper |
| Alpine-based | apk |

## Routes

| Route | Purpose |
| ----- | ------- |
| `/` | Home page |
| `/get-started` | Distro chooser (16 families) |
| `/distro/arch-based` | Arch family builder |
| `/distro/debian-based` | Debian family builder |
| `/distro/fedora-based` | Fedora family builder |
| `/distro/opensuse-based` | openSUSE family builder |
| `/distro/alpine-based` | Alpine family builder |
| `/distro/ubuntu-based` | Ubuntu family builder |
| `/distro/kali-based` | Kali family builder |
| `/distro/manjaro-based` | Manjaro family builder |
| `/distro/mint-based` | Linux Mint family builder |
| `/distro/popos-based` | Pop!_OS family builder |
| `/distro/zorin-based` | Zorin family builder |
| `/distro/parrot-based` | Parrot family builder |
| `/distro/endeavouros-based` | EndeavourOS family builder |
| `/distro/garuda-based` | Garuda family builder |
| `/distro/nobara-based` | Nobara family builder |
| `/distro/cachyos-based` | CachyOS family builder |

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/med6ba/lilite.git
cd lilite
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

### 4. Build for production

```bash
npm run build
```

## Environment Variables

For the Lilo AI Chat feature, set one of these environment variables:

- `GROQ_API_KEY` - Your Groq API key (server-side)
- `VITE_GROQ_API_KEY` - Alternative (client-side, not recommended)

## Contributing

Contributions are welcome. You can help by:

- adding more verified apps/packages from official repositories
- expanding the shared cross-distro app catalog with popular official-repo packages
- improving the website and layout
- refining UI/UX details
- fixing bugs
- improving code quality and maintainability

Please keep contributions aligned with Lilite's core behavior: safe, manual command generation only.

## License

This project is licensed under the MIT License.  
See [LICENSE](LICENSE) for details.

## Copyright

© 2026 Lilite. All rights reserved.