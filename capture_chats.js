var year = 2015;

var get_name = function(role) {
	if (role == 'me') {
		role_label = 'your';
	} else if (role == 'them') {
		role_label = 'their';
	}

	$profile_div = $('#wwf-' + role_label + '-profile-page_profile-let_widget');
	var person = $profile_div.find('.wwf-let_gwfUsername').text();
	
	if (person.indexOf('zynga') > -1) {
		person = $profile_div.find('.wwf-let_title').text();
	}
	
	return person;
}

var me = get_name('me');
var them = get_name('them');

var chats = [];

$('#wwf-chat_content').children('div').each(
	function(idx) {
		time_stamp = $(this).find('div').find('.chat-timestamp').text();
		message = $(this).find('div').find('.wwf-chat-message').text();
		mine = $(this).find('div').find('.mine');
		not_mine = $(this).find('div').find('.not-mine');
		
		if (mine.length) {
			name = me;
		} else if (not_mine.length) {
		    name = them;
		}
		
		chats.push(year + ' ' + time_stamp + ' - ' + name + ': ' + message);
	}
);

console.log(chats);
