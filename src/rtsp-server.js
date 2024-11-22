const WebSocket = require('ws');
const Stream = require('node-rtsp-stream');

const PORT = 9998;

const stream = new Stream({
  name: 'name',
  streamUrl: 'rtsp://10.250.5.14/1',
  wsPort: PORT,
  ffmpegOptions: {
    '-stats': '',
    '-r': 30,
    '-f': 'mpegts',
    '-codec:v': 'mpeg1video',
    '-b:v': '800k',
  }
});

stream.on('error', (error) => {
  console.error('Stream error:', error);
});

console.log(`WebSocket server is running on port ${PORT}`); 