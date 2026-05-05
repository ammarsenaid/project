import { PageHeader, Card } from '@/components/ui/primitives';
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params; return <div><PageHeader title='Mock-exams' subtitle={`Certificate: ${slug}`}/><Card>mock-exams component placeholder.</Card></div>}
