import Component, { tracked } from "@glimmer/component";

import Contact from "../../../../utils/contact";

export default class ContactEdit extends Component {
  args: { contact: Contact };

  @tracked private model: any = {
    firstName: this.args.contact.firstName,
    lastName: this.args.contact.lastName
  }
  private lastContact: Contact = this.args.contact;

  didUpdate() {
    if (this.args.contact !== this.lastContact) {
      this.model.firstName = this.args.contact.firstName;
      this.model.lastName = this.args.contact.lastName;
      this.lastContact = this.args.contact;
    }
  }

  @tracked("args")
  get firstName(): string {
    return this.model.firstName;
  }

  @tracked("model")
  get firstNameLength(): number {
    return this.model["firstName"].length;
  }

  @tracked("args")
  get lastName(): string {
    return this.model.lastName;
  }

  @tracked("model")
  get lastNameLength(): number {
    return this.model.lastName.length;
  }

  @tracked("model")
  get stringifiedModel(): string {
    // why does this value not get updated from `handleEditKeyUp`?
    return JSON.stringify(this.model);
  }

  handleEditKeyUp(event): void {
    const name = event.target.name;
    const value = event.target.value.trim();

    this.model[name] = value;

    console.log("before:", this.model);
    this.model = this.model;
    console.log("after:", this.model);
  }
}
