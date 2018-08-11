import { fetchPodcasts } from './helpers/fetchData'
import { podcastsEndpoint, podcastEndpoint } from './helpers/endpoints'

exports.sourceNodes = ({ boundActionCreators, createNodeId }, configOptions) => {
  // configOptions gets everything from the gatsby config
  // const { createNode } = boundActionCreators

  // Gatsby adds a configOption that's not needed for this plugin, delete it
  delete configOptions.plugins

  // plugin code goes here...
  console.log('Testing my plugin', configOptions)
}

fetchPodcasts({ apiKey: API_KEY }).then(response => console.log(response))
