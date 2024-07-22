import Link from "next/link";
import HeaderPage from "@/Components/header";

export default function Home() {
  return (
    <main>
   <HeaderPage/>
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p><Link href="/about"> About us</Link></p>
    </main>
  );
}