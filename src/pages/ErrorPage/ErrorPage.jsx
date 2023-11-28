import { Link } from "react-router-dom";
import Container from "../../Components/Container/Container";
import image from "../../assets/images/7887410_3793096.jpg"

const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center">
            <Container>
                <div>
                    <img className="w-[80vh] h-[60vh]" src={image} alt="" />
                    <div className="flex  justify-center">
                        <Link to="/">
                            <button className="btn btn-warning">Go Home</button>
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ErrorPage;