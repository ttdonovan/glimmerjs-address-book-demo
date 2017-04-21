import { tracked } from "@glimmer/component";

export default class Address {
  @tracked public line1: string;
  @tracked public line2: string;
  @tracked public city: string;
  @tracked public state: string;
  @tracked public postal: string;

  constructor(line1: string, line2: string, city: string, state: string, postal: string) {
    this.line1 = line1;
    this.line2 = line2;
    this.city = city;
    this.state = state;
    this.postal = postal;
  }
}
