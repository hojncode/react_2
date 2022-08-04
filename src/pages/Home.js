import React from "react";
import Layout from "../components/Layout"
import Header from "../components/Header"
import Form from "../features/Form"
import List from "../features/List"



const Home = () => {
    return (<Layout>
        <Header />
        <Form />
        <List />
    </Layout>
    )


}


export default Home;