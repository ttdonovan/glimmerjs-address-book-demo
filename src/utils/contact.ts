import { tracked } from "@glimmer/component";

import Address from "./address";

export default class Contact {
  @tracked firstName: string;
  @tracked lastName: string;
  @tracked address: Address;

  constructor(firstName: string, lastName: string, address: Address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
  }

  @tracked("firstName", "lastName")
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
