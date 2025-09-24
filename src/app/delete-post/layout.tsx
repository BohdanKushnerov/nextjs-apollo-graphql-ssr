import { ApolloWrapper } from "../lib/apollo-wrapper";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ApolloWrapper>{children}</ApolloWrapper>;
}
