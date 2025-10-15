"use client"

import Link from "next/link"
import { Phone, Menu, X, ChevronDown } from "lucide-react"
import { useState } from "react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Main Header */}
      <header className="w-full " style={{
        background:  "linear-gradient(135deg, #548bff 0%, #3b82f6 50%, #60a5fa 100%)",
      }}>
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 shadow-lg shadow-primary/25">
                <div className="text-2xl font-bold text-white leading-none">+</div>
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">Pediatra</span>
            </Link>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList className="gap-6">
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className="text-sm font-semibold text-white hover:text-white/80 transition-colors px-4 py-2">
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink className="text-sm font-semibold text-white hover:text-white/80 transition-colors px-4 py-2">
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-semibold text-white hover:text-white/80 bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] p-4 bg-white rounded-lg shadow-xl">
                      <div className="grid gap-3">
                        <Link 
                          href="/services" 
                          className="block p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                        >
                          <div className="font-semibold text-foreground group-hover:text-primary mb-1">Services</div>
                          <div className="text-sm text-muted-foreground">View all our services</div>
                        </Link>
                        <Link 
                          href="/services" 
                          className="block p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                        >
                          <div className="font-semibold text-foreground group-hover:text-primary mb-1">Service Details</div>
                          <div className="text-sm text-muted-foreground">Learn more about our services</div>
                        </Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-semibold text-white hover:text-white/80 bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">
                    Pages
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] p-4 bg-white rounded-lg shadow-xl">
                      <div className="grid gap-3">
                        <Link 
                          href="/about" 
                          className="block p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                        >
                          <div className="font-semibold text-foreground group-hover:text-primary mb-1">About Us</div>
                          <div className="text-sm text-muted-foreground">Learn about our team</div>
                        </Link>
                        <Link 
                          href="/contact" 
                          className="block p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                        >
                          <div className="font-semibold text-foreground group-hover:text-primary mb-1">Contact</div>
                          <div className="text-sm text-muted-foreground">Get in touch with us</div>
                        </Link>
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
                        <Link 
                          href="/blog" 
                          className="block p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                        >
                          <div className="font-semibold text-foreground group-hover:text-primary mb-1">Blog</div>
                          <div className="text-sm text-muted-foreground">Read our latest articles</div>
                        </Link>
                        <Link 
                          href="/blog" 
                          className="block p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                        >
                          <div className="font-semibold text-foreground group-hover:text-primary mb-1">News</div>
                          <div className="text-sm text-muted-foreground">Stay updated with our news</div>
                        </Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink className="text-sm font-semibold text-white hover:text-white/80 transition-colors px-4 py-2">
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="hidden items-center gap-3 md:flex">
              <div className="flex items-center gap-4 rounded-full px-6 py-3.5 shadow-lg shadow-primary/25">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#2AD396] backdrop-blur-sm">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-white/90 font-medium mb-0.5">Contact a Doctor</div>
                  <div className="text-sm font-bold text-white tracking-wide">(+62) 81 414 257</div>
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50" 
            onClick={() => setMobileMenuOpen(false)}
          ></div>
          
          {/* Drawer */}
          <div className="fixed left-0 top-0 h-full w-80 bg-white shadow-xl">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b">
                <Link href="/" className="flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary/80 shadow-lg shadow-primary/25">
                    <div className="text-xl font-bold text-white leading-none">+</div>
                  </div>
                  <span className="text-xl font-bold text-foreground tracking-tight">Pediatra</span>
                </Link>
                <button onClick={() => setMobileMenuOpen(false)}>
                  <X className="h-6 w-6 text-gray-500" />
                </button>
              </div>

              {/* Navigation */}
              <nav className="flex-1 p-6">
                <div className="space-y-6">
                  <Link 
                    href="/" 
                    className="flex items-center text-lg font-semibold text-primary py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link 
                    href="/about" 
                    className="flex items-center text-lg font-semibold text-gray-700 hover:text-primary py-2 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link 
                    href="/services" 
                    className="flex items-center justify-between text-lg font-semibold text-gray-700 hover:text-primary py-2 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Services
                    <ChevronDown className="h-4 w-4" />
                  </Link>
                  <Link 
                    href="/blog" 
                    className="flex items-center justify-between text-lg font-semibold text-gray-700 hover:text-primary py-2 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Pages
                    <ChevronDown className="h-4 w-4" />
                  </Link>
                  <Link 
                    href="/blog" 
                    className="flex items-center justify-between text-lg font-semibold text-gray-700 hover:text-primary py-2 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Blog
                    <ChevronDown className="h-4 w-4" />
                  </Link>
                  <Link 
                    href="/contact" 
                    className="flex items-center text-lg font-semibold text-gray-700 hover:text-primary py-2 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </div>
              </nav>

              {/* Footer */}
              <div className="p-6 border-t">
                <div className="flex items-center gap-3 rounded-xl bg-primary p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-white/90 font-medium">Contact a Doctor</div>
                    <div className="text-sm font-bold text-white">(+62) 81 414 257</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}