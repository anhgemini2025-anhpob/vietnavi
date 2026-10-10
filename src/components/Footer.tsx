import React from 'react';
import { ArrowUp, ExternalLink, Heart, MapPin, Phone, Mail, Globe, Code2, Cpu, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const GOOGLE_MAPS_LINK = "https://www.google.com/maps/place/i2.32,+River+Park/@10.810246,106.7886395,17z/data=!3m1!4b1!4m6!3m5!1s0x317527e477a11af7:0x58dc05159773f648!8m2!3d10.810246!4d106.7912144!16s%2Fg%2F11spwrshw9?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D";
const GOOGLE_MAPS_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.784534884218!2d106.7886395!3d10.810246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527e477a11af7%3A0x58dc05159773f648!2si2.32%2C%20River%20Park!5e0!3m2!1svi!2svn!4v1710000000000!5m2!1svi!2svn";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#050B14] border-t border-slate-800 text-slate-300 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        
        {/* Top Brand & Slogan Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-14">
          
          {/* Brand Info & Motto */}
          <div className="md:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-3.5 p-2 pr-5 rounded-2xl bg-[#0A192F] border border-cyan-500/30 shadow-md shadow-black/50">
              <img 
                src="/brand/logo.jpg" 
                alt="DUY ANH LAB • digital" 
                className="h-11 w-auto object-contain rounded"
                onError={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.display = 'none';
                }}
              />
              <div className="border-l border-slate-700/60 pl-3.5">
                <div className="text-xs sm:text-sm font-bold text-cyan-300 uppercase tracking-wide">
                  DUY ANH LAB DIGITAL
                </div>
                <div className="text-xs text-slate-400 font-mono">
                  Real-World Software Engineering
                </div>
              </div>
            </div>

            <p className="text-slate-300 max-w-md leading-relaxed text-sm">
              Architecting state-of-the-art web ecosystems, real-world AI software, and deep-domain digital platforms across industrial R&amp;D, B2B enterprise sales, modern parenting, and Vietnamese linguistics for international expatriates.
            </p>

            <div className="text-xs text-amber-300/90 font-mono font-bold tracking-wider">
              "FROM DESIRE → IDEA → REALITY"
            </div>

            <nav className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs pt-1 text-slate-400 font-mono">
              <Link to="/" className="hover:text-cyan-400">Home</Link>
              <Link to="/vietreal" className="hover:text-cyan-400">VIETREAL 360°</Link>
              <Link to="/ecosystem" className="hover:text-cyan-400">13 Country Apps</Link>
              <Link to="/demo" className="hover:text-cyan-400">Acoustic Simulator</Link>
              <Link to="/request" className="hover:text-cyan-400">Enterprise Trial</Link>
            </nav>
          </div>

          {/* Direct Contact & Support Details */}
          <div className="md:col-span-7 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-extrabold text-cyan-300 text-base flex items-center gap-2">
                <Globe className="w-4 h-4 text-cyan-400" />
                <span>Direct Contact &amp; Engineering Headquarters</span>
              </h4>
              <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                Live Support
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <a
                href="https://zalo.me/84908095693"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all flex items-center gap-3 group"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-slate-400 text-[10px] font-mono">Hotline / Zalo:</div>
                  <div className="font-bold text-amber-300 group-hover:text-amber-200">+84 908095693</div>
                </div>
              </a>

              <a
                href="mailto:anhpob@gmail.com"
                className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all flex items-center gap-3 group"
              >
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-slate-400 text-[10px] font-mono">Official Email:</div>
                  <div className="font-bold text-cyan-300 group-hover:text-cyan-200">anhpob@gmail.com</div>
                </div>
              </a>
            </div>

            {/* Embedded Google Map */}
            <div className="pt-2">
              <div className="rounded-xl overflow-hidden border border-slate-800 bg-[#0A192F] shadow-lg shadow-black/50">
                <div className="relative w-full h-36 sm:h-40">
                  <iframe
                    title="Google Map Duy Anh Lab - i2-35 KDC River Park"
                    src={GOOGLE_MAPS_EMBED}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full block"
                  />
                </div>
                <div className="px-3.5 py-2.5 bg-[#06101E] border-t border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs">
                  <span className="text-slate-300 font-medium flex items-center gap-1.5 truncate">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="truncate">i2-35 KDC River Park, Võ Chí Công, P. Phước Long, TPHCM</span>
                  </span>
                  <a
                    href={GOOGLE_MAPS_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-300 hover:text-cyan-200 font-bold flex items-center gap-1 hover:underline ml-auto"
                  >
                    <span>Open in Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* 4 Ecosystem Columns Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-10 border-t border-slate-800/80">
          
          {/* Col 1: Featured Applications */}
          <div className="space-y-3">
            <h4 id="featured" className="font-extrabold text-cyan-300 text-sm tracking-wider uppercase font-mono">
              Featured Apps
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="https://vietreal.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 flex items-center gap-1">
                  <span>VIETREAL 360° Real-World</span>
                  <ExternalLink className="w-3 h-3 text-slate-600" />
                </a>
              </li>
              <li>
                <a href="https://ungdung.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 flex items-center gap-1">
                  <span>Lam Cha Me Parenting Ecosystem</span>
                  <ExternalLink className="w-3 h-3 text-slate-600" />
                </a>
              </li>
              <li>
                <span className="text-slate-300">Sales B2B NBD Battle Card Suite</span>
              </li>
              <li>
                <span className="text-slate-300">Yeast Extract Masterclass App</span>
              </li>
              <li>
                <span className="text-slate-300">F&amp;B Culinary Operations Engine</span>
              </li>
            </ul>
          </div>

          {/* Col 2: Web & AI Ecosystem */}
          <div className="space-y-3">
            <h4 id="apps" className="font-extrabold text-emerald-300 text-sm tracking-wider uppercase font-mono">
              Web &amp; AI Ecosystem
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link to="/ecosystem" className="hover:text-emerald-400">13 Country Native Vietnamese Portals</Link>
              </li>
              <li>
                <span className="text-slate-300">Real-Time Pitch Frequency FFT Graph</span>
              </li>
              <li>
                <span className="text-slate-300">Contextual Relational Pronoun Matrix</span>
              </li>
              <li>
                <span className="text-slate-300">24/7 Expat Street Role-Play AI Tutor</span>
              </li>
              <li>
                <span className="text-slate-300">Lightweight Offline PWA Web Stack</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Specialized Industry Domains (9 Domains / 30+ Apps) */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-amber-300 text-sm tracking-wider uppercase font-mono">
              9 Domains • 30+ Apps
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400 font-mono">
              <li>• B2B Enterprise &amp; Field Sales</li>
              <li>• R&amp;D Food Science &amp; Yeast Bio</li>
              <li>• Child Development (Làm Cha Mẹ)</li>
              <li>• Expat Language &amp; Tone Correction</li>
              <li>• Retail &amp; Culinary Operations</li>
              <li>• Corporate Onboarding &amp; AI Tutors</li>
              <li>• Legal Compliance &amp; Standards</li>
              <li>• Supply Chain &amp; Cross-Border Trade</li>
              <li>• Executive Advisory Solutions</li>
            </ul>
          </div>

          {/* Col 4: Architecture & Tech Stack */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-purple-300 text-sm tracking-wider uppercase font-mono">
              Architecture &amp; Cloud Stack
            </h4>
            <div className="flex flex-wrap gap-1.5 text-[11px] font-mono">
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">Next.js / React 18</span>
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">Tailwind CSS 3.4</span>
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">TypeScript 5</span>
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">Web Audio API</span>
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">Vercel Edge Global</span>
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">Offline PWA Cache</span>
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">Supabase Cloud</span>
            </div>

            <div className="pt-2">
              <a
                href="https://ungdung.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 hover:underline"
              >
                <span>Visit Official Portfolio: ungdung.vercel.app</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-slate-400 flex flex-wrap items-center gap-2">
            <span>© 2026 DUY ANH DIGITAL LAB •</span>
            <a 
              href="https://ungdung.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-amber-400 font-bold hover:underline"
            >
              ungdung.vercel.app
            </a>
            <span>• All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-400 flex items-center gap-1.5">
              Designed for expats thriving in Vietnam <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            </span>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-cyan-500 hover:text-slate-950 text-cyan-300 transition-all border border-slate-700 font-bold cursor-pointer text-xs"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
