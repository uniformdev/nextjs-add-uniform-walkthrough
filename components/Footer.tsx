import { ToggleEmbeddedContextDevTools } from "@uniformdev/context-devtools";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto px-8">
        <div className="w-full flex flex-col md:flex-row py-4">
          <p className="text-gray-900 text-right flex-1 leading-8">
            Uniform Context starter for Next.js © {new Date().getFullYear()}
          </p>
        </div>
      </div>
      {process.env.NODE_ENV === "development" ? (
        <ToggleEmbeddedContextDevTools />
      ) : null}
    </footer>
  );
};

export default Footer;
