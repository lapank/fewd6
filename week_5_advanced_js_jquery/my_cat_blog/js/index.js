var html = '';
var posts = [
	{
		image: 'http://placekitten.com/g/200/200',
		title: 'More views!',
		snippet: 'My views are up from zero to three! Hello to my loyal fans! To celebrate, here are some more cute cat pictures!'
	}, {
		image: 'http://placekitten.com/g/200/200',
		title: 'Check out these cute cats!',
		snippet: 'Wow...thats all I can say. I was surfing /cats on reddit and came across the cutest cat pictures yet! Take a look!'
	}, {
		image: 'http://placepu.gs/200/200',
		title: 'Wierd cats!',
		snippet: 'I saw these weird looking cats on the interwebs today. If you can tell me what breed they are, please do so in the comments!'
	}, {
		image: 'http://placekitten.com/g/200/200',
		title: 'Cutness overload!',
		snippet: 'OMG people, are you ready for some heavy duty cuteness? I know I am. Check out these cats! I can\'t even handle this. Too cute!'
	}
];

function generatePost(foo){
	var fragment = '';

				fragment +='<div class="post clearfix">';
				fragment += '<img class="post-image float-left" src="'+ foo.image +'">';
				fragment +='<div class="post-content float-left">';
				fragment +='<h3 class="post-title">' + foo.title + '</h3>';
				fragment +='<p>';
				fragment +=	foo.snippet;
				fragment +='</p>';
				fragment +='</div>';
				fragment +='</div>';


	return fragment;
}

for (var i = 0; i < posts.length; i++){
	html += generatePost(posts[i]);
}

document.getElementById('posts').innerHTML = html;//.innerHTML publishes th javascript into HTML 
