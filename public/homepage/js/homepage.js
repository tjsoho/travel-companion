const submitFormHandler = async (event) => {
    event.preventDefault();
    console.log("search");
    const location = document.querySelector('#city').value.trim();
    const category = document.querySelector('#category').value.trim();
    if (location && category) {
        // const response = await fetch(`/api/tour/${category}/${location}`,
        //     {
        //         method: 'GET',
        //         // body: JSON.stringify(
        //         //     { location }
        //         // ),
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //     });
        document.location.replace(`/tour/${category}/${location}`)
        console.log(response);
        if (response.ok) {
            const responseJson = await response.json();
            console.log(responseJson);
        } else {
            alert('Failed to get tour');
        }
    }
};
document
    .querySelector('.search-btn')
    .addEventListener('click', submitFormHandler);









