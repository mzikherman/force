/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ViewingRoomsLatestGrid_viewingRoomsConnection = {
    readonly viewingRoomsConnection: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly slug: string;
                readonly status: string;
                readonly title: string;
                readonly heroImageURL: string | null;
                readonly distanceToOpen: string | null;
                readonly distanceToClose: string | null;
                readonly partner: {
                    readonly name: string | null;
                } | null;
                readonly artworksConnection: {
                    readonly totalCount: number | null;
                    readonly edges: ReadonlyArray<{
                        readonly node: {
                            readonly image: {
                                readonly square: string | null;
                                readonly regular: string | null;
                            } | null;
                        } | null;
                    } | null> | null;
                } | null;
            } | null;
        } | null> | null;
    } | null;
    readonly " $refType": "ViewingRoomsLatestGrid_viewingRoomsConnection";
};
export type ViewingRoomsLatestGrid_viewingRoomsConnection$data = ViewingRoomsLatestGrid_viewingRoomsConnection;
export type ViewingRoomsLatestGrid_viewingRoomsConnection$key = {
    readonly " $data"?: ViewingRoomsLatestGrid_viewingRoomsConnection$data;
    readonly " $fragmentRefs": FragmentRefs<"ViewingRoomsLatestGrid_viewingRoomsConnection">;
};



const node: ReaderFragment = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "short",
    "value": true
  }
];
return {
  "kind": "Fragment",
  "name": "ViewingRoomsLatestGrid_viewingRoomsConnection",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "count",
      "type": "Int",
      "defaultValue": 10
    },
    {
      "kind": "LocalArgument",
      "name": "after",
      "type": "String",
      "defaultValue": null
    }
  ],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "viewingRoomsConnection",
      "storageKey": null,
      "args": [
        {
          "kind": "Variable",
          "name": "after",
          "variableName": "after"
        },
        {
          "kind": "Variable",
          "name": "first",
          "variableName": "count"
        }
      ],
      "concreteType": "ViewingRoomConnection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "ViewingRoomEdge",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": "ViewingRoom",
              "plural": false,
              "selections": [
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "slug",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "status",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "title",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "heroImageURL",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "distanceToOpen",
                  "args": (v0/*: any*/),
                  "storageKey": "distanceToOpen(short:true)"
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "distanceToClose",
                  "args": (v0/*: any*/),
                  "storageKey": "distanceToClose(short:true)"
                },
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "partner",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "Partner",
                  "plural": false,
                  "selections": [
                    {
                      "kind": "ScalarField",
                      "alias": null,
                      "name": "name",
                      "args": null,
                      "storageKey": null
                    }
                  ]
                },
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "artworksConnection",
                  "storageKey": "artworksConnection(first:2)",
                  "args": [
                    {
                      "kind": "Literal",
                      "name": "first",
                      "value": 2
                    }
                  ],
                  "concreteType": "ArtworkConnection",
                  "plural": false,
                  "selections": [
                    {
                      "kind": "ScalarField",
                      "alias": null,
                      "name": "totalCount",
                      "args": null,
                      "storageKey": null
                    },
                    {
                      "kind": "LinkedField",
                      "alias": null,
                      "name": "edges",
                      "storageKey": null,
                      "args": null,
                      "concreteType": "ArtworkEdge",
                      "plural": true,
                      "selections": [
                        {
                          "kind": "LinkedField",
                          "alias": null,
                          "name": "node",
                          "storageKey": null,
                          "args": null,
                          "concreteType": "Artwork",
                          "plural": false,
                          "selections": [
                            {
                              "kind": "LinkedField",
                              "alias": null,
                              "name": "image",
                              "storageKey": null,
                              "args": null,
                              "concreteType": "Image",
                              "plural": false,
                              "selections": [
                                {
                                  "kind": "ScalarField",
                                  "alias": "square",
                                  "name": "url",
                                  "args": [
                                    {
                                      "kind": "Literal",
                                      "name": "version",
                                      "value": "square"
                                    }
                                  ],
                                  "storageKey": "url(version:\"square\")"
                                },
                                {
                                  "kind": "ScalarField",
                                  "alias": "regular",
                                  "name": "url",
                                  "args": [
                                    {
                                      "kind": "Literal",
                                      "name": "version",
                                      "value": "large"
                                    }
                                  ],
                                  "storageKey": "url(version:\"large\")"
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
})();
(node as any).hash = 'f4401da9df0b3f4497d17ae4a7da44a8';
export default node;
