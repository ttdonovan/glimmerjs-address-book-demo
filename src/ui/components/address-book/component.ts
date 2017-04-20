import Component, { tracked } from "@glimmer/component";
import Contact from '../../../utils/contact';

export default class AddressBook extends Component {
  @tracked contacts = generateContacts();
  @tracked selectedContact: Contact;

  onSelect(contact) {
    this.selectedContact = contact;
  }
}

function generateContacts() {
  return [
    new Contact("John", "Smith"),
    new Contact("Jane", "Doe")
  ];
}
