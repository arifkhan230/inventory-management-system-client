import { Link } from "react-router-dom";


const Products = () => {
    return (
        <div>
            <div className="flex justify-between items-center my-10 px-4 ">
                <h2 className="text-3xl font-bold">Total:Products</h2>
                <Link to="/dashboard/addProduct">
                    <button className="btn btn-primary">Add Product</button>
                </Link>
            </div>
        </div>
    );
};

export default Products;