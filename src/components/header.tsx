"use client";

import { Phone, Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
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

export function Header() {
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
        className="w-full "
        style={{
          backgroundImage: 'url("/backround.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <IntlLink href="/" className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 shadow-lg shadow-primary/25">
                <div className="text-2xl font-bold text-white leading-none">
                  +
                </div>
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                Pediatra
              </span>
            </IntlLink>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList className="gap-6">
                <NavigationMenuItem>
                  <IntlLink href="/" legacyBehavior passHref>
                    <NavigationMenuLink className="text-sm font-semibold text-white hover:text-white/80 transition-colors px-4 py-2">
                      Bosh sahifa
                    </NavigationMenuLink>
                  </IntlLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <IntlLink href="/about" legacyBehavior passHref>
                    <NavigationMenuLink className="text-sm font-semibold text-white hover:text-white/80 transition-colors px-4 py-2">
                      Biz haqimizda
                    </NavigationMenuLink>
                  </IntlLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-semibold text-white hover:text-white/80 bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">
                    Xizmatlar
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] p-4 bg-white rounded-lg shadow-xl">
                      <div className="grid gap-3">
                        <IntlLink
                          href="/services"
                          className="block p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                        >
                          <div className="font-semibold text-foreground group-hover:text-primary mb-1">
                            Xizmatlar
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Barcha xizmatlarimizni ko&apos;ring
                          </div>
                        </IntlLink>
                        <IntlLink
                          href="/services/details"
                          className="block p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                        >
                          <div className="font-semibold text-foreground group-hover:text-primary mb-1">
                            Xizmat tafsilotlari
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Xizmatlarimiz haqida batafsil
                          </div>
                        </IntlLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-semibold text-white hover:text-white/80 bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">
                    Sahifalar
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] p-4 bg-white rounded-lg shadow-xl">
                      <div className="grid gap-3">
                        <IntlLink
                          href="/appointment"
                          className="block p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                        >
                          <div className="font-semibold text-foreground group-hover:text-primary mb-1">
                            Navbat olish
                          </div>
                        </IntlLink>
                        <IntlLink
                          href="/doctors"
                          className="block p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                        >
                          <div className="font-semibold text-foreground group-hover:text-primary mb-1">
                            Shifokorlar
                          </div>
                        </IntlLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-semibold text-white hover:text-white/80 bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">
                    Blog
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] p-4 bg-white rounded-lg shadow-xl">
                      <div className="grid gap-3">
                        <IntlLink
                          href="/blog"
                          className="block p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                        >
                          <div className="font-semibold text-foreground group-hover:text-primary mb-1">
                            Blog
                          </div>
                          <div className="text-sm text-muted-foreground">
                            So&apos;nggi maqolalarimizni o&apos;qing
                          </div>
                        </IntlLink>
                        <IntlLink
                          href="/blog"
                          className="block p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                        >
                          <div className="font-semibold text-foreground group-hover:text-primary mb-1">
                            Yangiliklar
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Yangiliklarimiz bilan tanishing
                          </div>
                        </IntlLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <IntlLink href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink className="text-sm font-semibold text-white hover:text-white/80 transition-colors px-4 py-2">
                      Aloqa
                    </NavigationMenuLink>
                  </IntlLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="hidden items-center gap-3 md:flex">
              {/* Language Switcher */}
              <ChangeLanguageC />
              
              <div className="flex items-center gap-4 rounded-full px-6 py-3.5 shadow-lg shadow-primary/25">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#2AD396] backdrop-blur-sm">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-white/90 font-medium mb-0.5">
                    Shifokor bilan bog&apos;lanish
                  </div>
                  <div className="text-sm font-bold text-white tracking-wide">
                    (+62) 81 414 257
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
                <button className="md:hidden text-white">
                  <Menu className="h-6 w-6" />
                </button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <div className="flex items-center justify-between">
                    <IntlLink
                      href="/"
                      className="flex items-center gap-3"
                      onClick={closeDrawer}
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary/80 shadow-lg shadow-primary/25">
                        <div className="text-xl font-bold text-white leading-none">
                          +
                        </div>
                      </div>
                      <span className="text-xl font-bold text-foreground tracking-tight">
                        Pediatra
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
                  <div className="space-y-6">
                    <IntlLink
                      href="/"
                      className="flex items-center text-lg font-semibold text-primary py-2"
                      onClick={closeDrawer}
                    >
                      Bosh sahifa
                    </IntlLink>
                    <IntlLink
                      href="/about"
                      className="flex items-center text-lg font-semibold text-gray-700 hover:text-primary py-2 transition-colors"
                      onClick={closeDrawer}
                    >
                      Biz haqimizda
                    </IntlLink>

                    {/* Services Dropdown */}
                    <Collapsible
                      open={servicesOpen}
                      onOpenChange={setServicesOpen}
                    >
                      <CollapsibleTrigger className="flex items-center justify-between w-full text-lg font-semibold text-gray-700 hover:text-primary py-2 transition-colors">
                        Xizmatlar
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
                          Barcha xizmatlar
                        </IntlLink>
                        <IntlLink
                          href="/services/details"
                          className="block text-base text-gray-600 hover:text-primary py-1 transition-colors"
                          onClick={closeDrawer}
                        >
                          Xizmat tafsilotlari
                        </IntlLink>
                      </CollapsibleContent>
                    </Collapsible>

                    {/* Pages Dropdown */}
                    <Collapsible open={pagesOpen} onOpenChange={setPagesOpen}>
                      <CollapsibleTrigger className="flex items-center justify-between w-full text-lg font-semibold text-gray-700 hover:text-primary py-2 transition-colors">
                        Sahifalar
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
                          Navbat olish
                        </IntlLink>
                        <IntlLink
                          href="/doctors"
                          className="block text-base text-gray-600 hover:text-primary py-1 transition-colors"
                          onClick={closeDrawer}
                        >
                          Shifokorlar
                        </IntlLink>
                      </CollapsibleContent>
                    </Collapsible>

                    {/* Blog Dropdown */}
                    <Collapsible open={blogOpen} onOpenChange={setBlogOpen}>
                      <CollapsibleTrigger className="flex items-center justify-between w-full text-lg font-semibold text-gray-700 hover:text-primary py-2 transition-colors">
                        Blog
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
                          Blog maqolalari
                        </IntlLink>
                        <IntlLink
                          href="/blog"
                          className="block text-base text-gray-600 hover:text-primary py-1 transition-colors"
                          onClick={closeDrawer}
                        >
                          Yangiliklar
                        </IntlLink>
                      </CollapsibleContent>
                    </Collapsible>

                    <IntlLink
                      href="/contact"
                      className="flex items-center text-lg font-semibold text-gray-700 hover:text-primary py-2 transition-colors"
                      onClick={closeDrawer}
                    >
                      Aloqa
                    </IntlLink>
                  </div>
                </nav>

                {/* Footer */}
                <div className="p-6 border-t">
                  {/* Language Switcher for Mobile */}
                  <div className="mb-4 flex items-center justify-center">
                    <ChangeLanguageC />
                  </div>
                  
                  <div className="flex items-center gap-3 rounded-xl bg-primary p-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-white/90 font-medium">
                        Shifokor bilan bog&apos;lanish
                      </div>
                      <div className="text-sm font-bold text-white">
                        (+62) 81 414 257
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
