"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { EnIcon } from "@/assets/icons/en-icon";
import { UzIcon } from "@/assets/icons/uz-icon";
import { RuIcon } from "@/assets/icons/ru-icon";
import { useRouter, usePathname } from '@/i18n/routing';
import { useLocale } from 'next-intl';

const languages = [
  { code: "uz", name: "O'zbekcha", icon: UzIcon },
  { code: "ru", name: "Русский", icon: RuIcon },
  { code: "en", name: "English", icon: EnIcon },
];

export default function ChangeLanguageC() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  
  const icon = languages.find((lang) => lang.code === locale)?.icon;
  
  const handleLanguageChange = (lang: string) => {
    router.push(pathname, { locale: lang });
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="flex hover:bg-grayCard/80 items-center py-[14.12px] h-auto gap-2"
          >
            <span className="w-[20px] block h-[15px] flex-shrink-0">
              {icon && React.createElement(icon)}
            </span>
            <span className="font-medium">
              {locale.toLocaleUpperCase()}
            </span>
            <ChevronDownIcon className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[200px]">
          <DropdownMenuLabel>Til tanlash</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {languages.map((lang) => (
            <React.Fragment key={lang.code}>
              <DropdownMenuGroup>
                <DropdownMenuItem className="group cursor-pointer">
                  <span
                    onClick={() => handleLanguageChange(lang.code)}
                    className="flex items-center gap-2"
                  >
                    <span className="w-[20px] block h-[15px] flex-shrink-0">
                      {React.createElement(lang.icon)}
                    </span>
                    <span className="group-hover:text-white">{lang.name}</span>
                  </span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </React.Fragment>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

function ChevronDownIcon(props: { className?: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
