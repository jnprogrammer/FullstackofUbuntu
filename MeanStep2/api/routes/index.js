var express = require('express');
var router = express.Router();
var ctrlHotels = require('../controllers/hotels.controllers.js');
var ctrlReview = require('../controllers/reviews.controllers.js');

router
.route('/hotels')
.get(ctrlHotels.hotelsGetAll);

router
.route('/hotels/:hotelId')
.get(ctrlHotels.hotelsGetOne);

router 
.route('/hotels/new')
.post(ctrlHotels.hotelsAddOne);

router
.route('/hotels/hotelId/reviews')
.get(ctrlReview.reviewsGetAll);

router
.route('/hotels/:hotelId/reviews/reviewId')
.get(ctrlReview.reviewGetOne);

module.exports = router;