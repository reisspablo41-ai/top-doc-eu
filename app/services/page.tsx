'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';

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

const services = [
  {
    title: 'Passport',
    description: 'Order premium, database-registered passports produced with advanced printing technology. Our team delivers discreet, fast, and high-quality documents that pass all standard security checks.',
    image: 'https://images.pexels.com/photos/29402986/pexels-photo-29402986.jpeg',
    href: '/services/passport',
    icon: (
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
    ),
  },
  {
    title: "Driver's License",
    description: "Get authentic-looking driver's licenses that scan, swipe, and verify. Our licenses come with holograms, barcodes, and UV features identical to the real thing.",
    image: 'https://images.pexels.com/photos/45113/pexels-photo-45113.jpeg',
    href: '/services/drivers-license',
    icon: (
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
    ),
  },
  {
    title: 'ID Card',
    description: 'Order high-quality ID cards with full security elements, magnetic stripes, signatures, and custom details. We guarantee unmatched precision, fast turnaround times, and 24/7 support.',
    image: 'https://images.pexels.com/photos/842961/pexels-photo-842961.jpeg',
    href: '/services/id-card',
    icon: (
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
    ),
  },
  {
    title: 'Residence Permit',
    description: 'Apply for high-quality Resident Cards with full security features and database registration. We process cards for multiple countries with biometric details, signature panels, and machine-readable zones.',
    image: 'https://images.pexels.com/photos/4922080/pexels-photo-4922080.jpeg',
    href: '/services/residence-permit',
    icon: (
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
    ),
  },
  {
    title: 'Work Permit',
    description: 'Get professional guidance and support for work permit applications. Whether you are a student looking for work experience, or a skilled worker seeking employment opportunities, we can help you navigate the process.',
    image: 'https://onlinelegitdocuments.com/wp-content/uploads/2022/12/online-22.jpg',
    href: '/services/work-permit',
    icon: (
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
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
];

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
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {services.map((service, index) => (
          <motion.div key={index} variants={fadeInUp}>
            <Link href={service.href}>
              <Card className="group relative h-full overflow-hidden cursor-pointer transition-all hover:shadow-xl">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-6 left-6 z-10">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                      {service.icon}
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-zinc-700 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center text-teal-600 font-medium group-hover:text-teal-700 transition-colors">
                    Learn More
                    <svg
                      className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
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
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </motion.section>
    </main>
  );
}

