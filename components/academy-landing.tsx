"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Button,
} from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { GraduationCap, Rocket, Clock, CheckCircle2, Code2, Users2, Briefcase, Star, Globe, Menu, X } from 'lucide-react'

type Locale = "en" | "ro"

type Props = {
  formUrl?: string
  defaultLocale?: Locale
  headingFont?: string
  bodyFont?: string
}

export default function AcademyLanding({
  formUrl = "#",
  defaultLocale = "ro",
  headingFont = "",
  bodyFont = "",
}: Props) {
  const [locale, setLocale] = useState<Locale>(defaultLocale)
  const [menuOpen, setMenuOpen] = useState(false)

  const t = useMemo(() => {
    const common = {
      nav: {
        about: { en: "About", ro: "Despre" },
        program: { en: "Program", ro: "Program" },
        success: { en: "Success Stories", ro: "Povești de succes" },
        faq: { en: "FAQ", ro: "Întrebări frecvente" },
        apply: { en: "Apply", ro: "Înscriere" },
      },
      cta: {
        primary: { en: "Apply Now", ro: "Înscrie-te acum" },
        alt: {
          en: "Fill the registration form",
          ro: "Completează formularul de înscriere",
        },
      },
      labels: {
        duration: { en: "3–6 months", ro: "3–6 luni" },
        proven: { en: "Proven results", ro: "Rezultate dovedite" },
        beginner: { en: "Beginner friendly", ro: "Potrivit pentru începători" },
      },
      footer: {
        rights: {
          en: `© ${new Date().getFullYear()} Academy. All rights reserved.`,
          ro: `© ${new Date().getFullYear()} Academia. Toate drepturile rezervate.`,
        },
        contact: { en: "Contact", ro: "Contact" },
        email: { en: "hello@example.com", ro: "hello@example.com" },
      },
    }

    const en = {
      hero: {
        title:
          "Transform Your Future in Tech. Become a Junior Software Engineer in 3–6 Months!",
        subtitle:
          "Passionate about technology but unsure where to start? Our academy prepares you to contribute meaningfully to real software teams.",
        highlight: "From zero to junior engineer",
        button: "Get Started",
      },
      about: {
        heading: "About the Academy",
        body:
          "We’re a team of experienced engineers and mentors with a track record of helping beginners land their first roles in software. We focus on practical, team-based learning so you can ship real features confidently.",
        offersHeading: "What We Offer",
        offers: [
          "Practical courses created by experts with years of industry experience.",
          "An intensive program designed to take you from zero knowledge to junior engineer level in just 3–6 months.",
          "Personalized support and mentorship throughout the learning process.",
          "A vibrant community of students passionate about technology.",
        ],
      },
      program: {
        heading: "Program Details",
        sub:
          "A clear path from fundamentals to team-ready engineer, with hands-on projects and mentorship.",
        items: [
          {
            title: "Foundations",
            desc:
              "Programming fundamentals, Git, problem solving, and modern web basics.",
            icon: Code2,
          },
          {
            title: "Projects",
            desc:
              "Build real apps with reviews and feedback to accelerate your learning.",
            icon: Rocket,
          },
          {
            title: "Teamwork",
            desc:
              "Agile, code reviews, tickets, and collaboration to simulate real teams.",
            icon: Users2,
          },
          {
            title: "Career Support",
            desc:
              "Portfolio, interview prep, and guidance until you land your first role.",
            icon: Briefcase,
          },
        ],
      },
      success: {
        heading: "Success Stories",
        sub: "Real people. Real outcomes.",
      },
      faq: {
        heading: "Frequently Asked Questions",
        items: [
          {
            q: "How long does the program take?",
            a: "Most students complete the program in 3 to 6 months depending on weekly availability and prior experience.",
          },
          {
            q: "Do I need prior coding experience?",
            a: "No. The program is beginner friendly. We start with fundamentals and provide mentorship along the way.",
          },
          {
            q: "What is the weekly time commitment?",
            a: "Plan for 10–20 hours per week. More time accelerates progress.",
          },
          {
            q: "Is there financing or installment plans?",
            a: "Yes, flexible options are available. Contact us to learn more.",
          },
          {
            q: "Do I get a certificate?",
            a: "You’ll receive a completion certificate and a reviewed portfolio demonstrating your skills.",
          },
          {
            q: "Will you help me get a job?",
            a: "We provide interview prep, portfolio reviews, and referrals. Your effort and consistency are key to success.",
          },
        ],
      },
      finalCta: {
        heading: "Ready to change your career?",
        sub:
          "Spaces are limited. Sign up now to learn more and reserve your spot in the next cohort.",
        button: "Fill the registration form",
      },
    }

    const ro = {
      hero: {
        title:
          "Transformă-ți viitorul în Tech. Devino Junior Software Engineer în 3–6 luni!",
        subtitle:
          "Ești pasionat de tehnologie, dar nu știi de unde să începi? Academia noastră te pregătește să contribui cu încredere într-o echipă reală de software.",
        highlight: "De la zero la junior engineer",
        button: "Începe",
      },
      about: {
        heading: "Despre Academie",
        body:
          "Suntem o echipă de ingineri și mentori cu experiență, cu rezultate dovedite în a ajuta începătorii să își obțină primul rol în software. Punem accent pe învățarea practică, în echipă, astfel încât să poți livra funcționalități reale cu încredere.",
        offersHeading: "Ce oferim",
        offers: [
          "Cursuri practice, create de experți cu ani de experiență în industrie.",
          "Un program intensiv, conceput să te ducă de la zero la nivel de junior engineer în doar 3–6 luni.",
          "Suport personalizat și mentorat pe tot parcursul procesului de învățare.",
          "O comunitate vibrantă de studenți pasionați de tehnologie.",
        ],
      },
      program: {
        heading: "Detalii despre program",
        sub:
          "Un drum clar de la fundamente la inginer pregătit de lucru în echipă, cu proiecte practice și mentorat.",
        items: [
          {
            title: "Fundamente",
            desc:
              "Bazele programării, Git, rezolvarea de probleme și noțiuni moderne de web.",
            icon: Code2,
          },
          {
            title: "Proiecte",
            desc:
              "Construiește aplicații reale cu feedback și revizuiri pentru a accelera învățarea.",
            icon: Rocket,
          },
          {
            title: "Lucru în echipă",
            desc:
              "Agile, code review, tichete și colaborare ca într-o echipă reală.",
            icon: Users2,
          },
          {
            title: "Suport în carieră",
            desc:
              "Portofoliu, pregătire pentru interviu și ghidare până la primul rol.",
            icon: Briefcase,
          },
        ],
      },
      success: {
        heading: "Povești de succes",
        sub: "Oameni reali. Rezultate reale.",
      },
      faq: {
        heading: "Întrebări frecvente",
        items: [
          {
            q: "Cât durează programul?",
            a: "Majoritatea studenților finalizează în 3–6 luni, în funcție de disponibilitate și experiență anterioară.",
          },
          {
            q: "Am nevoie de experiență anterioară?",
            a: "Nu. Programul este potrivit pentru începători. Începem cu fundamentele și oferim mentorat pe parcurs.",
          },
          {
            q: "Care este implicarea săptămânală?",
            a: "Planifică 10–20 ore pe săptămână. Mai mult timp accelerează progresul.",
          },
          {
            q: "Există finanțare sau rate?",
            a: "Da, există opțiuni flexibile. Contactează-ne pentru detalii.",
          },
          {
            q: "Primesc un certificat?",
            a: "Primești un certificat de finalizare și un portofoliu revizuit care îți demonstrează competențele.",
          },
          {
            q: "Mă ajutați să îmi găsesc un job?",
            a: "Oferim pregătire pentru interviu, revizuiri de portofoliu și recomandări. Efortul tău consecvent este cheia succesului.",
          },
        ],
      },
      finalCta: {
        heading: "Pregătit să îți schimbi cariera?",
        sub:
          "Locurile sunt limitate. Înscrie-te acum pentru a afla mai multe și a-ți rezerva locul în următoarea cohortă.",
        button: "Completează formularul de înscriere",
      },
    }

    return { common, ...(locale === "en" ? en : ro) }
  }, [locale])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
      setMenuOpen(false)
    }
  }

  return (
    <div className={`${bodyFont} text-[#212429]`}>
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between">
            <Link href="#" className="flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-[#6246EA]" aria-hidden="true" />
              <span className={`font-semibold ${headingFont}`}>Academy</span>
              <Badge className="ml-1 bg-[#FEE07A] hover:bg-[#FEE07A] text-[#212429] border border-[#F3D652]">
                {t.common.labels.proven[locale]}
              </Badge>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              <button className="text-sm hover:text-[#6246EA] transition-colors" onClick={() => scrollTo("about")}>
                {t.common.nav.about[locale]}
              </button>
              <button className="text-sm hover:text-[#6246EA] transition-colors" onClick={() => scrollTo("program")}>
                {t.common.nav.program[locale]}
              </button>
              <button className="text-sm hover:text-[#6246EA] transition-colors" onClick={() => scrollTo("success")}>
                {t.common.nav.success[locale]}
              </button>
              <button className="text-sm hover:text-[#6246EA] transition-colors" onClick={() => scrollTo("faq")}>
                {t.common.nav.faq[locale]}
              </button>
              <Button
                onClick={() => (window.location.href = formUrl)}
                className="bg-[#6246EA] hover:bg-[#543fd0]"
              >
                {t.common.nav.apply[locale]}
              </Button>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                <Button
                  variant="outline"
                  className="h-8 px-3"
                  onClick={() => setLocale(locale === "en" ? "ro" : "en")}
                  aria-label="Toggle language"
                >
                  {locale === "en" ? "RO" : "EN"}
                </Button>
              </div>
            </nav>

            <button
              className="md:hidden rounded-md p-2 hover:bg-muted"
              aria-label="Open menu"
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {menuOpen && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col gap-2 pt-2">
                <Button variant="ghost" className="justify-start" onClick={() => scrollTo("about")}>
                  {t.common.nav.about[locale]}
                </Button>
                <Button variant="ghost" className="justify-start" onClick={() => scrollTo("program")}>
                  {t.common.nav.program[locale]}
                </Button>
                <Button variant="ghost" className="justify-start" onClick={() => scrollTo("success")}>
                  {t.common.nav.success[locale]}
                </Button>
                <Button variant="ghost" className="justify-start" onClick={() => scrollTo("faq")}>
                  {t.common.nav.faq[locale]}
                </Button>
                <div className="flex items-center gap-2 pt-2">
                  <Button
                    className="flex-1 bg-[#6246EA] hover:bg-[#543fd0]"
                    onClick={() => (window.location.href = formUrl)}
                  >
                    {t.common.nav.apply[locale]}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setLocale(locale === "en" ? "ro" : "en")}
                    aria-label="Toggle language"
                  >
                    {locale === "en" ? "RO" : "EN"}
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/coding-collaboration.png"
              alt="Students collaborating while coding on laptops"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#212429]/60" />
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-24 sm:py-28 lg:py-32 text-white">
            <div className="max-w-3xl">
              <span className="inline-block rounded-full bg-[#FEE07A] text-[#212429] px-3 py-1 text-xs font-semibold">
                {t.common.labels.beginner[locale]}
              </span>
              <h1 className={`${headingFont} mt-6 text-4xl sm:text-5xl font-extrabold`}>
                {t.hero.title}
              </h1>
              <p className="mt-4 text-lg sm:text-xl text-white/90">
                {t.hero.subtitle}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Badge className="bg-white/10 hover:bg-white/20 text-white border-white/20">
                  <Clock className="h-3.5 w-3.5 mr-1.5" />
                  {t.common.labels.duration[locale]}
                </Badge>
                <Badge className="bg-white/10 hover:bg-white/20 text-white border-white/20">
                  <CheckCircle2 className="h-3.5 w-3.5 mr-1.5" />
                  {t.common.labels.proven[locale]}
                </Badge>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button
                  size="lg"
                  className="bg-[#6246EA] hover:bg-[#543fd0]"
                  onClick={() => (window.location.href = formUrl)}
                >
                  {t.common.cta.primary[locale]}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-black hover:bg-white/10"
                  onClick={() => scrollTo("program")}
                >
                  <Rocket className="h-4 w-4 mr-2" />
                  {t.hero.button}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="bg-[#FAFAFA]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#FEE07A] px-3 py-1 text-xs font-semibold text-[#212429]">
                  <GraduationCap className="h-3.5 w-3.5" />
                  {locale === "en" ? "Mission & Values" : "Misiune & Valori"}
                </div>
                <h2 className={`${headingFont} mt-4 text-3xl sm:text-4xl font-bold`}>
                  {t.about.heading}
                </h2>
                <p className="mt-4 text-muted-foreground">
                  {t.about.body}
                </p>

                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  {t.about.offers.map((item, i) => (
                    <Card key={i} className="border-[#EDEDED]">
                      <CardContent className="p-4 flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-[#3F8CEB]" />
                        <p className="text-sm">{item}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="mt-6">
                  <Button
                    onClick={() => (window.location.href = formUrl)}
                    className="bg-[#6246EA] hover:bg-[#543fd0]"
                  >
                    {t.common.cta.alt[locale]}
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl ring-1 ring-black/5">
                  <Image
                    src="/mentor-student-pair-programming.png"
                    alt={locale === "en" ? "Mentor guiding a student" : "Mentor ghidând un student"}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 hidden sm:block">
                  <div className="rounded-xl bg-[#FEE07A] px-4 py-3 shadow-md">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src="/mentor-portrait.png" alt="Mentor" />
                        <AvatarFallback>MN</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-semibold">
                          {locale === "en" ? "Real mentors" : "Mentori reali"}
                        </p>
                        <p className="text-xs text-[#212429]/70">
                          {locale === "en" ? "Weekly 1:1 support" : "Suport 1:1 săptămânal"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Program */}
        <section id="program">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#6246EA]/10 text-[#6246EA] px-3 py-1 text-xs font-semibold">
                <Rocket className="h-3.5 w-3.5" />
                {locale === "en" ? "Curriculum Overview" : "Prezentare Curriculum"}
              </div>
              <h2 className={`${headingFont} mt-4 text-3xl sm:text-4xl font-bold`}>
                {t.program.heading}
              </h2>
              <p className="mt-4 text-muted-foreground">
                {t.program.sub}
              </p>
            </div>

            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {t.program.items.map((step, idx) => (
                <Card
                  key={idx}
                  className="border-[#EDEDED] hover:shadow-md transition-shadow"
                >
                  <CardHeader className="pb-2">
                    <div className="h-10 w-10 rounded-lg bg-[#FEE07A] flex items-center justify-center">
                      <step.icon className="h-5 w-5 text-[#212429]" aria-hidden="true" />
                    </div>
                    <CardTitle className={`${headingFont} text-lg mt-3`}>{step.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {step.desc}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="pt-0">
                    <Badge variant="outline" className="text-[#3F8CEB] border-[#3F8CEB]">
                      <Clock className="h-3.5 w-3.5 mr-1" />
                      {t.common.labels.duration[locale]}
                    </Badge>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section id="success" className="bg-[#FAFAFA]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#6246EA]/10 text-[#6246EA] px-3 py-1 text-xs font-semibold">
                <Star className="h-3.5 w-3.5" />
                {locale === "en" ? "Testimonials" : "Testimoniale"}
              </div>
              <h2 className={`${headingFont} mt-4 text-3xl sm:text-4xl font-bold`}>
                {t.success.heading}
              </h2>
              <p className="mt-4 text-muted-foreground">{t.success.sub}</p>
            </div>

            <div className="mt-10 grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Alex M.",
                  role: locale === "en" ? "Junior Frontend Engineer" : "Junior Frontend Engineer",
                  quote:
                    locale === "en"
                      ? "I started with zero coding experience. The projects and mentorship gave me the confidence to ship features at my new job."
                      : "Am pornit de la zero. Proiectele și mentoratul mi-au dat încrederea să livrez funcționalități la noul job.",
                  imgQuery: "young%20developer%20portrait",
                },
                {
                  name: "Bianca I.",
                  role: locale === "en" ? "Software Engineer" : "Software Engineer",
                  quote:
                    locale === "en"
                      ? "Clear roadmap, supportive community, and practical learning. I landed interviews within months."
                      : "O hartă clară, comunitate suportivă și învățare practică. Am obținut interviuri în câteva luni.",
                  imgQuery: "software%20engineer%20portrait",
                },
                {
                  name: "Dan P.",
                  role: locale === "en" ? "Full-Stack Developer" : "Full-Stack Developer",
                  quote:
                    locale === "en"
                      ? "The team-based approach simulates real-world work. It made the transition into my role much smoother."
                      : "Abordarea de lucru în echipă simulează realitatea. Tranziția în rol a fost mult mai lină.",
                  imgQuery: "full%20stack%20developer%20portrait",
                },
              ].map((tst, i) => (
                <Card key={i} className="border-[#EDEDED]">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage
                          src={`/abstract-geometric-shapes.png?height=64&width=64&query=${tst.imgQuery}`}
                          alt={`Portrait of ${tst.name}`}
                        />
                        <AvatarFallback>
                          {tst.name
                            .split(" ")
                            .map((s) => s[0])
                            .join("")
                            .slice(0, 2)
                            .toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className={`${headingFont} font-semibold`}>{tst.name}</p>
                        <p className="text-sm text-muted-foreground">{tst.role}</p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm">
                      “{tst.quote}”
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 py-16 sm:py-20">
            <h2 className={`${headingFont} text-3xl sm:text-4xl font-bold`}>{t.faq.heading}</h2>
            <div className="mt-6">
              <Accordion type="single" collapsible className="w-full">
                {t.faq.items.map((item, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger className={`${headingFont} text-left`}>
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-[#6246EA] to-[#3F8CEB]"
          />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20 text-white">
            <div className="grid lg:grid-cols-[1fr_420px] gap-8 items-center">
              <div>
                <h2 className={`${headingFont} text-3xl sm:text-4xl font-bold`}>
                  {t.finalCta.heading}
                </h2>
                <p className="mt-3 text-white/90">{t.finalCta.sub}</p>
                <div className="mt-6">
                  <Button
                    size="lg"
                    className="bg-white text-[#212429] hover:bg-white/90"
                    onClick={() => (window.location.href = formUrl)}
                  >
                    {t.finalCta.button}
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/20">
                  <Image
                    src="/confident-coding-student.png"
                    alt={locale === "en" ? "Student coding confidently" : "Student care codează cu încredere"}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-5 -right-5">
                  <div className="rounded-lg bg-[#FEE07A] px-3 py-2 shadow">
                    <div className="flex items-center gap-2 text-[#212429]">
                      <CheckCircle2 className="h-4 w-4" />
                      <span className="text-xs font-semibold">
                        {locale === "en" ? "Limited spots" : "Locuri limitate"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <p className="text-sm text-muted-foreground">{t.common.footer.rights[locale]}</p>
          <div className="sm:ml-auto flex items-center gap-3">
            <span className="text-sm">{t.common.footer.contact[locale]}:</span>
            <Link
              href={`mailto:${t.common.footer.email[locale]}`}
              className="text-sm text-[#3F8CEB] hover:underline"
            >
              {t.common.footer.email[locale]}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
