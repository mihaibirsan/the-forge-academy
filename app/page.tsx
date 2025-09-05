"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function HomePage() {
  const [currentQuote, setCurrentQuote] = useState(0)
  const [isLetterOpen, setIsLetterOpen] = useState(false)

  const quotes = [
    {
      text: "If you want to go fast, go alone. If you want to go far, go together with someone.",
      original: "Dacă vrei să ajungi repede, mergi singur. Dacă vrei să ajungi departe, mergi împreună cu cineva.",
    },
    {
      text: "If you focus on the problem, it grows. If you focus on the solution, you will find it.",
      original: "Dacă te concentrezi pe problemă, ea crește. Dacă te concentrezi pe soluție, o vei găsi.",
    },
    {
      text: "There is no magic. There are only things we don't know or don't understand.",
      original: "Nu există magie. Există doar lucruri pe care nu le știm sau nu le înțelegem.",
    },
  ]

  const nextQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % quotes.length)
  }

  const prevQuote = () => {
    setCurrentQuote((prev) => (prev - 1 + quotes.length) % quotes.length)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#6246EA] to-[#3F8CEB] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">The Forge Academy</h1>
          <p className="text-xl md:text-2xl mb-8 text-balance opacity-90">
            Where we don't just teach technology, we forge characters, discipline, and autonomy
          </p>
          <Button size="lg" className="bg-[#FEE07A] text-[#212429] hover:bg-[#FEE07A]/90 font-semibold px-8 py-3">
            Start Your Journey
          </Button>
        </div>
      </section>

      {/* About the Mentor Section */}
      <section className="py-20 px-4 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Content */}
            <div className="md:col-span-2">
              <h2 className="text-4xl font-bold text-[#212429] mb-6">About the Mentor</h2>

              <div className="space-y-4 text-lg text-[#212429]/80 leading-relaxed">
                <p>
                  Hi, I'm Dan. Over the past 20 years, I've worn different "hats" in IT: developer, team lead, account
                  manager, CTO. Throughout this time, I've used various programming languages like Ruby [on Rails], PHP,
                  Python, Java. My richest experience is building applications, web or mobile, using JS (or JS
                  frameworks): I've migrated or improved old applications and built new products from scratch.
                </p>

                <p>
                  More recently, I use AI: I use it almost daily and believe it's very valuable. But I use it the same
                  way I used "Google" before and certainly not as a miraculous tool that builds applications while I
                  drink my coffee.
                </p>

                <p>
                  I've led smaller and larger teams (20+ people) and learned that, regardless of project, technology, or
                  difficulties, the key is the team and how you work with others...
                </p>

                <Button
                  variant="outline"
                  onClick={() => setIsLetterOpen(true)}
                  className="mt-4 border-[#6246EA] text-[#6246EA] hover:bg-[#6246EA] hover:text-white"
                >
                  Read More
                </Button>
              </div>
            </div>

            {/* Profile Photo */}
            <div className="flex justify-center md:justify-end">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[#6246EA] shadow-lg">
                <img
                  src="/placeholder.svg?height=192&width=192"
                  alt="Dan - The Forge Academy Mentor"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Quotes Carousel */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-[#212429] mb-8 text-center">Words of Wisdom</h3>

            <Card className="max-w-4xl mx-auto bg-white border-[#6246EA]/20">
              <CardContent className="p-8">
                <div className="flex items-center justify-between">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={prevQuote}
                    className="text-[#6246EA] hover:bg-[#6246EA]/10"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>

                  <div className="flex-1 text-center px-8">
                    <blockquote className="text-xl md:text-2xl font-medium text-[#212429] mb-4 text-balance">
                      "{quotes[currentQuote].text}"
                    </blockquote>
                    <p className="text-sm text-[#212429]/60 italic">Original: "{quotes[currentQuote].original}"</p>
                  </div>

                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={nextQuote}
                    className="text-[#6246EA] hover:bg-[#6246EA]/10"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                </div>

                <div className="flex justify-center mt-6 space-x-2">
                  {quotes.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentQuote(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentQuote ? "bg-[#6246EA]" : "bg-[#6246EA]/30"
                      }`}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Full Letter Dialog */}
      <Dialog open={isLetterOpen} onOpenChange={setIsLetterOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-[#6246EA]">A Letter from Dan</DialogTitle>
          </DialogHeader>

          <div className="space-y-4 text-base leading-relaxed text-[#212429]/80">
            <p>
              Hi, I'm Dan. Over the past 20 years, I've worn different "hats" in IT: developer, team lead, account
              manager, CTO. Throughout this time, I've used various programming languages like Ruby [on Rails], PHP,
              Python, Java. My richest experience is building applications, web or mobile, using JS (or JS frameworks):
              I've migrated or improved old applications and built new products from scratch.
            </p>

            <p>
              More recently, I use AI: I use it almost daily and believe it's very valuable. But I use it the same way I
              used "Google" before and certainly not as a miraculous tool that builds applications while I drink my
              coffee.
            </p>

            <p>
              I've led smaller and larger teams (20+ people) and learned that, regardless of project, technology, or
              difficulties, the key is the team and how you work with others. I've been in "budget and objectives"
              meetings and I've also been in pair-programming sessions investigating and solving bugs. I still prefer
              the latter.
            </p>

            <p>
              What defines me, however, is not just the results and experience, but the passion for learning and
              mentoring. I naturally offer feedback, both in person and in groups: academies or software development
              teams. Every time, the greatest joy was seeing someone "get it," gain confidence, and then develop a
              passion for building.
            </p>

            <p>
              It helps when my work is recognized and when I receive feedback. The most appreciated feedback is from
              people I've interacted with directly. So far, others have said I'm "an authentic leader," "a patient and
              attentive mentor," "a guy who raises the standard and creates confidence in the team." Thank you.
            </p>

            <p>
              Until now, mentoring has been based on opportunity: if we happened to work on the same project or in the
              same context. I believe it can be even better: through a controlled effort, dedicated to learning and
              developing new skills.
            </p>

            <p>
              This is how The Forge Academy was born – the place where we don't just teach technology, but forge
              characters, discipline, and autonomy. And yes, it's not for everyone. If you're at that moment in life
              when you want to make a change, learn something new, and are willing to put in the work, then "we've found
              each other."
            </p>

            <div className="mt-8 p-4 bg-[#FAFAFA] rounded-lg border-l-4 border-[#6246EA]">
              <h4 className="font-semibold text-[#212429] mb-2">Original Romanian Text:</h4>
              <div className="text-sm text-[#212429]/70 space-y-2">
                <p>
                  Salut, eu sunt Dan. În ultimii 20 de ani am tot purtat diferite „pălării" în IT: developer, team lead,
                  account manager, CTO. De-a lungul timpului am folosit diverse limbaje de programare, precum: Ruby [on
                  Rails], PHP, Python, Java. Cea mai bogată experiență este de a construi aplicații, web sau mobile,
                  folosind JS (sau framework-uri JS): am migrat sau îmbunătățit aplicații vechi și am pus pe picioare
                  produse noi.
                </p>
                <p>
                  Mai nou folosesc AI: îl folosesc aproape zilnic și cred că e foarte valoros. Dar îl folosesc la fel
                  cum foloseam „Google" înainte și nicidecum ca un instrument miraculos care face aplicații cât timp eu
                  îmi beau cafeaua.
                </p>
                <p>
                  Am condus echipe mai mici și mai mari (20+ oameni) și am învățat că, indiferent de proiect, tehnologie
                  sau dificultăți, cheia este echipa și felul în care lucrezi cu ceilalți. Am mers în ședințe „pe buget
                  și pe obiective" și am fost și în ședințe de pair-programming în investigarea și rezolvarea vreunui
                  bug. Astea din urmă încă îmi plac mai mult.
                </p>
                <p>
                  Ceea ce mă definește însă nu sunt doar rezultatele și experiența, ci pasiunea pentru învățare și
                  mentorat. Ofer feedback și în mod natural, atât în persoană cât și în grupuri: academii sau echipe de
                  dezvoltare software. De fiecare dată, bucuria cea mai mare a fost să văd cum cineva „se prinde",
                  prinde încredere și apoi capătă pasiunea de a construi.
                </p>
                <p>
                  Mă ajută când munca mea e recunoscută și când primesc feedback. Cel mai apreciat feedback e cel de la
                  oamenii cu care am interacționat în mod direct. Până acum, alții au zis că sunt „un lider autentic",
                  „un mentor răbdător și atent", „un tip care ridică standardul și creează încredere în echipă".
                  Mulțumesc.
                </p>
                <p>
                  Până acum, mentoratul s-a bazat pe oportunitate: dacă ne-am nimerit să lucrăm pe același proiect sau
                  în același context. Cred că se poate și mai bine: printr-un efort controlat, dedicat învățării și
                  dezvoltării de noi abilități.
                </p>
                <p>
                  Așa s-a născut și The Forge Academy – locul unde nu predăm doar tehnologie, ci forjăm caractere,
                  disciplină și autonomie. Și da, nu e pentru oricine. Dacă ești în acel moment în viață când vrei să
                  faci o schimbare, să înveți ceva nou și ești dispus să pui osul la treabă, atunci „ne-am găsit".
                </p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
