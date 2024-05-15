document.getElementById('detailsUpdate').addEventListener('submit', function(event)
{
    event.preventDefault();
    const username=document.getElementById('name').value;
    document.getElementById('username').textContent=username.split(' ')[0];
    alert('Details updated!')
});

function addFavorite()
{
    const newFavorite=document.getElementById('newFavorite').value;
    if(newFavorite)
        {
            const list = document.getElementById('favoriteList');
            const entry = document.createElement('li');
            entry.textContent=newFavorite;
            list.appendChild(entry);
            document.getElementById('newFavorite').value='';
        }
}