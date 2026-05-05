import { PageHeader, Card } from '@/components/ui/primitives';
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params; return <main className='mx-auto max-w-4xl p-6'><PageHeader title={`Blog: ${slug}`} subtitle='Artikel Platzhalter'/><Card>Blog article content placeholder.</Card></main>}
