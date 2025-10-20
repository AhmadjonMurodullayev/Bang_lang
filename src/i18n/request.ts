import { getRequestConfig } from "next-intl/server";
import { getUserLocale } from "@/service/get-local";

export default getRequestConfig(async () => {
  const locale = await getUserLocale();

  return {
    locale,
    messages: (await import(`../../public/locales/${locale}/common.json`)).default,
  };
});


