// pages/index.js (or index.tsx if TypeScript)
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-4">CPRG 306: Web Development 2 - Assignments</h1>
      <p className="mb-4">
        Navigate to <Link href="/week-2"><a className="text-blue-500 hover:underline">Week 2 Page</a></Link> to see your assignment.
      </p>
      <p className="mb-4">
        Navigate to <Link href="/week-3"><a className="text-blue-500 hover:underline">Week 3 Page</a></Link> to see your assignment.
      </p>
      <p className="mb-4">
        Navigate to <Link href="/week-4"><a className="text-blue-500 hover:underline">Week 4 Page</a></Link> to see your assignment.
      </p>
    </main>
  );
}
