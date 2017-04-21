import Component, { tracked } from "@glimmer/component";
import faker from 'faker/locale/en';

import Address from "../../../utils/address";
import Contact from "../../../utils/contact";

export default class AddressBook extends Component {
  @tracked contacts = generateContacts();
  @tracked selectedContact: Contact;

  onSelect(contact) {
    this.selectedContact = contact;
  }
}

function generateContacts(): Contact[] {
  return [
    generateContact(),
    generateContact(),
    generateContact(),
    generateContact(),
    generateContact(),
  ];
}

function generateContact(): Contact {
  const address = new Address(faker.address.streetAddress(), faker.address.secondaryAddress(), faker.address.city(), faker.address.state(), faker.address.zipCode());
  return new Contact(faker.name.firstName(), faker.name.lastName(), address);
}
