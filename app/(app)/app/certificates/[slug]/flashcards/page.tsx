import { PageHeader, Card } from '@/components/ui/primitives';
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params; return <div><PageHeader title="Flashcards" subtitle={`Certificate: ${slug}`}/><Card>flashcards component placeholder.</Card></div>}
