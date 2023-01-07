# impulse-dataset-ts

## Installation.

```npm install```

## Build.

```npm run build-dev && npm run build-prod```

## How to use?

```javascript
const {
    DatasetBuilder: { DatasetBuilder },
    DatasetModifier: { MinMaxScalingDatabaseModifier, MissingDataScalingDatabaseModifier },
    DatasetBuilderSource: { DatasetBuilderSourceCSV },
} = require("impulse-dataset-ts");

const path = require("path");

DatasetBuilder.fromSource(
   DatasetBuilderSourceCSV.fromLocalFile(path.resolve(__dirname, "./data/mnist_20x20_x.csv"))
).then(async (inputDataset) => {
   inputDataset = new MissingDataScalingDatabaseModifier(inputDataset).apply();
   inputDataset = new MinMaxScalingDatabaseModifier(inputDataset).apply();
});
```

```javascript
const {
    DatasetBuilder: { DatasetBuilder },
    DatasetBuilderSource: { DatasetBuilderSourceCSV },
    DatasetModifier: { CategoryDatasetModifier }
} = require("impulse-dataset-ts");

const path = require("path");

DatasetBuilder.fromSource(
    DatasetBuilderSourceCSV.fromLocalFile(path.resolve(__dirname, "./data/data.csv")),
    {transpose: true}
).then(async (inputDataset) => {
    console.log(inputDataset.data);
    inputDataset = new CategoryDatasetModifier([0, 1]).apply(inputDataset);
    console.log(inputDataset.data);
});
```