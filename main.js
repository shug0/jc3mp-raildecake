'use strict';

global.cake = {
  commands: jcmp.events.Call('get_command_manager')[0],
  chat: jcmp.events.Call('get_chat')[0],
  colors: {
    red: new RGB(255, 0, 0),
    green: new RGB(0, 255, 0),
    orange: new RGB(255, 140, 0),
    purple: new RGB(220, 198, 224),
  }
};

require('./commands/player');