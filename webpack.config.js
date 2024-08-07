const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
    module: {
        rules: [
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(scss)$/,
            use: [
              {
                loader: 'style-loader', // inject CSS to page
              },
              {
                loader: 'css-loader', // translates CSS into CommonJS modules
              },
              {
                loader: 'postcss-loader', // Run post css actions
                options: {
                  plugins: function () {
                    // post css plugins, can be exported to postcss.config.js
                    return [require('autoprefixer')];
                  },
                },
              },
              {
                loader: 'sass-loader', // compiles Sass to CSS
              },
            ],
          },
        ],
      },

};
