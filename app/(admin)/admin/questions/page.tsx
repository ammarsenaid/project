import { PageHeader, Card, EmptyState } from '@/components/ui/primitives';
export default function Page(){return <div><PageHeader title='Manage Questions' subtitle='Admin content management'/><Card>Table placeholder for questions.</Card><div className='mt-4'><EmptyState title='No pending items' description='Admin form placeholder component area.'/></div></div>}
