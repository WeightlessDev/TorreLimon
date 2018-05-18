var APP_DATA = {
  "scenes": [
    {
      "id": "0-sala",
      "name": "Sala",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -2.094019815801076,
        "pitch": 0.13656118008812257,
        "fov": 1.5601080270670864
      },
      "linkHotspots": [
        {
          "yaw": 0.005752317288436615,
          "pitch": 0.047215035483617385,
          "rotation": 0,
          "target": "1-habitacion-master"
        },
        {
          "yaw": 1.0651550611807128,
          "pitch": 0.06411090295073762,
          "rotation": 0,
          "target": "3-cocina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-habitacion-master",
      "name": "Habitacion Master",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.28718599510089327,
        "pitch": 0.014483761524513028,
        "fov": 1.5601080270670864
      },
      "linkHotspots": [
        {
          "yaw": 2.612342809643831,
          "pitch": 0.0638022156568887,
          "rotation": 0,
          "target": "2-bao-master"
        },
        {
          "yaw": -1.8573597695443436,
          "pitch": 0.06427135119769645,
          "rotation": 0,
          "target": "0-sala"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-bao-master",
      "name": "Baño Master",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.9631044145096066,
        "pitch": 0.18828889981843133,
        "fov": 1.5601080270670864
      },
      "linkHotspots": [
        {
          "yaw": -2.5920052888144838,
          "pitch": -0.06556715505421273,
          "rotation": 0,
          "target": "1-habitacion-master"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-cocina",
      "name": "Cocina",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -2.9942656001220485,
        "pitch": 0.1569635808284673,
        "fov": 1.5601080270670864
      },
      "linkHotspots": [
        {
          "yaw": 1.337663604705,
          "pitch": 0.04715400565296868,
          "rotation": 0,
          "target": "4-habitacion"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-habitacion",
      "name": "Habitacion",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.3633458170060955,
        "pitch": 0.07034955705054458,
        "fov": 1.5601080270670864
      },
      "linkHotspots": [
        {
          "yaw": 1.8275949034535053,
          "pitch": 0.02838395008195249,
          "rotation": 0,
          "target": "0-sala"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Torre Limon",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
