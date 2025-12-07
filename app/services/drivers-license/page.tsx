'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CountrySelector } from '@/components/country-selector';

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

export default function DriversLicensePage() {
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
          Professional Driver&apos;s License Services
        </h1>
        <p className="text-lg md:text-xl text-zinc-700 max-w-3xl mx-auto leading-relaxed">
          Top Docs provides professional guidance and support for driver&apos;s license applications, renewals, replacements, and conversions. Whether you need a UK driving licence, European license, or license from other jurisdictions, our expert team helps you navigate the process with confidence.
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

      {/* Overview Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
        className="space-y-6"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-semibold"
        >
          Professional Driver&apos;s License Services
        </motion.h2>
        <Card>
          <CardContent className="pt-6">
            <p className="text-lg text-zinc-700 leading-relaxed mb-4">
              Top Docs is a global provider of quality database documents, specializing in driver&apos;s licenses, passports, ID cards, residence permits, and more. With over 30 years of experience serving clients worldwide, we offer professional guidance for license applications, renewals, replacements, and conversions.
            </p>
            <p className="text-lg text-zinc-700 leading-relaxed">
              Our driver&apos;s license services focus on providing comprehensive support throughout the entire process. We understand that navigating license requirements can be complex, and our expert team guides you through every step, from understanding eligibility requirements to submitting your application and tracking its status.
            </p>
          </CardContent>
        </Card>
      </motion.section>

      {/* Key Features Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
        className="space-y-6"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-semibold"
        >
          Why Choose Our Driver&apos;s License Services
        </motion.h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <motion.div variants={fadeInUp}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Quality Database Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-700">
                  We provide guidance for obtaining quality database-registered
                  driver&apos;s licenses. Our documents are designed to meet
                  official specifications with appropriate security features
                  including holograms and verification elements that meet
                  standard requirements.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Database Registration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-700">
                  Our driver&apos;s license services focus on
                  database-registered documents that are integrated into
                  official systems. This ensures that your license appears
                  legitimate in database verifications and meets the
                  requirements for official recognition.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Security Features</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-700">
                  All driver&apos;s licenses we assist with include appropriate
                  holograms, security scans, and verification features. These
                  elements are designed to pass standard security checks and
                  meet official document specifications.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Comprehensive Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-700">
                  We provide full support throughout the driver&apos;s license
                  process, from initial consultation to document delivery. Our
                  team helps you understand requirements, prepare necessary
                  documentation, and navigate the application process
                  efficiently.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Confidential Data Handling</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-700">
                  Your personal information is handled with the utmost
                  confidentiality. We employ secure data practices and
                  privacy-first approaches to ensure your details are protected
                  throughout the entire process.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>24/7 Service Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-700">
                  Our expert team is available around the clock to assist you
                  with questions, provide guidance, and support your
                  driver&apos;s license application. Contact us anytime via
                  email or our contact form.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
        className="space-y-6"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-semibold"
        >
          Our Driver&apos;s License Process
        </motion.h2>
        <div className="space-y-6">
          <motion.div variants={fadeInUp}>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold shrink-0">
                    1
                  </div>
                  <CardTitle>Initial Consultation</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4 rounded-lg overflow-hidden max-w-md mx-auto">
                  <Image
                    src="https://onlinelegitdocuments.com/wp-content/uploads/2023/01/step-1.jpg"
                    alt="Step 1: Initial Consultation"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                    unoptimized
                  />
                </div>
                <p className="text-zinc-700 leading-relaxed">
                  Contact us via email or our contact form to discuss your
                  driver&apos;s license needs. Our team will provide information
                  about requirements, available options, and guide you through
                  the process. We&apos;ll help you understand what documentation
                  is needed and answer any questions you may have.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold shrink-0">
                    2
                  </div>
                  <CardTitle>Document Preparation</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4 rounded-lg overflow-hidden max-w-md mx-auto">
                  <Image
                    src="https://onlinelegitdocuments.com/wp-content/uploads/2023/01/step-2.jpg"
                    alt="Step 2: Document Preparation"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                    unoptimized
                  />
                </div>
                <p className="text-zinc-700 leading-relaxed mb-4">
                  We&apos;ll help you prepare all necessary information and
                  documentation for your driver&apos;s license application. This
                  includes:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-zinc-700">
                  <li>Personal information (name, date of birth, address)</li>
                  <li>License class or category requirements</li>
                  <li>Photograph meeting official specifications</li>
                  <li>Signature requirements</li>
                  <li>
                    Any additional documentation specific to your jurisdiction
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold shrink-0">
                    3
                  </div>
                  <CardTitle>Order Placement</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4 rounded-lg overflow-hidden max-w-md mx-auto">
                  <Image
                    src="https://onlinelegitdocuments.com/wp-content/uploads/2023/01/step-3.jpg"
                    alt="Step 3: Order Placement"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                    unoptimized
                  />
                </div>
                <p className="text-zinc-700 leading-relaxed">
                  Once you&apos;ve provided all required information, we&apos;ll
                  process your order. Our team will review your details for
                  accuracy and completeness, ensuring everything meets the
                  requirements for your driver&apos;s license application.
                  We&apos;ll keep you informed throughout the process.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold shrink-0">
                    4
                  </div>
                  <CardTitle>Production & Quality Control</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-700 leading-relaxed mb-4">
                  Our expert team handles the production process with attention
                  to detail. This includes:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-zinc-700">
                  <li>Database registration and integration</li>
                  <li>
                    Application of appropriate holograms and security features
                  </li>
                  <li>Quality control and verification</li>
                  <li>Security scan implementation</li>
                  <li>Final review and approval</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold shrink-0">
                    5
                  </div>
                  <CardTitle>Verification & Delivery</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-700 leading-relaxed">
                  Before final delivery, we provide a preview of your
                  driver&apos;s license for your verification. Once approved, we
                  arrange secure and confidential delivery to your specified
                  address. You&apos;ll receive tracking information and can
                  expect professional packaging that protects your document
                  during transit.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Offered Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
        className="space-y-6"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-semibold"
        >
          Comprehensive Document Services
        </motion.h2>
        <Card>
          <CardContent className="pt-6">
            <p className="text-lg text-zinc-700 leading-relaxed mb-6">
              While we specialize in driver&apos;s licenses, we also provide
              professional guidance and support for a broad range of documents:
            </p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-zinc-50 rounded-lg p-4">
                <h4 className="font-semibold text-zinc-900 mb-2">
                  Driver&apos;s Licenses
                </h4>
                <p className="text-sm text-zinc-700">
                  Original driver&apos;s licenses with database registration and
                  security features
                </p>
              </div>
              <div className="bg-zinc-50 rounded-lg p-4">
                <h4 className="font-semibold text-zinc-900 mb-2">Passports</h4>
                <p className="text-sm text-zinc-700">
                  Quality passports with appropriate security features and
                  verification
                </p>
              </div>
              <div className="bg-zinc-50 rounded-lg p-4">
                <h4 className="font-semibold text-zinc-900 mb-2">ID Cards</h4>
                <p className="text-sm text-zinc-700">
                  Original ID cards meeting official specifications and
                  requirements
                </p>
              </div>
              <div className="bg-zinc-50 rounded-lg p-4">
                <h4 className="font-semibold text-zinc-900 mb-2">
                  Residence Permits
                </h4>
                <p className="text-sm text-zinc-700">
                  Residence permits with proper documentation and verification
                </p>
              </div>
              <div className="bg-zinc-50 rounded-lg p-4">
                <h4 className="font-semibold text-zinc-900 mb-2">
                  Birth Certificates
                </h4>
                <p className="text-sm text-zinc-700">
                  Official birth certificates meeting jurisdictional
                  requirements
                </p>
              </div>
              <div className="bg-zinc-50 rounded-lg p-4">
                <h4 className="font-semibold text-zinc-900 mb-2">
                  College Degrees
                </h4>
                <p className="text-sm text-zinc-700">
                  Educational certificates and degrees with proper
                  authentication
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.section>

      {/* Database Registration Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
        className="space-y-6"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-semibold"
        >
          Database Registration & Verification
        </motion.h2>
        <div className="grid gap-6 md:grid-cols-2">
          <motion.div variants={fadeInUp}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>What is Database Registration?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-700 leading-relaxed mb-4">
                  Database-registered driver&apos;s licenses are integrated into
                  official systems, ensuring they appear legitimate when
                  verified through standard database checks. This integration is
                  crucial for documents that need to pass verification tests and
                  security scans.
                </p>
                <p className="text-zinc-700 leading-relaxed">
                  Our driver&apos;s license services focus on ensuring proper
                  database registration, which means your license will be
                  recognized in official verification systems and meet the
                  requirements for legitimate use.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Security Features & Verification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-700 leading-relaxed mb-4">
                  All driver&apos;s licenses we assist with include
                  comprehensive security features designed to meet official
                  standards:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-zinc-700">
                  <li>Appropriate holograms and security overlays</li>
                  <li>Security scans and verification elements</li>
                  <li>Database integration for verification</li>
                  <li>Official formatting and design specifications</li>
                  <li>Quality materials and printing standards</li>
      </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Quality & Experience Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
        className="space-y-6"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-semibold"
        >
          Quality Execution & Experience
        </motion.h2>
        <Card>
          <CardContent className="pt-6">
            <p className="text-lg text-zinc-700 leading-relaxed mb-6">
              With over 30 years of experience in document services, we pride
              ourselves on high-quality execution and attention to detail. Our
              driver&apos;s license services are backed by:
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="font-semibold text-zinc-900 mb-3">
                  Expert Team
                </h4>
                <p className="text-zinc-700 leading-relaxed">
                  Our experienced professionals understand the intricacies of
                  driver&apos;s license requirements across different
                  jurisdictions. We stay updated on the latest regulations and
                  security standards to ensure our guidance is accurate and
                  current.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-zinc-900 mb-3">
                  Quality Standards
                </h4>
                <p className="text-zinc-700 leading-relaxed">
                  We maintain strict quality control standards throughout the
                  process. Every driver&apos;s license we assist with undergoes
                  thorough review to ensure it meets official specifications and
                  security requirements.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-zinc-900 mb-3">
                  Confidential Handling
                </h4>
                <p className="text-zinc-700 leading-relaxed">
                  Your personal information is handled with the utmost
                  confidentiality. We employ secure data practices and
                  privacy-first approaches, ensuring your details are protected
                  and used only for the purpose of providing our services.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-zinc-900 mb-3">
                  Global Reach
                </h4>
                <p className="text-zinc-700 leading-relaxed">
                  We serve clients worldwide, providing driver&apos;s license
                  services for various jurisdictions. Our global experience
                  allows us to understand different requirements and provide
                  tailored guidance for your specific needs.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.section>

      {/* Contact & Ordering Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
        className="space-y-6"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-semibold"
        >
          How to Place Your Order
        </motion.h2>
        <Card>
          <CardContent className="pt-6">
            <p className="text-lg text-zinc-700 leading-relaxed mb-6">
              Placing an order for driver&apos;s license services is simple and
              straightforward. We encourage you to contact us directly to
              discuss your needs and begin the process:
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-teal-600 text-white flex items-center justify-center mx-auto mb-4 text-2xl">
                  📧
                </div>
                <h4 className="font-semibold text-zinc-900 mb-2">Email</h4>
                <p className="text-sm text-zinc-700 mb-3">
                  Send us an email with your questions or requirements
                </p>
                <a
                  href="mailto:contact@topdocs.com"
                  className="text-teal-600 hover:text-teal-700 font-medium"
                >
                  Email Us →
                </a>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-teal-600 text-white flex items-center justify-center mx-auto mb-4 text-2xl">
                  📝
                </div>
                <h4 className="font-semibold text-zinc-900 mb-2">Contact Form</h4>
                <p className="text-sm text-zinc-700 mb-3">
                  Use our contact form for detailed inquiries
                </p>
                <Link
                  href="/contact"
                  className="text-teal-600 hover:text-teal-700 font-medium"
                >
                  Contact Us →
                </Link>
              </div>
            </div>
            <div className="mt-8 bg-teal-50 border border-teal-200 rounded-lg p-6">
              <p className="text-teal-900 font-semibold mb-2">
                Available 24/7 for Your Convenience
              </p>
              <p className="text-teal-800">
                Our customer support team is available around the clock to
                assist you with your driver&apos;s license needs. Whether you
                have questions about the process, need guidance on requirements,
                or want to place an order, we&apos;re here to help at any time.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInUp}
        className="bg-teal-600 text-white rounded-xl p-8 md:p-12 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          Contact our team today to discuss your driver&apos;s license needs.
          We&apos;ll provide personalized guidance and answer any questions you
          may have about our services and process.
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
          <Link href="/how-to-order">
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              Learn How to Order
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
            <h3 className="font-semibold text-zinc-900 mb-3">
              Driver&apos;s Licenses
            </h3>
            <ul className="space-y-1 text-sm text-zinc-600">
              <li>• UK driving licence</li>
              <li>• DVLA driving licence</li>
              <li>• apply for driving licence UK</li>
              <li>• provisional driving licence UK</li>
              <li>• replacement driving licence</li>
              <li>• UK driving theory test</li>
              <li>• practical driving test</li>
              <li>• professional driver license</li>
              <li>• CPC licence</li>
              <li>• motorcycle license</li>
              <li>• lost driving licence</li>
              <li>• driving licence apply online</li>
              <li>• DVLA online</li>
              <li>• driving test online</li>
              <li>• drivers license renewal</li>
              <li>• renew drivers license UK</li>
              <li>• European driving license</li>
              <li>• deutscher führerschein</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>
    </main>
  );
}
