exports.handler = function (level) {
  var levelValue = 100;
  switch (level) {
    case 'TRACE' :
      levelValue = 0;
      break;
    case 'DEBUG' :
      levelValue = 1;
      break;
    case 'INFO' :
      levelValue = 2;
      break;
    case 'WARN' :
      levelValue = 3;
      break;
    case 'ERROR' :
      levelValue = 4;
      break;
    case 'FATAL' :
      levelValue = 5;
      break;
  }

  if (process.argv.join('').indexOf('mocha') > -1) {
    levelValue = 100;
  }

  return {
    trace : function (message) {
      if (levelValue <= 0) {
        console.log('TRACE : ' + message);
      }
    },
    debug : function (message) {
      if (levelValue <= 1) {
        console.log('DEBUG : ' + message);
      }
    },
    info : function (message) {
      if (levelValue <= 2) {
        console.log('INFO : ' + message);
      }
    },
    warn : function (message) {
      if (levelValue <= 3) {
        console.log('WARN : ' + message);
      }
    },
    error : function (message) {
      if (levelValue <= 4) {
        console.log('ERROR : ' + message);
      }
    },
    fatal : function (message) {
      if (levelValue <= 5) {
        console.log('FATAL : ' + message);
      }
    }
  }
}
