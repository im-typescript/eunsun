import { readFileGenerator } from "../fileApi";

for (let value of readFileGenerator('data/fake-100000.csv')) {
    console.log('<line>', value, '</line>')
    break
}