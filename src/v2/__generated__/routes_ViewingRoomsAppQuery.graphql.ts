/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type routes_ViewingRoomsAppQueryVariables = {};
export type routes_ViewingRoomsAppQueryResponse = {
    readonly viewer: {
        readonly " $fragmentRefs": FragmentRefs<"ViewingRoomsApp_viewer">;
    } | null;
};
export type routes_ViewingRoomsAppQuery = {
    readonly response: routes_ViewingRoomsAppQueryResponse;
    readonly variables: routes_ViewingRoomsAppQueryVariables;
};



/*
query routes_ViewingRoomsAppQuery {
  viewer {
    ...ViewingRoomsApp_viewer
  }
}

fragment ViewingRoomsApp_viewer on Viewer {
  ...ViewingRoomsLatestGrid_viewingRoomsConnection
}

fragment ViewingRoomsLatestGrid_viewingRoomsConnection on Viewer {
  viewingRoomsConnection(first: 10) {
    edges {
      node {
        slug
        status
        title
        heroImageURL
        distanceToOpen(short: true)
        distanceToClose(short: true)
        partner {
          name
          id
        }
        artworksConnection(first: 2) {
          totalCount
          edges {
            node {
              image {
                square: url(version: "square")
                regular: url(version: "large")
              }
              id
            }
          }
        }
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "short",
    "value": true
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "routes_ViewingRoomsAppQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "ViewingRoomsApp_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "routes_ViewingRoomsAppQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "viewingRoomsConnection",
            "storageKey": "viewingRoomsConnection(first:10)",
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 10
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
                          },
                          (v1/*: any*/)
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
                                  },
                                  (v1/*: any*/)
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
  },
  "params": {
    "operationKind": "query",
    "name": "routes_ViewingRoomsAppQuery",
    "id": null,
    "text": "query routes_ViewingRoomsAppQuery {\n  viewer {\n    ...ViewingRoomsApp_viewer\n  }\n}\n\nfragment ViewingRoomsApp_viewer on Viewer {\n  ...ViewingRoomsLatestGrid_viewingRoomsConnection\n}\n\nfragment ViewingRoomsLatestGrid_viewingRoomsConnection on Viewer {\n  viewingRoomsConnection(first: 10) {\n    edges {\n      node {\n        slug\n        status\n        title\n        heroImageURL\n        distanceToOpen(short: true)\n        distanceToClose(short: true)\n        partner {\n          name\n          id\n        }\n        artworksConnection(first: 2) {\n          totalCount\n          edges {\n            node {\n              image {\n                square: url(version: \"square\")\n                regular: url(version: \"large\")\n              }\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '3ca6bf8c3123f7e1af70e5f208af3a58';
export default node;
