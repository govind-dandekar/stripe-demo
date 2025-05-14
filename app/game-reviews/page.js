import ReviewsClient from "@/components/client-server/client-components/reviews-client";

import { addReview } from "@/lib/review-action";

export const revalidate = 15;

export default async function Page() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/reviews`);
  const reviews = await res.json();

  return (
    <>
      <ul className="text-3xl space-y-4">
        {reviews.map((review) => {
          return (
            <li key={review.id}>
              {review.text} {"   -"} {review.reviewerName}
            </li>
          );
        })}
      </ul>
      <ReviewsClient addReview={addReview} />
    </>
  );
}
