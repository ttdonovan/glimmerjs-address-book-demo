import Component, { tracked } from "@glimmer/component";
import Contact from "../../../utils/contact";

export default class ContactPanel extends Component {
  public args: {
    contact: Contact
    onNew: () => void;
    onCommit: (Contact, options: any) => void;
  };

  @tracked private editing: boolean = false;

  private newEdit(): void {
    this.editing = true;
    this.args.onNew();
  }

  private beginEdit(): void {
    this.editing = true;
  }

  private abortEdit(): void {
    this.editing = false;
  }

  private commitEdit(contact: Contact, options: any): void {
    this.editing = false;
    this.args.onCommit(contact, options);
  }
}
