import Container from "../../../Components/Container/Container";


const Banner = () => {
    console.log(new Date());
    return (
        <Container>
            <div className="hero h-[70vh]" style={{ backgroundImage: 'url(https://i.ibb.co/PmXTX0w/warehouse-worker-checking-inventory-his-tablet-while-walking-large-storage-department-with-shelves-p.jpg)' }}>
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-xl">
                        <h1 className="mb-5 text-5xl font-bold text-white">Welcome to NexGen Inventory Management System</h1>
                        <p className="mb-5 text-white">where seamless control meets business success. Streamline your operations, boost efficiency, and take charge of your inventory like never before..</p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Banner;