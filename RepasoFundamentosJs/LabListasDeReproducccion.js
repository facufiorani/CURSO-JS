const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122,
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108,
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128,
    },
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115,
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124,
    },
  ],
];

function flattenPlaylists(array) {
    if (!Array.isArray(array)) {
        return []
    }
    const flatArray  = [] 
    for (let i = 0; i < array.length;i++) {
        for (let j = 0; j < array[i].length; j++) {
            const objeto = {
                ...array[i][j],
                source: [i, j],
            }
            flatArray.push(objeto)
            
        }
    }
    return flatArray
}    

function scoreTracks(array) {
    if (!Array.isArray(array)) {
        return []
    }
    const trackArray  = [] 
    for (let i = 0; i < array.length;i++) {
            const objeto = {
            ...array[i],
            score: array[i].votes * 10 - Math.abs(array[i].bpm - 120),
            };
            trackArray.push(objeto)
            
    }
    return trackArray
}

function dedupeTracks(tracks) {
    const seen = new Set();
    const result = [];
    for (let i = 0; i < tracks.length; i++) {
        if (!seen.has(tracks[i].trackId)) {
        seen.add(tracks[i].trackId);
        result.push(tracks[i]);
        }
    }
    return result;
}
function enforceArtistQuota(array, maxPerArtist) {
    const result = [];
    const conteo = {};
    array.forEach((element) => {
    conteo[element.artist] = conteo[element.artist] || 0
    if ((conteo[element.artist] || 0) < maxPerArtist) {
        result.push(element);
        conteo[element.artist]++;
    }
    });
    return result;
}

function buildSchedule(array) {
    const result = []
    array.forEach((element, index) => {
        const obj = {
            slot: index + 1,
            trackId: element.trackId
        }
        result.push(obj)
    })
    return result
}

function remixPlaylist(array, numMax){
    const res1 = flattenPlaylists(array)
    const res2 = scoreTracks(res1)
    const res3 = dedupeTracks(res2)
    const res4 = enforceArtistQuota(res3, numMax)
    const res5 = buildSchedule(res4)
    return res5
}

// --- Tests ---

// Velvet Comet aparece 2 veces en los datos, con max 1 solo debería quedar la primera
console.log("=== max 1 por artista ===")
console.log(remixPlaylist(playlists, 1))

// Con max 2, Velvet Comet debería aparecer las dos veces
console.log("=== max 2 por artista ===")
console.log(remixPlaylist(playlists, 2))