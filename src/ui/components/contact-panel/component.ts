import Component, { tracked } from "@glimmer/component";
import Contact from "../../../utils/contact";

export default class ContactPanel extends Component {
  args: { contact: Contact };

  @tracked private editing: boolean = false;

  beginEdit(): void {
    this.editing = true;
  }

  abortEdit(): void {
    this.editing = false;
  }

  commitEdit(contact: Contact, options: any): void {
    contact.firstName = options.firstName;
    contact.lastName = options.lastName;
    contact.address.line1 = options.addressLine1;
    contact.address.line2 = options.addressLine2;
    contact.address.city = options.addressCity;
    contact.address.state = options.addressState;
    contact.address.postal = options.addressPostal;

    this.editing = false;
  }
}
