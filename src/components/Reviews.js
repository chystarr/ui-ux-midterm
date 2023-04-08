import ExternalRedirect from './ExternalRedirect.js';

function Reviews() {
  const headerText = "Reviews";
  const bodyText = "Stuff about reviews. Stuff about reviews. Stuff about reviews. Stuff about reviews.";
  const disclaimerText = "You will be redirected to an external service that we use for reviews.";
  const buttonText = "Reviews";

  return (
    <div>
      <p>Similar to the appointment requests, this should be providing a link to an external
      site (or sites) where the practice has reviews.</p>
      <ExternalRedirect headerText={headerText} bodyText={bodyText} disclaimerText={disclaimerText} buttonText={buttonText} />
    </div>
  );  
}
  
export default Reviews;