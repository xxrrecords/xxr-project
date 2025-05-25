export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#0D0D0D] text-white text-sm py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        
        {/* Left Text */}
        <div className="w-full md:w-auto">
          <span>© {currentYear} KiraSound. All rights reserved. Proudly part of the XXR Records Group.</span>
        </div>

        {/* Center Logo */}
        <div className="w-full md:w-auto flex justify-center"></div>

        {/* Right Text */}
        <div className="w-full md:w-auto">
          <img
            src="src/assets/Logos/KiraSoundLogo.png"
            alt="KiraSound Logo"
            className="h-[80px] w-auto"
          />
        </div>

      </div>
    </footer>
  );
}
