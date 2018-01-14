// Regex-pattern to check URLs against.
// It matches URLs like: http[s]://[...]stackoverflow.com[...]

var p = document.getElementsByClassName("sc-price");

for (var i = 0; i < p.length; i++) {
	let pageElement = p[i];
	getRealCost(pageElement);
}

function getRealCost(pageElement) {
	var xhr = new XMLHttpRequest();
	let cost = pageElement.textContent;

	xhr.open(
		"GET",
		"https://nessie-credit.herokuapp.com/api?key=896c897b5f52485fd3e9b049b4af1cc5&account=5a5796596514d52c7774a389&value=realCost&price=" + cost.trim().slice(1,) + "&time_reference=30",
		true
	);
	xhr.onreadystatechange = () => {
	  if (xhr.readyState == 4) {
		var realValue = JSON.parse(xhr.responseText).realCost;
		var addText = document.createElement('span');
		addText.setAttribute('class', 'real-price');
		addText.style.cssText = 'text-decoration: none !important;font-weight: bold;left:300px;color: green;';
		addText.innerHTML = realValue;
		pageElement.style.cssText = 'text-decoration: line-through;';
		pageElement.parentNode.appendChild(addText);

		if (pageElement.className == "a-size-medium a-color-price sc-price sc-white-space-nowrap  sc-price-sign") {
			console.log('should be messaging...');
			chrome.runtime.sendMessage({
			    msg: "something_completed",
			    data: {
			        subject: "Loading",
			        content: "Just completed!"
			    }
			});
		}
	  }
	}

	xhr.send();
}
