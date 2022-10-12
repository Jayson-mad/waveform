var playlist = WaveformPlaylist.init({
  samplesPerPixel: 13000,
  waveHeight: 100,
  container: document.getElementById("playlist"),
  timescale: true,
  state: "cursor",
  colors: {
    waveOutlineColor: "white",
  },
  controls: {
    show: true, //whether or not to include the track controls
    width: 200, //width of controls in pixels
  },
  zoomLevels: [500, 1000, 3000, 13000],
});

playlist
  .load([
    {
      src: "media/audio/Click-Track.wav",
      name: "Click Track",
      selected: {
        start: 100,
        end: 145
      },
      states: {
        cursor: false,
        select: false,
        shift: false,
        fadein: false,
        fadeout: false
      }
    },
    {
      src: "media/audio/Guide.wav",
      name: "Guide",
      selected: {
        start: 100,
        end: 145
      },
      states: {
        cursor: false,
        select: false,
        shift: false,
        fadein: false,
        fadeout: false
      }
    },
    {
      src: "media/audio/Bass.wav",
      name: "Bass",
      selected: {
        start: 100,
        end: 145
      },
      states: {
        cursor: false,
        select: false,
        shift: false,
        fadein: false,
        fadeout: false
      }
    },
    {
      src: "media/audio/AG.wav",
      name: "AG",
      selected: {
        start: 100,
        end: 145
      },
      states: {
        cursor: false,
        select: false,
        shift: false,
        fadein: false,
        fadeout: false
      }
    },
  ])
  .then(function () {
    //can do stuff with the playlist.
  });
