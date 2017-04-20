import { tracked } from "@glimmer/component";

export default class Contact {
  @tracked firstName: string;
  @tracked lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  @tracked("firstName", "lastName")
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
