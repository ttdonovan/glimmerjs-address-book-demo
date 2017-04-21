import Component, { tracked } from "@glimmer/component";

import Contact from "../../../utils/contact";
import ContactStore from "../../../utils/contact-store";

export default class AddressBook extends Component {
  private contactStore: ContactStore;

  @tracked private contacts: Contact[];
  @tracked private selectedContact: Contact;

  constructor(options) {
    super(options);

    this.contactStore = new ContactStore();
    this.contacts = this.contactStore.fetch();
  }

  private onSelect(contact) {
    this.selectedContact = contact;
  }
}
