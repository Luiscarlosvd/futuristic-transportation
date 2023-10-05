import { Application } from '@hotwired/stimulus';
import { Alert } from 'tailwindcss-stimulus-components';

const application = Application.start();

// Configure Stimulus development experience
application.debug = false;
window.Stimulus = application;

application.register('alert', Alert);

export default { application };
