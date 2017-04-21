import Component, { tracked } from "@glimmer/component";

import Contact from "../../../../utils/contact";

export default class ContactEdit extends Component {
  args: {
    contact: Contact
    onSave: (Contact, any) => void;
    onCancel: () => void;
  };

  @tracked private model: any = {
    firstName: this.args.contact.firstName,
    lastName: this.args.contact.lastName
  }

  private currentContact: Contact = this.args.contact;

  didUpdate() {
    if (this.args.contact !== this.currentContact) {
      const contact = this.args.contact;

      this.model.firstName = contact.firstName;
      this.model.lastName = contact.lastName;

      this.currentContact = contact;
      this.model = this.model;
    }
  }

  @tracked("model")
  get firstName(): string {
    return this.model.firstName;
  }

  @tracked("firstName")
  get firstNameLength(): number {
    return this.firstName.length;
  }

  @tracked("model")
  get lastName(): string {
    return this.model.lastName;
  }

  @tracked("lastName")
  get lastNameLength(): number {
    return this.lastName.length;
  }

  @tracked("model")
  get stringifiedModel(): string {
    return JSON.stringify(this.model);
  }

  commitSave() {
    this.args.onSave(this.currentContact, this.model);
  }

  handleEditKeyUp(event): void {
    const name = event.target.name;
    const value = event.target.value.trim();

    this.model[name] = value;
    this.model = this.model;
  }
}
