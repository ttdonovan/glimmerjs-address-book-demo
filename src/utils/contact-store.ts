import faker from "faker/locale/en";

import Address from "./address";
import Contact from "./contact";

export default class ContactStore {

  public build(): Contact {
    const address = new Address("", "", "", "", "");
    return new Contact("", "", address);
  }

  public fetch(): Contact[] {
    // fetch a list of contacts from `localStorage` or remote server
    return generateContacts();
  }

  public store(contact: Contact): void {
    // store the contact in `localStorage` or remote server
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
  const address = new Address(
    faker.address.streetAddress(), faker.address.secondaryAddress(),
    faker.address.city(), faker.address.state(), faker.address.zipCode());
  return new Contact(faker.name.firstName(), faker.name.lastName(), address);
}
