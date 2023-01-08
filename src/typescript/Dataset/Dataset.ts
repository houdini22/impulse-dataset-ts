import { Matrix } from "impulse-math-ts";

export class Dataset {
  public exampleSize = 0;
  public numberOfExamples = 0;
  public data: Matrix | null = null;

  constructor(exampleSize: number = null, numberOfExamples: number = null, arr: string[][] | number[][] = null) {
    this.exampleSize = exampleSize;
    this.numberOfExamples = numberOfExamples;

    if (arr) {
      const data = [];
      for (let row = 0; row < exampleSize; row += 1) {
        data[row] = new Array(numberOfExamples);
        for (let col = 0; col < numberOfExamples; col += 1) {
          if (!arr[col]) {
            continue;
          }
          // @ts-ignore
          if (typeof arr[col][row] === "string" && /^[-0-9.e]+$/.test(arr[col][row])) {
            data[row][col] = Number(arr[col][row]);
          } else if (typeof arr[col][row] === "string") {
            // @ts-ignore
            data[row][col] = arr[col][row].length ? arr[col][row] : NaN;
          } else if (typeof arr[col][row] === "number") {
            data[row][col] = arr[col][row];
          } else {
            data[row][col] = NaN;
          }
        }
      }
      this.data = new Matrix(this.exampleSize, this.numberOfExamples, data);
    }
  }

  static fromMatrix(m: Matrix): Dataset {
    const instance = new Dataset();
    instance.exampleSize = m.rows;
    instance.numberOfExamples = m.cols;
    instance.data = m;

    return instance;
  }

  exampleAt(index: number): Matrix | null {
    return this.data.col(index);
  }

  getNumberOfExamples(): number {
    return this.numberOfExamples;
  }

  getExampleSize(): number {
    return this.exampleSize;
  }

  getBatch(offset: number, batchSize: number): Dataset {
    const data = this.data.block(0, offset, this.data.rows, batchSize);
    return Dataset.fromMatrix(data);
  }

  insertColumnAfter(column, size = 1) {
    const oldData = this.data.copy();

    this.exampleSize = this.data.rows + size;
    this.data.resize(this.data.rows + size, this.data.cols);

    for (let row = 0; row < this.data.rows; row += 1) {
      for (let col = 0; col < this.data.cols; col += 1) {
        if (row <= column) {
          this.data.data[row][col] = oldData.data[row][col];
        } else if (row > column && row <= column + size) {
          this.data.data[row][col] = undefined;
        } else if (row > column + size) {
          this.data.data[row][col] = oldData.data[row - size][col];
        }
      }
    }
  }
}
