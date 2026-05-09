"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, FileText, X, Eye } from "lucide-react";
import { GithubIcon } from "@/components/icons";
const MapComponent = dynamic(() => import("./map"), { ssr: false });

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);



export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [showCVActions, setShowCVActions] = useState(false);
  const [selectedPDF, setSelectedPDF] = useState<string | null>(null);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("0833813414");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };


  return (
    <section id="contact" className="py-24">
      <div className="container px-4 md:px-6 mx-auto max-w-4xl">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Get In Touch</h2>
          <div className="w-12 h-1 bg-secondary rounded-full"></div>
          <p className="text-muted max-w-2xl mt-4">
            Currently available for new opportunities. Feel free to reach out for collaborations or just a friendly hello.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Card className="border-border/50 bg-card/50 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                {/* Contact Info */}
                <div className="p-8 md:p-12 space-y-8 bg-card/40">
                  <h3 className="text-2xl font-bold">Contact Information</h3>

                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-primary/10 text-primary rounded-full border border-primary/20">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted mb-1">Phone/Zalo</p>
                        <button onClick={handleCopyPhone} className="text-foreground hover:text-primary transition-colors font-medium cursor-pointer">
                          {copied ? "Copied!" : "+84-833-813-414"}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-blue-500/10 text-blue-500 rounded-full border border-blue-500/20">
                        <FacebookIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted mb-1">Facebook</p>
                        <a href="https://www.facebook.com/duy.hohoang.319" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-blue-500 transition-colors font-medium">
                          Ho Hoang Duy
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-secondary/10 text-secondary rounded-full border border-secondary/20">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted mb-1">Email</p>
                        <a href="mailto:duyh030774@gmail.com" className="text-foreground hover:text-secondary transition-colors font-medium break-all">
                          duyh030774@gmail.com
                        </a>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Actions */}
                <div className="p-8 md:p-12 flex flex-col justify-center space-y-6 bg-background/30">
                  <h3 className="text-2xl font-bold">Connect Online</h3>
                  <p className="text-muted mb-4">
                    Find my open-source projects on GitHub or download my resume for more details.
                  </p>

                  <div className="space-y-4">
                    <Button size="lg" className="w-full justify-start space-x-3" asChild>
                      <a href="https://github.com/StevenDuy" target="_blank" rel="noopener noreferrer">
                        <GithubIcon className="w-5 h-5" />
                        <span>GitHub Profile</span>
                      </a>
                    </Button>

                    {showCVActions ? (
                      <div className="flex items-center gap-2 w-full animate-in fade-in slide-in-from-top-2">
                        <div className="grid grid-cols-2 gap-2 flex-1">
                          <Button size="lg" variant="outline" className="w-full" onClick={() => setSelectedPDF("/Hồ_Hoàng_Duy_Sơ_Yếu_Lý_Lịch.pdf")}>
                            Vietnamese
                          </Button>
                          <Button size="lg" variant="outline" className="w-full" onClick={() => setSelectedPDF("/BTEC_FPT_Student_Intership-CV_Resume.pdf")}>
                            English
                          </Button>
                        </div>
                        <Button size="icon" variant="ghost" className="h-11 w-11 shrink-0" onClick={() => setShowCVActions(false)}>
                          <X className="w-5 h-5" />
                        </Button>
                      </div>
                    ) : (
                      <Button size="lg" variant="outline" className="w-full justify-start space-x-3" onClick={() => setShowCVActions(true)}>
                        <Eye className="w-5 h-5" />
                        <span>View CV</span>
                      </Button>
                    )}
                  </div>
                </div>
              </div>

              {/* Map Section */}
              <MapComponent />
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* PDF Viewer Modal */}
      {selectedPDF && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-background/80 backdrop-blur-sm" onClick={() => setSelectedPDF(null)}>
          <div className="relative w-full max-w-5xl h-[85vh] bg-card border border-border shadow-2xl rounded-lg overflow-hidden flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center p-4 border-b border-border bg-card/50">
              <h3 className="font-mono text-sm font-bold tracking-wider">RESUME VIEWER</h3>
              <button onClick={() => setSelectedPDF(null)} className="p-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 w-full relative bg-black/20">
              <iframe src={`${selectedPDF}#view=FitH`} className="w-full h-full border-none" title="PDF Viewer" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
