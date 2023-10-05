module.exports = {
  packagerConfig: {
    icon: './src/assets/tcc.ico'
  },
  rebuildConfig: {},
  publishers: [
    {
      "name": "@electron-forge/publisher-github",
      "config": {
        "repository": {
          "owner": "dvijtest",
          "name": "tcc-wavebotdex"
        }
      }
    }
  ],
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        authors: 'Ajay Ahire',
        iconUrl: 'https://thecryptocode.com/wp-content/uploads/2022/11/fav-512x512-1.png',
        icon: './src/assets/tcc.ico',
        exe: 'wavebotdex.exe',
        name: "WaveBotDex",
      },
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
      config: {
        authors: 'Ajay Ahire',
        icon: './src/assets/tcc.ico',
        iconUrl: 'https://thecryptocode.com/wp-content/uploads/2022/11/fav-512x512-1.png',
        name: "WaveBotDex",
      },
    },
    {
      name: '@electron-forge/maker-deb',
      config: {
        authors: 'Ajay Ahire',
        icon: './src/assets/tcc.ico',
        iconUrl: 'https://thecryptocode.com/wp-content/uploads/2022/11/fav-512x512-1.png',
        name: "WaveBotDex",
      },
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
};
