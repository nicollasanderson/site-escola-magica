import img0 from "../assets/Castelo/0.jpg"
import img1 from "../assets/Castelo/1.jpg"
import img2 from "../assets/Castelo/2.jpg"
import img3 from "../assets/Castelo/3.jpg"
import img4 from "../assets/Castelo/4.jpg"
import img5 from "../assets/Castelo/5.jpg"
import img6 from "../assets/Castelo/6.jpg"
import img7 from "../assets/Castelo/7.jpg"
import img8 from "../assets/Castelo/8.jpg"
import img9 from "../assets/Castelo/9.jpg"
import img10 from "../assets/Castelo/10.jpg"
import img11 from "../assets/Castelo/11.jpg"

const imagesList = [img0, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11]

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export const randomImagesList = shuffleArray(imagesList)