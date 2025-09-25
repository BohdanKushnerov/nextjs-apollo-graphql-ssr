import { getClient } from "@/app/lib/client";
import { GetPostQuery, GetPostQueryVariables } from "@/graphql/__types__";
import { GetPostDocument } from "@/graphql/hooks/hooks";

export const searchPostRequest = async (_: any, formData: FormData) => {
  const id = formData.get("id") as string | null;
  if (!id) return null;

  const { data } = await getClient().query<GetPostQuery, GetPostQueryVariables>(
    {
      query: GetPostDocument,
      variables: { id },
      fetchPolicy: "cache-first",
    },
  );

  console.log("searchPostRequest data", data);

  return data?.post?.id ? data.post : null;
};
