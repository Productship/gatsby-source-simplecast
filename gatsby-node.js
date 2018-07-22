'use strict';

exports.sourceNodes = function (_ref, configOptions) {
  var boundActionCreators = _ref.boundActionCreators,
      createNodeId = _ref.createNodeId;
  var createNode = boundActionCreators.createNode;

  // Gatsby adds a configOption that's not needed for this plugin, delete it

  delete configOptions.plugins;

  // plugin code goes here...
  console.log('Testing my plugin', configOptions);
};