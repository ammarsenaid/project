import { certificates } from '@/data/certificates';
import { Badge, Button, Card } from '@/components/ui/primitives';

export default function HomePage(){
  return <main className='mx-auto max-w-6xl space-y-10 p-4 md:p-8'>
    <section className='grid gap-8 lg:grid-cols-2 items-center'>
      <div className='space-y-5'><Badge>Ihr Weg zur Fachkunde – Sicher. Verständlich. Erfolgreich.</Badge><h1 className='text-5xl font-bold leading-tight'>Bestehe deine Fachkundeprüfung <span className='text-amber-600'>mit Klarheit & Sicherheit.</span></h1><p className='text-slate-600'>One platform for German certificates. Learn official German exam topics with simple multilingual explanations, flashcards, mock exams, and progress tracking.</p><div className='flex gap-3'><Button href='/register'>Kostenlos starten</Button><Button href='/certificates' variant='ghost'>Mehr erfahren</Button></div><div className='flex flex-wrap gap-2 text-sm'><Badge>Deutsch (Prüfungssprache)</Badge><Badge>AR-Erklärungen</Badge><Badge>EN-Erklärungen</Badge><Badge>TR-Erklärungen</Badge></div></div>
      <Card className='h-80 bg-gradient-to-br from-slate-900 to-blue-900 text-white'><p className='text-xl font-semibold'>Dashboard Preview</p></Card>
    </section>
    <section className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>{certificates.slice(0,6).map(c=><Card key={c.slug}><h3 className='font-semibold'>{c.title}</h3><p className='text-sm text-slate-600'>{c.shortDescription}</p></Card>)}</section>
  </main>
}
