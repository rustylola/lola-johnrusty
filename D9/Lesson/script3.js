//function expression to fetch and display user data
const displayUserData = async () => {
    // select the user container element
    const userContainer = document.getElementById("userContainer");
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    try{
        if(response.status === 200){
            const data = await response.json();
            // console.log(data); 
            let html = ``;

            data.forEach((user) =>{
                // Generate HTML
                html += `
                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">${user.name}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">${user.email}</h6>
                                <p class="card-text">Username: ${user.username}</p>
                                <p class="card-text">Phone: ${user.phone}</p>
                                <a href="${user.website}" class="card-link">Website</a>
                            </div>
                        </div>
                    </div>
                `;
            });
            // Insert generated HTML
            userContainer.innerHTML = html;
        } else {
            throw new Error("Failed to fetch data.")
        }
    } catch (error){
        // Display error message
        userContainer.innerHTML = "An Error occured while fetching data.";
        console.error(error);
    }
}

const fetchButton = document.getElementById("fetchButton");
fetchButton.addEventListener('click',displayUserData);