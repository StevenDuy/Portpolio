"use client";

export function FooterSection() {
  return (
    <footer className="bg-transparent py-12 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center text-sm text-muted/70 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Ho Hoang Duy. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Built with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
