export type Locale = (typeof locales)[number];

export const locales = ['uz', 'ru'] as const;
export const defaultLocale: Locale = 'uz';