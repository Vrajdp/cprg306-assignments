import Link from 'next/link';

const AssignmentLink = ({ href, title }) => (
  <li className="p-4 border rounded shadow-sm mb-2">
    <Link href={href} className="text-xl text-blue-500 hover:underline">
      {title}
    </Link>
  </li>
);

export default function HomePage() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">CPRG 306: Web Development 2 - Assignments</h1>
      <ul className="list-none">
        <AssignmentLink href="/week-2" title="Week 2 Page" />
        <AssignmentLink href="/week-3" title="Week 3 Page" />
        <AssignmentLink href="/week-4" title="Week 4 Page" />
        <AssignmentLink href="/week-5" title="Week 5 Page" />
        <AssignmentLink href="/week-6" title="Week 6 Page" />
      </ul>
    </main>
  );
}
