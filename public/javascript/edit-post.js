async function editFormHandler(event) {
  event.preventDefault();

    const post_id = window.location.toString().split('/')[
      window.location.toString().split('/').length -1
    ];

    if (post_id) {
      const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          title
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok){
        document.location.reload();
      } else {
        alert(response.statusText);
      }
    }
}

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);