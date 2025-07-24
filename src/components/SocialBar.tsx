// Create a new file: src/components/SocialBar.tsx

import { Linkedin } from "lucide-react";

const SocialBar = () => (
  <div className="fixed left-6 top-1/3 z-50">
    <div className="flex flex-col space-y-4 items-center">
      {/* LinkedIn Icon Box */}
      <a
        href="https://www.linkedin.com/in/numan-the-dev/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="bg-card border border-border rounded-xl p-3 shadow-lg flex items-center justify-center hover:bg-blue-50 transition-colors duration-200"
      >
        <Linkedin className="w-6 h-6 text-[#0077b5]" />
      </a>
      {/* GitHub Icon Box */}
      <a
        href="https://github.com/numan-the-dev"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="bg-card border border-border rounded-xl p-3 shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M12 2C6.477 2 2 6.484 2 12.012c0 4.418 2.867 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.099 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.579.688.481C19.135 20.175 22 16.427 22 12.012 22 6.484 17.523 2 12 2z" />
        </svg>
      </a>
    </div>
  </div>
);

export default SocialBar;
