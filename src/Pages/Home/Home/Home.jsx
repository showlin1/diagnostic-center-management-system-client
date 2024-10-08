
import { Helmet } from "react-helmet-async";
import Container from "../../Shared/Container";
import Banner from "./Banner/Banner";
import Promotions from "../Promotions/Promotions";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Digital Diagnostic Center | Home</title>
            </Helmet>
            <Container>
                <div>
                    <Banner />
                </div>
                <div>
                    <h2 className="text-5xl text-center">Featured Tests</h2>
                </div>
                <div className="mt-10">
                    <h2 className="text-5xl text-center">Promotions Section</h2>
                    <Promotions/>
                </div>
            </Container>
        </div>
    );
};

export default Home;