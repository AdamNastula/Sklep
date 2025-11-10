import { defineConfig } from "orval";

export default defineConfig({
  api: {
    input: "./src/api/swagger.json", // albo adres Twojego endpointa np. 'http://localhost:5000/swagger/v1/swagger.json'
    output: {
      target: "./src/api/", // gdzie zapisać klienta
      client: "react-query", // typ klienta
      mode: "tags-split", // podzieli hooki wg tagów z OpenAPI
      baseUrl: "https://localhost:7035/",
      prettier: true,
      override: {
        mutator: {
          path: "./src/api/axiosInstance.ts",
          name: "axiosInstance",
        },
        query: {
          useInfinite: false,
          useQuery: true,
        },
      },
    },
  },
});
