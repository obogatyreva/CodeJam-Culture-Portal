import React, { Component } from "react"

import Layout from "../Components/layout"
import databaseApi from "../database-api"
import WriterOfTheDay from "../Components/writer-of-the-day"
import DeveloversTeam from "../Components/developers-team"
import developers from "../database-api/developers"

export default class extends Component {
  render() {
    const lang = "en"
    console.log(lang)
    return (
      <Layout>
        <WriterOfTheDay {...databaseApi.writerOfTheDay} />
        <DeveloversTeam {...developers.develoversTeam} />
      </Layout>
    )
  }
}
