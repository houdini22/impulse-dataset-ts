import { AbstractDatasetModifier } from "./AbstractDatasetModifier";
import { Matrix } from "impulse-math-ts";
import { Dataset } from "../Dataset";

export class CallbackDatasetModifier extends AbstractDatasetModifier {
  protected callback: (example: Matrix) => Matrix = (example) => example;

  apply(): Dataset {
    for (let exampleIndex = 0; exampleIndex < this.dataset.getNumberOfExamples(); exampleIndex += 1) {
      const example = this.callback(this.dataset.exampleAt(exampleIndex));
      for (let row = 0; row < this.dataset.data.rows; row += 1) {
        if (example) {
          this.dataset.data.data[row][exampleIndex] = example.data[row][0];
        }
      }
    }
    return this.dataset;
  }

  setCallback(callback: (example: Matrix) => Matrix): CallbackDatasetModifier {
    this.callback = callback;
    return this;
  }
}
