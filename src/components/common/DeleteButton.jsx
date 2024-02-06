const DeleteButton = ({handleDelete}) => {
    return (
        <div>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                type="button"
                onClick={handleDelete}
            >
                Delete
            </button>

        </div>
    );
};

export default DeleteButton;