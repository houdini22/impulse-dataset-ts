import { AbstractDatasetModifier } from "./AbstractDatasetModifier";
import { Dataset } from "../Dataset";

export class CategoryDatasetModifier extends AbstractDatasetModifier {
  protected columns: Array<number>;

  constructor(columns: Array<number>) {
    super(null);
    this.columns = columns;
  }

  apply(dataset: Dataset): Dataset {
    let size = 0;
    let _dataset = dataset;

    this.columns.forEach((column) => {
      let [dataset, _size] = this.applyForColumn(_dataset, column + size);
      // @ts-ignore
      size += _size;
      _dataset = dataset;
    });
    return dataset;
  }

  applyForColumn(dataset: Dataset, column: number): [Dataset, number] {
    const example = dataset.data.col(column);
    let values = [];

    for (let row = 0; row < example.rows; row += 1) {
      values.push(example.value(row, 0));
    }
    console.log(values);

    values = values.filter((value, index, self) => {
      return self.indexOf(value) === index;
    });

    dataset.insertColumnAfter(column, values.length - 1);

    for (let row = 0; row < dataset.data.rows; row += 1) {
      const oldValue = dataset.data.data[row][column];
      let index = 0;
      for (let col = 0; col < column + values.length; col += 1) {
        if (col >= column && col < column + values.length) {
          if (index === values.indexOf(oldValue)) {
            dataset.data.data[row][col] = 1;
          } else {
            dataset.data.data[row][col] = 0;
          }
          index += 1;
        } else {
          // dataset.data.data[row][col] = dataset.data.data[row][col];
        }
      }
    }

    return [dataset, values.length - 1];
  }
}
