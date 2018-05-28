const ROOT_DIR = '..';

const url = require('url');
const FileServer = require(ROOT_DIR + '/lib/services/FileServer');

const fileServer = new FileServer();

function Router() {
  return this.handle;
};

Router.prototype.handle = function (request, response) {
  const req = url.parse(request.url, true);
  fileServer.handle(request, response);
}

module.exports = Router;
