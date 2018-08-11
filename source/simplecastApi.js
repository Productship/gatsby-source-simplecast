class Simplecast {
  constructor (apiKey, options) {
  }
}

// Thinking out the how I want to use the class
/*
const simplecastData = new SimplecastAPI('<API Key>')
const podcasts = simplecastData.getPodcasts() // list of podcast objects
const podcastObject = podcasts[0]
// Each object should know how to get its relationships (means podcast id needs to be retained because of the API design)
podcastObject.getStats({ timeframe, start_date, end_date })

podcastObject.getEpisodes() // list of episode objects
episodeObject.getEmbed()
episodeObject.getPodcast() // returns podcast object
episodeObject.getStats({ timeframe, start_date, end_date })

// Perhaps I don't need "get"
*/
