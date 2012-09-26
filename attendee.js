var Person = {};

Person.Attendee = function(info){
	this.$el = $(info.el);
	this.name = this.$el.find('h3').text();
	this.status = 'registered';
	//this.room = ;
	this.init();
};

Person.Attendee.prototype = {
	init: function() {
		var person = this;
		this.$el.on('click', '.status', function(){ 
			//get number
			var $status =  $(this);
			person.addToRoom();
			person.checkIn();//replace to "checkout"
		});
		this.$el.on('click', '.registered', function(){ //TODO add removeRoom class
			//remove checkIn attribute
			var $registered =  $(this);
			//console.log($registered);
			person.checkOut();
		});
	},

	//addToRoom: function(number){
	addToRoom: function(){
		var roomToAdd;
		var roomNum   =	parseInt(this.$el.find('.roomNum').text());// number;

		$.each(RoomList, function(){
			 if ( this.number == roomNum){
			 	roomToAdd = this;
			 }
		});

		this.room = roomToAdd;
		this.room.addAttendee(this);


		this.$el.find('.status').replaceWith( '<a href="#" class="registered">Check out of Room # </a>');
	},

	checkIn: function(){
		//console.log($(this));
		this.$el.addClass('checkedIn');
		this.$el.status = 'checkedIn';
		// add checked in attribute in css
	},

	checkOut: function(){
		this.room.removeAttendee(this);
		this.$el.find('.registered').replaceWith( '<a href="#" class="unregistered">Checked Out of room # </a>');
		this.$el.addClass('checkedOut');
				console.log(this.$el);
		this.$el.status = 'checkedOut';
		console.log("Checked out!");
		// removed checked in, and add checked out attribute in css
	}

};