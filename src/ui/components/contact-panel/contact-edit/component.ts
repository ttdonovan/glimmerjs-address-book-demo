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
    lastName: this.args.contact.lastName,
    addressLine1: this.args.contact.address.line1,
    addressLine2: this.args.contact.address.line2,
    addressCity: this.args.contact.address.city,
    addressState: this.args.contact.address.state,
    addressPostal: this.args.contact.address.postal
  }

  private currentContact: Contact = this.args.contact;
  @tracked private errorMessages: string;

  didUpdate() {
    if (this.args.contact !== this.currentContact) {
      const contact = this.args.contact;

      this.model.firstName = contact.firstName;
      this.model.lastName = contact.lastName;
      this.model.addressLine1 = contact.address.line1;
      this.model.addressLine2 = contact.address.line2;
      this.model.addressCity = contact.address.city;
      this.model.addressState = contact.address.state;
      this.model.addressPostal = contact.address.postal;

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
  get addressLine1(): string {
    return this.model.addressLine1;
  }

  @tracked("model")
  get addressLine2(): string {
    return this.model.addressLine2;
  }

  @tracked("model")
  get addressCity(): string {
    return this.model.addressCity;
  }

  @tracked("model")
  get addressState(): string {
    return this.model.addressState;
  }

  @tracked("model")
  get addressPostal(): string {
    return this.model.addressPostal;
  }

  @tracked("model")
  get stringifiedModel(): string {
    return JSON.stringify(this.model);
  }

  commitSave() {
    if (this.firstName || this.lastName)
      this.args.onSave(this.currentContact, this.model);
    else
      this.errorMessages = "Please enter a first and/or last name.";
  }

  handleEditKeyUp(event): void {
    const name = event.target.name;
    const value = event.target.value.trim();

    this.model[name] = value;
    this.model = this.model;
  }
}
