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

export default function IDCardPage() {
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
          Professional ID Card Services
        </h1>
        <p className="text-lg md:text-xl text-zinc-700 max-w-3xl mx-auto leading-relaxed">
          Top Docs provides comprehensive guidance for obtaining, renewing, or replacing official ID cards. Our expert team helps you understand requirements, navigate the application process, and ensure your documentation is complete and compliant.
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

      {/* Eligibility Requirements Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="space-y-6"
      >
        <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-semibold">
          Eligibility Requirements
        </motion.h2>
        <Card>
          <CardContent className="pt-6">
            <p className="text-lg text-zinc-700 leading-relaxed mb-6">
              To apply for an official government-issued ID card, you must meet 
              specific eligibility criteria. These requirements vary by jurisdiction 
              but typically include:
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="font-semibold text-zinc-900 mb-3">Age Requirements</h4>
                <p className="text-zinc-700 mb-3">
                  Most jurisdictions require applicants to be at least 16 years old 
                  to obtain an ID card. Some locations may allow younger applicants 
                  with parental consent or guardian approval.
                </p>
                <ul className="list-disc space-y-2 pl-6 text-zinc-700">
                  <li>Minimum age: Typically 16 years</li>
                  <li>Parental consent may be required for minors</li>
                  <li>Age verification through birth certificate</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-zinc-900 mb-3">Residency Requirements</h4>
                <p className="text-zinc-700 mb-3">
                  You must provide proof of residency in the jurisdiction where you 
                  are applying. This typically requires:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-zinc-700">
                  <li>Current residential address</li>
                  <li>Proof of residency (utility bills, lease agreements)</li>
                  <li>Minimum residency period may apply</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-zinc-900 mb-3">Citizenship or Legal Status</h4>
                <p className="text-zinc-700 mb-3">
                  Depending on the jurisdiction, you may need to provide proof of:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-zinc-700">
                  <li>Citizenship (birth certificate, passport)</li>
                  <li>Legal permanent residency</li>
                  <li>Valid visa or immigration status</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-zinc-900 mb-3">Other Legal Criteria</h4>
                <p className="text-zinc-700 mb-3">
                  Additional requirements may include:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-zinc-700">
                  <li>No outstanding warrants or legal issues</li>
                  <li>Valid Social Security number (where applicable)</li>
                  <li>No suspended or revoked identification</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.section>

      {/* Documents Needed Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="space-y-6"
      >
        <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-semibold">
          Documents Needed
        </motion.h2>
        <Card>
          <CardContent className="pt-6">
            <p className="text-lg text-zinc-700 leading-relaxed mb-6">
              When applying for an ID card, you&apos;ll need to provide supporting 
              documents to verify your identity, residency, and eligibility. The exact 
              documents required vary by jurisdiction, but typically include:
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="font-semibold text-zinc-900 mb-3">Proof of Identity</h4>
                <ul className="list-disc space-y-2 pl-6 text-zinc-700">
                  <li>Birth certificate (original or certified copy)</li>
                  <li>Valid passport</li>
                  <li>Certificate of naturalization</li>
                  <li>Previous government-issued ID card</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-zinc-900 mb-3">Proof of Address</h4>
                <ul className="list-disc space-y-2 pl-6 text-zinc-700">
                  <li>Utility bill (electric, water, gas) dated within last 3 months</li>
                  <li>Bank statement or credit card statement</li>
                  <li>Lease agreement or rental contract</li>
                  <li>Mortgage statement or property tax bill</li>
                  <li>Government correspondence with your address</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-zinc-900 mb-3">Photographs</h4>
                <ul className="list-disc space-y-2 pl-6 text-zinc-700">
                  <li>Recent passport-style photos (usually 2 copies)</li>
                  <li>Photos must meet official specifications</li>
                  <li>Plain background, neutral expression</li>
                  <li>No glasses or head coverings (unless for religious reasons)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-zinc-900 mb-3">Additional Documents</h4>
                <ul className="list-disc space-y-2 pl-6 text-zinc-700">
                  <li>Social Security card (where applicable)</li>
                  <li>Marriage certificate (if name changed)</li>
                  <li>Court order (for name changes)</li>
                  <li>Immigration documents (for non-citizens)</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="text-amber-900 font-medium">
                ⚠️ Important: All documents must be original or certified copies. 
                Photocopies are typically not accepted. Ensure all documents are 
                current and not expired.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.section>

      {/* Application Process Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="space-y-6"
      >
        <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-semibold">
          Application Process
        </motion.h2>
        <div className="space-y-6">
          <motion.div variants={fadeInUp}>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold shrink-0">
                    1
                  </div>
                  <CardTitle>Prepare Your Documents</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-700 leading-relaxed">
                  Gather all required documents listed above. Make sure they are 
                  original or certified copies, current, and in good condition. 
                  Double-check that all information matches across documents and 
                  that names are spelled consistently.
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
                  <CardTitle>Choose Application Method</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-zinc-900 mb-2">Online Application</h4>
                    <p className="text-zinc-700 mb-3">
                      Many jurisdictions offer online application services. To apply online:
                    </p>
                    <ul className="list-disc space-y-2 pl-6 text-zinc-700">
                      <li>Visit the official government website</li>
                      <li>Create an account or log in</li>
                      <li>Complete the online application form</li>
                      <li>Upload required documents (scanned copies)</li>
                      <li>Pay the application fee online</li>
                      <li>Schedule an in-person appointment if required</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900 mb-2">In-Person Application</h4>
                    <p className="text-zinc-700 mb-3">
                      To apply at a government office:
                    </p>
                    <ul className="list-disc space-y-2 pl-6 text-zinc-700">
                      <li>Locate the nearest ID card office or DMV</li>
                      <li>Schedule an appointment (recommended)</li>
                      <li>Bring all required documents</li>
                      <li>Complete the application form on-site</li>
                      <li>Have your photo taken</li>
                      <li>Pay the application fee</li>
                    </ul>
                  </div>
                </div>
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
                  <CardTitle>Submit Application</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-700 leading-relaxed mb-4">
                  Submit your completed application along with all required documents. 
                  If applying online, ensure all uploaded documents are clear and 
                  legible. If applying in person, present all original documents 
                  to the clerk for verification.
                </p>
                <p className="text-zinc-700 leading-relaxed">
                  You may receive a temporary ID or receipt while your permanent 
                  ID card is being processed. Keep this document safe as you may 
                  need it for identification purposes.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Fees & Processing Time Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="space-y-6"
      >
        <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-semibold">
          Fees & Processing Time
        </motion.h2>
        <div className="grid gap-6 md:grid-cols-2">
          <motion.div variants={fadeInUp}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Application Fees</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-700 mb-4">
                  ID card fees vary by jurisdiction and applicant type. Typical fees include:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-zinc-700">
                  <li>Standard ID card: $10-$50 (varies by location)</li>
                  <li>Senior citizen discount: Often reduced fees</li>
                  <li>Replacement fee: Usually similar to new application</li>
                  <li>Expedited processing: Additional fee for faster service</li>
                </ul>
                <p className="text-zinc-700 mt-4">
                  Payment methods typically include cash, credit/debit cards, 
                  money orders, or checks. Some locations may accept online payments 
                  for online applications.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Processing Time</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-700 mb-4">
                  Processing times vary depending on the jurisdiction and application 
                  method:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-zinc-700">
                  <li>Standard processing: 2-4 weeks</li>
                  <li>Expedited processing: 1-2 weeks (additional fee)</li>
                  <li>In-person applications: May receive temporary ID immediately</li>
                  <li>Online applications: Typically mailed to your address</li>
                </ul>
                <p className="text-zinc-700 mt-4">
                  You can usually track your application status online using a 
                  reference number provided during application. Contact the issuing 
                  office if you haven&apos;t received your ID card within the 
                  estimated timeframe.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Updates & Renewals Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="space-y-6"
      >
        <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-semibold">
          Updates & Renewals
        </motion.h2>
        <div className="grid gap-6 md:grid-cols-3">
          <motion.div variants={fadeInUp}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Updating Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-700 mb-4">
                  If you need to update information on your ID card (name, address, 
                  etc.), you&apos;ll typically need to:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-zinc-700">
                  <li>Submit a change request form</li>
                  <li>Provide supporting documents</li>
                  <li>Pay an update fee (if applicable)</li>
                  <li>Return your old ID card</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Renewing an Expiring Card</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-700 mb-4">
                  To renew your ID card before it expires:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-zinc-700">
                  <li>Apply 30-60 days before expiration</li>
                  <li>Complete renewal application</li>
                  <li>Provide updated photo if required</li>
                  <li>Pay renewal fee</li>
                  <li>Verify current information</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Replacing Lost/Stolen ID</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-700 mb-4">
                  If your ID card is lost or stolen:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-zinc-700">
                  <li>Report loss/theft to authorities</li>
                  <li>File a police report (if stolen)</li>
                  <li>Complete replacement application</li>
                  <li>Provide proof of identity</li>
                  <li>Pay replacement fee</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Important Notes Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="space-y-6"
      >
        <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-semibold">
          Important Notes
        </motion.h2>
        <div className="grid gap-6 md:grid-cols-2">
          <motion.div variants={fadeInUp}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Security Features</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-700 mb-4">
                  Modern ID cards include various security features to prevent 
                  fraud and counterfeiting:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-zinc-700">
                  <li>Holographic overlays and images</li>
                  <li>Microprinting and fine-line patterns</li>
                  <li>UV-reactive elements</li>
                  <li>Embedded chips (for enhanced security)</li>
                  <li>Tamper-evident materials</li>
                  <li>Unique serial numbers</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Legal Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-700 mb-4">
                  Ensure you comply with all legal requirements:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-zinc-700">
                  <li>Provide accurate information only</li>
                  <li>Use legitimate documents</li>
                  <li>Report changes promptly</li>
                  <li>Keep your ID card secure</li>
                  <li>Do not alter or tamper with the card</li>
                  <li>Report lost/stolen cards immediately</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        <motion.div variants={fadeInUp}>
          <Card className="bg-teal-50 border-teal-200">
            <CardContent className="pt-6">
              <h4 className="font-semibold text-zinc-900 mb-3">
                Tips to Avoid Common Errors
              </h4>
              <ul className="list-disc space-y-2 pl-6 text-zinc-700">
                <li>
                  <strong>Double-check all information:</strong> Ensure names, dates, 
                  and addresses match exactly across all documents
                </li>
                <li>
                  <strong>Use current documents:</strong> All supporting documents 
                  should be recent and not expired
                </li>
                <li>
                  <strong>Follow photo requirements:</strong> Ensure photos meet 
                  official specifications (size, background, expression)
                </li>
                <li>
                  <strong>Complete all fields:</strong> Don&apos;t leave any required 
                  fields blank on the application form
                </li>
                <li>
                  <strong>Bring originals:</strong> Photocopies are typically not 
                  accepted; bring original or certified documents
                </li>
                <li>
                  <strong>Review before submitting:</strong> Carefully review your 
                  application for any errors or omissions before submission
                </li>
      </ul>
            </CardContent>
          </Card>
        </motion.div>
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
          Have questions about ID card applications? Need assistance with the process? 
          Contact our expert team for personalized guidance and support.
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
                      placeholder="Tell us how we can help you..."
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
                    questions about ID card applications, requirements, or the 
                    application process.
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
          Ready to Apply for Your ID Card?
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
            <h3 className="font-semibold text-zinc-900 mb-3">ID Cards</h3>
            <ul className="space-y-1 text-sm text-zinc-600">
              <li>• ID card</li>
              <li>• identity card</li>
              <li>• id card UK</li>
              <li>• identity card UK</li>
              <li>• identity document</li>
              <li>• card application</li>
              <li>• national ID card</li>
              <li>• state ID card</li>
              <li>• identity verification</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>
    </main>
  );
}