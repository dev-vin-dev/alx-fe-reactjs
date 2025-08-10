function UserProfile() {
    return (
        <div className="flex flex-col items-center shadow-md bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg text-center p-4 sm:p-4 md:p-8 max-w-xs sm:max-w-xs md:max-w-sm mx-auto my-8">
            <img 
            src="https://via.placeholder.com/150"
            alt="User"
            className="rounded-full w-36 h-36 mx-auto md:w-36 md:h-36 object-cover mb-4 sm:w-24 sm:h-24 md:w-36"
            />
            <h1 className="text-xl text-blue-800 my-4 md:text-xl text-lg">John Doe</h1>
            <p className="text-base text-gray-600 text-sm md:text-base">
                Developer at Example Co. Loves to write code and explore new technologies.
            </p>
        </div>

    );
};

export default UserProfile;