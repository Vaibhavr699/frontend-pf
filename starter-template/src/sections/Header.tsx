export const Header = () => {
  return (
    <header className="fixed top-3 left-1/2 -translate-x-1/2 w-full flex justify-center z-10">
      <nav className="flex gap-1 p-1 border border-white/15 rounded-full bg-white/10 backdrop-blur-md shadow-lg transition duration-300">
        {["Home", "Project", "About", "Contact"].map((item, index) => (
          <a
            key={index}
            href={item === "Contact" ? "mailto:vaibhavr699@gmail.com" : `#${item.toLowerCase()}`}
            className={`nav-item ${
              item === "Contact"
                ? "bg-white text-gray-900 hover:bg-white/80 hover:text-gray-900"
                : ""
            }`}
            aria-label={item}
          >
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
};
