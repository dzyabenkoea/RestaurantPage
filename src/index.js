import {Header} from './header'
import {Menu} from "./menu";
import './index.css'

import './photo-slider.css'

import rest1 from './images/restPhotos/rest1.jpg'
import rest2 from './images/restPhotos/rest2.jpeg'
import rest3 from './images/restPhotos/rest3.jpg'


const MainContent = (function () {
    let prevActive = null
    const images = [rest1, rest2, rest3]

    const switchImage = function (event) {
        const image = document.querySelector('#photo-image')
        const link = event.target.closest('li')
        if (prevActive !== null) {
            prevActive.classList.remove('active')
        }
        prevActive = link
        link.classList.toggle('active')
        image.src = images[link.dataset.photoIndex]
    }

    function render() {
        const htmlMarkup = `
        <div class="container">
            <article class="description-block">
                <img class="description-image" alt="cool picture of restaurant">
                <div class="header-description">
                    <h1>Best in the city</h1>
                    <p class="description">
                        Eden is the playground of chef Herman Cooijmans and sommelier Robin Groos. Their little piece of
                        paradise
                        has a nice vintage feel and exudes warmth thanks to the use of natural elements and colours. The
                        cuisine
                        displays artistry and subtlety, flavoured with global influences – the chef likes to use spices from
                        the
                        Middle East to add a touch of exotic flair.
                        <br>
                        His talent is also apparent from the contrasting combinations he brings to the plate. Although
                        dishes
                        such
                        as watermelon with spicy curry and skate with strawberry might sound a bit unusual, the tastes and
                        flavours
                        this chef manages to create are remarkable.
                        <br>
                        The exquisite wine pairings further highlight the fine cuisine, ensuring that wine-lovers will find
                        their
                        own little Garden of Eden here!
                    </p>
                </div>
            </article>
            <ul id="photo-slider">
            </ul>
            <img id="photo-image" hidden>
        </div>`
        document.querySelector('main').innerHTML = htmlMarkup
        document.querySelector('.description-image').src = rest1
        const photoSlider = document.querySelector('#photo-slider')
        if (images !== null) {
            console.log(images)
            images.forEach((image, index) => {
                console.log(image)
                const link = document.createElement('li')
                link.textContent = `${index + 1}`
                link.dataset.photoIndex = index.toString()
                link.addEventListener('click', switchImage)
                photoSlider.append(link)
            })

            const photoImage = document.querySelector('#photo-image')
            if (images.length !== 0) {
                photoImage.src = images[0]
                photoImage.hidden = false
            }
        }
    }

    return {render}
})()

Header.render()
MainContent.render()
Header.events.onMain = MainContent.render
Header.events.onMenu = Menu.render