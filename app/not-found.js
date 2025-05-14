import Link from "next/link";

import SubmitButton from "@/components/ui/submit-button";

function NotFound() {
  return (
    <>
      <h1 className="text-5xl">Sorry! We couldn&apos;t find that page!</h1>
      <SubmitButton>
        <Link href="/">Click Here to Return Home!</Link>
      </SubmitButton>
    </>
  );
}

export default NotFound;
