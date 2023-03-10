import { Dataset as DatasetDataset } from "./Dataset";
import { DatasetBuilder as DatasetBuilderBuilder, DatasetVocabularyBuilder } from "./DatasetBuilder";
import { DatasetBuilderSourceCSV } from "./DatasetBuilder/DatasetBuilderSource";
import { DatasetVocabularyBuilderSourceTextFile } from "./DatasetBuilder/DatasetVocabularyBuilderSource";

import {
  CallbackDatasetModifier,
  MinMaxScalingDatasetModifier,
  MissingDataDatasetModifier,
  ShuffleDatasetModifier,
  CategoryDatasetModifier,
  SplitDatasetModifier,
} from "./Dataset/DatasetModifier";

const DatasetBuilder = {
  DatasetBuilder: DatasetBuilderBuilder,
  DatasetVocabularyBuilder,
};
const Dataset = {
  Dataset: DatasetDataset,
};
const DatasetModifier = {
  CallbackDatasetModifier,
  MinMaxScalingDatasetModifier,
  MissingDataDatasetModifier,
  ShuffleDatasetModifier,
  CategoryDatasetModifier,
  SplitDatasetModifier,
};
const DatasetBuilderSource = {
  DatasetBuilderSourceCSV,
  DatasetVocabularyBuilderSourceTextFile,
};

export { DatasetBuilder, Dataset, DatasetBuilderSource, DatasetModifier };
