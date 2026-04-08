import { Link } from 'react-router-dom'
import { ShieldCheck, TerminalSquare } from 'lucide-react'
import { LogoMark } from '@/components/LogoMark'
import { useLanguage } from '@/hooks/useLanguage'

export function Footer() {
  const year = new Date().getFullYear()
  const { messages } = useLanguage()
  const distroLinks = [
    { to: '/distro/arch-based', label: messages.footer.arch },
    { to: '/distro/fedora-based', label: messages.footer.fedora },
    { to: '/distro/debian-based', label: messages.footer.debian },
    { to: '/distro/opensuse-based', label: messages.footer.opensuse },
    { to: '/distro/alpine-based', label: messages.footer.alpine },
    { to: '/distro/ubuntu-based', label: messages.footer.ubuntu },
    { to: '/distro/kali-based', label: messages.footer.kali },
    { to: '/distro/manjaro-based', label: messages.footer.manjaro },
    { to: '/distro/mint-based', label: messages.footer.mint },
    { to: '/distro/popos-based', label: messages.footer.popos },
    { to: '/distro/zorin-based', label: messages.footer.zorin },
    { to: '/distro/parrot-based', label: messages.footer.parrot },
    { to: '/distro/endeavouros-based', label: messages.footer.endeavouros },
    { to: '/distro/garuda-based', label: messages.footer.garuda },
    { to: '/distro/nobara-based', label: messages.footer.nobara },
    { to: '/distro/cachyos-based', label: messages.footer.cachyos },
  ]

  return (
    <footer className="border-t bg-gradient-to-b from-background to-muted/20">
      <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-5">
          <section className="rounded-2xl border bg-card/85 p-5 shadow-sm">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-md text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border bg-card shadow-sm">
                <LogoMark className="h-5 w-5 rounded-md" />
              </span>
              <span className="text-base font-extrabold tracking-tight">Lilite</span>
            </Link>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">{messages.footer.brandDescription}</p>
            <div className="mt-4 flex flex-wrap items-start gap-2.5">
              <p className="inline-flex items-start gap-2 rounded-lg border border-primary/20 bg-primary/[0.06] p-2.5 text-xs leading-relaxed text-muted-foreground">
                <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                {messages.footer.manualNotice}
              </p>
              <Link
                to="/get-started"
                className="inline-flex h-10 items-center gap-2 rounded-md border border-input bg-background/80 px-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <TerminalSquare className="h-4 w-4 text-primary" />
                {messages.footer.distroChooser}
              </Link>
            </div>
          </section>

          <section aria-label={messages.footer.distros} className="rounded-2xl border bg-card/85 p-5 shadow-sm">
            <h2 className="text-sm font-semibold tracking-tight text-foreground">{messages.footer.distros}</h2>
            <ul className="mt-3 grid grid-cols-2 gap-2 text-sm sm:grid-cols-3">
              {distroLinks.map((linkItem) => (
                <li key={linkItem.to}>
                  <Link
                    to={linkItem.to}
                    className="inline-flex min-h-9 w-full items-center justify-center rounded-lg border bg-background/80 px-2 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    {linkItem.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="mt-6 flex flex-col gap-2 border-t pt-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} Lilite. {messages.footer.copyright}
          </p>
          <div className="flex items-center gap-4">
            <Link to="/" className="transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              {messages.footer.home}
            </Link>
            <Link
              to="/get-started"
              className="transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {messages.footer.distroChooser}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
