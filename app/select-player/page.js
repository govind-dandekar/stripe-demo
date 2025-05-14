import SelectPlayerClient from "@/components/client-server/client-components/select-player-client";

export default function SelectPlayerPage() {
  return (
    <>
      <div className="text-3xl text-center mt-8 md:text-6xl">
        <p>Select Your Character!</p>
      </div>
      <SelectPlayerClient />
    </>
  );
}
