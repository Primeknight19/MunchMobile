document.getElementById('detailsUpdate').addEventListener('submit', function(event)
{	
    event.preventDefault();
	savedUser = localStorage.getItem('user');
	userOne = JSON.parse(savedUser);
    const username=document.getElementById('name').value;
    document.getElementById('username').textContent=username.split(' ')[0];
	userOne.name = document.getElementById('name').value;
	userOne.email = document.getElementById('email').value;
	userOne.phoneNo = document.getElementById('phone').value;
	userOne.Address = document.getElementById('address').value;
	localStorage.setItem('user', JSON.stringify(userOne));
	savedUser = localStorage.getItem('user');
    displayDetails();
});

function addFavorite()
{
    const newFavorite=document.getElementById('newFavorite').value;
    if(newFavorite)
        {
            const list = document.getElementById('favoritesList');
            const entry = document.createElement('li');
            entry.textContent=newFavorite;
            list.appendChild(entry);
            document.getElementById('newFavorite').value='';
        }
}

function updateDetails()
{	
	const savedUser = localStorage.getItem('user');
	userOne = JSON.parse(savedUser);
	document.getElementById('detailsUpdate').innerHTML =
	'<form id="detailsUpdate">'
		+'Username: <input type="text" id="name" value="'+userOne.name+'" required>'
		+'Email: <input type="email" id="email" value="'+userOne.email+'" required>'
		+'Phone Number:<input type="text" id="phone" value="'+userOne.phoneNo+'" required>'
		+'Address: <input type="text" id="address" value="'+userOne.address+'" required>'
		+'<button type="submit">Confirm</button>&nbsp;&nbsp;'
		+'<button onClick="displayDetails()">Cancel</button>'
		+'</form>'
}
