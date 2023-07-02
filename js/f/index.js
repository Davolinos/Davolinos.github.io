async function getPosts() {
	const response = await fetch("http://localhost:5000/post/");
	const data = await response.json();
	console.log(data);
}

async function getUsers() {
  const response = await fetch("http://localhost:5000/user/")
  const data = await response.json();
  console.log(data)
}

async function makePost() {
	const response = await fetch("http://localhost:5000/post/",
		{
			method:"POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(["awokawok", 1])
		}
	)
}

getUsers();
