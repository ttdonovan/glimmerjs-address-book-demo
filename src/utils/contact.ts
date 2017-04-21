import { tracked } from "@glimmer/component";

import Address from "./address";

export default class Contact {
  @tracked public firstName: string;
  @tracked public lastName: string;
  @tracked public address: Address;

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
