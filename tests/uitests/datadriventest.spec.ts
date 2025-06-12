import test, { expect } from "@playwright/test";
import { log } from "console";

const testData = require("../../test-data/qa/testdata.json");

type TestData = {
  TestData1: {
    Skill1: string;
    Skill2: string;
  };
  TestData2: {
    Skill1: string;
    Skill2: string;
  };
};

const typeTestData = testData as TestData;

for (const dataSetName in typeTestData) {
  const dataSet = typeTestData[dataSetName as keyof TestData];

  console.log(
    `Running tests for dataset: ${dataSet.Skill1}, ${dataSet.Skill2}`
  );
}
