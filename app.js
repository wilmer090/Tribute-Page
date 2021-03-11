

let open_btn = document.querySelector('.timeline_btn');
let close_btn = document.querySelector('.closebtn');
let overlayContent = document.querySelector('.overlay');
let arrayContent = {

'one': '1856 - Born in Franklin Country, April 5',
'two': 'He born into slavery and rose to become a leading African American intellectual of the 19 century, founding Tuskegee Normal and Industrial Institute (Now Tuskegee University) in 1881 and the National Negro Business League two decades later.',
'three': 'His mother was a cook for the plantation’s owner.',
'four': 'At the close of the Civil War, all the enslaved people owned by James and Elizabeth Burroughs—including 9-year-old Booker, his siblings, and his mother—were freed.',
'five': 'His mother moved her family to Malden, West Virginia. Soon after, she married Washington Ferguson, a free Black man.',
'six': '1872 - Washington walked the 500 miles to Hampton, where he was an excellent student and received high grades.',
'seven': '1881 - Washington assumed the role as principal at age 25 and would work at The Tuskegee Institute until his death in 1915.',
'eight': '1896 - It was Washington who hired George Washington Carver to teach agriculture at Tuskegee'
}

extractObjProp(arrayContent);

open_btn.addEventListener('click',()=>{


	overlayContent.style.width ="100%"

})

close_btn.addEventListener('click',()=>{
	overlayContent.style.width = "0%";
})

function extractObjProp(obj){

	let ul = document.createElement('ul');
	ul.className = 'timeline_list'
	Object.values(obj).forEach(data=> ul.innerHTML +=  `<li>${data}</li>`)

	overlayContent.appendChild(ul);
}