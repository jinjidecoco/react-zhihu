var path =require('path');
var pckage=require('./package.json');
var webpack =require('webpack');
var UglifyJsPlugin =require('uglifyjs-webpack-plugin');

var HtmlWebpackPlugin =require('html-webpack-plugin');
//webpack 4 下 ExtractTextPlugin不可使用 抽取css
var MiniCssExtractPlugin = require('mini-css-extract-plugin')

var OpenBrowserPlugin = require('open-browser-webpack-plugin');


var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
var CleanWebpackPlugin =require('clean-webpack-plugin');



module.exports ={
	entry :{
		app: path.resolve(__dirname, 'src/index.js'),
		vendor:Object.keys(pckage.dependencies)
	},	
	output:{ 
		path: path.resolve(__dirname, "dist"),
		filename:'js/[name].[chunkhash:8].js',
		chunkFilename: '[name].chunkhash.js',
		publicPath:'115.236.69.128'
	},
	mode: 'production',
	optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                	test: /[\\/]src[\\/]common[\\/]/,
                	name:'commons',
                	minSize: 30000,
                    chunks: 'initial',
                    minChunks: 2,
                    priority: -1,
                    reuseExistingChunk: true 
                },
                vendor: { // 将第三方模块提取出来
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'initial',
                    minSize: 30000,
                    name: 'vendor',
                    minChunks: 2,
                    priority: 1, 
                    
                }
            }
        },
        runtimeChunk:{
        	name:'runtime',
        },
	    minimizer: [
	      new OptimizeCssAssetsPlugin({}),
	      new UglifyJsPlugin({
	        cache: true,
	        parallel: true,
	        extractComments: false, // 移除注释
	        uglifyOptions: {
              compress: {
                unused: true,
                warnings: false,
                drop_debugger: true
              },      
	        }

	      })
	    ]
    },
	module:{
		rules:[
		    {
                test:/\.js[x]?$/,
                use:"babel-loader",
                exclude:/node_modules/
            },
			{
				test:/\.less$/,
				use:[
				    MiniCssExtractPlugin.loader,
					'css-loader','postcss-loader','less-loader'
                ]
				
			},
			{
				test:/\.css$/,
				use:[
				     MiniCssExtractPlugin.loader,
					'css-loader','postcss-loader'
				]
			},
			{
            	test:/\.(png|gif|jpg|jpeg)$/,
            	use:[
            	  {
            	  	loader:'url-loader',
            	  	options:{
            	  		limit:8192
            	  	}
            	  }
            	]
            },
            {
            	test:/\.(woff|woff2|svg|ttf|eot)($|\?)/i,
            	use:[
	              {
	            	loader:'url-loader',
	            	options:{
	            	    limit:8192
	            	}
	              }
            	]
		    }
		]
	},
	plugins:[
	  new CleanWebpackPlugin(['dist/*.*']),
	  new HtmlWebpackPlugin({
	  	filename:'index.html',
	  	template: path.join(__dirname,'src/template.html'),
	  	hash: true,
	  }),      
      //抽取css代码
	  new MiniCssExtractPlugin({
	  	filename:'css/[name].[contenthash].css',
	  	// chunkFilename:"[id].css"
	  }),
	  //  new OpenBrowserPlugin({
	  // 	url: '115.236.69.124:8890'
	  // }),

	  new OptimizeCssAssetsPlugin({
	    assetNameRegExp: /\.optimize\.css$/g,
	    cssProcessor: require('cssnano'),
	    cssProcessorOptions: { safe: true,autoprefixer: { disable: true }, discardComments: { removeAll: true } },
	    canPrint: true
      }),
	
	]



}