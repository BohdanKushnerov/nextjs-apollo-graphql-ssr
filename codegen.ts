import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://graphqlzero.almansi.me/api",
  documents: "src/graphql/**/*.gql",
  generates: {
    "./src/graphql/generated.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        withHooks: true,
        withHOC: false,
        withComponent: false,
        reactApolloVersion: 4,
        apolloClientVersion: 4,
        withSuspense: true,
        fragmentMasking: false,
        avoidOptionals: true,
        defaultScalarType: "unknown",
        nonOptionalTypename: true,
        skipTypename: false,
      },
    },
  },
};

export default config;
