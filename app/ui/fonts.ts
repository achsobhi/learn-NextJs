import { Inter,Lusitana} from 'next/font/google';
 
// دور هذا الكود هو استدعاء خطوط Inter و Lusitana من مكتبة next/font/google واستخدامها في المشروع
export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({ subsets: ['latin'], weight: ['400', '700'] });