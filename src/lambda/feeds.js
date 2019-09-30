let Parser = require('rss-parser')


export function handler(event, context, callback) {
  let FEEDS = [
    'https://hnrss.org/frontpage',
    'http://www.sanattanyansimalar.com/rss.xml',
    'https://www.cnnturk.com/feed/rss/kultur-sanat/video',
    'http://mektupedebiyatdergisi.com/rss/kultur-sanat/11.xml',
  ]

  let parser = new Parser({
    defaultRSS: 2.0,
    customFields: {
      item: ['news', 'image'],
    }
  })

  let feedRequests = FEEDS.map(feed => {
    return parser.parseURL(feed)
  })

  Promise.all(feedRequests).then(response => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(response)
    })
  })
}