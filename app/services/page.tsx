'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

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

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 space-y-16">
      {/* Hero Section */}
      <motion.section
        initial="initial"
        animate="animate"
        variants={fadeInUp}
        className="text-center space-y-6"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
          Our Services
        </h1>
        <p className="text-lg md:text-xl text-zinc-700 max-w-3xl mx-auto leading-relaxed">
          We produce real database-registered documents and premium replica versions depending on your needs. No interviews, no long processes, just reliable documents delivered quickly and confidentially.
        </p>
      </motion.section>

      {/* Services Grid */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
      >
        <motion.div
          variants={staggerContainer}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {/* Passport Service Card */}
          <motion.div variants={fadeInUp} className="group relative">
            <Link href="/services/passport">
              <div className="relative h-[400px] rounded-xl overflow-hidden cursor-pointer">
                {/* Background Image */}
                <Image
                  src="https://images.pexels.com/photos/29402986/pexels-photo-29402986.jpeg"
                  alt="Passports"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  unoptimized
                />
                {/* Icon Overlay */}
                <div className="absolute top-6 left-6 z-10">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <svg
                      className="w-8 h-8 text-teal-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 002 2h2.945M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                {/* Content Overlay - Always Visible */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    Buy Passport
                  </h3>
                  <p className="text-white/90 text-sm">
                    Order premium, database-registered passports produced with
                    advanced printing technology.
                  </p>
                </div>
                {/* Hover Overlay - Teal600 with additional text */}
                <div className="absolute inset-0 bg-teal-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-8 text-white">
                  <h3 className="text-3xl font-semibold mb-4 text-center">
                    Buy Passport
                  </h3>
                  <p className="text-lg mb-4 text-center">
                    Order premium, database-registered passports produced with
                    advanced printing technology. Our team delivers discreet,
                    fast, and high-quality documents that pass all standard
                    security checks. Whether you need a new identity or a
                    replacement, we provide hassle-free processing with
                    worldwide delivery
                  </p>
                  <Button
                    variant="outline"
                    size="lg"
                    className="!bg-white !text-teal-600 hover:!bg-zinc-100 border-white"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Driver's License Service Card */}
          <motion.div variants={fadeInUp} className="group relative">
            <Link href="/services/drivers-license">
              <div className="relative h-[400px] rounded-xl overflow-hidden cursor-pointer">
                {/* Background Image */}
                <Image
                  src="https://images.pexels.com/photos/45113/pexels-photo-45113.jpeg"
                  alt="Driver's Licenses"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  unoptimized
                />
                {/* Icon Overlay */}
                <div className="absolute top-6 left-6 z-10">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <svg
                      className="w-8 h-8 text-teal-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                {/* Content Overlay - Always Visible */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    Buy Driver&apos;s License
                  </h3>
                  <p className="text-white/90 text-sm">
                      Get authentic-looking driver&apos;s licenses that scan,
                      swipe, and verify.
                    </p>
                </div>
                {/* Hover Overlay - Teal600 with additional text */}
                <div className="absolute inset-0 bg-teal-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-8 text-white">
                  <h3 className="text-3xl font-semibold mb-4 text-center">
                    Buy Driver&apos;s License
                  </h3>
                  <p className="text-lg mb-4 text-center">
                      Get authentic-looking driver's licenses that scan, swipe,
                      and verify. Our licenses come with holograms, barcodes,
                      and UV features identical to the real thing. We work with
                      all regions and states, ensuring your document meets
                      official standards.
                    </p>

                    <Button
                      variant="outline"
                      size="lg"
                      className="!bg-white !text-teal-600 hover:!bg-zinc-100 border-white"
                    >
                      Learn More
                    </Button>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* ID Card Service Card */}
          <motion.div variants={fadeInUp} className="group relative">
            <Link href="/services/id-card">
              <div className="relative h-[400px] rounded-xl overflow-hidden cursor-pointer">
                {/* Background Image */}
                <Image
                  src="https://images.pexels.com/photos/842961/pexels-photo-842961.jpeg"
                  alt="ID Cards"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  unoptimized
                />
                {/* Icon Overlay */}
                <div className="absolute top-6 left-6 z-10">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <svg
                      className="w-8 h-8 text-teal-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                      />
                    </svg>
                  </div>
                </div>
                {/* Content Overlay - Always Visible */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    Buy ID Cards
                  </h3>
                  <p className="text-white/90 text-sm">
                      Order high-quality ID cards with full security elements,
                      magnetic stripes, signatures, and custom details.
                    </p>
                </div>
                {/* Hover Overlay - Teal600 with additional text */}
                <div className="absolute inset-0 bg-teal-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-8 text-white">
                  <h3 className="text-3xl font-semibold mb-4 text-center">
                    Buy ID Cards
                  </h3>
                  <p className="text-lg mb-4 text-center">
                      Order high-quality ID cards with full security elements,
                      magnetic stripes, signatures, and custom details. We
                      guarantee unmatched precision, fast turnaround times, and
                      24/7 support. Your privacy and anonymity are fully
                      protected.
                    </p>

                    <Button
                      variant="outline"
                      size="lg"
                      className="!bg-white !text-teal-600 hover:!bg-zinc-100 border-white"
                    >
                      Learn More
                    </Button>
                </div>
              </div>
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Residence Permit Cards - Below the main 3 */}
        <div className="grid gap-6 lg:grid-cols-2 mt-6">
          <motion.div variants={fadeInUp}>
            <Link href="/services/residence-permit">
              <div className="relative h-[300px] rounded-xl overflow-hidden cursor-pointer group">
                {/* Background Image */}
                <Image
                  src="https://images.pexels.com/photos/4922080/pexels-photo-4922080.jpeg"
                  alt="Residence Permits"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  unoptimized
                />
                {/* Icon Overlay */}
                <div className="absolute top-6 left-6 z-10">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <svg
                      className="w-8 h-8 text-teal-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </div>
                </div>
                {/* Content Overlay - Always Visible */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    Buy Residence Permit
                  </h3>
                  <p className="text-white/90 text-sm">
                      Apply for high-quality Resident Cards with full security
                      features and database registration.
                    </p>
                </div>
                {/* Hover Overlay - Teal600 with additional text */}
                <div className="absolute inset-0 bg-teal-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-8 text-white">
                  <h3 className="text-3xl font-semibold mb-4 text-center">
                    Buy Residence Permit
                  </h3>
                  <p className="text-lg mb-4 text-center">
                      Apply for high-quality Resident Cards with full security
                      features and database registration. We process cards for
                      multiple countries with biometric details, signature
                      panels, and machine-readable zones. No interviews, no long
                      waiting periods — your card is created and delivered
                      discreetly with guaranteed authenticity.
                    </p>

                    <Button
                      variant="outline"
                      size="lg"
                      className="bg-white text-teal-600 hover:bg-zinc-100 border-white"
                    >
                      Learn More
                    </Button>
                </div>
              </div>
            </Link>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Link href="/services/residence-permit">
              <div className="relative h-[300px] rounded-xl overflow-hidden cursor-pointer group">
                {/* Background Image */}
                <Image
                  src="https://australiandocuments.com/wp-content/uploads/2023/01/fd2ec93cfbdef5325da4c19344171d78-768x1024.jpeg"
                  alt="Clear Australian Driving License"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  unoptimized
                />
                {/* Icon Overlay */}
                <div className="absolute top-6 left-6 z-10">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <svg
                      className="w-8 h-8 text-teal-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </div>
                </div>
                {/* Content Overlay - Always Visible */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    Clear Australian Driving Record
                  </h3>
                  <p className="text-white/90 text-sm">
                      Need a clean Australian driving record? We offer fast and
                      confidential record adjustment services. Traffic points,
                      suspensions, fines, and previous violations can be removed
                      from your file through our secure partner network. Your
                      new record will appear clean in all standard checks and
                      verifications.
                    </p>
                </div>
                {/* Hover Overlay - Teal600 with additional text */}
                <div className="absolute inset-0 bg-teal-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-8 text-white">
                  <h3 className="text-3xl font-semibold mb-4 text-center">
                    Clear Australian Driving Record
                  </h3>
                  <p className="text-lg mb-4 text-center">
                      Need a clean Australian driving record? We offer fast and
                      confidential record adjustment services. Traffic points,
                      suspensions, fines, and previous violations can be removed
                      from your file through our secure partner network. Your
                      new record will appear clean in all standard checks and
                      verifications.
                    </p>

                    <Button
                      variant="outline"
                      size="lg"
                      className="bg-white text-teal-600 hover:bg-zinc-100 border-white"
                    >
                      Learn More
                    </Button>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}



