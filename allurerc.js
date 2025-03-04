import { defineConfig } from "allure";

export default defineConfig({
  name: "Allure Report",
  output: "./allure-report",
  historyPath: "./history.jsonl",
  plugins: {
    "allure-awesome": {
      options: {
        reportName: "HelloWorld",
        singleFile: true,
        reportLanguage: "en",
        open: true,
      },
    },
  },
});