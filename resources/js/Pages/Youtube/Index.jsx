import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const Index = ({ youtubes }) => {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    All Videos
                </h2>
            }
        >
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                {youtubes.data.map((youtube) => {
                                    const { id, video_url } = youtube;
                                    console.log(video_url);

                                    return (
                                        <div key={id}>
                                            <video
                                                className="w-full h-[200px] rounded-lg"
                                                src={video_url}
                                                type="video"
                                            ></video>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
