/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ViewingRoomsApp_viewer = {
    readonly " $fragmentRefs": FragmentRefs<"ViewingRoomsLatestGrid_viewingRoomsConnection">;
    readonly " $refType": "ViewingRoomsApp_viewer";
};
export type ViewingRoomsApp_viewer$data = ViewingRoomsApp_viewer;
export type ViewingRoomsApp_viewer$key = {
    readonly " $data"?: ViewingRoomsApp_viewer$data;
    readonly " $fragmentRefs": FragmentRefs<"ViewingRoomsApp_viewer">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "ViewingRoomsApp_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "ViewingRoomsLatestGrid_viewingRoomsConnection",
      "args": null
    }
  ]
};
(node as any).hash = '676368ed986f639a0f04f5085e9e9c63';
export default node;
