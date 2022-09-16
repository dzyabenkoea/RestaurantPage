import tripadvisor_logo from "./images/Tripadvisor_lockup_horizontal_secondary_registered.svg";
import './header.css'


const Header = (() => {

    let _onMain = () => {
        console.log('Not implemented')
    }
    let _onMenu = () => {
        console.log('Not implemented')
    }
    let _onPhotos = () => {
        console.log('Not implemented')
    }
    let _onContacts = () => {
        console.log('Not implemented')
    }

    const head = document.querySelector('header')

    let prevActiveLink = null

    function activateLink(link) {
        if (prevActiveLink !== null)
            prevActiveLink.classList.remove('active')
        link.classList.add('active')
        prevActiveLink = link
    }

    let events = {
        get onMain() {
            return _onMain
        },
        set onMain(handler) {
            const link = head.querySelector('#main-link')
            link.removeEventListener('click', _onMain)
            _onMain = () => {
                activateLink(link)
                handler()
            }
            link.addEventListener('click', _onMain)
        },
        get onMenu() {
            return _onMenu
        },
        set onMenu(handler) {
            const link = head.querySelector('#menu-link')
            link.removeEventListener('click', _onMenu)
            _onMenu = () => {
                activateLink(link)
                handler()
            }
            link.addEventListener('click', _onMenu)
        }
    }

    function render() {
        const templateHTML = `
        <img id="logo" src="" alt="Логотип">
        <nav>
            <ul class="menu-list">
                <li id="main-link"><a class="menu-link">Main</a></li>
                <li id="menu-link"><a class="menu-link">Menu</a></li>
                <li id="photos-link">Photos</li>
                <li id="contacts-link">Contacts</li>
            </ul>
        </nav>`

        const head = document.querySelector('header')
        head.innerHTML = templateHTML
        const img = head.querySelector('#logo')
        img.id = 'logo'
        img.alt = 'Логотип'
        img.src = tripadvisor_logo

        // add event listeners for each menu item
        head.querySelector('#main-link').addEventListener('click', _onMain)
        head.querySelector('#menu-link').addEventListener('click', _onMenu)
        head.querySelector('#photos-link').addEventListener('click', _onPhotos)
        head.querySelector('#contacts-link').addEventListener('click', _onContacts)
    }

    // return {render, events: {onMain, onMenu, onPhotos, onContacts}}
    return {render, events}
})()

export {Header}