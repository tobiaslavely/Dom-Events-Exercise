var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var items = document.querySelectorAll("li");


function inputLength() {
	return input.value.length;
}

function addDeleteButton(parent) {
		var delBtn = parent.appendChild(document.createElement('button'));
		delBtn.innerHTML = 'Delete!';
		delBtn.onclick = function(){
			this.parentElement.remove();
		
}}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	var btn = document.createElement("button");
     	btn.appendChild(document.createTextNode("Delete!"));
 		li.appendChild(btn);
 		btn.addEventListener('click', function deleteItem(event) {
 			console.log('delete button clicked', event);
 			li.remove();
 		})

	li.addEventListener('click', function handleClick(event) {
	console.log('box clicked', event);
	li.classList.toggle('done');

})
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

items.forEach(item => {
  item.addEventListener('click', function handleClick(event) {
    console.log('list item clicked', event);
    item.classList.toggle('done');

  });
});

for(var i=0; i<items.length; i++) {
	addDeleteButton(items[i]);
}




