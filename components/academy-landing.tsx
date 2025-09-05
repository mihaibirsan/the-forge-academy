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
import { GraduationCap, Rocket, Clock, CheckCircle2, Code2, Users2, Briefcase, Star, Globe, Menu, X, GitBranch, Database, Monitor, Cloud, Brain, DollarSign } from 'lucide-react'

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
        success: { en: "Testimonials", ro: "Testimoniale" },
        pricing: { en: "Pricing", ro: "Prețuri" },
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
        email: { en: "academy.theforge@gmail.com", ro: "academy.theforge@gmail.com" },
      },
    }

    const en = {
      hero: {
        title:
          "Transform Your Future in Tech. Become a Full-Stack Web Developer in 3–6 Months!",
        subtitle:
          "There are no shortcuts to becoming a programmer. There is only work, feedback, and real projects. At The Forge Academy, you learn to code, solve problems, and build complete web applications in 3 months. And in the end, you not only have technical skills but also the confidence that you can deliver.",
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
        programDetails: {
          heading: "Program Structure & Schedule",
          sub: "How the Academy works: daily live sessions, individual study, and monthly evaluations.",
          items: [
            {
              title: "Intensive Daily Program",
              body: "The course takes place in live daily sessions, Monday to Friday, from **08:00 - 10:00** (morning) with the trainer. Additionally, every Saturday you have an extended session, from **09:00 - 13:00**, for practical workshops and in-depth review with the trainer.",
            },
            {
              title: "Individual Study",
              body: "Besides the hours spent with the trainer, you are expected to invest time in individual learning and practice – up to **30 hours per week** – to deepen concepts and keep up with the fast pace of the course. This extra effort is essential to consolidate your knowledge and reach your full potential.",
            },
            {
              title: "Duration & Periodic Evaluations",
              body: "The program is structured over approximately 3 months (an intensive bootcamp). At the end of each month, you will have a **progress evaluation**. Based on your results and involvement, the decision to continue the course for the next month will be made together. These periodic evaluations help you become aware of your level and ensure that all students who move forward have acquired the necessary knowledge.",
            },
          ],
          schedule: {
            heading: "Course Timeline",
            items: [
              "Start: 20.10.2025",
              "October 20 - November 20: course",
              "November 20 - December 20: course",
              "December 20 - January 5: holiday",
              "January 5 - February 5: course",
            ],
          },
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
        heading: "How Others Experienced the Academy",
        sub: "At The Forge Academy, the best evidence is not our promises, but the stories of those who have gone through the course. Each testimonial is a piece of a student's journey who changed their future through hard work and dedication.",
        sub2: "Feedback from people who have worked in a team with the mentor:",
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
      pricing: {
        heading: "Pricing & Benefits",
        sub: "Choose the learning format that works best for you.",
        recommended: "Recommended",
        group: {
          title: "Group Course",
          duration: "Duration: 3 months",
          totalPrice: "Total price: 4,500 lei",
          payment: "Payment: in 3 equal installments of 1,500 lei/month",
          conditions: "Conditions:",
          conditionsList: [
            "payment is due within 5 days of invoice issuance",
            "if you decide to withdraw, you don't pay for future months, but the amount paid is not refunded"
          ],
          bonus: "Bonus: upon successful graduation, you receive back 10% of the total amount paid"
        },
        oneOnOne: {
          title: "1-on-1 Course (personalized)",
          duration: "Duration: maximum 6 months",
          totalPrice: "Total price: 7,500 lei",
          payment: "Payment: in 3 equal installments of 2,500 lei/10 hours of mentoring",
          conditions: "Conditions:",
          conditionsList: [
            "payment is due within 5 days of invoice issuance",
            "if you decide to withdraw, you don't pay for future hours, but the amount paid is not refunded"
          ],
          extras: "What you get extra:",
          extrasList: [
            "flexible schedule, set directly with the mentor",
            "exclusive 1-on-1 attention, but without the team collaboration part"
          ],
          bonus: "Bonus: upon successful graduation, you receive back 10% of the total amount paid"
        }
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
          "Transformă-ți viitorul în Tech. Devino programator web full-stack în 3–6 luni!",
        subtitle:
          "Nu există scurtături în a deveni programator. Există doar muncă, feedback și proiecte reale. La Academia The Forge, înveți în 3 luni să scrii cod, să rezolvi probleme și să construiești aplicații web complete. Iar la final, nu ai doar skilluri tehnice, ci și încrederea că poți livra.",
        highlight: "De la zero la programator full-stack",
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
        programDetails: {
          heading: "Structura programului & calendar",
          sub: "Cum se desfășoară Academia: sesiuni live zilnice, studiu individual și evaluări lunare.",
          items: [
            {
              title: "Program intensiv zilnic",
              body: "Cursul are loc în sesiuni live zilnice, de luni până vineri, în intervalul **08:00 - 10:00** (dimineața) alături de trainer. În plus, în fiecare sâmbătă ai o sesiune extinsă, de la **09:00 - 13:00**, pentru ateliere practice și recapitulare aprofundată cu trainerul.",
            },
            {
              title: "Studii individuale",
              body: "Pe lângă orele petrecute cu trainerul, se așteaptă să investești timp în învățare și practică individuală – până la **30 de ore pe săptămână** – pentru a aprofunda conceptele și a ține pasul cu ritmul alert al cursului. Acest efort suplimentar este esențial pentru a reuși să consolidezi cunoștințele și să îți atingi potențialul maxim.",
            },
            {
              title: "Durata și evaluări periodice",
              body: "Programul este structurat pe o durată de aproximativ 3 luni (corespunzător unui *bootcamp* intensiv). La fiecare final de lună, vei avea o **evaluare** a progresului. Pe baza rezultatelor și a implicării tale, se va decide de comun acord continuarea cursului în luna următoare. Aceste evaluări periodice te ajută să conștientizezi nivelul atins și asigură că toți cursanții care merg mai departe au acumulat cunoștințele necesare.",
            },
          ],
          schedule: {
            heading: "Calendar curs",
            items: [
              "Start: 20.10.2025",
              "20 octombrie - 20 noiembrie - curs",
              "20 noiembrie - 20 decembrie - curs",
              "20 decembrie - 5 ianuarie - vacanță",
              "5 ianuarie - 5 februarie - curs",
            ],
          },
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
        heading: "Cum au trăit alții experiența academiei",
        sub: "La The Forge Academy, cele mai bune dovezi nu sunt promisiunile noastre, ci poveștile celor care au trecut prin curs. Fiecare testimonial e o bucată din drumul unui cursant care și-a schimbat viitorul prin muncă și dedicare.",
        sub2: "Feedback de la oameni care au lucrat în echipă cu mentorul:",
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
      pricing: {
        heading: "Prețuri și beneficii",
        sub: "Alege formatul de învățare care ți se potrivește cel mai bine.",
        recommended: "Recomandat",
        group: {
          title: "Curs de grup",
          duration: "Durată: 3 luni",
          totalPrice: "Preț total: 4.500 lei",
          payment: "Plată: în 3 rate egale, câte 1.500 lei/lună",
          conditions: "Condiții:",
          conditionsList: [
            "plata se face in 5 zile de la emiterea facturii",
            "dacă decizi să te retragi, nu mai plătești lunile viitoare, dar suma achitată nu se restituie"
          ],
          bonus: "Bonus: la absolvirea cu succes, primești înapoi 10% din suma totală plătită"
        },
        oneOnOne: {
          title: "Curs 1-la-1 (personalizat)",
          duration: "Durată: maxim 6 luni",
          totalPrice: "Preț total: 7.500 lei",
          payment: "Plată: în 3 rate egale, câte 2.500 lei/10 ore mentorat",
          conditions: "Condiții:",
          conditionsList: [
            "plata se face in 5 zile de la emiterea facturii",
            "dacă decizi să te retragi, nu mai plătești orele viitoare, dar suma achitată nu se restituie"
          ],
          extras: "Ce primești în plus:",
          extrasList: [
            "program flexibil, stabilit direct cu mentorul",
            "atenție exclusivă 1-la-1, dar fără partea de lucru în echipă"
          ],
          bonus: "Bonus: la absolvirea cu succes, primești înapoi 10% din suma totală plătită"
        }
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
              <button className="text-sm hover:text-[#6246EA] transition-colors" onClick={() => scrollTo("pricing")}>
                {t.common.nav.pricing[locale]}
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
                <Button variant="ghost" className="justify-start" onClick={() => scrollTo("pricing")}>
                  {t.common.nav.pricing[locale]}
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

        {/* About the Mentor */}
        <section id="about-mentor">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">
            <div className="grid lg:grid-cols-[1fr_420px] gap-10 lg:gap-16 items-start">
              <div>
                <div className="relative size-[130px] overflow-hidden rounded-full shadow-2xl ring-2 ring-[#6246EA]/30 float-right ml-6 mb-6 lg:hidden sm:size-[220px]">
                  <Image
                    src="/dan-andrei-diac-profile.jpg"
                    alt="Dan Andrei Diac (mentor)"
                    fill
                    className="object-cover rounded-full"
                    priority
                  />
                </div>
                <h2 className={`${headingFont} text-3xl sm:text-4xl font-bold mb-6`}>{locale === "en" ? "About the mentor" : "Despre mentor"}</h2>
                <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                  <MarkdownText>{locale === "en" ? `
Hi, I'm Dan.

Over the last 20 years, I've worn many "hats" in IT: developer, team lead, account manager, CTO. Over time, I've used various programming languages, including Ruby [on Rails], PHP, Python, Java. My richest experience is building applications, web or mobile, using JS (or JS frameworks): I've migrated or improved old applications and built new products from scratch. More recently, I use AI: I use it almost daily and believe it's very valuable. But I use it the same way I used to use "Google" before and certainly not as a miraculous tool that builds applications while I drink my coffee.

What defines me, however, is not just the results and experience, but a passion for learning and mentorship. I provide feedback naturally, both in person and in groups: academies or software development teams. Every time, the greatest joy has been seeing someone "get it", gain confidence, and then develop a passion for building.

It helps me when my work is recognized and when I receive feedback. The most appreciated feedback is from people I've interacted with directly. So far, others have said I'm "an authentic leader", "a patient and attentive mentor", "a guy who raises the standard and builds trust in the team". Thank you.

Until now, mentorship has been based on opportunity: if we happened to work on the same project or in the same context. I believe it can be even better: through a controlled effort, dedicated to learning and developing new skills.

That's how The Forge Academy was born – a place where we don't just teach technology, but forge character, discipline, and autonomy. And yes, it's not for everyone. If you're at that point in life where you want to make a change, learn something new, and are willing to put in the work, then "we've found each other".

Things I've said before and would say again:

If you want to go fast, go alone. If you want to go far, go together with someone.

If you focus on the problem, it grows. If you focus on the solution, you'll find it.

There is no magic. There are only things we don't know or don't understand.
`:`
Salut, eu sunt Dan.

În ultimii 20 de ani am tot purtat diferite „pălării” în IT: developer, team lead, account manager, CTO. De-a lungul timpului am folosit diverse limbaje de programare, precum: Ruby [on Rails], PHP, Python, Java. Cea mai bogată experiență este de a construi aplicații, web sau mobile, folosind JS (sau framework-uri JS): am migrat sau îmbunătățit aplicații vechi și am pus pe picioare produse noi. Mai nou folosesc AI: îl folosesc aproape zilnic și cred că e foarte valoros. Dar îl folosesc la fel cum foloseam „Google” înainte și nicidecum ca un instrument miraculos care face aplicații cât timp eu îmi beau cafeaua.

Am condus echipe mai mici și mai mari (20+ oameni) și am învățat că, indiferent de proiect, tehnologie sau dificultăți, cheia este echipa și felul în care lucrezi cu ceilalți. Am mers în ședințe „pe buget și pe obiective” și am fost și în ședințe de pair-programming în investigarea și rezolvarea vreunui bug. Astea din urmă încă îmi plac mai mult.

Ceea ce mă definește însă nu sunt doar rezultatele și experiența, ci pasiunea pentru învățare și mentorat. Ofer feedback și în mod natural, atât în persoană cât și în grupuri: academii sau echipe de dezvoltare software. De fiecare dată, bucuria cea mai mare a fost să văd cum cineva „se prinde”, prinde încredere și apoi capătă pasiunea de a construi.

Mă ajută când munca mea e recunoscută și când primesc feedback. Cel mai apreciat feedback e cel de la oamenii cu care am interacționat în mod direct. Până acum, alții au zis că sunt „un lider autentic”, „un mentor răbdător și atent”, „un tip care ridică standardul și creează încredere în echipă”. Mulțumesc.

Până acum, mentoratul s-a bazat pe oportunitate: dacă ne-am nimerit să lucrăm pe același proiect sau în același context. Cred că se poate și mai bine: printr-un efort controlat, dedicat învățării și dezvoltării de noi abilități.

Așa s-a născut și The Forge Academy – locul unde nu predăm doar tehnologie, ci forjăm caractere, disciplină și autonomie. Și da, nu e pentru oricine. Dacă ești în acel moment în viață când vrei să faci o schimbare, să înveți ceva nou și ești dispus să pui osul la treabă, atunci „ne-am găsit”.

Lucruri pe care le-am mai zis și le-aș mai zice:

Dacă vrei să ajungi repede, mergi singur. Dacă vrei să ajungi departe, mergi împreună cu cineva.

Dacă te concentrezi pe problemă, ea crește. Dacă te concentrezi pe soluție, o vei găsi.

Nu există magie. Există doar lucruri pe care nu le știm sau nu le înțelegem.
                  `}</MarkdownText>
                </div>
              </div>
              <div className="flex justify-start items-start">
                <div className="relative w-[271px] h-[271px] overflow-hidden rounded-full shadow-2xl ring-2 ring-[#6246EA]/30 float-right ml-6 mb-6 hidden lg:block">
                  <Image
                    src="/dan-andrei-diac-profile.jpg"
                    alt="Dan Andrei Diac (mentor)"
                    fill
                    className="object-cover rounded-full"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Program */}
        <section id="program" className="bg-[#FAFAFA]">
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

        {/* Program Structure & Schedule */}
        <section id="schedule">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#6246EA]/10 text-[#6246EA] px-3 py-1 text-xs font-semibold">
                <Clock className="h-3.5 w-3.5" />
                {locale === "en" ? "Program Structure" : "Structura programului"}
              </div>
              <h2 className={`${headingFont} mt-4 text-3xl sm:text-4xl font-bold`}>
                {t.programDetails.heading}
              </h2>
              <div className="mt-4 text-muted-foreground">
                <MarkdownText>{t.programDetails.sub}</MarkdownText>
              </div>
            </div>

            <div className="mt-10 space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                {t.programDetails.items.map((item, idx) => (
                  <Card key={idx} className="border-[#EDEDED] h-full flex flex-col">
                    <CardHeader>
                      <CardTitle className={`${headingFont} text-lg flex items-center gap-3`}>
                        <div className="h-8 w-8 rounded-lg bg-[#6246EA] flex items-center justify-center">
                          <span className="text-white font-bold text-sm">{idx + 1}</span>
                        </div>
                        {item.title}
                      </CardTitle>
                      <CardDescription className="text-sm ml-11">
                        <MarkdownText>{item.body}</MarkdownText>
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>

              <Card className="border-[#EDEDED] bg-gradient-to-r from-[#6246EA]/5 to-[#3F8CEB]/5">
                <CardHeader>
                  <CardTitle className={`${headingFont} text-lg flex items-center gap-3`}>
                    <div className="h-8 w-8 rounded-lg bg-[#FEE07A] flex items-center justify-center">
                      <Clock className="h-4 w-4 text-[#212429]" />
                    </div>
                    {t.programDetails.schedule.heading}
                  </CardTitle>
                  <CardContent className="p-0 ml-11">
                    <ul className="space-y-2">
                      {t.programDetails.schedule.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <div className="h-2 w-2 rounded-full bg-[#6246EA]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </CardHeader>
              </Card>
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
                  name: "Tania P.",
                  role: "JS Full Stack Developer",
                  quote:
                    locale === "en"
                      ? "The six months of study were intense and comprehensive, covering a wide range of knowledge. By the end of the academy, I was well-prepared enough to get hired as a Junior JS Full Stack Developer and start working on a real project."
                      : "Cele șase luni de studiu au fost intense și complexe, acoperind o gamă largă de cunoștințe. La finalul academiei, eram suficient de pregătită încât am putut să mă angajez ca Junior JS Full Stack Developer și să încep să lucrez pe un proiect real.",
                  imgQuery: "young%20developer%20portrait",
                },
                {
                  name: "Cosmin S.",
                  role: "Software Engineer",
                  quote:
                    locale === "en"
                      ? "The greatest value I received from Andrei goes beyond the technical aspects. He taught me how to think like a software engineer: how to structure an application, how to write clean and scalable code, how to solve problems in an organized way, and how to approach projects with a professional mindset."
                      : "Cea mai mare valoare pe care am primit-o de la Andrei nu se rezumă la partea tehnică. El m-a învățat cum să gândesc ca un software engineer: cum să structurez o aplicație, cum să scriu cod curat și scalabil, cum să rezolv probleme într-un mod organizat și cum să abordez proiectele cu o mentalitate profesionistă.",
                  imgQuery: "software%20engineer%20portrait",
                },
                {
                  name: "Andra D.",
                  role: "Full-Stack Developer",
                  quote:
                    locale === "en"
                      ? "As our group mentor, he provided us with a clear study framework, relevant resources, and guided us in his specific style, with balance and efficiency. He constantly encouraged us to work autonomously and was always available to clarify misunderstandings."
                      : "Ca mentor al grupului nostru, ne-a oferit un cadru de studiu clar, resurse relevante și ne-a ghidat în stilul său specific, cu echilibru și eficiență. Ne-a încurajat constant să lucrăm autonom și a fost mereu disponibil pentru a clarifica neînțelegeri.",
                  imgQuery: "full%20stack%20developer%20portrait",
                },
                {
                  name: "Alexis M. P.",
                  role: "Software Intern",
                  quote:
                    locale === "en"
                      ? "With the help of mentor Dan Andrei Diac, I learned not only programming, but also what discipline, clarity, and quality work mean. The teaching method was different from the classic one – I learned through direct application, which helped me understand and retain concepts better."
                      : "Cu ajutorul mentorului Dan Andrei Diac, nu am învățat doar programare, ci și ce înseamnă disciplina, claritatea și munca de calitate. Metoda de predare a fost diferită de cea clasică – am învățat prin aplicare directă, ceea ce m-a ajutat să înțeleg mai bine conceptele.",
                  imgQuery: "student%20software%20intern",
                },
                {
                  name: "Mihai B.",
                  role: "Junior Developer",
                  quote:
                    locale === "en"
                      ? "It was an incredible experience of study, practice, and connecting with like-minded people. Having a mentor dedicated to our learning process helped us enormously to understand the concepts presented."
                      : "A fost o experiență incredibilă de studiu, practică și de creat conexiuni cu persoane similare mie. Faptul că am avut un mentor dedicat procesului nostru de învățare ne-a ajutat enorm să înțelegem lucrurile prezentate.",
                  imgQuery: "junior%20developer%20team",
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

            <div className="max-w-2xl">
              <div className="mt-10 text-muted-foreground">
                <MarkdownText>{t.success.sub2}</MarkdownText>
              </div>
            </div>

            <div className="mt-10 grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Diana-Larrisa D.",
                  role: "Team Member",
                  quote:
                    locale === "en"
                      ? "Through his guidance, I witnessed a significant improvement in team cohesion and morale. Danut took the time to understand each team member, providing personalized support and mentorship for professional development."
                      : "Prin îndrumarea lui, am observat o îmbunătățire semnificativă a coeziunii echipei și a moralului. Danut a acordat timp pentru a înțelege fiecare membru al echipei, oferind sprijin și mentorat personalizat pentru dezvoltarea profesională.",
                  imgQuery: "team%20leader%20mentoring",
                },
                {
                  name: "Ionut G. A.",
                  role: "Team Member",
                  quote:
                    locale === "en"
                      ? "Dan demonstrated a remarkable balance between project objectives and team motivation. He has a natural ability to guide and facilitate learning, providing constructive feedback and constant support for the personal and professional development of team members."
                      : "Dan a demonstrat un echilibru remarcabil între obiectivele proiectului și motivarea echipei. Are o abilitate naturală de a ghida și facilita învățarea, oferind feedback constructiv și sprijin constant pentru dezvoltarea personală și profesională a membrilor echipei.",
                  imgQuery: "team%20leader%20feedback",
                },
                {
                  name: "Iosif B.",
                  role: "Software Developer",
                  quote:
                    locale === "en"
                      ? "Dan is a genuine leader, proactive and inspiring all along. He supported me in becoming a better developer and a more empathetic person, and it is an honour to have him as a mentor."
                      : "Dan este un lider autentic, proactiv și inspirațional. M-a susținut să devin un dezvoltator mai bun și o persoană mai empatică, iar a-l avea ca mentor este o onoare.",
                  imgQuery: "developer%20mentor%20portrait",
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

        {/* Pricing */}
        <section id="pricing">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#6246EA]/10 text-[#6246EA] px-3 py-1 text-xs font-semibold">
                <DollarSign className="h-3.5 w-3.5" />
                {t.pricing.heading}
              </div>
              <h2 className={`${headingFont} mt-4 text-3xl sm:text-4xl font-bold`}>
                {t.pricing.heading}
              </h2>
              <div className="mt-4 text-muted-foreground">
                <MarkdownText>{t.pricing.sub}</MarkdownText>
              </div>
            </div>

            <div className="mt-10 grid md:grid-cols-2 gap-6">
              {/* Group Course */}
              <Card className="border-[#EDEDED] relative">
                <div className="absolute -top-3 left-6">
                  <Badge className="bg-[#6246EA] text-white hover:bg-[#6246EA]/90">
                    {t.pricing.recommended}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className={`${headingFont} text-xl`}>
                    {t.pricing.group.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p className="font-semibold">{t.pricing.group.duration}</p>
                    <p className="font-semibold text-lg text-[#6246EA]">{t.pricing.group.totalPrice}</p>
                    <p className="font-semibold">{t.pricing.group.payment}</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold mb-2">{t.pricing.group.conditions}</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {t.pricing.group.conditionsList.map((condition, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#6246EA] mt-1">•</span>
                          {condition}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t">
                    <p className="font-semibold text-green-600">{t.pricing.group.bonus}</p>
                  </div>
                </CardContent>
              </Card>

              {/* One-on-One Course */}
              <Card className="border-[#EDEDED]">
                <CardHeader>
                  <CardTitle className={`${headingFont} text-xl`}>
                    {t.pricing.oneOnOne.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p className="font-semibold">{t.pricing.oneOnOne.duration}</p>
                    <p className="font-semibold text-lg text-[#6246EA]">{t.pricing.oneOnOne.totalPrice}</p>
                    <p className="font-semibold">{t.pricing.oneOnOne.payment}</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold mb-2">{t.pricing.oneOnOne.conditions}</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {t.pricing.oneOnOne.conditionsList.map((condition, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#6246EA] mt-1">•</span>
                          {condition}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">{t.pricing.oneOnOne.extras}</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {t.pricing.oneOnOne.extrasList.map((extra, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          {extra}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t">
                    <p className="font-semibold text-green-600">{t.pricing.oneOnOne.bonus}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-[#FAFAFA]">
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
