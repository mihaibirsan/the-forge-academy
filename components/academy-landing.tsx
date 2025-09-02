"use client"

import { useMemo, useState } from "react"
import { Components } from "react-markdown"
import ReactMarkdown from "react-markdown"
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
import { GraduationCap, Rocket, Clock, CheckCircle2, Code2, Users2, Briefcase, Star, Globe, Menu, X, GitBranch, Database, Monitor, Cloud, Brain } from 'lucide-react'

type Locale = "en" | "ro"

type Props = {
  formUrl?: string
  defaultLocale?: Locale
  headingFont?: string
  bodyFont?: string
}

// Component to render markdown text with custom styling
const MarkdownText = ({ children, inline = false, className = "" }: { children: string; inline?: boolean; className?: string }) => {
  const components: Components = {
    p: ({ children }) => <p className="mb-3 last:mb-0">{children}</p>,
    strong: ({ children }) => <strong className="font-semibold text-inherit">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    ul: ({ children }) => <ul className="list-disc pl-4 space-y-1">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal pl-4 space-y-1">{children}</ol>,
    li: ({ children }) => <li>{children}</li>,
    a: ({ children, href }) => <Link href={href!} className="text-blue-500 hover:underline">{children}</Link>
  };

  if (inline) {
    return <ReactMarkdown
      components={components}
      disallowedElements={['p']}
      unwrapDisallowed
    >
      {children}
    </ReactMarkdown>
  }
  return <div className={`prose prose-sm max-w-none ${className}`}>
    <ReactMarkdown components={components}>
      {children}
    </ReactMarkdown>
  </div>;
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
        duration: { en: "30 hrs/week", ro: "30 ore/săpt" },
        proven: { en: "Proven results", ro: "Rezultate dovedite" },
        beginner: { en: "Beginner friendly", ro: "Potrivit pentru începători" },
        languageToggle: { en: "RO", ro: "EN" },
        missionValues: { en: "Mission & Values", ro: "Misiune & Valori" },
        realMentors: { en: "Real mentor", ro: "Mentor real" },
        weeklySupport: { en: "Weekly 1:1 support", ro: "Suport 1:1 săptămânal" },
        curriculumOverview: { en: "Curriculum Overview", ro: "Prezentare Curriculum" },
        testimonials: { en: "Testimonials", ro: "Testimoniale" },
        limitedSpots: { en: "Limited spots", ro: "Locuri limitate" },
      },
      images: {
        mentorGuiding: { en: "Mentor guiding a student", ro: "Mentor ghidând un student" },
        studentCoding: { en: "Student coding confidently", ro: "Student care codează cu încredere" },
      },
      footer: {
        rights: {
          en: `© ${new Date().getFullYear()} Academia The Forge. All rights reserved.`,
          ro: `© ${new Date().getFullYear()} Academia The Forge. Toate drepturile rezervate.`,
        },
        contact: { en: "Contact", ro: "Contact" },
        email: { en: "hello@example.com", ro: "hello@example.com" },
      },
    }

    const en = {
      hero: {
        title:
          "Transform Your Future in Tech. Become a Full-Stack Web Developer in 3–6 Months!",
        subtitle:
          "Academia The Forge offers an intensive full-stack web course that develops the necessary skills to create complete web applications and forms your analytical thinking oriented towards solutions.",
        highlight: "From zero to full-stack developer",
        button: "Learn More",
      },
      about: {
        heading: "About Academia The Forge",
        body:
          "At **The Forge Academy** you'll find an intensive program, with limited spots, where each student receives real attention and direct feedback.\n\nYou work on practical projects, in a motivated community, guided step by step by a mentor with 20 years of experience. **We believe that if you actively engage in this program you will benefit from:**",
        offers: [
          "**A portfolio of projects** - built end-to-end, that you can showcase in interviews",
          "**Solid technical skills** - JavaScript, React, Node.js, databases and deployment, all applied practically",
          "**A solution-oriented mindset** - you learn to approach complex problems and find solutions like a real developer",
          "**Confidence and discipline** - not only do you know how to write code, but you know you can deliver in a real work environment",
        ],
      },
      program: {
        heading: "Complete Curriculum",
        sub: "Not just a list of technologies, but a step-by-step path - from the basics of programming to the moment when you can build your own full-stack application.",
        items: [
          {
            title: "JavaScript Fundamentals",
            desc:
              "You start with programming basics and learn how to write code in JavaScript.",
            icon: Code2,
          },
          {
            title: "Version Control with Git and GitHub",
            desc:
              "You discover how to save your work, collaborate, and manage projects like a professional.",
            icon: GitBranch,
          },
          {
            title: "Back-End Development",
            desc:
              "You build the \"invisible\" part of applications: servers, APIs, and the logic behind functionalities.",
            icon: Rocket,
          },
          {
            title: "Databases – Storage and Querying",
            desc:
              "You learn how to create, organize, and extract information from databases.",
            icon: Database,
          },
          {
            title: "Front-End Web Development",
            desc:
              "You create modern and interactive interfaces with HTML, CSS, and React, exactly what users see.",
            icon: Monitor,
          },
          {
            title: "Complete Application Deployment",
            desc:
              "You learn how to publish your application online and keep it functional for users.",
            icon: Cloud,
          },
          {
            title: "Analytical and Solution-Oriented Thinking",
            desc:
              "You train your approach to tackling problems and finding quick and efficient solutions.",
            icon: Brain,
          },
        ],
      },
      success: {
        heading: "Your Success is Our Goal",
        sub: "We believe in every student's potential. As long as you're willing to work and actively engage, we'll help you achieve your goals.",
      },
      faq: {
        heading: "Frequently Asked Questions",
        items: [
          {
            q: "How long does the course last and how much time do I need to invest per week?",
            a: "The group course lasts 3 months. You have 14 hours per week with the mentor + up to 30 hours of individual study and project work.\n\nThe 1:1 course includes 30 hours with the mentor, spread over a maximum of 6 months. The schedule is agreed upon together with the mentor.",
          },
          {
            q: "Do I need programming knowledge beforehand?",
            a: "You only need the basics of computer science (what you learned in high school, college, or other courses in the field). You'll learn the rest with us, step by step.\n\nA requirement for the interview is to read book 1 of [the \"You Don't Know JS\" series by Kyle Simpson](https://github.com/getify/You-Dont-Know-JS/tree/1st-ed).",
          },
          {
            q: "How is the student selection process conducted?",
            a: "Before enrollment, you have a short online interview to ensure you're motivated and that the program suits you.",
          },
          {
            q: "What happens if I can no longer continue the course?",
            a: "Payment is monthly. If you withdraw, you don't pay for the following months, but the amount already paid is not refunded.",
          },
          {
            q: "Will I receive a certificate at the end?",
            a: "Yes, upon course completion you receive a completion certificate issued by The Forge Academy and a recommendation upon request.",
          },
          {
            q: "Will you help me find a job after the course?",
            a: "We don't promise guaranteed employment, but if opportunities arise from partner companies, we'll connect you with them. Additionally, the projects completed during the course provide you with a strong portfolio for interviews. We are directly interested in continuing your journey in IT.",
          },
        ],
      },
      finalCta: {
        heading: "Ready to Change Your Career?",
        sub:
          "Academia The Forge believes in every student's potential. If you're willing to work and dedicate the necessary time, we'll help you start your full-stack web developer career on the right foot.",
        button: "Complete the Registration Form",
      },
    }

    const ro = {
      hero: {
        title:
          "Transformă-ți viitorul în Tech. Devino dezvoltator web full-stack în 3–6 luni!",
        subtitle:
          "Academia The Forge oferă un curs intensiv de web full-stack care îți dezvoltă competențele necesare pentru a crea aplicații web complete și îți formează gândirea analitică orientată spre soluții.",
        highlight: "De la zero la dezvoltator full-stack",
        button: "Află mai multe",
      },
      about: {
        heading: "Despre Academia The Forge",
        body:
          "La **The Forge Academy** găsești un program intensiv, cu locuri limitate, unde fiecare cursant primește atenție reală și feedback direct.\n\nLucrezi la proiecte practice, într-o comunitate motivată, ghidat pas cu pas de un mentor cu 20 de ani experiență. **Credem că dacă te implici activ în acest program vei beneficia de:**",
        offers: [
          "**Un portofoliu de proiecte** - construite cap-coadă, pe care le poți arăta la interviuri",
          "**Competențe tehnice solide** - JavaScript, React, Node.js, baze de date și deployment, toate aplicate practic",
          "**Un mod de gândire orientat spre soluții** - înveți să abordezi probleme complexe și să găsești rezolvări ca un developer adevărat",
          "**Încredere și disciplină** - nu doar că știi să scrii cod, dar știi că poți livra într-un mediu de lucru real",
        ],
      },
      program: {
        heading: "Curriculum complet",
        sub: "Nu e doar o înșiruire de tehnologii, ci un traseu gândit pas cu pas – de la bazele programării, până la momentul în care poți construi propria aplicație full-stack.",
        items: [
          {
            title: "Fundamentele JavaScript",
            desc:
              "Începi cu bazele programării și înveți cum să scrii cod în JavaScript.",
            icon: Code2,
          },
          {
            title: "Controlul versiunilor cu Git și GitHub",
            desc:
              "Descoperi cum să îți salvezi munca, să colaborezi și să gestionezi proiecte ca un profesionist.",
            icon: GitBranch,
          },
          {
            title: "Dezvoltare Back-End",
            desc:
              "Construiești partea \"invizibilă\" a aplicațiilor: servere, API-uri și logica din spatele funcționalităților.",
            icon: Rocket,
          },
          {
            title: "Baze de date – stocare și interogare",
            desc:
              "Înveți cum să creezi, să organizezi și să extragi informații din baze de date.",
            icon: Database,
          },
          {
            title: "Dezvoltare Web Front-End",
            desc:
              "Creezi interfețe moderne și interactive cu HTML, CSS și React, exact ce văd utilizatorii.",
            icon: Monitor,
          },
          {
            title: "Deployment-ul aplicației complete",
            desc:
              "Afli cum să publici aplicația online și să o menții funcțională pentru utilizatori.",
            icon: Cloud,
          },
          {
            title: "Gândire analitică și orientată spre soluții",
            desc:
              "Îți antrenezi modul de a aborda problemele și de a găsi soluții rapide și eficiente.",
            icon: Brain,
          },
        ],
      },
      success: {
        heading: "Succesul tău este ținta noastră",
        sub: "Credem în potențialul fiecărui student. Atâta timp cât ești dispus să muncești și să te implici activ, te vom ajuta să îți atingi obiectivele.",
      },
      faq: {
        heading: "Întrebări frecvente",
        items: [
          {
            q: "Cât durează cursul și cât timp trebuie să investesc pe săptămână?",
            a: "Cursul de grup durează 3 luni. Ai 14 ore pe săptămână cu mentorul + până la 30 de ore de studiu individual și lucru la proiecte.\n\nCursul 1:1 include 30 de ore cu mentorul, împărțite pe maximum 6 luni. Programul este stabilit de comun acord împreună cu mentorul.",
          },
          {
            q: "Trebuie să am cunoștințe de programare înainte?",
            a: "Ai nevoie doar de bazele informaticii (ce ai învățat în liceu, facultate sau alte cursuri în domeniu). Restul îl înveți la noi, pas cu pas.\n\nO cerință obligatorie pentru interviu este să citești cartea 1 din [seria \"You Don't Know JS\" de Kyle Simpson](https://github.com/getify/You-Dont-Know-JS/tree/1st-ed).",
          },
          {
            q: "Cum se face selecția cursanților?",
            a: "Înainte de înscriere ai un scurt interviu online, astfel încât să ne asigurăm că ești motivat și că programul ți se potrivește.",
          },
          {
            q: "Ce se întâmplă dacă nu mai pot continua cursul?",
            a: "Plata este lunară. Dacă te retragi, nu mai plătești lunile următoare, dar suma deja achitată nu se returnează.",
          },
          {
            q: "Voi primi un certificat la final?",
            a: "Da, la absolvirea cursului primești un certificat de absolvire emis de Academia The Forge și o recomandare la cerere.",
          },
          {
            q: "Mă ajutați să îmi găsesc un job după curs?",
            a: "Nu promitem angajare garantată, dar dacă apar oportunități de la companii partenere, te punem în legătură cu ele. În plus, proiectele făcute la curs îți oferă un portofoliu puternic pentru interviuri. Suntem direct interesați de continuarea parcursului tău în IT.",
          },
        ],
      },
      finalCta: {
        heading: "Pregătit să îți schimbi cariera?",
        sub:
          "Academia The Forge crede în potențialul fiecărui student. Dacă ești dispus să muncești și să dedicatești timpul necesar, te vom ajuta să pornești cu dreptul în cariera de dezvoltator web full-stack.",
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
              <img src="/the-forge-symbol.png" alt="The Forge Symbol" className="h-6 text-[#6246EA]" aria-hidden="true" />
              <span className={`font-semibold ${headingFont}`}>Academia The Forge</span>
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
                  {t.common.labels.languageToggle[locale]}
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
                    {t.common.labels.languageToggle[locale]}
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
              <div className="mt-4 text-lg sm:text-xl text-white/90">
                <MarkdownText className="prose-invert">{t.hero.subtitle}</MarkdownText>
              </div>
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
                  {t.common.labels.missionValues[locale]}
                </div>
                <h2 className={`${headingFont} mt-4 text-3xl sm:text-4xl font-bold`}>
                  {t.about.heading}
                </h2>
                <div className="mt-4 text-muted-foreground">
                  <MarkdownText>{t.about.body}</MarkdownText>
                </div>

                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  {t.about.offers.map((item, i) => (
                    <Card key={i} className="border-[#EDEDED]">
                      <CardContent className="px-4 flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-[#3F8CEB]" />
                        <p className="text-sm">
                          <MarkdownText inline>{item}</MarkdownText>
                        </p>
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
                    src="/mentor-student-pair-programming-ro.png"
                    alt={t.common.images.mentorGuiding[locale]}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 hidden sm:block">
                  <div className="rounded-xl bg-[#FEE07A] px-4 py-3 shadow-md">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src="/dan-andrei-diac-profile.jpg" alt="Dan Andrei Diac (mentor)" />
                        <AvatarFallback>AD</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-semibold">
                          {t.common.labels.realMentors[locale]}
                        </p>
                        <p className="text-xs text-[#212429]/70">
                          {t.common.labels.weeklySupport[locale]}
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
                {t.common.labels.curriculumOverview[locale]}
              </div>
              <h2 className={`${headingFont} mt-4 text-3xl sm:text-4xl font-bold`}>
                {t.program.heading}
              </h2>
              <div className="mt-4 text-muted-foreground">
                <MarkdownText>{t.program.sub}</MarkdownText>
              </div>
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
                      <MarkdownText>{step.desc}</MarkdownText>
                    </CardDescription>
                  </CardHeader>
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
                {t.common.labels.testimonials[locale]}
              </div>
              <h2 className={`${headingFont} mt-4 text-3xl sm:text-4xl font-bold`}>
                {t.success.heading}
              </h2>
              <div className="mt-4 text-muted-foreground">
                <MarkdownText>{t.success.sub}</MarkdownText>
              </div>
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
                      <MarkdownText>{item.q}</MarkdownText>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      <MarkdownText>{item.a}</MarkdownText>
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
                    src="/confident-coding-student-ro.png"
                    alt={t.common.images.studentCoding[locale]}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-5 -right-5">
                  <div className="rounded-lg bg-[#FEE07A] px-3 py-2 shadow">
                    <div className="flex items-center gap-2 text-[#212429]">
                      <CheckCircle2 className="h-4 w-4" />
                      <span className="text-xs font-semibold">
                        {t.common.labels.limitedSpots[locale]}
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
