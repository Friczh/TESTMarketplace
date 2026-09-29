// ==BWSubmodule==
// @name      Test Echo
// @version   1.1.0
// @provides  bw.testEcho
// @grant     bw.tabs
// ==/BWSubmodule==

export const methods = {
  echo: async (_ctx, value) => value,
  ping: async () => 'pong',
};
