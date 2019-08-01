import React, {Component} from "react";

import Layout from "../Components/layout";
import databaseApi from "../database-api";
import WriterOfTheDay from "../Components/writer-of-the-day";
import DeveloversTeam from "../Components/developers-team";

export default class extends Component {
  render() {
    return <Layout>
      <WriterOfTheDay {...databaseApi.writerOfTheDay} />
      <DeveloversTeam {...databaseApi.develoversTeam } />
    </Layout>
  }
}
