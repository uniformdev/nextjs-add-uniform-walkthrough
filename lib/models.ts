export enum ComponentType {
  RegistrationForm = "registrationform",
  Hero = "hero",
}

export type PageComponentType = HeroData | RegistrationFormData;

export type BaseHeroData = {
  /** Title */
  title: string;

  /** Description */
  description: string;

  /** Button Text */
  buttonText: string;

  /** image */
  image: string | null;

  /** Button Link Slug */
  buttonLinkSlug: string;

  enrichments?: any;
};

export type RegistrationFormData = {
  type: ComponentType.RegistrationForm;

  /** Heading */
  heading: string;

  /** ButtonText */
  buttonText: string;

  /** Registered Text */
  registeredText: string;
};

export type HeroData = BaseHeroData & {
  type: ComponentType.Hero;
};

export type Page = {
  /** Title */
  title?: string;

  /** Slug */
  slug?: string;

  /** Components */
  components: PageComponentType[];
};
