import Component, { tracked } from "@glimmer/component";

import Contact from "../../../../utils/contact";

export default class ContactEdit extends Component {
  args: { contact: Contact };

  @tracked model: any = {
    firstName: "",
    lastName: ""
  };

  @tracked("args")
  get firstName() {
    this.model.firstName = this.args["contact"].firstName
    return this.model.firstName;
  }

  @tracked("model")
  get firstNameLength() {
    return this.model.firstName.length;
  }

  @tracked("args")
  get lastName() {
    this.model.lastName = this.args["contact"].lastName
    return this.model.lastName;
  }

  @tracked("model")
  get lastNameLength() {
    return this.model.lastName.length;
  }

  handleEditKeyUp(event): void {
    const name = event.target.name;
    const value = event.target.value.trim();

    this.model[name] = value;
    this.model = {...this.model};
  }
}
