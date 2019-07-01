const express = require("express");
const glob = require("glob");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const helmet = require("helmet");
const validator = require("express-validator");
const expressVue = require("express-vue");
const path = require("path");

/**
 *
 * @param {object} app
 * @param {object} config
 */

module.exports.init = (app, config) => {

    const env = process.env.NODE_ENV || "development";
    const router = express.Router();

     //Security
     app.use(helmet());
     app.disable("x-powered-by");

     app.use(bodyParser.json());
     app.use(bodyParser.urlencoded({
         extended: true,
     }));
     app.use(validator());
     app.use(compress());
     app.use(process.env.ROOT_PATH, express.static(config.root));


     app.use(cookieParser());


     
     router.get('/templates/:template/*', function (req, res) {
        var templates = req.params.template;


    });

     app.use("/", router);


}