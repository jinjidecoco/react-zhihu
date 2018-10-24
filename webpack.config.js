var path = require('path');
var webpack =require('webpack');
var HtmlWebpackPlugin =require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development'



// console.log('12--------NODE_ENV---------', process.env.NODE_ENV)
module.exports ={
	entry :path.resolve(__dirname, 'src/index.js'),
	output:{
         path: path.resolve(__dirname, "dist"), // 打包文件的输出目录
         filename: "bundle.js"
	},
	resolve:{
		extensions:['.jsx','.js'],
	},
	mode: 'development',
	module: {
		rules:[
		  
		  	{
                test:/\.js[x]?$/,
                use:"babel-loader",
                exclude:/node_modules/
            },
            {
            	test:/\.css$/,
            	use:['style-loader','css-loader']
            },
            {
            	test: /\.less$/,
            	use:['style-loader','css-loader','less-loader']

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
	plugins: [
	  new webpack.DefinePlugin({ 
	  	'process.env' :{
	  		NODE_ENV:isDev ?'"development"' : '"production"'
	  	}

	  }),
	  //html模板
	  new HtmlWebpackPlugin({
	  	filename:'index.html',
	  	template: path.join(__dirname,'src/template.html')
	  }),

	  //热加载
	  new webpack.HotModuleReplacementPlugin(),
	  
	  //打开浏览器
	  // new OpenBrowserPlugin({
	  // 	url: 'http://localhost:8080'
	  // })
	],
	devServer:{
	    publicPath:'/',
	    host:'localhost',
	    port:'8081',
		proxy: {
			'/api/4/*':{
				target: 'https://news-at.zhihu.com/',
				changeOrigin: true,
				secure:false
			}
		},
		historyApiFallback:true,
		inline:true,
		hot: true

	}
}