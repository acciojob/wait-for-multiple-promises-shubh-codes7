	let body = document.querySelector("#output")
	body.innerHTML = `
	<tr id="loading" >
		<td colspan="2">Loading...</td>
	</tr>
`


function createPromise(index){
	let time = (Math.random() * (3 - 1) + 1).toFixed(3);
	return new Promise(res => {
		setTimeout(() => res({name: `Promise${index}`, time}), time*1000)
	}) 
}

function populateTable(results){
	body.innerHTML = ``
	results.forEach(result => {
		let row = `
		<tr>
			<td>${result.name}</td>
			<td>${result.time}</td>
		</tr>		
		`
		body.innerHTML += row;
		})

		let totalTime = Math.max(...results.map(p => parseFloat(p.time))).toFixed(3)
		body.innerHTML += `<tr><td><strong>Total</strong></td><td><strong>${totalTime}</strong></td></tr>`
	
}

const promises = [createPromise(1), createPromise(2), createPromise(3)]

Promise.all(promises).then(populateTable)
