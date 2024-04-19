import { AbstractDatasetModifier } from "./AbstractDatasetModifier";
import { Dataset } from "../Dataset";

export class MinMaxScalingDatasetModifier extends AbstractDatasetModifier {
  apply(dataset: Dataset): Dataset {
    let min = Infinity;
    let max = -Infinity;

    for (let row = 0; row < dataset.getNumberOfExamples(); row += 1) {
      const example = dataset.exampleAt(row);
      for (let col = 0; col < example.rows; col += 1) {
        if (min > example.data[row * dataset.data.cols + col]) {
          min = example.data[row * dataset.data.cols + col];
        }
        if (max < example.data[row * dataset.data.cols + col]) {
          max = example.data[row * dataset.data.cols + col];
        }
      }
    }

    for (let row = 0; row < dataset.getNumberOfExamples(); row += 1) {
      const example = dataset.exampleAt(row);
      for (let col = 0; col < example.rows; col += 1) {
        dataset.data.data[row * dataset.data.cols + col] = (example.data[col] - min) / (max - min);
      }
    }

    return dataset;
  }
}
