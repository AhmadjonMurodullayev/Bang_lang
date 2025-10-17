import React from 'react'
import Image from 'next/image'
import { Counter } from '@/components/counter'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Building2, Check, Facebook, Globe, Heart, Instagram, Link, MessageCircle, Star, Twitter } from 'lucide-react'
import childIcon from "@/assets/icons/child.png";
import vaccinationsIcon from "@/assets/icons/vaccinations.png";
import allergyIcon from "@/assets/icons/allergy.png";
import screeningsIcon from "@/assets/icons/creenings.png";
import pathologyIcon from "@/assets/icons/pathology.png";
import cardiologyIcon from "@/assets/icons/cardiology.png";
const Doctors = () => {
  return (
    <>
      <section className="gradient-blue py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-5xl font-bold text-white">Doctors</h1>
          <div className="flex items-center justify-center gap-2 text-white/90">
            <span>Home</span>
            <span>{">"}</span>
            <span>Doctors</span>
          </div>
        </div>
      </section>


   <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <div className="mb-4 text-sm font-semibold text-primary">
              Our Doctors
            </div>
            <h2 className="mb-4 text-4xl font-bold">
              Meet Our Qualified Doctors
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "Dr. Marlie Varga",
                specialty: "General Doctor",
                consultations: 2214,
                rating: 4.8,
                image: "/female-doctor.png"
              },
              {
                name: "Dr. Maysa Azer", 
                specialty: "Pediatrician",
                consultations: 1324,
                rating: 5.0,
                image: "/female-doctor-portrait.png"
              },
              {
                name: "Dr. Ayda Ortega",
                specialty: "Pathology", 
                consultations: 824,
                rating: 4.7,
                image: "/thoughtful-doctor.png"
              },
              {
                name: "Dr. Valeria Costa",
                specialty: "Cardiology",
                consultations: 974,
                rating: 4.6,
                image: "/female-doctor.png"
              }, {
                name: "Dr. Marlie Varga",
                specialty: "General Doctor",
                consultations: 2214,
                rating: 4.8,
                image: "/female-doctor.png"
              },
              {
                name: "Dr. Maysa Azer", 
                specialty: "Pediatrician",
                consultations: 1324,
                rating: 5.0,
                image: "/female-doctor-portrait.png"
              },
              {
                name: "Dr. Ayda Ortega",
                specialty: "Pathology", 
                consultations: 824,
                rating: 4.7,
                image: "/thoughtful-doctor.png"
              },
              {
                name: "Dr. Valeria Costa",
                specialty: "Cardiology",
                consultations: 974,
                rating: 4.6,
                image: "/female-doctor.png"
              }
            ].map((doctor, i) => (
              <Card
                key={i}
                className="overflow-hidden group hover:shadow-lg transition-shadow relative bg-white rounded-2xl"
              >
                <div className="aspect-[3/4] overflow-hidden relative p-3">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Hover Overlay with Social Icons */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-emerald-600 transition-colors">
                        <Facebook className="h-6 w-6 text-white" />
                      </div>
                      <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-emerald-600 transition-colors">
                        <Twitter className="h-6 w-6 text-white" />
                      </div>
                      <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-emerald-600 transition-colors">
                        <Instagram className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Doctor Info Overlay */}
                  <div className="absolute bottom-0 rounded-2xl left-0 right-0 bg-gradient-to-r from-blue-600 to-blue-300 p-4">
                    <h3 className="text-lg font-bold text-white mb-1">{doctor.name}</h3>
                    <p className="text-sm text-white/90">{doctor.specialty}</p>
                  </div>
                </div>
                
                <CardContent>
                  <div className="flex items-center gap-2 mb-3">
                    <Check className="h-4 w-4 text-emerald-600" />
                    <span className="text-sm text-gray-600">
                      {doctor.consultations} Consultation Done
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-gray-800">{doctor.rating}</span>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-4 w-4 ${
                            star <= Math.floor(doctor.rating)
                              ? "text-yellow-400 fill-current"
                              : star === Math.ceil(doctor.rating) && doctor.rating % 1 !== 0
                              ? "text-yellow-400 fill-current opacity-50"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

   <section className="  relative py-10 md:py-16 lg:py-20 overflow-hidden bg-gradient-to-r from-blue-700 to-sky-500">
  {/* Background pattern */}
  <div className="absolute inset-0 opacity-20">
    <div className="absolute top-4 left-4 w-16 md:w-32 h-16 md:h-32 bg-white/10 rounded-full"></div>
    <div className="absolute bottom-0 right-0 w-[150px] md:w-[350px] h-[150px] md:h-[350px] bg-white/10 rounded-full blur-2xl"></div>
    <div className="absolute top-1/3 left-1/2 w-8 md:w-14 h-8 md:h-14 bg-white/10 rotate-45"></div>
  </div>

  <div className="relative container mx-auto px-4 md:px-8">
    {/* Header + Cards */}
    <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-14">
      {/* Left Text */}
      <div className="lg:w-1/2">
        <p className="text-xs md:text-sm font-semibold text-blue-100 uppercase mb-3 md:mb-4 tracking-widest">
          Why Choose Pediatra
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 md:mb-6 leading-tight">
          We’re Ready 24/7
        </h2>
        <p className="text-white/90 text-base md:text-lg leading-relaxed">
          Our pediatric specialists are available day and night to provide the
          best care for your child with love, compassion, and modern expertise.
        </p>
      </div>

      {/* Right Cards */}
      <div className="flex flex-col sm:flex-row  gap-5 justify-center lg:justify-end lg:w-1/2">
        {/* Card 1 */}
        <Card className="flex-1 min-w-[250px] bg-white rounded-2xl shadow-xl border-0 hover:-translate-y-1 transition-transform duration-300">
          <CardContent className="p-6 flex flex-col h-full text-center md:text-left">
            <div className="mx-auto md:mx-0 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 mb-5">
              <Heart className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
              Child Care
            </h3>
            <p className="text-gray-600 text-sm md:text-base flex-grow mb-4">
              Comprehensive care for your child’s health, growth, and
              development in a safe, nurturing environment.
            </p>
            <Button
              variant="link"
              className="text-emerald-600 font-semibold underline p-0 self-center md:self-start"
            >
              Read More
            </Button>
          </CardContent>
        </Card>

        {/* Card 2 */}
        <Card className="flex-1 min-w-[250px]  bg-white rounded-2xl shadow-xl border-0 hover:-translate-y-1 transition-transform duration-300">
          <CardContent className="p-6 flex flex-col h-full text-center md:text-left">
            <div className="mx-auto md:mx-0 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 mb-5">
              <Building2 className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
              Modern Clinic
            </h3>
            <p className="text-gray-600 text-sm md:text-base flex-grow mb-4">
              Equipped with state-of-the-art technology to provide high-quality
              medical treatment and diagnostics.
            </p>
            <Button
              variant="link"
              className="text-emerald-600 font-semibold underline p-0 self-center md:self-start"
            >
              Read More
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>

    {/* Progress Bars */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 mt-10 md:mt-14">
      {[
        { title: "Environmental Testing", percent: 90 },
        { title: "Medical Research", percent: 93 },
        { title: "Vaccines Research", percent: 95 },
      ].map((item, idx) => (
        <div key={idx} className="w-full">
          <div className="flex justify-between items-center mb-3 md:mb-4">
            <h3 className="text-lg md:text-xl font-bold text-white">
              {item.title}
            </h3>
            <span className="text-xl md:text-2xl font-bold text-white">
              {item.percent}%
            </span>
          </div>
          <div className="w-full bg-white/30 rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-emerald-400 to-emerald-500 h-2 rounded-full transition-all duration-1000"
              style={{ width: `${item.percent}%` }}
            ></div>
          </div>
          <p className="text-white/80 text-sm md:text-base mt-3 leading-relaxed">
            Our ongoing research ensures continuous improvement in health and
            safety standards for all.
          </p>
        </div>
      ))}
    </div>
  </div>
</section>


         <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-soft max-w-md mx-auto">
                <Image
                  src="/mother-giving-medicine-to-child.jpg"
                  alt="Mother and child"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Gradient bar on the right of the image */}
              <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-b from-blue-300 to-cyan-300 rounded-r-3xl -z-10 hidden lg:block"></div>

              {/* Floating Card */}
              <Card className="absolute -bottom-6 left-0 shadow-xl max-w-xs border-0 rounded-lg">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <Counter
                      end={1742}
                      duration={1500}
                      className="text-3xl font-bold text-foreground"
                      suffix="+"
                    />
                    <p className="text-sm text-muted-foreground">
                      Satisfied Patients
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Content */}
            <div>
              <div className="mb-4 text-sm font-semibold text-primary">
                About Pediatra
              </div>
              <h2 className="mb-6 text-4xl font-bold text-balance">
                You Can Find Pediatra At Your Fingertips
              </h2>
              <p className="mb-8 text-muted-foreground leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat duis aute irure dolor in
                reprehenderit.
              </p>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex gap-4">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 flex-shrink-0 mt-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold">All Types of Doctors</h4>
                    <p className="text-sm text-muted-foreground">
                      Lorem ipsum dolor sit amet cons adipiscing elit sed doesmo
                      ipsum dolor in reprehenderit.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 flex-shrink-0 mt-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold">
                      Get an E-Prescription
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Lorem ipsum dolor sit amet cons adipiscing elit sed doesmo
                      ipsum dolor in reprehenderit.
                    </p>
                  </div>
                </div>
              </div>
              {/* Doctor Info */}
              <div className="flex items-center gap-4 pt-8">
                <div className="h-14 w-14 overflow-hidden rounded-full border-2 border-primary/20">
                  <Image
                    src="/female-doctor.png"
                    alt="Dr. Monica Hopkins"
                    width={56}
                    height={56}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-base">
                    Dr. Monica Hopkins
                  </h4>
                  <p className="text-sm text-primary font-medium">
                    Pediatra Founder
                  </p>
                </div>
                <div className="ml-auto">
                  <Image
                    src="/signature.jpg"
                    alt="Signature"
                    width={40}
                    height={40}
                    className="opacity-60"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

          <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5">
            {[
              { image: childIcon, label: "Child Care" },
              { image: vaccinationsIcon, label: "Vaccinations" },
              { image: allergyIcon, label: "Allergy Test" },
              { image: screeningsIcon, label: "Screenings" },
              { image: pathologyIcon, label: "Pathology" },
              { image: cardiologyIcon, label: "Cardiology" },
            ].map((service, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="bg-white rounded-2xl p-8 shadow-sm border-2 border-transparent hover:border-primary hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="flex flex-col items-center">
                    <div className="mb-4 flex items-center justify-center h-20 w-20">
                      <Image
                        src={service.image}
                        alt={service.label}
                        width={80}
                        height={80}
                        className="object-contain"
                      />
                    </div>
                    <h3 className="font-semibold text-sm text-gray-700 text-center">
                      {service.label}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <div className="bg-gray-50 rounded-3xl p-8 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
      {/* Left content */}
      <div className="flex items-center gap-6 flex-col sm:flex-row text-center sm:text-left">
        <div className="flex-shrink-0">
          <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center mx-auto sm:mx-0">
            <MessageCircle className="h-8 w-8 text-white" />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-1">
            Free Online Consultation
          </h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </p>
        </div>
      </div>

      {/* Right buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center">
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-white h-12 px-8 text-base font-semibold shadow-lg hover:shadow-xl transition-all rounded-full w-full sm:w-auto"
        >
          Make Appointment
        </Button>
        <Link
          href="/about"
          className="text-gray-700 hover:text-primary text-base font-semibold flex items-center justify-center gap-2 transition-colors"
        >
          Learn More <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Doctors