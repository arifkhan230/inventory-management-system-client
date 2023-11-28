

const WatchDemo = () => {
    return (
        <div>
            <h2 className="text-3xl font-bold text-center my-10"> Welcome!! </h2>
            <p className="text-center text-xl mb-4">Before Using Our System Watch This Video and Get Some Ideas How Our System Works. </p>

            <div className="flex justify-center item-center">
                <iframe
                    width="560" height="315" src="https://www.youtube.com/embed/rIJwIrGRYAk?si=vnEFZfA9q0WZy9aD" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>

                </iframe>
            </div>
        </div>
    );
};

export default WatchDemo;