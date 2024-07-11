import NavBar from "../components/navbar/navbar";
import {Outlet} from 'react-router-dom'
export default function RootLayout(){

    return(
        <main>
            <div style={{marginTop: '150px'}}>
                <Outlet/>
            </div>
        </main>
    )
}