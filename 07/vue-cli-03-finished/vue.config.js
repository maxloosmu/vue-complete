// ERROR  ValidationError: Invalid options object. Dev Server has been initialized using an options object that does not match the API schema.
// - options has an unknown property 'publicPath'. These properties are valid:
//   object { allowedHosts?, bonjour?, client?, compress?, devMiddleware?, headers?, historyApiFallback?, host?, hot?, http2?, https?, ipc?, liveReload?, magicHtml?, onAfterSetupMiddleware?, onBeforeSetupMiddleware?, onListening?, open?, port?, proxy?, server?, setupExitSignals?, setupMiddlewares?, static?, watchFiles?, webSocketServer? }

module.exports = {
  devServer: {
    host: '0.0.0.0',
    allowedHosts: 'auto',
  },
}