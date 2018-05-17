var APP_DATA = {
  "scenes": [
    {
      "id": "0-bao",
      "name": "Baño",
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
        "yaw": 0.7206914877786037,
        "pitch": 0.037038367175334486,
        "fov": 1.5601080270670864
      },
      "linkHotspots": [
        {
          "yaw": -2.5095454241190644,
          "pitch": 0.07219890186487632,
          "rotation": 14.137166941154074,
          "target": "3-habitacion-master"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-cocina",
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
        "yaw": -3.117481075105964,
        "pitch": 0.048331875904413124,
        "fov": 1.5601080270670864
      },
      "linkHotspots": [
        {
          "yaw": 0.0735796021099624,
          "pitch": 0.04506425499928213,
          "rotation": 3.141592653589793,
          "target": "2-sala"
        },
        {
          "yaw": 1.3190384363421437,
          "pitch": 0.042656245354351086,
          "rotation": 7.853981633974483,
          "target": "4-habitacion"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-sala",
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
        "yaw": -2.195157587242189,
        "pitch": 0.004987735488249712,
        "fov": 1.5601080270670864
      },
      "linkHotspots": [
        {
          "yaw": 0.0040114931797266,
          "pitch": 0.06135923695990009,
          "rotation": 4.71238898038469,
          "target": "3-habitacion-master"
        },
        {
          "yaw": 1.0805661638091628,
          "pitch": 0.106145255158685,
          "rotation": 15.707963267948973,
          "target": "1-cocina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-habitacion-master",
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
        "yaw": 0.6337017047964046,
        "pitch": 0.01917803878916402,
        "fov": 1.5601080270670864
      },
      "linkHotspots": [
        {
          "yaw": -1.7980371772391344,
          "pitch": 0.08170504779785759,
          "rotation": 1.5707963267948966,
          "target": "2-sala"
        },
        {
          "yaw": 2.5273397517039164,
          "pitch": 0.09573807228704467,
          "rotation": 4.71238898038469,
          "target": "0-bao"
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
        "yaw": -0.40823081366572467,
        "pitch": 0.013209656772090739,
        "fov": 1.5601080270670864
      },
      "linkHotspots": [
        {
          "yaw": 1.7306544001421695,
          "pitch": 0.0025743929894268547,
          "rotation": 1.5707963267948966,
          "target": "2-sala"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Torre Limon",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
