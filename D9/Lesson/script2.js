// const fetchPost = async () => {
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//         console.log(response);
//         if(!response.ok){
//             throw new Error('Failed to fetch data');
//         }

//         // Extract Json Data from response
//         const posts = await response.json();
//         console.log(posts);
//     } catch (error){
//         console.error('An Error occured: ',error);
//     }
// }

const fetchPost = async () => {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if(response.status === 200){
            // Extract Json Data from response
            const posts = await response.json();
            console.log(posts);
        }else{
            throw new Error('Failed to fetch data');
        }

    } catch (error){
        console.error('An Error occured: ',error);
    }
}

const fetchBtn = document.getElementById('fetch-btn');
fetchBtn.addEventListener('click',fetchPost);