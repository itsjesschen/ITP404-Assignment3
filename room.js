
var Hotel = {};

Hotel.Room = function(name, status, number, capacity, info){

	 this.name		 	= name;
	 this.status 		= status;
	 this.capacity		= capacity;

	 this.number 		= number;
	 this.$el 			= $(info.el);
	 this.init();
};

Hotel.Room.prototype = {
	init: function(){
		this.numOfPeople 	 = 0;
		this.listofAttendees = $.makeArray();
		this.$el.addClass('empty');
				console.log(this.$el);
	},

	addAttendee: function(Attendee){
		console.log(Attendee);
		this.numOfPeople = this.numOfPeople+1;
		this.$el.find('.status').text('Occupied with this number of people:');
		this.$el.find('.roomNum').text(this.numOfPeople + ' -> Attendee Added: ' + Attendee.name );

		this.listofAttendees.push(Attendee);
		if( this.numOfPeople == 2){
			this.$el.removeClass('occupied').addClass('full');
			return this;
		}

		this.$el.removeClass('empty').addClass('occupied');
	},

	removeAttendee: function(Attendee){
		var toRemove;
		$.each(this.listofAttendees, function(){
			 if ( this == Attendee){
			 	toRemove = this;
			 }
		});
		if(toRemove){
			this.numOfPeople = this.numOfPeople-1;
			this.$el.find('.roomNum').text(this.numOfPeople + ' - Attendee Removed: ' + Attendee.name );
		}
		if( this.numOfPeople == 0){
			this.$el.removeClass('occupied').addClass('empty');
			return this;
		}
			this.$el.removeClass('full').addClass('occupied');
	}

};
var room0 = new Hotel.Room( Room0, 'empty', 0,2 ,{el: '#Room0'});
var room1 = new Hotel.Room( Room1, 'empty', 1,2 ,{el: '#Room1'});
var RoomList = $.makeArray(room0); 
RoomList.push(room1);

