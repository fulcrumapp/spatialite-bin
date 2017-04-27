const dirs = {
  linux: 'linux',
  win32: 'win',
  darwin: 'mac'
};

export const spatialitePath = path.resolve(path.join(__dirname, 'lib', dirs[process.platform] || 'linux', 'mod_spatialite'));
