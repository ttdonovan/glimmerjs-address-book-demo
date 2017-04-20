import Component, { tracked } from "@glimmer/component";

import Contact from "../../../../utils/contact";

export default class ContactEdit extends Component {
  args: { contact: Contact };

  @tracked private model: any = {
    firstName: "",
    lastName: ""
  }

  @tracked("args")
  get firstName(): string {
    this.model.firstName = this.args["contact"].firstName
    return this.model.firstName;
  }

  @tracked("model")
  get firstNameLength(): number {
    return this.model["firstName"].length;
  }

  @tracked("args")
  get lastName(): string {
    this.model.lastName = this.args["contact"].lastName
    return this.model.lastName;
  }

  @tracked("model")
  get lastNameLength(): number {
    return this.model.lastName.length;
  }

  @tracked ("model")
  get stringifiedModel(): string {
    // why does this value not get updated from `handleEditKeyUp`?
    return JSON.stringify(this.model);
  }

  handleEditKeyUp(event): void {
    const name = event.target.name;
    const value = event.target.value.trim();

    this.model[name] = value;

    console.log("before:", this.model);
    this.model = {...this.model};
    console.log("after:", this.model);
  }
}
