var AppDispatcher = require('../dispatchers/AppDispatcher')
var AppConstants = require('../constants/TequilaConstants')

module.exports = {
	receiveTequila : function(response) {
		AppDispatcher.handleServerAction({
			actionType: AppConstants.RECEIVE_TEQUILA,
			response: response
		})
	},
	receiveAddTequilaToHistorialResponse : function(response) {
		AppDispatcher.receiveAddTequilaToHistorialResponse({
			actionType: AppConstants.RECEIVE_HISTORIAL,
			response: response
		})
	},
	receiveTequileras: function(response) {
		AppDispatcher.receiveTequileras({
			actionType: AppConstants.RECEIVE_TEQUILERAS,
			response: response
		})
	},
	receiveTequilera: function(response){
		AppDispatcher.receiveTequilera({
			actionType: AppConstants.RECEIVE_TEQUILERA,
			response: response
		})
	},
	getHistorialResponse: function(response) {
		AppDispatcher.handleGetHistorialResponse({
			actionType: AppConstants.GET_HISTORIAL_RESPONSE,
			response : response
		})
	}
}