import { ComingSoon } from '../components/coming-soon';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <ComingSoon />
      <Link href="/chatbot">
        Ava chatbot
      </Link>
    </>
  );
}