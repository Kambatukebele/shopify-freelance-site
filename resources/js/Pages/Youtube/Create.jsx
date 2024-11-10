import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import { useForm } from "@inertiajs/react";
const Create = () => {
    const { data, post, setData, errors } = useForm({
        email: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("youtube.store"));
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Create
                </h2>
            }
        >
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <form
                                onSubmit={handleSubmit}
                                className="max-w-sm mx-auto"
                            >
                                <label
                                    htmlFor="youtube"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Enter your youtube URL
                                </label>
                                <input
                                    type="url"
                                    id="youtube"
                                    name="video_url"
                                    value={data.video_url}
                                    onChange={(e) =>
                                        setData("video_url", e.target.value)
                                    }
                                    required
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="https:://youtube.com/gjkmdkhkj"
                                />
                                <InputError
                                    message={errors.video_url}
                                    className="mt-2"
                                />
                                <button className="py-3 px-4 border mt-5 bg-blue text-white rounded-lg">
                                    Save video
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Create;
