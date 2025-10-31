// "use client"
// import { Link as IntlLink } from '@/i18n/routing'
// import { Home, ArrowLeft, Search } from "lucide-react"
// import { Button } from "@/components/ui/button"

// export default function NotFound() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
//       <div className="max-w-2xl mx-auto text-center">

//         {/* 404 Icon */}
//         <div className="mb-8">
//           <div className="inline-flex items-center justify-center w-32 h-32 bg-primary rounded-full shadow-xl">
//             <span className="text-6xl font-bold text-white">404</span>
//           </div>
//         </div>

//         {/* Message */}
//         <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//           Sahifa topilmadi
//         </h1>
//         <p className="text-xl text-gray-600 mb-2">
//           Kechirasiz, siz qidirayotgan sahifa mavjud emas.
//         </p>
//         <p className="text-lg text-gray-500 mb-8">
//           URL noto‘g‘ri kiritilgan yoki sahifa o‘chirilgan bo‘lishi mumkin.
//         </p>

//         {/* Action buttons */}
//         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
//           <Button asChild size="lg">
//             <IntlLink href="/" className="flex items-center gap-2">
//               <Home className="h-5 w-5" />
//               Bosh sahifaga qaytish
//             </IntlLink>
//           </Button>

//           <Button variant="outline" size="lg" onClick={() => window.history.back()}>
//             <ArrowLeft className="h-5 w-5 mr-2" />
//             Orqaga qaytish
//           </Button>
//         </div>

//         {/* Useful Links */}
//         <div className="bg-white rounded-xl p-6 shadow-lg border">
//           <div className="flex items-center justify-center mb-4">
//             <Search className="h-6 w-6 text-primary mr-2" />
//             <h3 className="text-lg font-semibold text-gray-900">Sahifani topishga yordam</h3>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
//             <div>
//               <h4 className="font-semibold text-gray-800 mb-2">Asosiy sahifalar:</h4>
//               <ul className="space-y-1 text-gray-600">
//                 <li><IntlLink href="/about" className="hover:text-primary transition-colors">Biz haqimizda</IntlLink></li>
//                 <li><IntlLink href="/services" className="hover:text-primary transition-colors">Xizmatlar</IntlLink></li>
//                 <li><IntlLink href="/appointment" className="hover:text-primary transition-colors">Navbat olish</IntlLink></li>
//                 <li><IntlLink href="/contact" className="hover:text-primary transition-colors">Aloqa</IntlLink></li>
//               </ul>
//             </div>

//             <div>
//               <h4 className="font-semibold text-gray-800 mb-2">Foydali ma'lumotlar:</h4>
//               <ul className="space-y-1 text-gray-600">
//                 <li><IntlLink href="/blog" className="hover:text-primary transition-colors">Blog</IntlLink></li>
//                 <li><IntlLink href="/doctors" className="hover:text-primary transition-colors">Mutaxassislar</IntlLink></li>
//                 <li><IntlLink href="/contact" className="hover:text-primary transition-colors">Qo‘llab-quvvatlash</IntlLink></li>
//                 <li><IntlLink href="/" className="hover:text-primary transition-colors">Bosh sahifa</IntlLink></li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* Contact */}
//         <div className="mt-8 text-center">
//           <p className="text-gray-600 mb-2">
//             Agar muammo davom etsa, biz bilan bog‘laning:
//           </p>
//           <p className="text-primary font-semibold text-lg">
//             📞 +998 (90) 123-45-67
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }
