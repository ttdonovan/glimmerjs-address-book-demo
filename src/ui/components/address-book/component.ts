import Component, { tracked } from "@glimmer/component";
import faker from 'faker/locale/en';

import Contact from "../../../utils/contact";

export default class AddressBook extends Component {
  @tracked contacts = generateContacts();
  @tracked selectedContact: Contact;

  onSelect(contact) {
    this.selectedContact = contact;
  }
}

function generateContacts() {
  return [
    new Contact(faker.name.firstName(), faker.name.lastName()),
    new Contact(faker.name.firstName(), faker.name.lastName()),
    new Contact(faker.name.firstName(), faker.name.lastName()),
    new Contact(faker.name.firstName(), faker.name.lastName()),
  ];
}
