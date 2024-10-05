
import { Helmet } from "react-helmet-async";
import Container from "../../Shared/Container";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Digital Diagnostic Center | Home</title>
            </Helmet>
            <Container>
                <h2>This is home</h2>
            </Container>
        </div>
    );
};

export default Home;