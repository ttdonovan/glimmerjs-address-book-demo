import Component, { tracked } from '@glimmer/component';
import Contact from '../../../../utils/contact';

export default class ContactEdit extends Component {
  args: { contact: Contact };
}
