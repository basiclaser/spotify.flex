const songs = [{ artist: "Mapei, Giraffage", title: "Don't Wait - Giraffage Remix", album: "????", dateAdded: 10, likeSong: true, duration: 10 },
{ artist: "Donna Missal", title: "(to me) your face is love", album: "????", dateAdded: 20, likeSong: true, duration: 20 },
{ artist: "Autechre", title: "Eutow", album: "????", dateAdded: 20, likeSong: true, duration: 20 },
{ artist: "Daedelus", title: "Experience", album: "????", dateAdded: 30, likeSong: true, duration: 30 },
{ artist: "Luo", title: "Lucid Dream", album: "????", dateAdded: 40, likeSong: true, duration: 40 },
{ artist: "Daedelus", title: "Special Re: Quest", album: "????", dateAdded: 50, likeSong: true, duration: 50 },
{ artist: "Lone", title: "Jaded", album: "????", dateAdded: 60, likeSong: true, duration: 60 },
{ artist: "Trent Reznor and Atticus Ross", title: "A World Away", album: "????", dateAdded: 70, likeSong: true, duration: 70 },
{ artist: "Horizons Lone, Morgane Diet", title: "Hidden", album: "????", dateAdded: 80, likeSong: true, duration: 80 },
{ artist: "Lapalux", title: "Play Midnight Peelers", album: "????", dateAdded: 90, likeSong: true, duration: 90 },
{ artist: "Teebs", title: "Play Why Like This?", album: "????", dateAdded: 100, likeSong: true, duration: 100 },
{ artist: "Dirty Art Club", title: "Play Daysleeper", album: "????", dateAdded: 110, likeSong: true, duration: 110 },
{ artist: "Lone", title: "Play Breeze Out", album: "????", dateAdded: 120, likeSong: true, duration: 120 },
{ artist: "Lone", title: "Play Echo Paths", album: "????", dateAdded: 130, likeSong: true, duration: 130 },
{ artist: "Hong Kong Express", title: "Play Hong Kong 2046", album: "????", dateAdded: 140, likeSong: true, duration: 140 },
{ artist: "Youandewan", title: "Play Be Good To Me Poly", album: "????", dateAdded: 150, likeSong: true, duration: 150 },
{ artist: "GODTET", title: "Play Max Lush", album: "????", dateAdded: 160, likeSong: true, duration: 160 },
{ artist: "Photay", title: "Play Illusion Of Seclusion", album: "????", dateAdded: 170, likeSong: true, duration: 170 },
{ artist: "Photay", title: "Play Detox", album: "????", dateAdded: 180, likeSong: true, duration: 180 }
]


function dataToHTML(song, i) {
    return `
    <div class="horizontal main_playlist_viewer_table_row">
                    <div id="main_playlist_viewer_table_row_number">
                    ${i + 1}
                    </div>
                    <div id="main_playlist_viewer_table_row_title/artist">
                    ${song.artist}
                    ${song.title}
                    </div>
                    <div id="main_playlist_viewer_table_row_album ">
                    ${song.album}
                    </div>
                    <div id="main_playlist_viewer_table_row_date_added">
                    ${song.dateAdded}
                    </div>
                    <div id="main_playlist_viewer_table_row_likesSong">
                    ${song.likeSong}
                    </div>
                    <div id="main_playlist_viewer_table_row_duration">
                    ${song.duration}
                    </div>
                    <div id="main_playlist_viewer_table_row_other_option_dots">
                    ...
                    </div>
                </div>
                `
}

function playlistToHTML() {
    const songsHTML = []
    songs.forEach((song, i) => songsHTML.push(dataToHTML(song, i)))
    return songsHTML.join("")
}

document.querySelector("#main_playlist_viewer_table").innerHTML += playlistToHTML()