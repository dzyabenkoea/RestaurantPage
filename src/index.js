import tripadvisor_logo from './images/Tripadvisor_lockup_horizontal_secondary_registered.svg'

function Header() {
    function render() {
        return `
        <img id="logo" src={tripadvisor_logo} alt="Логотип">
        <nav>
            <ul class="menu-list">
                <li><a class="menu-link" href="./index.html">Main</a></li>
                <li><a class="menu-link" href="./menu.html">Menu</a></li>
                <li>Photos</li>
                <li>Contacts</li>
            </ul>
        </nav>`
    }
    const head = document.querySelector('head')
    head.innerHTML = render()
}

Header()