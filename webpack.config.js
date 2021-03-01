module.exports = (env) => {
  let mode = env.production ? 'production' : 'development';
  console.log(mode);
  return {
    mode: mode,
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
      ],
    },
    devtool: 'source-map',
    devServer: {
      contentBase: './dist',
    },
  };
};
