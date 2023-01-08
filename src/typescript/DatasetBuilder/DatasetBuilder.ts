import { Dataset } from "../Dataset";
import { AbstractDatasetBuilderSource } from "./DatasetBuilderSource/AbstractDatasetBuilderSource";

interface ParametersInterface {
  transpose?: boolean;
}

export class DatasetBuilder {
  static fromSource(
    sourcePromise: Promise<AbstractDatasetBuilderSource>,
    params: ParametersInterface = {}
  ): Promise<Dataset> {
    return new Promise((resolve) => {
      sourcePromise.then((source) => {
        const matrix = source.parse();
        const numberOfExamples = matrix.rows;
        const exampleSize = matrix.cols;

        const dataset = new Dataset(exampleSize, numberOfExamples, matrix.data);
        resolve(dataset);
      });
    });
  }
}
