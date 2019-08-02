import React, {Component} from "react";
import Layout from "../Components/layout";
import databaseApi from "../database-api";
import WriterOfTheDay from "../Components/writer-of-the-day";
import DeveloversTeam from "../Components/developers-team";
import { graphql, useStaticQuery } from "gatsby"

export default class Lal extends Component {

  render() {
    {console.log(1)}
    return <Layout>
      {console.log(1)}
      <WriterOfTheDay {...databaseApi.writerOfTheDay} />
      <DeveloversTeam {...databaseApi.develoversTeam} />
    </Layout>
  }
}
