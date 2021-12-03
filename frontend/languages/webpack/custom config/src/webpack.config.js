var path=require('path')

///console.log(__dirname)


module.exports={
    mode:'development',
    entry:{
        app:'./src/app.js',
        variables:'./src/variables/variables.js',
        home:'./src/sum/sum.js'
    },
    output:{
        filename:'[addition].js',
        path:path.resolve(__dirname,'public')
    },
  devServer:{
      port:1234,
      static:path.resolve(__dirname,'public')
  }

}