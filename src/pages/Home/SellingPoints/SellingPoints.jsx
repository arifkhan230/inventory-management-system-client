import axios from "axios";
import { useEffect, useState } from "react";
import Points from "../../../Components/Points/Points";
import Container from "../../../Components/Container/Container";


const SellingPoints = () => {

    const [sellingPoints, setSellingPoints] = useState([]);
    useEffect(() => {
        axios.get("/sellingIdeas.json").then((res) => setSellingPoints(res.data));
    }, []);
    console.log(sellingPoints);

    return (
        <div className="my-20">
            <h2 className="text-3xl font-bold text-center my-10">Unique Selling Point</h2>

            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 md:px-0 gap-6">
                    {
                        sellingPoints?.map((points, index) => <Points
                            key={index}
                            points={points}
                        >

                        </Points>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default SellingPoints;