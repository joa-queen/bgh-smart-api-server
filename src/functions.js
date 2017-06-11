const lib = require('./lib.js');

export const getStatus = (req, res, next) => {
  const device = new lib.Device();
  device.setHomeId(req.query.homeId);
  device.setDeviceId(req.query.deviceId);

  device.login(req.query.email, req.query.password).then(() => {
    device.getStatus().then((data) => {
      res.status(200).send(data);
    })
  }).catch((error) => {
    res.status(500).send(error);
  });
}

export const setMode = (req, res, next) => {
  const device = new lib.Device();
  device.setHomeId(req.query.homeId);
  device.setDeviceId(req.query.deviceId);

  device.login(req.query.email, req.query.password).then(() => {
    device.getStatus().then((data) => {
      let mode = lib.MODE.NO_CHANGE;
      switch (req.query.mode) {
        case 'HEAT':
          mode = lib.MODE.HEAT;
          break;
        case 'COOL':
          mode = lib.MODE.COOL;
          break;
        case 'AUTO':
          mode = lib.MODE.AUTO;
          break;
        case 'OFF':
          mode = lib.MODE.OFF;
          break;
      }
      device.setMode(req.query.targetTemp, mode).then((result) => {
        res.status(200).send(result);
      }).catch((err) => {
        res.status(500).send(err);
      })
    })
  }).catch((error) => {
    console.error('Error', error);
  });
}