import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CalendarDays, Users, MessageSquare, ArrowRight } from "lucide-react"
import { LogoCarousel } from "@/components/logo-carousel"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/lunar-surface.jpg"
              alt="Lunar Surface"
              fill
              className="object-cover opacity-30"
              priority
            />
          </div>
          <div className="relative z-10 container mx-auto px-4 py-24 md:py-32 flex flex-col items-center text-center">
            <div className="space-y-2 mb-6">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">LOGIC/LSIC/GEGSLA</h1>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                Virtual Workshop
              </h2>
            </div>
            <p className="max-w-[700px] text-lg md:text-xl text-muted-foreground mb-8">
              Join us for a collaborative workshop focused on lunar activities database, interoperability, cooperation,
              and standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/registration">
                  Register Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/agenda">View Agenda</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Partner Organizations */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold tracking-tighter mb-8 text-center">Partners</h2>
            <LogoCarousel />
          </div>
        </section>

        {/* Key Information */}
        <section className="bg-muted py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-sm">
                <CalendarDays className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Event Schedule</h3>
                <p className="text-muted-foreground mb-4">
                  Three days of insightful sessions, panels, and networking opportunities.
                </p>
                <Button variant="link" asChild>
                  <Link href="/agenda">View Full Agenda</Link>
                </Button>
              </div>

              <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-sm">
                <Users className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Expert Speakers</h3>
                <p className="text-muted-foreground mb-4">
                  Learn from leading experts in lunar exploration and collaboration.
                </p>
                <Button variant="link" asChild>
                  <Link href="/speakers">Meet Our Speakers</Link>
                </Button>
              </div>

              <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-sm">
                <MessageSquare className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Interactive Sessions</h3>
                <p className="text-muted-foreground mb-4">
                  Engage in Q&A, discussions, and collaborative problem-solving.
                </p>
                <Button variant="link" asChild>
                  <Link href="/engagement">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About the Workshop */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter mb-6">About the Workshop</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    The LOGIC/LSIC/GEGSLA Virtual Workshop brings together researchers, industry professionals, and
                    space agencies to address key challenges in lunar exploration and collaboration.
                  </p>
                  <p>
                    Our focus areas include developing standardized lunar activities databases, improving
                    interoperability between systems and missions, fostering international cooperation, and establishing
                    common standards for lunar operations.
                  </p>
                  <p>
                    Through interactive sessions, expert presentations, and collaborative discussions, participants will
                    contribute to shaping the future of lunar exploration and development.
                  </p>
                </div>
                <div className="mt-8">
                  <Button asChild>
                    <Link href="/about">Learn More About Us</Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/images/lunar-outpost-construction.png"
                  alt="Workshop Collaboration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Speakers */}
        <section className="bg-muted py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold tracking-tighter mb-2 text-center">Featured Speakers</h2>
            <p className="text-muted-foreground text-center max-w-[700px] mx-auto mb-12">
              Learn from leading experts in lunar exploration, database management, and international collaboration
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card rounded-lg overflow-hidden shadow-sm">
                <div className="relative h-64">
                  <Image src="/images/speaker-quan.jpg" alt="Quan Haofang" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Quan Haofang</h3>
                  <p className="text-primary mb-3">China Astronautics Standards Institute</p>
                  <p className="text-muted-foreground mb-4">
                    Leading expert in space standardization with over 20 years of experience developing technical
                    standards for space missions.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/speakers/1">View Profile</Link>
                  </Button>
                </div>
              </div>

              <div className="bg-card rounded-lg overflow-hidden shadow-sm">
                <div className="relative h-64">
                  <Image src="/images/speaker-aarti.jpg" alt="Aarti Holla-Maini" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Aarti Holla-Maini</h3>
                  <p className="text-primary mb-3">United Nations Office for Outer Space Affairs</p>
                  <p className="text-muted-foreground mb-4">
                    Distinguished expert in space policy and international cooperation, leading initiatives to promote
                    collaboration in space activities.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/speakers/3">View Profile</Link>
                  </Button>
                </div>
              </div>

              <div className="bg-card rounded-lg overflow-hidden shadow-sm">
                <div className="relative h-64">
                  <Image src="/images/speaker-hiroshi.jpg" alt="Hiroshi Yamakawa" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Hiroshi Yamakawa</h3>
                  <p className="text-primary mb-3">ispace, Inc.</p>
                  <p className="text-muted-foreground mb-4">
                    CTO of a leading lunar exploration company, with expertise in lunar surface operations and resource
                    utilization.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/speakers/4">View Profile</Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button asChild>
                <Link href="/speakers">View All Speakers</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Registration CTA */}
        <section className="py-16 relative">
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
          </div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Join Us for This Important Event</h2>
            <p className="text-muted-foreground max-w-[700px] mx-auto mb-8">
              Registration is free and open to professionals in space exploration, database management, standards
              development, and related fields.
            </p>
            <Button size="lg" asChild>
              <Link href="/registration">Register Now</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
