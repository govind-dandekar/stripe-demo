import SubmitButton from "@/components/ui/submit-button";

export default function ReviewsClient({ addReview }) {
  return (
    <form className="mt-6" action={addReview}>
      <SubmitButton>Add Muffin&apos;s Review!</SubmitButton>
    </form>
  );
}
