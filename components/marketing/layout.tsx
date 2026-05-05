import Link from 'next/link';
import { ReactNode } from 'react';
import { Button } from '@/components/ui/primitives';

export function MarketingShell({children}:{children:ReactNode}) {
  return <div><header className='sticky top-0 z-10 border-b bg-[#faf8f4]/95 backdrop-blur'><div className='mx-auto flex max-w-6xl items-center justify-between p-4'><Link href='/' className='text-2xl font-bold text-slate-900'>FachkundePilot</Link><nav className='hidden gap-6 md:flex text-sm font-medium'><Link href='/certificates'>Zertifikate</Link><Link href='/pricing'>Preise</Link><Link href='/about'>Über uns</Link><Link href='/faq'>FAQ</Link></nav><Button href='/register'>Jetzt starten</Button></div></header>{children}<footer className='mt-12 border-t bg-white'><div className='mx-auto max-w-6xl p-6 text-sm text-slate-600'>© 2026 FachkundePilot GmbH</div></footer></div>
}
