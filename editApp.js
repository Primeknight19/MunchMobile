alert("Click where you want to edit");
function editData(e) {
  const el = e.target;
  const input = document.createElement("input");
  input.setAttribute("value", el.textContent);
  el.replaceWith(input);
  el.style.width = "auto";

  const save = function() {
    const previous = document.createElement(el.tagName.toLowerCase());
    previous.onclick = editData;
    previous.textContent = input.value;
    input.replaceWith(previous);
  };
  
  input.addEventListener('blur', save, {
    once: true,
  });
  input.focus();
}

for (const child of document.querySelectorAll('[data-editable]')) {
  child.onclick = editData;
}

let itemCount = 4;
function addItem(){
	document.getElementById("item-area").innerHTML += '<div id=item'+itemCount+' class="detail-card">'
						+'<label for="file-input">'
						+'<img id="pic'+itemCount+'" class="detail-img" src="images/placeholder.png">'
						+'</label>'
                        +'<input id="file-input" type="file" accept="image/*" style="display:none" onChange="loadFile(event, '+itemCount+')">'
                        +'<div class="detail-desc">'
                            +'<div class="detail-name">'
                                +'<h4 data-editable>Name</h4>'
								+'<p>Extras: <span data-editable>extras</span></p>'
                                +'<p class="price" data-editable>$0.00</p>'
                            +'</div>'
                            +'<ion-icon class="detail-favourites" name="close-circle-outline" onClick=deleteItem('+itemCount+')></ion-icon>'
                        +'</div>'
                    +'</div>';
	editable();
	itemCount++;
}

function editable(){
	for (const child of document.querySelectorAll('[data-editable]')) {
	  child.onclick = editData;
	}
}

function deleteItem(no){
	document.getElementById("item"+no).style.display = "none";
}

var loadFile = function(event, no){
	var image = document.getElementById("pic"+no);
	image.src = URL.createObjectURL(event.target.files[0]);
}