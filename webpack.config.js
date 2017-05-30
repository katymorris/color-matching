var webpack = require("webpack");
var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
	entry: SRC_DIR + "/app/index.js",
	output: {
		path: DIST_DIR + "/app",
		filename: "bundle.js",
		publicPath: "/app/",
	},
	resolve: {
        alias: {
            jquery: "jquery/src/jquery"
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ],
	module: {
				// rules: [
		  //     {
		  //       test: /\.exec\.js$/,
		  //       use: [ 'script-loader' ]
		  //     }
		  //   ]
		loaders: [
			{
				test: /\.js?/,
				include: SRC_DIR,
				loader: "babel-loader",
				query: {
					presets: ["react", "es2015", "stage-2"]
				}
			},
			{
		        test: /\.exec\.js$/,
		        include: SRC_DIR,
		        loader: [ 'script-loader' ]
		     },
			{ 
				test: /\.css$/, 
				loader: "style-loader!css-loader" 
			}
		]
	},
};

module.exports = config;
