import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React from "react";
import benza from "../../../../public/assets/images/benzagroupe.png";
import { Link } from "@inertiajs/react";

const Index = ({ portfolios }) => {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    All Porfolios
                </h2>
            }
        >
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 grid gap-20 lg:grid-cols-3 lg:gap-0">
                            {/* loop here */}
                            {portfolios.map((portfolio) => {
                                const { id, company_image } = portfolio;
                                return (
                                    <Link
                                        key={id}
                                        href={route("portfolio.edit", id)}
                                        className="w-[280px] mx-auto sm:w-[370px] border rounded-xl"
                                    >
                                        <img
                                            class="rounded-t-xl w-full h-full object-cover object-center"
                                            src={company_image}
                                            alt=""
                                        />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
