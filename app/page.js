import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">CPRG 306: Web Development 2 - Assignments</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <AssignmentLink href="/week-2" title="Week 2 Page" />
        <AssignmentLink href="/week-3" title="Week 3 Page" />
        <AssignmentLink href="/week-4" title="Week 4 Page" />
      </div>
    </main>
  );
}


function AssignmentLink({ href, title }) {
  return (
    <Link href={href}>
      <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block cursor-pointer">
        {title}
      </div>
    </Link>
  );
}
