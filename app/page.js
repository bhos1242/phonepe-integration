import Image from "next/image";

import Pay from "./_components/Pay";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Pay />
    </main>
  );
}
