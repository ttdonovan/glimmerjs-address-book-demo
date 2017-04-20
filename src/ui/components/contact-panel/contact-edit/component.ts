import Component from "@glimmer/component";
import Contact from "../../../../utils/contact";

export default class ContactEdit extends Component {
  args: { contact: Contact };

  handleEditKeyUp(event) {
    const contact = this.args.contact;

    const name = event.target.name;
    const value = event.target.value.trim();

    contact[name] = value;
  }
}
