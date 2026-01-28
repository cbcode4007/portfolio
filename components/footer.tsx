import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-zinc-400 p-4 fixed bottom-0 w-full select-none pointer-events-none">
      <div className="mx-auto flex items-center justify-center p-4 gap-4">
        <Link target="_blank" href="https://github.com/cbcode4007" className="flex items-center gap-2 pointer-events-auto">
          <Image
            src="/git.png"
            alt="GitHub Logo"
            width={32}
            height={32}
            className="invert object-contain transition-all duration-300 ease-out hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]"            
          />
        </Link>
        <Link target="_blank" href="https://www.linkedin.com/in/colinbcode/" className="flex items-center gap-2 pointer-events-auto">
          <Image
            src="/linkedin-icon-1-logo-svg-vector.svg"
            alt="LinkedIn Logo"
            width={32}
            height={32}
            className="invert object-contain transition-all duration-300 ease-out hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]"            
          />
        </Link>
      </div>  
      <div className="container mx-auto text-center">        
        <p>&copy; {new Date().getFullYear()} Colin Bond</p>
      </div>
    </footer>
  );
};

export default Footer;
