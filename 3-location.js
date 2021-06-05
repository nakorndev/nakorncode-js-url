const trClickable = document.querySelectorAll('tr[data-href]')

for (let tr of trClickable) {
    tr.addEventListener('click', (event) => {
        location.href = event.currentTarget.dataset.href
    })
}

// history.forward()
