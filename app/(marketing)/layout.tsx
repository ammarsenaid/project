import { ReactNode } from 'react';
import { MarketingShell } from '@/components/marketing/layout';
export default function Layout({children}:{children:ReactNode}) { return <MarketingShell>{children}</MarketingShell>; }
