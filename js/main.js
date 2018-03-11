$(document).ready(function() {

	//console.log('Hello world!');
	(function(){
		var formCommentValidation = {
			init: function(){
				this._setUpListeners();
			},

			_setUpListeners: function(){
				$('#sendComment').on('click', formCommentValidation._validateSendForm);
			},

			_validateSendForm: function(event){
				event.preventDefault();
				
				var valid = true,
					userCommentTextarea = $("#userCommennt"),
					userComment = $("#userCommennt").val().trim(),
					errorMessage = $("#errorMessage");
				
				if ( userComment.length === 0 ) {
					errorMessage.addClass('show-error');
					valid = false;
				} else {
					errorMessage.removeClass('show-error');
				}
				//console.log('userComment: ' + userComment);

				// Hide errors
				userCommentTextarea.on('focus', function(){
					errorMessage.removeClass('show-error');
				});
				userCommentTextarea.on('keydown', function(){
					errorMessage.removeClass('show-error');
				});
				userCommentTextarea.on('change', function(){
					errorMessage.removeClass('show-error');
				});

				if ( valid === true ) {
					console.log('Sending form!');
					//Send comment without whitespace
					userCommentTextarea.val(userComment);
					$("#CommentForm").submit();
				}
			}

		};

		formCommentValidation.init();
	}());

});


