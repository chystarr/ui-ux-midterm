import ExternalRedirect from './ExternalRedirect.js';

function Appointments({ theme }) {
  const headerText = "Appointments";
  const bodyText = "We offer a variety of appointment types at different times, both within and outside of normal business hours, in order to accomodate our clients' busy schedules. To make viewing our current openings and scheduling an appointment easier, we've partnered with FakeAppointments.com.";
  const disclaimerText = "You will be redirected to an external scheduling service.";
  const buttonText = "Appointments";

  return (
    <div>
      <ExternalRedirect headerText={headerText} bodyText={bodyText} disclaimerText={disclaimerText} buttonText={buttonText} theme={theme} />
    </div>
  );
}
  
export default Appointments;