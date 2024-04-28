import PageTitle from "@/components/PageTitle";
import Posts from "@/features/post/Posts";
export const revalidate = 10;

export default function Home() {
  return (
    <>
      <PageTitle title="Posts" subtitle="Data posts" />
      <Posts />
    </>
  )
}