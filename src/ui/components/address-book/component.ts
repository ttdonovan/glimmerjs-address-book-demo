import Component, { tracked } from "@glimmer/component";
import Contact from '../../../utils/contact';

export default class AddressBook extends Component {
  @tracked contacts = generateContacts()
}

function generateContacts() {
  return [
    new Contact("John", "Smith"),
    new Contact("Jane", "Doe")
  ];
}
