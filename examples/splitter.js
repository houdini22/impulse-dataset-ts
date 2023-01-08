const {
  DatasetBuilder: { DatasetBuilder },
  DatasetBuilderSource: { DatasetBuilderSourceCSV },
  DatasetModifier: { SplitDatasetModifier },
} = require("../dist/impulse-dataset-ts.dev");

const path = require("path");

DatasetBuilder.fromSource(DatasetBuilderSourceCSV.fromLocalFile(path.resolve(__dirname, "./data/data.csv")), {
  transpose: true,
}).then(async (dataset) => {
  console.log(dataset.data);
  const [inputDataset, outputDataset] = new SplitDatasetModifier([0, 1]).apply(dataset);
  console.log(inputDataset, outputDataset, inputDataset.data, outputDataset.data);
});
