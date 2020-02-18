// async function loadStudents () {
//   const div = document.querySelector('[data-js-students]')

//   let json = await fetch('/ajax/json/students')
//     .then(res => {
//       if (res.ok) return res.json()
//       throw res.status
//     })

//   const ul = document.createElement('ul')

//   json.forEach(student => {
//     const li = document.createElement('li')
//     li.innerText = `${student.name} - ${student.email}`
//     ul.appendChild(li)
//   })

//   div.innerHTML = ul.outerHTML

// }


// function loadStudents () {
//   const xhr = new XMLHttpRequest()

//   const div = document.querySelector('[data-js-students]')

//   xhr.open('GET', '/ajax/html/students')
//   xhr.onreadystatechange = function () {
//     if(xhr.readyState === xhr.DONE && xhr.status === 200) {
//       div.innerHTML = xhr.responseText
//     }
//   }
//   xhr.send()
// }

// function loadStudents () {
//   const div = document.querySelector('[data-js-students]')

//   fetch('/ajax/html/students')
//     .then(res => {
//       if (res.ok) {
//         return res.text()
//       }
//     })
//     .then(text => {
//       div.innerHTML = text
//     })
// }

// function loadStudents () {
//   const div = document.querySelector('[data-js-students]')

//   fetch('/ajax/json/students')
//     .then(res => {
//       if (res.ok) {
//         return res.json()
//       }
//       throw res.statusText
//     })
//     .then(json => {
//       const list = document.createElement('ul')

//       json.forEach(student => {
//         const li = document.createElement('li')
//         li.innerText = student.name
//         list.appendChild(li)
//       })
//       div.innerHTML = list.outerHTML
//     })
//     .catch(e => console.log(e))
// }

document.querySelector('#loadStudents').addEventListener('click', loadStudents)
