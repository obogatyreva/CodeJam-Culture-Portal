import React from "react"

import Layout from "../Components/layout";
import databaseApi from "../database-api";
import Writers from "../Components/writers";

const SecondPage = () => {
  return (
   <Layout>
     <Writers writersInfo={databaseApi.writers}/>>
   </Layout>
  )
};

export default SecondPage
