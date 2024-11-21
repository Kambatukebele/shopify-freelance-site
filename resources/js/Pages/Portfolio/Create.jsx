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
        company_name: "",
        company_niche: "",
        company_live_url: "",
        company_about: "",
        company_image: null,
        company_review: "",
        company_representative_name: "",
        company_representative_title: "",
    });

    const handleFileChange = (e) => {
        setData("company_image", e.target.files[0]);
    };

    const handleSubmit = (e) => {
        console.log(e);

        e.preventDefault();
        post(route("portfolio.store"), {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            // preserveScroll: true,
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
                                        <InputLabel>Company Name</InputLabel>
                                        <TextInput
                                            type="text"
                                            className="w-full text-sm"
                                            name="company_name"
                                            value={data.company_name}
                                            onChange={(e) =>
                                                setData(
                                                    "company_name",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <InputError
                                            message={errors.company_name}
                                            className="mt-2"
                                        />
                                    </div>
                                    <div className="md:w-1/2">
                                        <InputLabel>Company Niche</InputLabel>
                                        <TextInput
                                            type="text"
                                            className="w-full text-sm"
                                            name="company_niche"
                                            value={data.company_niche}
                                            onChange={(e) =>
                                                setData(
                                                    "company_niche",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <InputError
                                            message={errors.company_niche}
                                            className="mt-2"
                                        />
                                    </div>
                                </div>
                                <div className="mb-5 flex flex-col justify-center gap-5 md:flex-row">
                                    <div className="md:w-1/2">
                                        <InputLabel>
                                            Company Live URL
                                        </InputLabel>
                                        <TextInput
                                            type="text"
                                            className="w-full text-sm"
                                            name="company_live_url"
                                            value={data.company_live_url}
                                            onChange={(e) =>
                                                setData(
                                                    "company_live_url",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <InputError
                                            message={errors.company_live_url}
                                            className="mt-2"
                                        />
                                    </div>
                                    <div className="md:w-1/2">
                                        <InputLabel>
                                            Company Representative Name
                                        </InputLabel>
                                        <TextInput
                                            type="text"
                                            className="w-full text-sm"
                                            name="company_representative_name"
                                            value={
                                                data.company_representative_name
                                            }
                                            onChange={(e) =>
                                                setData(
                                                    "company_representative_name",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <InputError
                                            message={
                                                errors.company_representative_name
                                            }
                                            className="mt-2"
                                        />
                                    </div>
                                </div>
                                <div className="mb-5 flex flex-col justify-center gap-5 md:flex-row">
                                    <div className="md:w-1/2">
                                        <InputLabel>
                                            Company Representative Title
                                        </InputLabel>
                                        <TextInput
                                            type="text"
                                            className="w-full text-sm"
                                            name="company_representative_title"
                                            value={
                                                data.company_representative_title
                                            }
                                            onChange={(e) =>
                                                setData(
                                                    "company_representative_title",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <InputError
                                            message={
                                                errors.company_representative_title
                                            }
                                            className="mt-2"
                                        />
                                    </div>
                                    <div className="md:w-1/2">
                                        <InputLabel>Company Image</InputLabel>
                                        <TextInput
                                            type="file"
                                            className="w-full text-sm"
                                            name="company_image"
                                            onChange={handleFileChange}
                                        />
                                        <InputError
                                            message={errors.company_image}
                                            className="mt-2"
                                        />
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <InputLabel>Company About</InputLabel>
                                    <textarea
                                        rows="9"
                                        name="company_about"
                                        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 w-full"
                                        value={data.company_about}
                                        onChange={(e) =>
                                            setData(
                                                "company_about",
                                                e.target.value
                                            )
                                        }
                                    ></textarea>
                                    <InputError
                                        message={errors.company_about}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="mb-5">
                                    <InputLabel>Company Review</InputLabel>
                                    <textarea
                                        rows="9"
                                        name="company_review"
                                        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 w-full"
                                        value={data.company_review}
                                        onChange={(e) =>
                                            setData(
                                                "company_review",
                                                e.target.value
                                            )
                                        }
                                    ></textarea>
                                    <InputError
                                        message={errors.company_review}
                                        className="mt-2"
                                    />
                                </div>

                                <PrimaryButton>
                                    Register Portfolio
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
