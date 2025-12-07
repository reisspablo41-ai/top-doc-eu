"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
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

export default function ResidencePermitPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 3000);
  };

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
          Professional Residence Permit Services
        </h1>
        <p className="text-lg md:text-xl text-zinc-700 max-w-3xl mx-auto leading-relaxed">
          Top Docs provides professional guidance and support for residence permit applications from various countries. Whether you need a UK residence permit, EU residence permit, or permit from other jurisdictions, our expert team helps you navigate the process with confidence.
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

      {/* Quality Features */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="space-y-6"
      >
        <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-semibold text-center">
          Top Quality Residence Permit Services
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
                  Premium quality residence permits created with attention to detail 
                  and professional standards.
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
                  100% verified residence permits with all necessary details and 
                  proper database registration.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* What is Residence Permit Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="space-y-6"
      >
        <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-semibold">
          What is a Residence Permit?
        </motion.h2>
        <Card>
          <CardContent className="pt-6">
            <p className="text-lg text-zinc-700 leading-relaxed mb-4">
              A residence permit is a document that allows a non-citizen to live in 
              a certain country for a specific period of time. There are various 
              reasons why someone might want to obtain a residence permit, such as 
              studying, working, or being with family members who are citizens of 
              the country.
            </p>
            <p className="text-lg text-zinc-700 leading-relaxed">
              In this guide, we will focus on how to buy a residence permit and the 
              legitimate ways to obtain one through Top Docs.
            </p>
          </CardContent>
        </Card>
      </motion.section>

      {/* Important Note Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="space-y-6"
      >
        <Card className="bg-amber-50 border-amber-200">
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold text-amber-900 mb-3">
              ⚠️ Important Information
            </h3>
            <p className="text-amber-800 leading-relaxed mb-4">
              First, it&apos;s important to note that it is generally not possible 
              to simply buy a residence permit without meeting certain eligibility 
              requirements. Most countries have strict laws and regulations in place 
              to prevent the sale of residence permits, and any offers to sell a 
              residence permit without proper documentation are likely to be scams.
            </p>
            <p className="text-amber-800 leading-relaxed">
              However, there are legitimate ways to obtain a residence permit through 
              Top Docs, even if you are not a citizen of the country. 
              We provide professional guidance and support for legitimate applications 
              that meet official requirements.
            </p>
          </CardContent>
        </Card>
      </motion.section>

      {/* Ways to Obtain Residence Permit Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="space-y-6"
      >
        <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-semibold">
          Legitimate Ways to Obtain a Residence Permit
        </motion.h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <motion.div variants={fadeInUp}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Work Visa</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-700 leading-relaxed">
                  One way to obtain a residence permit is through a work visa, which 
                  you can also obtain from Top Docs. This allows you to 
                  live and work in the country for a specific period of time. To 
                  obtain a work visa, you will typically need to have a job offer 
                  from a company in the country, and the company will often help 
                  you with the process of obtaining the visa.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Student Visa</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-700 leading-relaxed">
                  Another way to obtain a residence permit is to enroll in a study 
                  program at a school or university in the country. Many countries 
                  offer student visas to non-citizens who are enrolled in educational 
                  programs, and these visas often allow you to work part-time while 
                  you are studying.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Family Reunification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-700 leading-relaxed">
                  You may also be able to obtain a residence permit by being married 
                  to a citizen of the country, or by having close family members who 
                  are citizens. In these cases, you may be able to apply for a family 
                  reunification visa, which allows you to live with your family in 
                  the country.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Conclusion Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="space-y-6"
      >
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-2xl font-semibold text-zinc-900 mb-4">
              Conclusion
            </h3>
            <p className="text-lg text-zinc-700 leading-relaxed mb-4">
              While it is not possible to simply buy a residence permit without 
              meeting requirements, there are various legitimate ways to obtain one 
              from Top Docs, such as through work, study, or family 
              reunification.
            </p>
            <p className="text-lg text-zinc-700 leading-relaxed">
              If you are interested in living in a foreign country, it is important 
              to research the specific requirements and procedures for obtaining a 
              residence permit, and to be wary of any offers to sell a residence 
              permit without proper documentation, as these are likely to be scams. 
              Our team at Top Docs provides professional guidance and 
              support for legitimate applications.
            </p>
          </CardContent>
        </Card>
      </motion.section>

      {/* Requirements Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="space-y-6"
      >
        <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-semibold">
          Requirements Needed to Obtain Residence Permit
        </motion.h2>
        <Card>
          <CardContent className="pt-6">
            <p className="text-lg text-zinc-700 leading-relaxed mb-6">
              The specific requirements for obtaining a residence permit will vary 
              depending on the country you are interested in living in, as well as 
              the purpose of your stay (such as work, study, or family reunification). 
              Some common requirements that may be necessary include:
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="font-semibold text-zinc-900 mb-3">Proof of Identity</h4>
                <p className="text-zinc-700 mb-3">
                  You will typically need to provide a valid passport or other form 
                  of identification when applying for a residence permit.
                </p>
                <ul className="list-disc space-y-2 pl-6 text-zinc-700">
                  <li>Valid passport (not expired)</li>
                  <li>Birth certificate</li>
                  <li>National ID card (if applicable)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-zinc-900 mb-3">Proof of Sufficient Funds</h4>
                <p className="text-zinc-700 mb-3">
                  Many countries require applicants to show that they have enough 
                  money to support themselves while living in the country.
                </p>
                <ul className="list-disc space-y-2 pl-6 text-zinc-700">
                  <li>Bank statements (last 3-6 months)</li>
                  <li>Proof of employment and income</li>
                  <li>Sponsor letters (if applicable)</li>
                  <li>Financial guarantee documents</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-zinc-900 mb-3">Clean Criminal Record</h4>
                <p className="text-zinc-700 mb-3">
                  Some countries will require you to provide a criminal background 
                  check as part of the residence permit application process.
                </p>
                <ul className="list-disc space-y-2 pl-6 text-zinc-700">
                  <li>Police clearance certificate</li>
                  <li>Criminal record check from home country</li>
                  <li>FBI clearance (for certain countries)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-zinc-900 mb-3">Health Insurance</h4>
                <p className="text-zinc-700 mb-3">
                  Some countries may require you to have health insurance coverage 
                  in order to obtain a residence permit.
                </p>
                <ul className="list-disc space-y-2 pl-6 text-zinc-700">
                  <li>Valid health insurance policy</li>
                  <li>Medical examination results</li>
                  <li>Vaccination records (if required)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-zinc-900 mb-3">Other Documents</h4>
                <p className="text-zinc-700 mb-3">
                  Depending on the country and the purpose of your stay, you may 
                  need to provide additional documents.
                </p>
                <ul className="list-disc space-y-2 pl-6 text-zinc-700">
                  <li>Proof of enrollment in a study program (for student visas)</li>
                  <li>Job offer letter (for work visas)</li>
                  <li>Marriage certificate (for family reunification)</li>
                  <li>Accommodation proof</li>
                  <li>Application forms and fees</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-zinc-900 mb-3">Important Reminders</h4>
                <p className="text-zinc-700 mb-3">
                  It is important to carefully research the specific requirements 
                  for obtaining a residence permit in the country you are interested 
                  in living in.
                </p>
                <ul className="list-disc space-y-2 pl-6 text-zinc-700">
                  <li>Requirements vary by country and visa type</li>
                  <li>Seek assistance from immigration specialists</li>
                  <li>Ensure all documents are current and valid</li>
                  <li>Allow sufficient time for processing</li>
      </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.section>

      {/* Final Conclusion Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="space-y-6"
      >
        <Card className="bg-teal-50 border-teal-200">
          <CardContent className="pt-6">
            <h3 className="text-2xl font-semibold text-zinc-900 mb-4">
              Final Conclusion
            </h3>
            <p className="text-lg text-zinc-700 leading-relaxed">
              Obtaining a residence permit requires meeting certain requirements, 
              which may include proof of identity, proof of sufficient funds, a 
              clean criminal record, and possibly other documents depending on the 
              country and purpose of your stay. To increase your chances of obtaining 
              a residence permit, it is important to carefully research the 
              requirements and be prepared to provide the necessary documents and 
              information. Our team at Top Docs is here to guide you 
              through the process and ensure you have all the necessary documentation.
            </p>
          </CardContent>
        </Card>
      </motion.section>

      {/* Contact Form Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="space-y-6"
      >
        <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-semibold text-center">
          Contact Us
        </motion.h2>
        <p className="text-center text-lg text-zinc-700 max-w-3xl mx-auto">
          Have questions about residence permit applications? Need assistance with 
          the process? Contact our expert team for personalized guidance and support.
        </p>
        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div variants={fadeInUp}>
            <Card>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us how we can help you with your residence permit application..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    {submitted ? "Message Sent!" : "Send Message"}
                  </Button>
                  {submitted && (
                    <p className="text-sm text-teal-600 text-center">
                      Thank you! We&apos;ll get back to you soon.
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Other Ways to Reach Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-zinc-900 mb-2">📧 Email</h4>
                  <a
                    href="mailto:contact@topdocs.com"
                    className="text-teal-600 hover:text-teal-700 transition-colors"
                  >
                    contact@topdocs.com
                  </a>
                  <p className="text-sm text-zinc-600 mt-1">
                    We respond within 24-48 hours
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-900 mb-2">📝 Contact Form</h4>
                  <Link
                    href="/contact"
                    className="text-teal-600 hover:text-teal-700 transition-colors"
                  >
                    Fill out our contact form
                  </Link>
                  <p className="text-sm text-zinc-600 mt-1">
                    Quick and easy way to reach us
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-900 mb-2">📧 Email</h4>
                  <a
                    href="mailto:contact@topdocs.com"
                    className="text-teal-600 hover:text-teal-700 transition-colors"
                  >
                    contact@topdocs.com
                  </a>
                  <p className="text-sm text-zinc-600 mt-1">
                    We respond within 24-48 hours
                  </p>
                </div>
                <div className="pt-4 border-t border-zinc-200">
                  <h4 className="font-semibold text-zinc-900 mb-2">🕐 Business Hours</h4>
                  <p className="text-zinc-700">
                    Our support team is available 24/7 to assist you with any 
                    questions about residence permit applications, requirements, 
                    or the application process.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
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
          Ready to Apply for Your Residence Permit?
        </h2>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          Get started today with our expert guidance. We&apos;re here to help you 
          navigate the application process and ensure you have all the information 
          you need.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/how-to-order">
            <Button
              size="lg"
              className="bg-white text-teal-600 hover:bg-zinc-100 font-semibold"
            >
              Learn How to Order
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              Contact Support
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
              Residence Permits
            </h3>
            <ul className="space-y-1 text-sm text-zinc-600">
              <li>• UK residence permit</li>
              <li>• EU residence permit</li>
              <li>• Greece residence permit</li>
              <li>• Portugal residence permit</li>
              <li>• Spain residence permit</li>
              <li>• Germany residence permit</li>
              <li>• France residence permit</li>
              <li>• Italy residence permit</li>
              <li>• Cyprus residence permit</li>
              <li>• Estonia residence permit</li>
              <li>• Canada residence permit</li>
              <li>• USA residence permit</li>
              <li>• biometric residence permit</li>
              <li>• Permesso di soggiorno</li>
              <li>• Arbeitserlaubnis Deutschland</li>
              <li>• Niederlassungserlaubnis</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>
    </main>
  );
}