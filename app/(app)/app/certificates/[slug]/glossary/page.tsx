import { PageHeader, Card } from '@/components/ui/primitives';
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params; return <div><PageHeader title="Glossary" subtitle={`Certificate: ${slug}`}/><Card>glossary component placeholder.</Card></div>}
