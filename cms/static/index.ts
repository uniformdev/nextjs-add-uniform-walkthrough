import { ComponentType, Page } from "../../lib/models";

const indexPage: Page = {
  title: "Home",
  slug: "/",
  components: [
    {
      type: ComponentType.Hero,
      title: "Welcome, Stranger!",
      buttonLinkSlug: "/developers",
      buttonText: "Click here",
      description:
        "<p>This is default content shown to every visitor. </p><p>Trigger campaign-based personalization <a href='/?utm_campaign=launch'>now</a>!</p>",
      image:
        "https://images.ctfassets.net/qefyoudbvm9s/1SvhzHGTcZUWO0J92wzBWq/868898caff791fa28b83f3108ff26b91/default.svg",
      enrichments: {
        cat: "1",
        key: "dev",
        str: 50,
      },
    },
    {
      type: ComponentType.RegistrationForm,
      buttonText: "Complete Registration",
      heading: "Register Now!",
      registeredText:
        "Thanks for registering for UniformConf! We'll see you there!",
    },
  ],
};

const developersPage: Page = {
  title: "Developers!",
  components: [
    {
      type: ComponentType.Hero,
      title: "Developer Content",
      buttonLinkSlug: "https://uniform.dev/",
      buttonText: "Developers, developers, developers, developers",
      description: "This page is for developers!",
      image: null,
      enrichments: {
        cat: "1",
        key: "dev",
        str: 50,
      },
    },
  ],
};

const marketersPage: Page = {
  title: "Marketers!",
  components: [
    {
      type: ComponentType.Hero,
      title: "Marketer Content",
      buttonLinkSlug: "https://uniform.dev/",
      buttonText: "Find your audience",
      description: "This content is for marketers!",
      image: null,
      enrichments: {
        cat: "1",
        key: "mktg",
        str: 50,
      },
    },
  ],
};

const registrationPage: Page = {
  title: "Registration",
  components: [
    {
      type: ComponentType.RegistrationForm,
      buttonText: "Complete Registration",
      heading: "Register Now!",
      registeredText:
        "Thanks for registering for UniformConf! We'll see you there!",
    },
  ],
};

export const pages: Record<string, Page> = {
  "/": indexPage,
  "/developers": developersPage,
  "/marketers": marketersPage,
  "/registration": registrationPage,
};

export const getPage = async (
  slug: string | string[] | undefined
): Promise<Page> => {
  const path = getPathFromSlug(slug);
  const pageComponents = pages[path];
  return pageComponents || [];
};

const getPathFromSlug = (slug?: string | string[] | null): string => {
  // home page fallback
  if (!slug) {
    return "/";
  }
  const slugString = Array.isArray(slug) ? slug.join("/") : slug;
  return slugString.startsWith("/") ? slugString : `/${slugString}`;
};
