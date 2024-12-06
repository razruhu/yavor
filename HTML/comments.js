document.addEventListener('DOMContentLoaded', () => { 
    const form = document.getElementById('comment-form'); //
    const commentsList = document.getElementById('comments-list'); 

    
    form.addEventListener('submit', (e) => { 
        e.preventDefault();

        const name = document.getElementById('name').value.trim(); 
        const comment = document.getElementById('comment').value.trim();

        if (name && comment) { 
            
            const li = document.createElement('li'); 
            li.innerHTML = `<strong>${name}:</strong> ${comment} <button class="delete-btn">Delete</button>`; 

            
            li.querySelector('.delete-btn').addEventListener('click', () => { 
                li.remove();
            });

            commentsList.appendChild(li); 

            
            form.reset(); 
        } else {
            alert('Please fill in both fields.'); 
        }
    });
});
