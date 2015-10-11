function clickPicture() {
	document.getElementById("selfPicture").onclick = function() {
		var thisId = "selfPicture";
		var currentWidth = document.getElementById(thisId).style.width;
		if (currentWidth == "100px") {
			setPictureSize("200px", thisId);
		}
		else {
			setPictureSize("100px", thisId);
		}
	}
}


function clickPhoto() {
	document.getElementById("photo1").onclick = function() {
		if (confirm('Would you like to download this picture?')) {
			alert("SAVE");
		}
		else {
			alert("DONT SAVE");
		}
	}
}

function setPictureSize(size, id) {
	document.getElementById(id).style.width=size;
}

function changePage(currentNavId, currentBodyId, newNavId, newBodyId) {
	$(document).ready(function() {
		$(#newId).click(function() {
			$(currentBodyId).hide();
			$(newBodyId).show();
		});
	});
}