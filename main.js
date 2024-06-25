let dialog = document.getElementById('main__inner')
let dialog2 = document.getElementById('form')
let signup = document.getElementById('btn-main')

const reg = () => {
	dialog.remove()
	dialog2.classList.toggle('hide')
	dialog2.classList.add('content')
}

signup.addEventListener('click', reg)
