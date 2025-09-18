import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://graphqlzero.almansi.me/api",
  documents: "src/graphql/**/*.gql",
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
    "./src/graphql/hooks/hooks.ts": {
      plugins: ["typescript-react-apollo"],
      config: {
        withHooks: true,
        withHOC: false,
        withComponent: false,
        reactApolloVersion: 3, 
        apolloClientVersion: 4, 
        fragmentMasking: false, 
        gqlImport: "graphql-tag",
      },
    },
  },
};

export default config;
