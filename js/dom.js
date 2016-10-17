var body = document.body
console.log(body)

var h1 = document.body.childNodes[1]
console.log(h1)

var helloWorld = h1.innerHTML
console.log(helloWorld)

h1.innerHTML = ' Hello Universe'
console.log(h1.childNodes)

// you will see this in code
var helloH1 =
    document.getElementById('hello')
    // console.log(helloH1)

//not used that often
var navItems =
    document.querySelectorAll('body *')
    console.log(navItems)

//modern way because you can use selector like css
var navItem =
document.getElementsByClassName('nav-item')
console.log(navItem)

//using just querySelector returns the first object match instead of all of them.
// var helloId = document.querySelector('#hello')
// console.log(helloId)

// this method can take anything that looks like an array and convert it into an array. Use Array.from() to convert
// console.log(Array.from(navItems).includes('li'))

//faster way of doing it without converting it



navItems.forEach(function(navItem){
    navItem.addEventListener('mouseover', function(e){
        e.target.classList.add('red')
    })
    navItem.addEventListener('mouseout', function(e){
        e.target.classList.remove('red')
    })
    navItem.addEventListener('click', function(e){
        e.target.remove()
    })
        // if (navItem.tagName == 'LI' && navItem.classList.contains('active')){
        //     // navItem.style.color = 'red'
        //     navItem.classList.add('red')
        // }
})


var navItems = document.querySelectorAll('.nav-item')
    navItems.forEach(function(navItem){
        console.log(navItem.id)
        console.log(navItem.getAttribute('title'))
        console.log(navItem.getAttribute('data-details'))
        console.log(navItem.setAttribute('title', 'foo'))
        navItem.innerHTML = '<a href="http://google.com">' +
        navItem.getAttribute('data-details') + '</a>'
        console.log(navItem.tagName)
        console.log(navItem.className)
})

var searchInput = document.getElementById('search')
var searchInput = document.querySelector('#search')

searchInput.setAttribute('value', 'Pizza part in my area')
searchInput.value = 'movies near me'

alert(searchInput.value)
// alert(searchInput.getAttribute('value'))
