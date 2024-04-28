import PageTitle from "@/components/PageTitle";
import RenderPost from "@/features/post/RenderPost";
import { getPost } from "@/services/post.service";

const Page = async ({ params }: { params: { slug: string } }) => {
    const { data } = await getPost(params.slug);
    return (<div className="my-4">
        <PageTitle title={data.attributes.title} />
        <RenderPost post={data} />
    </div>)
}

export default Page;