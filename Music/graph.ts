import { NodeEditor, GetSchemes, ClassicPreset } from "rete";
import { AreaPlugin, AreaExtensions } from "rete-area-plugin";
import {
  ConnectionPlugin,
  Presets as ConnectionPresets,
} from "rete-connection-plugin";
import { LitPlugin, Presets, LitArea2D } from "@retejs/lit-plugin";
import { ContextMenuPlugin, Presets as ContextMenuPresets, ContextMenuExtra } from "rete-context-menu-plugin";
type Schemes = GetSchemes<
  ClassicPreset.Node,
  ClassicPreset.Connection<ClassicPreset.Node, ClassicPreset.Node>
>;
type AreaExtra = LitArea2D<Schemes> | ContextMenuExtra;
class Node extends ClassicPreset.Node {
  width = 180;
  height = 120;

  constructor(socket: ClassicPreset.Socket) {
    super("Node");
    this.addInput("port", new ClassicPreset.Input(socket));
    this.addOutput("port", new ClassicPreset.Output(socket));
  }
}
export async function createEditor(container: HTMLElement) {
  const socket = new ClassicPreset.Socket("socket");

  const editor = new NodeEditor<Schemes>();
  const area = new AreaPlugin<Schemes, AreaExtra>(container);
  const connection = new ConnectionPlugin<Schemes, AreaExtra>();
  const render = new LitPlugin<Schemes, AreaExtra>();
  const contextMenu = new ContextMenuPlugin<Schemes>({
    items: ContextMenuPresets.classic.setup([["Node", () => new Node(socket)]])
  });

  AreaExtensions.selectableNodes(area, AreaExtensions.selector(), {
    accumulating: AreaExtensions.accumulateOnCtrl(),
  });

  render.addPreset(Presets.classic.setup());
  render.addPreset(Presets.contextMenu.setup());
  connection.addPreset(ConnectionPresets.classic.setup());

  editor.use(area);
  area.use(connection);
  area.use(render);
  area.use(contextMenu);
  AreaExtensions.simpleNodesOrder(area);

  // const a = new ClassicPreset.Node("A");
  // a.addControl("a", new ClassicPreset.InputControl("text", { initial: "a" }));
  // a.addOutput("a", new ClassicPreset.Output(socket));
  // await editor.addNode(a);

  // const b = new ClassicPreset.Node("B");
  // b.addControl("b", new ClassicPreset.InputControl("text", { initial: "b" }));
  // b.addInput("b", new ClassicPreset.Input(socket));
  // await editor.addNode(b);

  // await editor.addConnection(new ClassicPreset.Connection(a, "a", b, "b"));

  // await area.translate(a.id, { x: 0, y: 0 });
  // await area.translate(b.id, { x: 270, y: 0 });

  setTimeout(() => {
    // wait until nodes rendered because they dont have predefined width and height
    AreaExtensions.zoomAt(area, editor.getNodes());
  }, 10);
  return {
    destroy: () => area.destroy(),
  };
}