import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://graphqlzero.almansi.me/api",
  documents: "src/graphql/**/*.ts",
  // documents: [],
  generates: {
    "./src/graphql/__types__.ts": {
      plugins: ["typescript", "typescript-operations"],
      config: {
        avoidOptionals: true,
        immutableTypes: false,
        skipTypename: true,
        namingConvention: {
          typeNames: "pascal-case#pascalCase",
          enumValues: "upper-case#upperCase",
        },
      },
    },
    "./src/graphql/hooks/": {
      preset: "client",
      plugins: ["typescript-react-apollo"],
      presetConfig: { gqlImport: "graphql-tag" },
    },
  },
};

export default config;
