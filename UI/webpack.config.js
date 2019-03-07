const path  = require("path");

module.exports = {
entry:{
    register:['babel-polyfill','./src/register.js']
},
output: {
        path : path.resolve(__dirname, 'public'),
        filename: './dist/[name].bundle.js'
    },

devServer:{
        contentBase: path.join(__dirname, "public")
  },
  module: {
    rules: [
        {
        test: /\.js$/,
        exclude: /node_modules/,
        use:{
            loader: "babel-loader",
            options: {
                // babel-core && babel-preset-env gets babel setup ready to transpile
                presets: ["@babel/preset-env"   ]
            }
        }
        }
    ]
}
}
