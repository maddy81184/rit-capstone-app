var config = {}

config.MONGODB_CONNECT_URL = "mongodb://root:abc123@ds153637.mlab.com:53637/newswatcherdb";
config.JWT_SECRET = "n`pgRdXRfGvWR|5!`&j)jYj9S<3{O/\iT=@4N41peST/q,;7W^Q-T$NGV8>,\:(";
config.NEWYORKTIMES_API_KEY = '98bf1627e541471d832ee943baf42879'
config.NEWYORKTIMES_CATEGORIES = ["world", "national", "business", "technology"];
config.GLOBAL_STORIES_ID = "MASTER_STORIES_DO_NOT_DELETE";
config.MAX_SHARED_STORIES = 30;
config.MAX_COMMENTS = 30;
config.MAX_FILTERS = 5;
config.MAX_FILTER_STORIES = 15;

module.exports = config;
