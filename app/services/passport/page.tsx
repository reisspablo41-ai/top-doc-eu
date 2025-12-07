"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CountrySelector } from "@/components/country-selector";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const passportImages = [
  "https://onlinelegitdocuments.com/wp-content/uploads/2023/01/pass1.jpg",
  "https://onlinelegitdocuments.com/wp-content/uploads/2023/01/pass-2.jpg",
  "https://onlinelegitdocuments.com/wp-content/uploads/2023/01/pass-3.jpg",
  "https://onlinelegitdocuments.com/wp-content/uploads/2023/01/pass-5.jpg",
  "https://onlinelegitdocuments.com/wp-content/uploads/2023/01/pass-6.jpg",
];

function PassportImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % passportImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % passportImages.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + passportImages.length) % passportImages.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden rounded-xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image
              src={passportImages[currentIndex]}
              alt={`Passport sample ${currentIndex + 1}`}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-xl"
              unoptimized
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors shadow-lg z-10"
        aria-label="Previous image"
      >
        <svg
          className="w-6 h-6 text-zinc-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors shadow-lg z-10"
        aria-label="Next image"
      >
        <svg
          className="w-6 h-6 text-zinc-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {passportImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function PassportPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 space-y-16">
      {/* Hero Section */}
      <motion.section
        initial="initial"
        animate="animate"
        variants={fadeInUp}
        className="text-center space-y-6"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
          Professional Passport Services
        </h1>
        <p className="text-lg md:text-xl text-zinc-700 max-w-3xl mx-auto leading-relaxed">
          Top Docs provides professional guidance and support for passport applications, renewals, and replacements. Whether you need a new passport or need to renew an existing one, our expert team helps you navigate the process with confidence and clarity.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Link href="/contact">
            <Button size="lg">Get Started</Button>
          </Link>
          <Link href="/how-to-order">
            <Button variant="outline" size="lg">
              Learn How to Order
            </Button>
          </Link>
        </div>
        <CountrySelector />
      </motion.section>

      {/* Image Slider */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <PassportImageSlider />
      </motion.section>

      {/* Quality Features */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="space-y-6"
      >
        <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-semibold text-center">
          Top Quality Passport Services
        </motion.h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <motion.div variants={fadeInUp}>
            <Card className="h-full text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 rounded-full bg-teal-600 text-white flex items-center justify-center mx-auto mb-4 text-2xl">
                  ✨
                </div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">Top Quality</h3>
                <p className="text-zinc-700">
                  Premium quality passports created with attention to detail and 
                  professional standards.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Card className="h-full text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 rounded-full bg-teal-600 text-white flex items-center justify-center mx-auto mb-4 text-2xl">
                  🔒
                </div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">Holograms</h3>
                <p className="text-zinc-700">
                  Authentic holograms and security features that meet international 
                  standards and requirements.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Card className="h-full text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 rounded-full bg-teal-600 text-white flex items-center justify-center mx-auto mb-4 text-2xl">
                  📋
                </div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">Samples</h3>
                <p className="text-zinc-700">
                  View samples before final production to ensure everything meets 
                  your expectations.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Card className="h-full text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 rounded-full bg-teal-600 text-white flex items-center justify-center mx-auto mb-4 text-2xl">
                  ✅
                </div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">Verified</h3>
                <p className="text-zinc-700">
                  100% verified passports with all necessary details and proper 
                  database registration.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Introduction Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="space-y-6"
      >
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">
              Professional Passport Services - Simple and Convenient
            </h2>
            <p className="text-lg text-zinc-700 leading-relaxed mb-4">
              Planning an international trip and need a passport? Or perhaps you need to renew your existing passport? Top Docs provides comprehensive guidance for all your passport needs, helping you understand requirements, navigate the application process, and ensure your documentation is complete and compliant.
            </p>
            <p className="text-lg text-zinc-700 leading-relaxed">
              Our expert team guides you through every step of the passport process, from understanding eligibility requirements to submitting your application. We help you prepare all necessary documentation, schedule appointments when needed, and track your application status throughout the process.
            </p>
          </CardContent>
        </Card>
      </motion.section>

      {/* Eligibility Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="space-y-6"
      >
        <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-semibold">
          Passport Requirements
        </motion.h2>
        <Card>
          <CardHeader>
            <CardTitle>Requirements to Obtain a Passport</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-zinc-700 leading-relaxed mb-4">
              The first step in obtaining a passport is to verify the requirements. To apply for a new passport or obtain your first passport, you must meet the following criteria:
            </p>
            <ul className="list-disc space-y-3 pl-6 text-zinc-700">
              <li>
                <strong>Citizenship:</strong> Be a citizen of the country for which 
                you are applying for a passport
              </li>
              <li>
                <strong>Age Requirement:</strong> Be at least 16 years old (or have 
                parental consent if younger)
              </li>
              <li>
                <strong>Valid Identification:</strong> Have a valid form of 
                identification, such as a driver&apos;s license or birth certificate
              </li>
            </ul>
          </CardContent>
        </Card>
      </motion.section>

      {/* Documentation Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="space-y-6"
      >
        <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-semibold">
          Gather the Necessary Documentation
        </motion.h2>
        <div className="grid gap-6 md:grid-cols-2">
          <motion.div variants={fadeInUp}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>New Passport Application</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-700 mb-4">
                  Before you can buy a passport online, you&apos;ll need to gather 
                  some documentation. For a new passport, you&apos;ll need:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-zinc-700">
                  <li>A completed and signed passport application form</li>
                  <li>
                    Proof of citizenship, such as a birth certificate or 
                    naturalization certificate
                  </li>
                  <li>Identification, such as a driver&apos;s license or state ID</li>
                  <li>Two passport photos</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Passport Renewal</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-700 mb-4">
                  If you are renewing your passport, you&apos;ll need:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-zinc-700">
                  <li>Your current passport</li>
                  <li>A completed and signed passport renewal form</li>
                  <li>Two passport photos</li>
                </ul>
                <p className="text-zinc-700 mt-4">
                  It&apos;s important to make sure that all of your documentation is 
                  in order before you begin the online application process. Gather 
                  everything you need and double-check that it is all correct and 
                  up-to-date. This will save you time and hassle in the long run.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Service Provider Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="space-y-6"
      >
        <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-semibold">
          Choose a Passport Service Provider
        </motion.h2>
        <Card>
          <CardContent className="pt-6">
            <p className="text-lg text-zinc-700 leading-relaxed mb-6">
              Now it&apos;s time to choose a passport service provider to buy a 
              passport. There are a few options to choose from, including government 
              agencies and private companies.
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-zinc-900 mb-2">
                  Government Agencies
                </h4>
                <p className="text-zinc-700">
                  If you choose to go through the government, you can apply online 
                  or by mail. The process is generally faster if you apply online, 
                  but you&apos;ll need to pay a processing fee. The application 
                  process is straightforward, but it&apos;s important to make 
                  sure that you complete all of the required fields and provide all 
                  of the necessary documentation.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-zinc-900 mb-2">
                  Private Companies - Top Docs
                </h4>
                <p className="text-zinc-700">
                  Private companies like Top Docs can also help you with 
                  the passport application process. We often offer additional services, 
                  such as photo services and expedited processing, for an additional 
                  fee. It&apos;s important to do your research and choose a reputable 
                  company. Look for companies with good reviews like Top Docs 
                  and a track record of helping customers successfully obtain their passports.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="space-y-6"
      >
        <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-semibold text-center">
          Why Choose Us to Buy a Passport?
        </motion.h2>
        <p className="text-center text-lg text-zinc-700 max-w-3xl mx-auto">
          Top Docs is always here to provide them to you!
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <motion.div variants={fadeInUp}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>100% Verified Passports</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-700">
                  Here at our agency, we have 100% verified passports that are 
                  created with all the necessary details. You can use that passport 
                  without worry and travel to countries you like.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Secured Payments</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-700">
                  Your payment details are completely safe and secured with our agency. 
                  We never disclose our client&apos;s details to anyone and keep all 
                  their data securely.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Worldwide Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-700">
                  We are not just committed to delivering the passports to a specific 
                  country. No matter where you live, your passport will be delivered 
                  shortly up there.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Consistent Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-700">
                  Our professional team members provide complete support to the clients 
                  and help them with their queries related to passports and other documents. 
                  We are now just a call or text away from you!
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Buy Passport Online Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="space-y-6"
      >
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">
              Buy Fake and Real Passport Online
            </h2>
            <p className="text-lg text-zinc-700 leading-relaxed mb-4">
              An authorization to travel isn&apos;t only an underwriting to all your 
              outings. It is furthermore a character confirmation. As expected, you 
              should be searching seriously and passport administrations; we are here 
              for that. Regardless, is it the worldwide record that is negating you 
              in researching the world? Like this, stress is not satisfactory. You have 
              shown up at the ideal spot that is Buy Passport, for you should be heard.
            </p>
            <p className="text-lg text-zinc-700 leading-relaxed mb-4">
              We appreciate and regard the necessities of our customers and that we 
              embrace full-advantage objectivity to give satisfaction.
            </p>
            <p className="text-lg text-zinc-700 leading-relaxed">
              We empower you to mastermind travel grants online for the countries. 
              We are yet puzzling over if to choose the administrations offered to 
              purchase genuine passports on the web? Indeed, when we convey fake and 
              real global characters, we use the main things.
            </p>
          </CardContent>
        </Card>
      </motion.section>

      {/* Submit Application Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="space-y-6"
      >
        <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-semibold">
          Submit Your Application and Pay the Fee
        </motion.h2>
        <Card>
          <CardContent className="pt-6">
            <p className="text-lg text-zinc-700 leading-relaxed">
              Once you&apos;ve gathered all the necessary documentation and chosen a 
              passport service provider, it&apos;s time to submit your application and 
              pay the fee. Contact our agency today and expect the delivery of your 
              passport at the soonest.
            </p>
          </CardContent>
        </Card>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="bg-teal-600 text-white rounded-xl p-8 md:p-12 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Ready to Get Your Passport?
        </h2>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          Contact our agency today and expect the delivery of your passport at the 
          soonest. We are here to help you!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-white text-teal-600 hover:bg-zinc-100 font-semibold"
            >
              Contact Us Now
            </Button>
          </Link>
        </div>
      </motion.section>

      {/* Keywords Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
        className="border-t border-zinc-200 pt-12"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-2xl font-semibold mb-6 text-center"
        >
          Popular Search Terms
        </motion.h2>
        <motion.div
          variants={staggerContainer}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          <motion.div variants={fadeInUp}>
            <h3 className="font-semibold text-zinc-900 mb-3">Passport Services</h3>
            <ul className="space-y-1 text-sm text-zinc-600">
              <li>• obtener un pasaporte</li>
              <li>• sacar cita para pasaporte</li>
              <li>• cómo sacar el pasaporte</li>
              <li>• requisitos para sacar pasaporte</li>
              <li>• obtener pasaporte mexicano</li>
              <li>• sacar pasaporte por primera vez</li>
              <li>• UK passport application</li>
              <li>• British passport renewal</li>
              <li>• Passport UK</li>
              <li>• Apply for UK passport</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>
    </main>
  );
}