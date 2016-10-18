var body = document.body
console.log(body)

// 1. Count the number of records in the "Current Quarter Details" table.

    var questionOne = document.querySelectorAll('tbody > tr')
            console.log(questionOne.length)

// 2. Set each dashboard image to different images, one for each season. Make sure you also set the alt="" attribute with an appropriate description.
    var setImage = document.querySelectorAll('img')
    setImage[0].setAttribute('src', 'http://unsplash.it/400?image=10')
    setImage[0].setAttribute('alt', 'pic of woods')
    setImage[1].setAttribute('src', 'http://unsplash.it/400?image=60')
    setImage[1].setAttribute('alt', 'pic of computer desk')
    setImage[2].setAttribute('src', 'http://unsplash.it/400?image=30')
    setImage[2].setAttribute('alt', 'pic of a mug')
    setImage[3].setAttribute('src', 'http://unsplash.it/400?image=40')
    setImage[3].setAttribute('alt', 'pic of cats face')

// 3. Below each dashboard image, there's a season/quarter name. Below those, there are three dots. Replace those three dots with a randomly generated number formatted as currency, like $12,589.00.

    var moreDots = document.querySelectorAll('.placeholder > span')
    moreDots[0].innerHTML = '$' +(Math.random(10)*100000).toFixed(2)
    moreDots[1].innerHTML = '$' +(Math.random(10)*100000).toFixed(2)
    moreDots[2].innerHTML = '$' +(Math.random(10)*100000).toFixed(2)
    moreDots[3].innerHTML = '$' +(Math.random(10)*100000).toFixed(2)

// 4. Change the currently selected left side menu item from Overview to Reports.

    var changeIt = document.querySelectorAll('.nav-sidebar > li')
    changeIt[0].setAttribute('class', 'none')
    changeIt[1].setAttribute('class', 'active')


// 5. Set the default search input value to "Q4 sales".
    var searchThis = document.querySelectorAll('.form-control')
        searchThis.forEach(function(search){
            search.setAttribute('placeholder', 'Q4 Sales')
        })

// 6. Add the "table-hover" class to the table. See the Bootstrap table docs.
    var tableThis = document.querySelector('.table-striped')
        tableThis.setAttribute('class', 'table table-hover')

// 7. Add the "success" class to the 7th - 10th row of the table, like: <tr class="success">...</tr>
    var tableSuccess = document.querySelectorAll('tbody > tr')
    tableSuccess[6].setAttribute('class', 'success')
    tableSuccess[7].setAttribute('class', 'success')
    tableSuccess[8].setAttribute('class', 'success')
    tableSuccess[9].setAttribute('class', 'success')

// 8. Change the table header names to: ID, First Name, Last Name, Department, Client.
    var headerNames = document.querySelectorAll('thead>tr>th')
    headerNames[0].innerHTML = 'ID'
    headerNames[1].innerHTML = 'First Name'
    headerNames[2].innerHTML = 'Last Name'
    headerNames[3].innerHTML = 'Department'
    headerNames[4].innerHTML = 'Client'

// 9. Make an array of objects, each object representing a single row in the table. Remove the commas from the ID column and convert it to an actual Number data type. Example: [{id: 1001, firstName: 'Lorem', lastName: 'ipsum', department: 'dolor', client: 'sit'}]

var listArray = document.querySelectorAll('tbody > tr')
var emptyArray = []
listArray.forEach(function(list){
    var thisIsHard = {
        id: Number(list.children[0].innerHTML.replace(',', '')),
        firstName: list.children[1].innerHTML,
        lastName: list.children[2].innerHTML,
        department: list.children[3].innerHTML,
        client: list.children[4].innerHTML,
    }
    emptyArray.push(thisIsHard)
})
console.log(emptyArray)

// 10. Make each word in the table capitalized.
var wordUpperCase = document.querySelectorAll('tbody > tr> td')
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
wordUpperCase.forEach(function(word){
    word.innerHTML = capitalizeFirstLetter(word.innerHTML)
})
