document.addEventListener('click', e => {
    if(e.target.tagName == 'A') {
         e.target.parentNode.remove()
    }
})

const entryForm = document.toDoEntry;
    entryForm.addEventListener('submit', (e) => {
        e.preventDefault()
        
        const reminderContainer = document.createElement('div')
            reminderContainer.className = 'displayedReminder'

        const h3 = document.createElement('h3')
            h3.textContent = entryForm.title.value
                reminderContainer.appendChild(h3)

        const h5 = document.createElement('h5')
            h5.textContent = entryForm.description.value
                reminderContainer.appendChild(h5)

        const a = document.createElement('a')
            a.textContent = 'Done'
            a.href = '#'
                reminderContainer.appendChild(a) 
        
        document.getElementById('toDoList').appendChild(reminderContainer)
    });













