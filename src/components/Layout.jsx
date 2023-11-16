import { Outlet, Route, Routes } from "react-router-dom";
import Painting from "./Painting";
import Paintings from "./Paintings"
import Painter from "./Painter";

function Layout() {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Painter />}></Route>
                <Route path="/painting" element={<Painting />}></Route>
                <Route path="/paintings" element={<Paintings />}></Route>
            </Routes>

            <Outlet />
        </div>
    );
}

export default Layout;