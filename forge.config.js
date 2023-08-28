module.exports = {
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      platforms: ["darwin", "linux"],
      authors: "harun",
      description: "electron app",
      config: {
        certificateFile: "./cert.pfx",
        certificatePassword: process.env.CERTIFICATE_PASSWORD,
      },
    },
  ],
};
