import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return ( 
        <section className="bg-silver text-deep w-screen h-screen centered-col gap-y-8">
            <h1 className="text-3xl font-semibold">Flipcard Game</h1>
            <div className="w-3/4 h-3/4 rounded-md centered">
                <Outlet />
            </div>
        </section>
     );
}
 
export default MainLayout;