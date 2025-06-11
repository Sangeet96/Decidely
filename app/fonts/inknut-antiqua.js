// app/fonts/inknut-antiqua.ts
import { Inknut_Antiqua } from 'next/font/google';

export const inknutAntiqua = Inknut_Antiqua({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-inknut-antiqua',
  display: 'swap',
});
