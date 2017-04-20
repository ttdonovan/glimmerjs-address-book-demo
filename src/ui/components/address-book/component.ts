import Component, { tracked } from "@glimmer/component";
import Contact from "../../../utils/contact";

declare const faker: any;

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
