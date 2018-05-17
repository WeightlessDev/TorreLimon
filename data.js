var APP_DATA = {
  "scenes": [
    {
      "id": "0-livingweb",
      "name": "LivingWeb",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "yaw": -1.5475788433317916,
        "pitch": 0.06333378433416392,
        "fov": 1.751629782731934
      },
      "linkHotspots": [
        {
          "yaw": 0.00041528167144377903,
          "pitch": 0.022685761019953787,
          "rotation": 0,
          "target": "2-masterweb"
        },
        {
          "yaw": 1.2267660031900594,
          "pitch": 0.04729286632466234,
          "rotation": 0,
          "target": "1-kitchenweb"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.5454210051705477,
          "pitch": 0.0689533421610129,
          "title": "Cocina",
          "text": "Cocina Descripcion<br>"
        }
      ]
    },
    {
      "id": "1-kitchenweb",
      "name": "KitchenWeb",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "yaw": -3.1042026756316616,
        "pitch": 0.11467488957281802,
        "fov": 1.751629782731934
      },
      "linkHotspots": [
        {
          "yaw": 0.06764608076748857,
          "pitch": 0.06462833703297122,
          "rotation": 0,
          "target": "0-livingweb"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-masterweb",
      "name": "MasterWeb",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.0110499541850793,
          "pitch": 0.07862104423231564,
          "rotation": 0,
          "target": "0-livingweb"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "wg360",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
