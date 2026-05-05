import Link from 'next/link';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export const Badge = ({children}:{children:ReactNode}) => <span className='rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold'>{children}</span>;
export const Button = ({children,href,variant='primary'}:{children:ReactNode;href?:string;variant?:'primary'|'secondary'|'ghost'}) => {
  const cls = cn('rounded-xl px-4 py-2 text-sm font-semibold',variant==='primary'&&'bg-amber-500 text-white',variant==='secondary'&&'bg-slate-100 text-slate-900',variant==='ghost'&&'border border-slate-200 bg-white');
  return href ? <Link href={href} className={cls}>{children}</Link> : <button className={cls}>{children}</button>;
};
export const Card = ({children,className=''}:{children:ReactNode;className?:string}) => <div className={cn('rounded-2xl border border-slate-200 bg-white p-5 shadow-sm',className)}>{children}</div>;
export const PageHeader = ({title,subtitle}:{title:string;subtitle:string}) => <div className='mb-6'><h1 className='text-3xl font-bold'>{title}</h1><p className='text-slate-600'>{subtitle}</p></div>;
export const StatCard = ({label,value}:{label:string;value:string}) => <Card><p className='text-sm text-slate-500'>{label}</p><p className='text-2xl font-bold'>{value}</p></Card>;
export const EmptyState = ({title,description}:{title:string;description:string}) => <Card className='text-center'><h3 className='font-semibold'>{title}</h3><p className='text-sm text-slate-600'>{description}</p></Card>;
