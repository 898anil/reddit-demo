(function(){
var threads = [
	{
		title:"Cyclone Vardah: Wind speed to cross 100kmph.",
		status:'submitted',
		votes:62,
		comments:269,
		user:'Times of India',
		date:'1d ago',
		imageUrl:'book.jpg'
	},
	{
		title:"82 trains delayed, 16 cancelled due to fog.",
		status:'submitted',
		votes:48,
		comments:120,
		user:'Assu Deepu',
		date:'20hr ago',
	},
	{
		title:"Note ban scripts trouble for Sunday book market",
		status:'submitted',
		votes:45,
		comments:103,
		user:'Anil',
		date:'23hr ago',
	},
	{
		title:"Metro finances to be hit if fares not hiked",
		status:'submitted',
		votes:55,
		comments:150,
		user:'Jose',
		date:'10hr ago',
	},
	{
		title:"6-year-old leopard found dead in Adilabad district",
		status:'submitted',
		votes:40,
		comments:180,
		user:'Bagha',
		date:'1day ago',
	},
	{
		title:"Potato prices drop as cold storages clear stock",
		status:'submitted',
		votes:89,
		comments:191,
		user:'Bataka',
		date:'18hr ago',
	},
	{
		title:"Drinking water remains a luxury in key Old City areas in Hyderabad",
		status:'submitted',
		votes:37,
		comments:164,
		user:'Assu Deepu',
		date:'15hr ago',
	},
	{
		title:"RBI against government's proposal to dramatically lower charges on debit card transactions",
		status:'submitted',
		votes:58,
		comments:170,
		user:'Ashutosh',
		date:'20hr ago',
	},
	{
		title:"Ratan Tata hailed as saviour of UK steel industry",
		status:'submitted',
		votes:38,
		comments:150,
		user:'Anthoine',
		date:'15hr ago',
	},
	{
		title:"Telangana to tweak consent norm in land acquisition bill",
		status:'submitted',
		votes:47,
		comments:110,
		user:'Vital',
		date:'21hr ago',
	},
	{
		title:"Virat Kohli, Ravindra Jadeja put India on path for series win",
		status:'submitted',
		votes:89,
		comments:190,
		user:'Satyajit',
		date:'12hr ago',
	},
	{
		title:"Indian Aces end runner-up again, lose IPTL final to Slammers",
		status:'submitted',
		votes:44,
		comments:140,
		user:'Assu',
		date:'13hr ago',
	},
	
]
var _ce = document.createElement;
function ce(tag,className){
	var ele = _ce(tag);
	ele.className = className;
}
function threadCreator(data){
		var thread = ce('div','thread');
		var mainCard = ce('div','mdl-card mdl-shadow--2dp');
		var voter = ce('div','voter');
		var up = ce('div','up');
		var materialIconsUp = ce('i','material-icons');
		var materialIconsDown = ce('i','material-icons');
		var number = ce('div','number');
		var down = ce('div','down');
		var icon = ce('div','icon');
		var content = ce('div','content');
		var mainText = ce('div','main-text');
		var status = ce('span','status');
		var mdlCardSupportingText1 = ce('div','mdl-card__supporting-text');
		var light1 = ce('span','light');
		var dark1 = ce('span','dark');
		var light2 = ce('span','light');
		var mdlCardSupportingText2 = ce('div','mdl-card__supporting-text');
		var dark2 = ce('span','dark');
		var link1 = ce('a');
		var link2 = ce('a');
		thread.appendChild(mainCard);
		mainCard.appendChild(voter);
		mainCard.appendChild(icon);
		mainCard.appendChild(content);
		voter.appendChild(up);
		voter.appendChild(number);
		voter.appendChild(down);
		up.appendChild(materialIconsUp);
		down.appendChild(materialIconsDown);
		materialIconsUp.innerHTML = 'keyboard_arrow_up';
		materialIconsDown.innerHTML = 'keyboard_arrow_down';

		content.appendChild(mainText);
		content.appendChild(mdlCardSupportingText1);
		content.appendChild(mdlCardSupportingText2);
		mainText.appendChild(status);
		mdlCardSupportingText1.appendChild(light1);
		mdlCardSupportingText1.appendChild(light2);
		mdlCardSupportingText1.appendChild(dark1);
		mdlCardSupportingText1.appendChild(link1);
		mdlCardSupportingText2.appendChild(dark2);
		mdlCardSupportingText2.appendChild(link2);
		console.log(thread);
		return thread;
	}
	threads.forEach(threadCreator)
})();