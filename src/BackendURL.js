const url = 'localhost';//'172.25.103.216';
const https = false;
const port = 9191;

export default "http" + (https ? "s" : "") + "://" + url + ":" + port;