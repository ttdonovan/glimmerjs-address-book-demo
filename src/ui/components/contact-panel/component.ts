import Component, { tracked } from "@glimmer/component";
import Contact from "../../../utils/contact";

export default class ContactPanel extends Component {
  args: { contact: Contact };

  @tracked editing: boolean = false;

  beginEdit() {
    this.editing = true;
  }

  doneEdit() {
    this.editing = false;
  }
}
