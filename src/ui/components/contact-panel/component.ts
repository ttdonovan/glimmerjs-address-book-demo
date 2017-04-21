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
    this.editing = false;
  }
}
