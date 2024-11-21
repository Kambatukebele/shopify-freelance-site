import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link } from "@inertiajs/react";

const Index = ({ youtubes }) => {
    console.log(youtubes);

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
                            <div class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                {youtubes.data.map((youtube) => {
                                    const { id, video_url } = youtube;
                                    return (
                                        <div key={id}>
                                            <iframe
                                                className="w-full h-[250px] rounded-lg"
                                                src={video_url}
                                                title="YouTube video player"
                                                frameborder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                referrerpolicy="strict-origin-when-cross-origin"
                                                allowfullscreen
                                            ></iframe>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Pagination */}
            <div className="py-12">
                <div className="mx-auto max-w-7xl text-center sm:px-6 lg:px-8">
                    <nav aria-label="Page navigation example">
                        <ul className="inline-flex -space-x-px text-base h-10">
                            <li>
                                <Link
                                    href={youtubes.prev_page_url}
                                    className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    Previous
                                </Link>
                            </li>
                            {youtubes.links.map((link, index) => {
                                console.log(link.label[index]);

                                return (
                                    <li>
                                        <Link
                                            href={link.url}
                                            className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                                                link.active
                                                    ? "bg-red-500 text-white"
                                                    : ""
                                            }`}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                );
                            })}

                            {/* <li>
                                <Link className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                    2
                                </Link>
                            </li>
                            <li>
                                <Link
                                    aria-current="page"
                                    className="flex items-center justify-center px-4 h-10 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                                >
                                    3
                                </Link>
                            </li>
                            <li>
                                <Link className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                    4
                                </Link>
                            </li>
                            <li>
                                <Link className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                    5
                                </Link>
                            </li> */}
                            <li>
                                <Link
                                    href={youtubes.next_page_url}
                                    className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    Next
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
