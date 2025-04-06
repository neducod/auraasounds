/*
function filterItems(category) {
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
        if (category === 'all' || item.getAttribute('data-category') === category) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
}
*/
//COLOR FOR EACH MOOD
const moodColors = {
    romance: " #c73737",
    happy: "#FFF9C4",     // soft yellow
    sad: "#BBDEFB",       // light blue
    focused: "#E0F7FA",   // light cyan
    nostalgic: "#F3E5F5", // lavender
    angry: "#FFCDD2",     // soft red
    chill: "#D7CCC8",     // muted coffee brown
  };

  

  
  const playlists = {
    sad: [
      {
        title: "Tears & Tissue 🧻",
        embedUrl: "https://www.youtube.com/embed/playlistID1"
      },
      {
        title: "Healing Vibes 💙",
        embedUrl: "https://www.youtube.com/embed/playlistID2"
      }
    ],
    happy: [
      {
        title: "Sunshine Beats ☀️",
        embedUrl: "https://www.youtube.com/embed/playlistID3"
      },
      {
        title: "Dance Like Nobody’s Watching 💃",
        embedUrl: "https://music.youtube.com/playlist?list=RDCLAK5uy_kJWGcrtTC_zrbD6rKkBvOcht_vzijhX1A&playnext=1&si=Q3_eJL0shGfL-J3r"
      }
    ],
    // add more moods as needed
  };
  
  function showPlaylist(mood) {
    const moodPlaylists = playlists[mood];
    const container = document.getElementById("playlistContainer");
    const appWrapper = document.body; // or document.getElementById("app")
  
    container.innerHTML = ""; // Clear previous content

     // Change background color
    const bgColor = moodColors[mood] || "#ffffff";
    appWrapper.style.backgroundColor = bgColor;
    
     // Create playlist sections
    moodPlaylists.forEach((playlist) => {
      const title = document.createElement("h3");
      title.textContent = playlist.title;
  
      const iframe = document.createElement("iframe");
      iframe.width = "560";
      iframe.height = "315";
      iframe.src = playlist.embedUrl;
      iframe.frameBorder = "0";
      iframe.allowFullscreen = true;
  
      container.appendChild(title);
      container.appendChild(iframe);
    });
  }
  






/*

  function showPlaylist(mood) {
    const playlist = playlists[mood];
    document.getElementById("playlistTitle").textContent = playlist.title;
    document.getElementById("player").src = playlist.embedUrl;
  }
  */