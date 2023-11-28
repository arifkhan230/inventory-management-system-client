import Container from "../../Components/Container/Container";
import image from "../../assets/images/7938324_3814338.jpg"

const Forbidden = () => {
    return (
        <div className="h-[80vh] flex items-center justify-center">
            <Container>
                {/* <h2 className="text-4xl font-bold my-10 text-center">Access forbidden</h2> */}
                <div className="flex items-center justify-center">
                    <img className="w-[800px] h-[600px] object-cover" src={image} alt="" />
                </div>
            </Container>
        </div>
    );
};

export default Forbidden;