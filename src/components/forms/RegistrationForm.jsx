import {Button} from "../common/Button.jsx";

const RegistrationForm = ({handleSubmit, onSubmit, errors, register, error}) => {
    return (
        <div>
            <form
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        First Name
                        <input
                            className="shadow appearance-none border rounded
                    w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            name="firstName"
                            {...register("firstName", {required: true})}
                        />
                    </label>
                    {errors.firstName && <span className="text-red-500">First Name is required</span>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Last Name
                        <input
                            className="shadow appearance-none border rounded
                    w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            name="lastName"
                            {...register("lastName", {required: true})}
                        />
                    </label>
                    {errors.lastName && <span className="text-red-500">Last Name is required</span>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Birthday
                        <input
                            className="shadow appearance-none border rounded
                    w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="date"
                            name="birthday"
                            {...register("birthday", {required: true})}
                        />
                    </label>
                    {errors.birthday && <span className="text-red-500">Birthday is required</span>}
                    {error && <span className="text-red-500">{error}</span>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Civil Status
                        <select
                            className="shadow appearance-none border rounded
                    w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="civilStatus"
                            {...register("civilStatus", {required: true})}
                        >
                            <option value="">Select Civil Status</option>
                            <option value="single">Single</option>
                            <option value="married">Married</option>
                            <option value="just for fun">Just For Fun</option>
                        </select>
                    </label>
                    {errors.civilStatus && <span className="text-red-500">Civil Status is required</span>}
                </div>
                <Button>
                    Sign Up
                </Button>
            </form>
        </div>
    );
};

export default RegistrationForm;