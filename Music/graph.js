import {LGraph, LGraphCanvas, createNode} from 'litegraph';
var graph = new LGraph();

var canvas = new LGraphCanvas("#mycanvas", graph);

var node_const = createNode("basic/const");
node_const.pos = [200,200];
graph.add(node_const);
node_const.setValue(4.5);

var node_watch = createNode("basic/watch");
node_watch.pos = [700,200];
graph.add(node_watch);

node_const.connect(0, node_watch, 0 );

graph.start()