"use server";

import { cookies } from "next/headers";

export const changeLanguage = async (lang: string) => {
  const cookieStore = await cookies();
  cookieStore.set("NEXT_LOCALE", lang, {
    maxAge: 60 * 60 * 24 * 365 * 10,
    path: "/",
  });
};
