import Chance from "chance"; //chance 패키지
import { IFake } from "./IFake";

const c = new Chance();
export const makeFakeData = (): IFake => ({
  name: c.name(),
  email: c.email(),
  profession: c.profession(),
  birthday: c.birthday().toISOString(),
  sentence: c.sentence(),
});

export { IFake };
