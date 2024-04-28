import PageTitle from "@/components/PageTitle";

const Page = async () => {
    return (<div className="my-4">
        <PageTitle title={"About"} />
        <div className="my-4">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae error quam optio! Pariatur commodi eligendi necessitatibus porro. Natus, quia officia! </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, tenetur.</p>

            <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae error quam optio! Pariatur commodi eligendi necessitatibus porro. Natus, quia officia! </p>
        </div>
    </div>)
}

export default Page;