import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

export default function Main() {
    return (
        <>
            <Header />
            <main>
                <div className="w-full lg:ps-60">
                    <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                        <Outlet />
                    </div>
                </div>

            </main>
        </>
    )
}
