import Head from "next/dist/shared/lib/head"
import Navbar from "./Navbar"
//wrap the child component to the main app js so the component stays the same irrespective of the call
const Layout = ({children}) => {
    return (
        <div>
            <Head>
                <title>ShopperStop</title>
            </Head>
            <Navbar/>
            {children}
        </div>
    )
}

export default Layout
