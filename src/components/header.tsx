"use client";

import { Phone, Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import ChangeLanguageC from "@/components/change-language";
import { Link as IntlLink } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export function Header() {
  const t = useTranslations();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const closeDrawer = () => {
    setDrawerOpen(false);
    setServicesOpen(false);
    setPagesOpen(false);
    setBlogOpen(false);
  };

  return (
    <>
      {/* Main Header */}
      <header
        className="w-full"
        style={{
          backgroundImage: 'url("/backround.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            {/* Logo - yaxshilangan joylashuv */}
            <IntlLink href="/" className="flex items-center gap-2">
              <Image 
                src="/Babyland1.svg" 
                alt="Babyland" 
                width={50} 
                height={50} 
                className="object-contain"
              />
              <span className="text-2xl font-bold text-white tracking-tight drop-shadow-lg">
                Babyland
              </span>
            </IntlLink>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList className="gap-4">
                <NavigationMenuItem>
                  <IntlLink href="/" className="text-sm font-semibold text-white hover:text-white/90 transition-all duration-200 px-3 py-2 rounded-lg hover:bg-white/10 backdrop-blur-sm">
                    {t("common.home")}
                  </IntlLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <IntlLink href="/about" className="text-sm font-semibold text-white hover:text-white/90 transition-all duration-200 px-3 py-2 rounded-lg hover:bg-white/10 backdrop-blur-sm">
                    {t("common.about")}
                  </IntlLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-semibold text-white hover:text-white/90 transition-all duration-200 bg-transparent hover:bg-white/10 backdrop-blur-sm data-[state=open]:bg-white/10 px-3 py-2 rounded-lg">
                    {t("common.services")}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] p-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl border border-white/20">
                      <div className="grid gap-3">
                        <IntlLink
                          href="/services"
                          className="block p-3 rounded-lg hover:bg-primary/10 transition-all duration-200 group"
                        >
                          <div className="font-semibold text-foreground group-hover:text-primary mb-1">
                            {t("common.services")}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {t("header.servicesDescription")}
                          </div>
                        </IntlLink>
                        <IntlLink
                          href="/services/details"
                          className="block p-3 rounded-lg hover:bg-primary/10 transition-all duration-200 group"
                        >
                          <div className="font-semibold text-foreground group-hover:text-primary mb-1">
                            {t("header.serviceDetails")}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {t("header.serviceDetailsDescription")}
                          </div>
                        </IntlLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-semibold text-white hover:text-white/90 transition-all duration-200 bg-transparent hover:bg-white/10 backdrop-blur-sm data-[state=open]:bg-white/10 px-3 py-2 rounded-lg">
                    {t("header.pages")}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] p-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl border border-white/20">
                      <div className="grid gap-3">
                        <IntlLink
                          href="/appointment"
                          className="block p-3 rounded-lg hover:bg-primary/10 transition-all duration-200 group"
                        >
                          <div className="font-semibold text-foreground group-hover:text-primary mb-1">
                            {t("common.appointment")}
                          </div>
                        </IntlLink>
                        <IntlLink
                          href="/doctors"
                          className="block p-3 rounded-lg hover:bg-primary/10 transition-all duration-200 group"
                        >
                          <div className="font-semibold text-foreground group-hover:text-primary mb-1">
                            {t("common.doctors")}
                          </div>
                        </IntlLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-semibold text-white hover:text-white/90 transition-all duration-200 bg-transparent hover:bg-white/10 backdrop-blur-sm data-[state=open]:bg-white/10 px-3 py-2 rounded-lg">
                    {t("common.blog")}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] p-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl border border-white/20">
                      <div className="grid gap-3">
                        <IntlLink
                          href="/blog"
                          className="block p-3 rounded-lg hover:bg-primary/10 transition-all duration-200 group"
                        >
                          <div className="font-semibold text-foreground group-hover:text-primary mb-1">
                            {t("common.blog")}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {t("header.blogDescription")}
                          </div>
                        </IntlLink>
                        <IntlLink
                          href="/blog"
                          className="block p-3 rounded-lg hover:bg-primary/10 transition-all duration-200 group"
                        >
                          <div className="font-semibold text-foreground group-hover:text-primary mb-1">
                            {t("header.news")}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {t("header.newsDescription")}
                          </div>
                        </IntlLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <IntlLink href="/contact" className="text-sm font-semibold text-white hover:text-white/90 transition-all duration-200 px-3 py-2 rounded-lg hover:bg-white/10 backdrop-blur-sm">
                    {t("common.contact")}
                  </IntlLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Right section - yaxshilangan joylashuv */}
            <div className="hidden items-center gap-3 md:flex">
              {/* Language Switcher */}
              <ChangeLanguageC />
              
              {/* Contact Button - yaxshilangan */}
              <div className="flex items-center gap-3 rounded-full px-4 py-2.5 bg-white/10 backdrop-blur-sm shadow-lg border border-white/20 hover:bg-white/20 transition-all duration-200">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/80 shadow-lg">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-white/90 font-medium">
                    {t("header.contactDoctor")}
                  </div>
                  <div className="text-sm font-bold text-white tracking-wide drop-shadow-sm">
                    {t("header.phoneNumber")}
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <Drawer
              direction="left"
              open={drawerOpen}
              onOpenChange={setDrawerOpen}
            >
              <DrawerTrigger asChild>
                <button className="md:hidden text-white hover:text-white/80 transition-colors p-2 rounded-lg hover:bg-white/10 backdrop-blur-sm">
                  <Menu className="h-6 w-6" />
                </button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <div className="flex items-center justify-between">
                    <IntlLink
                      href="/"
                      className="flex items-center gap-2"
                      onClick={closeDrawer}
                    >
                      <Image 
                        src="/Babyland1.svg" 
                        alt="Babyland" 
                        width={40} 
                        height={40} 
                        className="object-contain"
                      />
                      <span className="text-xl font-bold text-foreground tracking-tight">
                        Babyland
                      </span>
                    </IntlLink>
                    <DrawerClose asChild>
                      <button onClick={closeDrawer}>
                        <X className="h-6 w-6 text-gray-500" />
                      </button>
                    </DrawerClose>
                  </div>
                </DrawerHeader>

                {/* Navigation */}
                <nav className="flex-1 p-6">
                  <div className="space-y-4">
                    <IntlLink
                      href="/"
                      className="flex items-center text-lg font-semibold text-primary py-2"
                      onClick={closeDrawer}
                    >
                      {t("common.home")}
                    </IntlLink>
                    <IntlLink
                      href="/about"
                      className="flex items-center text-lg font-semibold text-gray-700 hover:text-primary py-2 transition-colors"
                      onClick={closeDrawer}
                    >
                      {t("common.about")}
                    </IntlLink>

                    {/* Services Dropdown */}
                    <Collapsible
                      open={servicesOpen}
                      onOpenChange={setServicesOpen}
                    >
                      <CollapsibleTrigger className="flex items-center justify-between w-full text-lg font-semibold text-gray-700 hover:text-primary py-2 transition-colors">
                        {t("common.services")}
                        {servicesOpen ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </CollapsibleTrigger>
                      <CollapsibleContent className="space-y-2 ml-4">
                        <IntlLink
                          href="/services"
                          className="block text-base text-gray-600 hover:text-primary py-1 transition-colors"
                          onClick={closeDrawer}
                        >
                          {t("header.allServices")}
                        </IntlLink>
                        <IntlLink
                          href="/services/details"
                          className="block text-base text-gray-600 hover:text-primary py-1 transition-colors"
                          onClick={closeDrawer}
                        >
                          {t("header.serviceDetails")}
                        </IntlLink>
                      </CollapsibleContent>
                    </Collapsible>

                    {/* Pages Dropdown */}
                    <Collapsible open={pagesOpen} onOpenChange={setPagesOpen}>
                      <CollapsibleTrigger className="flex items-center justify-between w-full text-lg font-semibold text-gray-700 hover:text-primary py-2 transition-colors">
                        {t("header.pages")}
                        {pagesOpen ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </CollapsibleTrigger>
                      <CollapsibleContent className="space-y-2 ml-4">
                        <IntlLink
                          href="/appointment"
                          className="block text-base text-gray-600 hover:text-primary py-1 transition-colors"
                          onClick={closeDrawer}
                        >
                          {t("common.appointment")}
                        </IntlLink>
                        <IntlLink
                          href="/doctors"
                          className="block text-base text-gray-600 hover:text-primary py-1 transition-colors"
                          onClick={closeDrawer}
                        >
                          {t("common.doctors")}
                        </IntlLink>
                      </CollapsibleContent>
                    </Collapsible>

                    {/* Blog Dropdown */}
                    <Collapsible open={blogOpen} onOpenChange={setBlogOpen}>
                      <CollapsibleTrigger className="flex items-center justify-between w-full text-lg font-semibold text-gray-700 hover:text-primary py-2 transition-colors">
                        {t("common.blog")}
                        {blogOpen ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </CollapsibleTrigger>
                      <CollapsibleContent className="space-y-2 ml-4">
                        <IntlLink
                          href="/blog"
                          className="block text-base text-gray-600 hover:text-primary py-1 transition-colors"
                          onClick={closeDrawer}
                        >
                          {t("header.blogArticles")}
                        </IntlLink>
                        <IntlLink
                          href="/blog"
                          className="block text-base text-gray-600 hover:text-primary py-1 transition-colors"
                          onClick={closeDrawer}
                        >
                          {t("header.news")}
                        </IntlLink>
                      </CollapsibleContent>
                    </Collapsible>

                    <IntlLink
                      href="/contact"
                      className="flex items-center text-lg font-semibold text-gray-700 hover:text-primary py-2 transition-colors"
                      onClick={closeDrawer}
                    >
                      {t("common.contact")}
                    </IntlLink>
                  </div>
                </nav>

                {/* Footer */}
                <div className="p-6 border-t">
                  {/* Language Switcher for Mobile */}
                  <div className="mb-4 flex items-center justify-center">
                    <ChangeLanguageC />
                  </div>
                  
                  <div className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-primary to-primary/80 p-4 shadow-lg">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-white/90 font-medium">
                        {t("header.contactDoctor")}
                      </div>
                      <div className="text-sm font-bold text-white drop-shadow-sm">
                        {t("header.phoneNumber")}
                      </div>
                    </div>
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </header>
    </>
  );
}