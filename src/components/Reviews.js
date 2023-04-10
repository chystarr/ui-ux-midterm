import ExternalRedirect from './ExternalRedirect.js';

function Reviews({ theme }) {
  const headerText = "Reviews";
  const bodyText = "NYC Frog Clinic provides critically acclaimed frog medical care. In order to make it easier to read reviews of our practice, or leave one summarizing your own experience with us, we've partnered with FakeReviews.com.";
  const disclaimerText = "You will be redirected to an external review service.";
  const buttonText = "Reviews";

  return (
    <div>
      <ExternalRedirect headerText={headerText} bodyText={bodyText} disclaimerText={disclaimerText} buttonText={buttonText} theme={theme} />
    </div>
  );  
}
  
export default Reviews;