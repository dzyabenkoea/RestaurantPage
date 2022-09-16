import './menu.css'

const Menu = (() =>{
    function render() {
        document.querySelector('main').innerHTML = `
        <div class="container">
            <h1>Menu</h1>
            <table id="menu-table">
                <thead>
                <tr>
                    <td id="dish-table-header">Dish</td>
                    <td>Price</td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Dish 1</td>
                    <td>70$</td>
                </tr>
                <tr>
                    <td>Dish 1</td>
                    <td>70$</td>
                </tr>
                <tr>
                    <td>Dish 1</td>
                    <td>70$</td>
                </tr>
                <tr>
                    <td>Dish 1</td>
                    <td>70$</td>
                </tr>
                </tbody>
            </table>
        </div>`
    console.log('menu render')
    }

    return {render}
})()

export {Menu}