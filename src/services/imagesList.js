const imagesList = ["https://i.imgur.com/c0gycsK.jpg", "https://i.imgur.com/y5Uyc94.jpg", "https://i.imgur.com/xg9BNBk.jpg", "https://i.imgur.com/mu6l0iL.jpg", "https://i.imgur.com/hMV4SPg.jpg", "https://i.imgur.com/rFcYXEc.jpg", "https://i.imgur.com/D0zgERz.jpg", "https://i.imgur.com/3TMvys4.jpg", "https://i.imgur.com/oHfeWPB.jpg", "https://i.imgur.com/V3wgPKY.jpg", "https://i.imgur.com/Lw9Lk2l.jpg", "https://i.imgur.com/BhfeOcr.jpg"]

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export const randomImagesList = shuffleArray(imagesList)