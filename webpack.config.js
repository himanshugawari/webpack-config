module.exports = (env) => {
  let liveReolad = env.production
    ? { mode: 'production', target: 'browserslist' }
    : { mode: 'development', target: 'web' };
  return {
    ...liveReolad,
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    devtool: 'source-map',
    devServer: {
      contentBase: './dist',
      hot: true,
    },
  };
};
