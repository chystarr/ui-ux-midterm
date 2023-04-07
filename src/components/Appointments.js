import ExternalRedirect from './ExternalRedirect.js';

function Appointments() {
    return (
      <div>
        <p>this will navigate to an external site where patients can request appointments. You
        should make it clear to a user of the site that this is the purpose of this part of the
        page (the button that links to the external site should be emphasized and its action
        clear to the user)</p>
        <ExternalRedirect />
      </div>
    ) ;
  }
  
  export default Appointments;