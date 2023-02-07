console.log("Selena Gomez");
//Initialize the variables
let songIndex = 0;
let audioElement = new Audio('Songs/1.mp3');
let masterPlayButton = document.getElementById("masterPlayButton");
let progressBar = document.getElementById("progressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName('songitem'));
let songs = [
    {songName: "A Year Without Rain", filePath: "Songs/1.mp3", coverPath: "Covers/a_year_without_rain.jpg"},
    {songName: "My Dilemma", filePath: "Songs/2", coverPath: "Covers/My_Dilemma.jpg"},
    {songName: "Love You Like A Love Song", filePath: "Songs/3", coverPath: "Covers/Love_You_Like_a_Love_Song.jpg"},
    {songName: "The Heart Wants What It Wants", filePath: "Songs/4", coverPath: "Covers/The-Heart_Wants_What_It_Wants.jpg"},
    {songName: "Me And The Rhythm", filePath: "Songs/5", coverPath: "Covers/Me_And_The_Rhythm.jpg"},
    {songName: "Hands To Myself", filePath: "Songs/6", coverPath: "Covers/Hands_To_Myself.jpg"},
    {songName: "Feel Me", filePath: "Songs/7", coverPath: "Covers/Feel_Me.jpg"}
]

document.getElementsByClassName('fa-circle-pause').iD = "songItemPlayButtonID";

songItems.forEach((element, i)=>{
    console.log(element, i);
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
})


// Handle Play/Pause
masterPlayButton.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();
        masterPlayButton.classList.remove('fa-circle-play');
        masterPlayButton.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
        document.getElementById(songIndex).classList.remove('fa-circle-play');
        document.getElementById(songIndex).classList.add('fa-circle-pause');
    }
    else{
        audioElement.pause();
        masterPlayButton.classList.remove('fa-circle-pause');
        masterPlayButton.classList.add('fa-circle-play');
        //enhance by me from here
        Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
            element.classList.remove('fa-circle-pause');
            element.classList.add('fa-circle-play');
        })
        //till here :)
        gif.style.opacity = 0;
    }
})

// Listen to Events
let progressInitial = audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    // Updating Seek Bar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    progressBar.value = progress;
    
})
progressBar.addEventListener('change', ()=>{
    audioElement.currentTime = progressBar.value*audioElement.duration/100;
})

//retrieve song name
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `Songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlayButton.classList.remove('fa-circle-play');
        masterPlayButton.classList.add('fa-circle-pause');
        
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=6){
        songIndex = 0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src = `Songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlayButton.classList.remove('fa-circle-play');
        masterPlayButton.classList.add('fa-circle-pause');
        //update
        let smallPlayButton = document.getElementById(songIndex);
        console.log("Selena Gomez Again");
        console.log(smallPlayButton);
        smallPlayButton.classList.remove('fa-circle-play');
        smallPlayButton.classList.add('fa-circle-pause');
        console.log("Selena Gomez Once Again");
        let previousSmallPlayButton = document.getElementById(songIndex-1);
        if(songIndex <= 0){
            previousSmallPlayButton = document.getElementById("6");
        }
        console.log(previousSmallPlayButton);
        previousSmallPlayButton.classList.add('fa-circle-play');
        previousSmallPlayButton.classList.remove('fa-circle-pause');
        
        })


document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 6;
    }
    else{
        songIndex -=1;
    }
    audioElement.src = `Songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlayButton.classList.remove('fa-circle-play');
        masterPlayButton.classList.add('fa-circle-pause');
        //update
        let smallPlayButton = document.getElementById(songIndex);
        console.log("Selena Gomez Again");
        console.log(smallPlayButton);
        smallPlayButton.classList.remove('fa-circle-play');
        smallPlayButton.classList.add('fa-circle-pause');
        console.log("Selena Gomez Once Again");
        let previousSmallPlayButton = document.getElementById(songIndex+1);
        if(songIndex >=6){
            previousSmallPlayButton = document.getElementById("0");
            console.log(songIndex);
        }
        console.log(previousSmallPlayButton);
        previousSmallPlayButton.classList.add('fa-circle-play');
        previousSmallPlayButton.classList.remove('fa-circle-pause');
        
})

//enhanced by me from here
progressInitial = audioElement.addEventListener('timeupdate', ()=>{
    //move to next song
    if(progress == 100){
        songIndex +=1;
        if(songIndex >6){
            songIndex = 0;
        }
        audioElement.src = `Songs/${songIndex+1}.mp3`;
        console.log("Selena GOmez Now");
        console.log(audioElement.src);
        audioElement.play();
        masterSongName.innerText = songs[songIndex].songName;
        

        

    }
    
})

//till here:)