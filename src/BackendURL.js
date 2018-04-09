const url = '172.31.9.214';//'localhost';
const https = false;
const port = 9191;

export default "http" + (https ? "s" : "") + "://" + url + ":" + port;