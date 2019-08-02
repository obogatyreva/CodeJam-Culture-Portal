import React from "react"

import Layout from "../Components/layout";
import databaseApi from "../database-api";
import Writers from "../Components/writers";
import WriterList from "../Components/writers-list"

const SecondPage = () => {
  return (
   <Layout>
     <WriterList writerInfo={databaseApi.writers[0]}/>
   </Layout>
  )
};

export default SecondPage
