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
    // created user_id var
    const user_id = document.querySelector('#user_id').getAttribute("data-user-id");

// included user_id param to if condition and to body because it is needed
    if (title && description && location && place && difficulty_level && category && img_name && person_limit && cost && user_id) {
        const response = await fetch(`/api/tour`, {
            method: 'POST',
            body: JSON.stringify(
                { title, description, location, place, difficulty_level, category, img_name, person_limit, cost, user_id }
            ),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log(response);
        if (response.ok) {
            document.location.replace('/tours');
        } else {
            alert('Failed to create tour');
        }
    }
};

// const delButtonHandler = async (event) => {
//     if (event.target.hasAttribute('data-id')) {
//         const id = event.target.getAttribute('data-id');

//         const response = await fetch(`/api/tour/${id}`, {
//             method: 'DELETE',
//         });

//         if (response.ok) {
//             document.location.replace('/create');
//         } else {
//             alert('Failed to delete tour');
//         }
//     }
// };

document
    .querySelector('#user_id')
    .addEventListener('submit', newFormHandler);

// document
//     .querySelector('.delete-btn')
//     .addEventListener('click', delButtonHandler);