const socials = [
  {
    src: "/assets/socials/github.svg",
    href: "https://github.com/IEMDomain04",
    alt: "GitHub",
  },

  {
    src: "/assets/socials/linkedin.svg",
    href: "https://www.linkedin.com/in/emman-manduriaga0044/",
    alt: "LinkedIn",
  },

  {
    src: "/assets/socials/facebook.svg",
    href: "https://www.facebook.com/emman.manduriaga.7",
    alt: "Facebook",
  },

  {
    src: "/assets/socials/notion.svg",
    href: "https://iememman.notion.site/",
    alt: "Notion",
  },
];

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="flex flex-col md:flex-row justify-around items-center">
        <div className="text-center space-y-5 mb-4 md:text-left md:mb-0">
          <p>Created by Emman</p>

          {/* Social Media Icons */}
          <div className="flex justify-around md:justify-start">
            {socials.map((social, index) => (
              <a key={index} href={social.href} className="socials-icons mr-10">
                <img src={social.src} alt={social.alt} width={25} height={25} />
              </a>
            ))}
          </div>

          <p>&copy; 2025. All rights reserved.</p>
        </div>

        <div className="text-center space-y-3 md:text-right">
          <p className="text-gray-400">Built for learning and development</p>
          <p className="text-gray-400">YU-GI-OH! Inspired.</p>
        </div>
      </div>

      <div className="w-full my-10 flex justify-center items-center">
        <form
          action="mailto:emmanmanduriaga@gmail.com"
          method="POST"
          encType="text/plain"
          className="flex flex-col gap-3 w-80 mt-10 justify-center"
        >
          <input
            type="email"
            name="email"
            required
            placeholder="Your email"
            className="px-4 py-2 rounded bg-gray-700 text-white border border-gray-500"
          />
          <textarea
            name="message"
            required
            placeholder="Send feedback. hehehe"
            className="px-4 py-2 rounded bg-gray-700 text-white border border-gray-500 h-24 resize-none"
          />
          <button
            type="submit"
            className="bg-purple-700 hover:bg-purple-800 py-2 rounded font-semibold"
          >
            Send via Email
          </button>
        </form>
      </div>
    </footer>
  );
}

export default Footer;
