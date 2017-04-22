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
    this.selectedContact = this.contacts[0];
  }

  private onSelect(contact: Contact): void {
    this.selectedContact = contact;
  }

  private newContact(): void {
    this.selectedContact = this.contactStore.build();
  }

  private commitContact(contact: Contact, options: any): void {
    contact.firstName = options.firstName;
    contact.lastName = options.lastName;
    contact.address.line1 = options.addressLine1;
    contact.address.line2 = options.addressLine2;
    contact.address.city = options.addressCity;
    contact.address.state = options.addressState;
    contact.address.postal = options.addressPostal;

    if !this.contacts.includes(contact) {
      this.contacts.push(contact);
      this.contacts = this.contacts;
    }

    this.contactStore.store(contact);
  }
}
