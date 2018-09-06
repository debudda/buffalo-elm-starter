require("expose-loader?$!expose-loader?jQuery!jquery");
require("bootstrap/dist/js/bootstrap.bundle.js");

import Elm from './src/Main.elm';

// https://github.com/elm-community/elm-webpack-loader/issues/149
const app = Elm.Elm.Main.init({
    node: document.getElementById("main")
})
