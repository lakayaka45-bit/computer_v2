const SingleReview = ({ review }: { review?: any }) => {
  return <div>{review?.comment}</div>;
};

export default SingleReview;
