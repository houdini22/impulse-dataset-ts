const {
    DatasetBuilder: { DatasetBuilder },
    DatasetBuilderSource: { DatasetBuilderSourceCSV },
    DatasetModifier: { CategoryDatasetModifier }
} = require("../dist/impulse-dataset-ts.dev");

const path = require("path");

DatasetBuilder.fromSource(
    DatasetBuilderSourceCSV.fromLocalFile(path.resolve(__dirname, "./data/data.csv")),
    {transpose: true}
).then(async (inputDataset) => {
    console.log(inputDataset.data);
    inputDataset = new CategoryDatasetModifier([0, 1]).apply(inputDataset);
    console.log(inputDataset.data);
});