import LoginPage from "../../pages/login/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage/>} />
        </Routes>

    )
}

export default AppRoutes