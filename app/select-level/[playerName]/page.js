import Image from "next/image";

import SelectLevelClient from "@/components/client-server/client-components/select-level-client";

export async function generateStaticParams() {
  return [
    { playerName: "missy" },
    { playerName: "muffin" },
    { playerName: "socks" },
    { playerName: "buddy" },
  ];
}

async function SelectLevelPage({ params }) {
  const { playerName } = await params;
  console.log(playerName);

  return (
    <>
      <Image
        src="/bluey-bingo-sitting.png"
        width={128}
        height={200}
        alt="bluey and bingo sitting"
        priority
      />
      {/* level selection container */}
      <div className="text-3xl text-center mt-8 md:text-6xl">
        <p>Select Your Level!</p>
      </div>
      <SelectLevelClient />
    </>
  );
}

export default SelectLevelPage;
