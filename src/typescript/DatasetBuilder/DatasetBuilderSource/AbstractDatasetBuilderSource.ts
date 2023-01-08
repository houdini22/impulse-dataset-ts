import { Matrix } from "impulse-math-ts";

export abstract class AbstractDatasetBuilderSource {
  abstract parse(): Matrix;
}
