"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, Code, Users, Trophy, Star, X, ChevronLeft, ChevronRightIcon } from "lucide-react"

export default function HomePage() {
  const [showMentorModal, setShowMentorModal] = useState(false)
  const [currentQuote, setCurrentQuote] = useState(0)

  const mentorQuotes = [
    "If you want to go fast, go alone. If you want to go far, go together with someone.",
    "If you focus on the problem, it grows. If you focus on the solution, you will find it.",
    "There is no magic. There are only things we don't know or don't understand.",
  ]

  const nextQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % mentorQuotes.length)
  }

  const prevQuote = () => {
    setCurrentQuote((prev) => (prev - 1 + mentorQuotes.length) % mentorQuotes.length)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <a className="mr-6 flex items-center space-x-2" href="/">
              <Code className="h-6 w-6 text-[#6246EA]" />
              <span className="font-bold text-xl">The Forge Academy</span>
            </a>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a href="#about" className="transition-colors hover:text-[#6246EA]">
                About
              </a>
              <a href="#program" className="transition-colors hover:text-[#6246EA]">
                Program
              </a>
              <a href="#mentor" className="transition-colors hover:text-[#6246EA]">
                Mentor
              </a>
              <a href="#pricing" className="transition-colors hover:text-[#6246EA]">
                Pricing
              </a>
            </nav>
            <Button className="bg-[#6246EA] hover:bg-[#5235d1] text-white">Apply Now</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#6246EA]/5 to-[#3F8CEB]/5" />
        <div className="container relative">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-4 bg-[#FEE07A] text-[#212429] hover:bg-[#FEE07A]/80">
              🚀 Intensive Full-Stack Program
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6 text-balance">
              Forge Your Future in <span className="text-[#6246EA]">Web Development</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
              Transform your career with our intensive 3-month full-stack development program. Learn JavaScript, React,
              Node.js, and more with expert mentorship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#6246EA] hover:bg-[#5235d1] text-white">
                Start Your Journey <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#3F8CEB] text-[#3F8CEB] hover:bg-[#3F8CEB] hover:text-white bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose The Forge Academy?</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              We don't just teach technology – we forge character, discipline, and autonomy. Our intensive program is
              designed for those ready to make a real change.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-[#6246EA]/20 hover:border-[#6246EA]/40 transition-colors">
              <CardContent className="p-6 text-center">
                <Code className="h-12 w-12 text-[#6246EA] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Full-Stack Mastery</h3>
                <p className="text-muted-foreground">
                  Master JavaScript, React, Node.js, databases, and deployment. Build complete applications from
                  front-end to back-end.
                </p>
              </CardContent>
            </Card>
            <Card className="border-[#3F8CEB]/20 hover:border-[#3F8CEB]/40 transition-colors">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-[#3F8CEB] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Expert Mentorship</h3>
                <p className="text-muted-foreground">
                  Learn from experienced developers with 20+ years in the industry. Get personalized guidance and
                  real-world insights.
                </p>
              </CardContent>
            </Card>
            <Card className="border-[#FEE07A]/40 hover:border-[#FEE07A]/60 transition-colors">
              <CardContent className="p-6 text-center">
                <Trophy className="h-12 w-12 text-[#212429] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Career Ready</h3>
                <p className="text-muted-foreground">
                  Graduate with a complete portfolio, industry best practices, and the confidence to start your tech
                  career.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About the Mentor Section */}
      <section id="mentor" className="py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-6">About the Mentor</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg leading-relaxed mb-4">
                    Hi, I'm Dan. Over the past 20 years, I've worn many different "hats" in IT: developer, team lead,
                    account manager, CTO. Throughout this time, I've used various programming languages including Ruby
                    on Rails, PHP, Python, and Java.
                  </p>
                  <p className="text-lg leading-relaxed mb-4">
                    My richest experience comes from building web and mobile applications using JavaScript and JS
                    frameworks. I've migrated and improved legacy applications and built new products from scratch.
                    Recently, I've been using AI daily – I find it very valuable, but I use it the same way I used
                    Google before, not as a miraculous tool that builds applications while I drink my coffee.
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                    What defines me isn't just results and experience, but my passion for learning and mentoring. I
                    naturally provide feedback, both individually and in groups. My greatest joy has always been seeing
                    someone "get it," gain confidence, and develop a passion for building.
                  </p>
                  <Button
                    onClick={() => setShowMentorModal(true)}
                    variant="outline"
                    className="border-[#6246EA] text-[#6246EA] hover:bg-[#6246EA] hover:text-white"
                  >
                    Read Full Letter <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="lg:w-64 flex justify-center lg:justify-end">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[#6246EA]/20">
                  <img
                    src="/placeholder.svg?height=200&width=200"
                    alt="Dan - The Forge Academy Mentor"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Mentor Quotes Carousel */}
            <div className="mt-16">
              <h3 className="text-2xl font-semibold mb-8 text-center">Words of Wisdom</h3>
              <div className="relative max-w-2xl mx-auto">
                <Card className="border-[#6246EA]/20">
                  <CardContent className="p-8 text-center">
                    <Star className="h-8 w-8 text-[#FEE07A] mx-auto mb-4" />
                    <blockquote className="text-xl italic text-muted-foreground mb-4">
                      "{mentorQuotes[currentQuote]}"
                    </blockquote>
                    <cite className="text-sm font-medium text-[#6246EA]">— Dan, Mentor</cite>
                  </CardContent>
                </Card>
                <div className="flex justify-center items-center gap-4 mt-6">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={prevQuote}
                    className="border-[#6246EA]/20 hover:border-[#6246EA] hover:bg-[#6246EA] hover:text-white bg-transparent"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <div className="flex gap-2">
                    {mentorQuotes.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentQuote(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentQuote ? "bg-[#6246EA]" : "bg-muted"
                        }`}
                      />
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={nextQuote}
                    className="border-[#6246EA]/20 hover:border-[#6246EA] hover:bg-[#6246EA] hover:text-white bg-transparent"
                  >
                    <ChevronRightIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section id="program" className="py-20 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">3-Month Intensive Program</h2>
            <p className="text-lg text-muted-foreground">
              A comprehensive curriculum designed to take you from beginner to job-ready developer
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "JavaScript Fundamentals",
                description: "Master the core language, syntax, and algorithmic thinking",
              },
              { title: "Front-End Development", description: "HTML, CSS, React, and modern UI/UX principles" },
              { title: "Back-End & Databases", description: "Node.js, APIs, database design and management" },
              { title: "Advanced Technologies", description: "DevOps basics, cloud deployment, and best practices" },
              { title: "Final Project", description: "Build a complete full-stack application portfolio piece" },
              { title: "Career Preparation", description: "Interview prep, portfolio review, and job search guidance" },
            ].map((module, index) => (
              <Card key={index} className="border-[#3F8CEB]/20 hover:border-[#3F8CEB]/40 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-[#6246EA] text-white flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <h3 className="font-semibold">{module.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{module.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Choose Your Path</h2>
            <p className="text-lg text-muted-foreground">
              Flexible payment options designed to make quality education accessible
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-[#6246EA]/20 hover:border-[#6246EA]/40 transition-colors">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Group Course</h3>
                  <div className="text-3xl font-bold text-[#6246EA] mb-2">1,500 lei/month</div>
                  <p className="text-sm text-muted-foreground">3 months • Pay monthly</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#6246EA] rounded-full" />
                    <span className="text-sm">Daily live sessions (Mon-Fri 8-10 AM)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#6246EA] rounded-full" />
                    <span className="text-sm">Saturday workshops (9 AM-1 PM)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#6246EA] rounded-full" />
                    <span className="text-sm">Team projects & collaboration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#6246EA] rounded-full" />
                    <span className="text-sm">10% refund upon completion</span>
                  </li>
                </ul>
                <Button className="w-full bg-[#6246EA] hover:bg-[#5235d1] text-white">Apply for Group Course</Button>
              </CardContent>
            </Card>
            <Card className="border-[#FEE07A]/40 hover:border-[#FEE07A]/60 transition-colors relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-[#FEE07A] text-[#212429]">Premium</Badge>
              </div>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">1-on-1 Mentoring</h3>
                  <div className="text-3xl font-bold text-[#212429] mb-2">7,500 lei</div>
                  <p className="text-sm text-muted-foreground">Full 3-month program</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#212429] rounded-full" />
                    <span className="text-sm">100% personalized learning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#212429] rounded-full" />
                    <span className="text-sm">Flexible schedule with mentor</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#212429] rounded-full" />
                    <span className="text-sm">Accelerated progress</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#212429] rounded-full" />
                    <span className="text-sm">10% refund upon completion</span>
                  </li>
                </ul>
                <Button className="w-full bg-[#212429] hover:bg-[#212429]/90 text-white">
                  Apply for Premium Course
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#6246EA] to-[#3F8CEB] text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Forge Your Future?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join our intensive program and transform your career in just 3 months. Applications are reviewed on a
            rolling basis.
          </p>
          <Button size="lg" className="bg-white text-[#6246EA] hover:bg-white/90">
            Start Application Process
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Code className="h-6 w-6 text-[#6246EA]" />
              <span className="font-bold text-xl">The Forge Academy</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 The Forge Academy. Forging the future of web development.
            </p>
          </div>
        </div>
      </footer>

      {/* Full Screen Modal for Complete Letter */}
      {showMentorModal && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-background rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-background border-b p-6 flex justify-between items-center">
              <h3 className="text-2xl font-bold">A Letter from Dan</h3>
              <Button variant="ghost" size="sm" onClick={() => setShowMentorModal(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="p-6 prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-4">
                Hi, I'm Dan. Over the past 20 years, I've worn many different "hats" in IT: developer, team lead,
                account manager, CTO. Throughout this time, I've used various programming languages including Ruby on
                Rails, PHP, Python, and Java. My richest experience comes from building web and mobile applications
                using JavaScript and JS frameworks: I've migrated and improved legacy applications and built new
                products from scratch.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Recently, I've been using AI: I use it almost daily and believe it's very valuable. But I use it the
                same way I used Google before, and certainly not as a miraculous tool that builds applications while I
                drink my coffee.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                I've led smaller and larger teams (20+ people) and learned that, regardless of project, technology, or
                difficulties, the key is the team and how you work with others. I've been in "budget and objectives"
                meetings and I've been in pair-programming sessions investigating and solving bugs. I still prefer the
                latter.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                What defines me, however, isn't just results and experience, but my passion for learning and mentoring.
                I naturally provide feedback, both individually and in groups: academies or software development teams.
                Every time, my greatest joy has been seeing someone "get it," gain confidence, and then develop a
                passion for building.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                It helps when my work is recognized and when I receive feedback. The most appreciated feedback comes
                from people I've interacted with directly. So far, others have said I'm "an authentic leader," "a
                patient and attentive mentor," "a guy who raises standards and creates confidence in the team." Thank
                you.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Until now, mentoring has been based on opportunity: if we happened to work on the same project or in the
                same context. I believe it can be even better: through a controlled effort, dedicated to learning and
                developing new skills.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                This is how The Forge Academy was born – a place where we don't just teach technology, but forge
                character, discipline, and autonomy. And yes, it's not for everyone. If you're at that moment in life
                when you want to make a change, learn something new, and are willing to put in the work, then "we've
                found each other."
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
