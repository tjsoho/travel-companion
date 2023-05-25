const newFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const description = document.querySelector('#description').value.trim();
    const location = document.querySelector('#city').value.trim();
    const place = document.querySelector('#place').value.trim();
    const difficulty_level = document.querySelector('#difficulty').value.trim();
    const category = document.querySelector('#category').value.trim();
    const img_name = document.querySelector('#image').value.trim();
    const person_limit = document.querySelector('#person-limit').value.trim();
    const cost = document.querySelector('#cost').value.trim();


    if (title && description && location && place && difficulty_level && category && img_name && person_limit && cost) {
        const response = await fetch(`/api/tour`, {
            method: 'POST',
            body: JSON.stringify(
                { title, description, location, place, difficulty_level, category, img_name, person_limit, cost }
            ),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/create');
        } else {
            alert('Failed to create tour');
        }
    }
};

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/tour/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/create');
        } else {
            alert('Failed to delete tour');
        }
    }
};

document
    .querySelector('input-page-container')
    .addEventListener('submit', newFormHandler);

document
    .querySelector('.delete-btn')
    .addEventListener('click', delButtonHandler);