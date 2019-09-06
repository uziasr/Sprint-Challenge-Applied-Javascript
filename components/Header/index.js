// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    const header = document.createElement('div')
    const date = document.createElement('span')
    const headerTitle = document.createElement('h1')
    const temperature = document.createElement('span')
    
    //adding class
    header.classList.add('header')
    date.classList.add('date')
    temperature.classList.add('temp')

    //adding content
    date.textContent = 'SMARCH 28, 2019'
    headerTitle.textContent = 'Lambda Times'
    temperature.textContent = '98°'

    //appending children
    header.appendChild(date)
    header.appendChild(headerTitle)
    header.appendChild(temperature)

    return header
}

const headerContainer = document.querySelector('.header-container')
headerContainer.appendChild(Header())