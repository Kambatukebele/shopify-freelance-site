import Button from "@/Components/Button";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Textarea } from "@headlessui/react";
import { useForm } from "@inertiajs/react";

const Create = () => {
    const { data, post, setData, errors } = useForm({
        title: "",
        description: "",
        project_url: "",
        featured_image: null,
        large_image: null,
        medium_image: null,
        small_image: null,
        completion_date: "",
        tags: "",
    });
    console.log(data.title);

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("work.store"), {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            preserveScroll: true,
        });
    };
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Create a Portfolio
                </h2>
            }
        >
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            {/* loop here */}
                            <form onSubmit={handleSubmit}>
                                <div className="mb-5 flex flex-col justify-center gap-5 md:flex-row">
                                    <div className="md:w-1/2">
                                        <InputLabel>Title</InputLabel>
                                        <TextInput
                                            type="text"
                                            className="w-full text-sm"
                                            name="title"
                                            value={data.title}
                                            onChange={(e) =>
                                                setData("title", e.target.value)
                                            }
                                        />
                                        <InputError
                                            message={errors.title}
                                            className="mt-2"
                                        />
                                    </div>
                                    <div className="md:w-1/2">
                                        <InputLabel>Project URL</InputLabel>
                                        <TextInput
                                            type="url"
                                            className="w-full text-sm"
                                            name="project_url"
                                            value={data.project_url}
                                            onChange={(e) =>
                                                setData(
                                                    "project_url",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <InputError
                                            message={errors.project_url}
                                            className="mt-2"
                                        />
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <InputLabel>Description</InputLabel>
                                    <textarea
                                        rows="9"
                                        name="description"
                                        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 w-full"
                                        value={data.description}
                                        onChange={(e) =>
                                            setData(
                                                "description",
                                                e.target.value
                                            )
                                        }
                                    ></textarea>
                                    <InputError
                                        message={errors.description}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="mb-5 flex justify-center flex-col gap-5 md:flex-row">
                                    <div className="w-2/6">
                                        <InputLabel>Featured Image</InputLabel>
                                        <TextInput
                                            type="file"
                                            className="w-full text-sm"
                                            name="featured_image"
                                            value={data.featured_image}
                                            onChange={(e) =>
                                                setData(
                                                    "featured_image",
                                                    e.target.files[0]
                                                )
                                            }
                                        />
                                        <InputError
                                            message={errors.featured_image}
                                            className="mt-2"
                                        />
                                    </div>
                                    <div className="w-2/6">
                                        <InputLabel>Large Image</InputLabel>
                                        <TextInput
                                            type="file"
                                            className="w-full text-sm"
                                            name="large_image"
                                            value={data.large_image}
                                            onChange={(e) =>
                                                setData(
                                                    "large_image",
                                                    e.target.files[0]
                                                )
                                            }
                                        />
                                        <InputError
                                            message={errors.large_image}
                                            className="mt-2"
                                        />
                                    </div>
                                    <div className="w-2/6">
                                        <InputLabel>Tablet Image</InputLabel>
                                        <TextInput
                                            type="file"
                                            className="w-full text-sm"
                                            name="medium_image"
                                            value={data.medium_image}
                                            onChange={(e) =>
                                                setData(
                                                    "medium_image",
                                                    e.target.files[0]
                                                )
                                            }
                                        />
                                        <InputError
                                            message={errors.medium_image}
                                            className="mt-2"
                                        />
                                    </div>
                                    <div className="w-2/6">
                                        <InputLabel>Mobile Image</InputLabel>
                                        <TextInput
                                            type="file"
                                            className="w-full text-sm"
                                            name="small_image"
                                            value={data.small_image}
                                            onChange={(e) =>
                                                setData(
                                                    "small_image",
                                                    e.target.files[0]
                                                )
                                            }
                                        />
                                        <InputError
                                            message={errors.small_image}
                                            className="mt-2"
                                        />
                                    </div>
                                </div>
                                <div className="mb-5 flex justify-center flex-col gap-5 md:flex-row">
                                    <div className="w-1/2">
                                        <InputLabel>
                                            Date of completion
                                        </InputLabel>
                                        <TextInput
                                            type="date"
                                            className="w-full text-sm"
                                            name="completion_date"
                                            value={data.completion_date}
                                            onChange={(e) =>
                                                setData(
                                                    "completion_date",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <InputError
                                            message={errors.completion_date}
                                            className="mt-2"
                                        />
                                    </div>
                                    <div className="w-1/2">
                                        <InputLabel>Tags</InputLabel>
                                        <TextInput
                                            type="text"
                                            className="w-full text-sm"
                                            name="tags"
                                            value={data.tags}
                                            onChange={(e) =>
                                                setData("tags", e.target.value)
                                            }
                                        />
                                        <InputError
                                            message={errors.tags}
                                            className="mt-2"
                                        />
                                    </div>
                                </div>
                                <PrimaryButton>
                                    Register Testimonial
                                </PrimaryButton>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Create;
