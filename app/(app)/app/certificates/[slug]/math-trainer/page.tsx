import { PageHeader, Card } from '@/components/ui/primitives';
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params; return <div><PageHeader title="Math Trainer" subtitle={`Certificate: ${slug}`}/><Card>math-trainer component placeholder.</Card></div>}
