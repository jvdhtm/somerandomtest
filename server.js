var expressVue = require("express-vue");
var app = express();
const expressVueMiddleware = expressVue.init();
app.use(expressVueMiddleware);

