/**
 *
 *
 * @author T. DeHart
 */

$("#slider-earthquake-display").slider({
	range: "min",
	value: 100,
	min: 100,
	max: 1000,
	step: 100,
	slide: function(event, ui) {
		$("#display-amount").val(ui.value);
	}
});
$("#display-amount").val($("#slider-earthquake-display").slider("value"));

$("#slider-earthquake-age").slider({
	range: true,
	min: 0.0,
	max: 7.0,
	step: 0.1,
	values: [0.0, 7.0],
	slide: function(event, ui) {
		$("#age-amount-total").val(ui.values[0] + ui.values[1]);
		$("#age-amount-min").val(ui.values[0].toFixed(1));
		$("#age-amount-max").val(ui.values[1].toFixed(1));
	}
});
$("#age-amount-min").val($("#slider-earthquake-age").slider("values", 0).toFixed(1));
$("#age-amount-max").val($("#slider-earthquake-age").slider("values", 1).toFixed(1));

$("#slider-earthquake-magnitude").slider({
	range: true,
	min: -1.0,
	max: 10.0,
	step: 0.1,
	values: [-1.0, 10.0],
	slide: function(event, ui) {
		$("#magnitude-amount-total").val(ui.values[0] + ui.values[1]);
		$("#magnitude-amount-min").val(ui.values[0].toFixed(1));
		$("#magnitude-amount-max").val(ui.values[1].toFixed(1));
	}
});
$("#magnitude-amount-min").val($("#slider-earthquake-magnitude").slider("values", 0).toFixed(1));
$("#magnitude-amount-max").val($("#slider-earthquake-magnitude").slider("values", 1).toFixed(1));

$("#slider-earthquake-depth").slider({
	range: true,
	min: 0,
	max: 1000,
	step: 1,
	values: [0, 1000],
	slide: function(event, ui) {
		$("#depth-amount-total").val(ui.values[0] + ui.values[1]);
		$("#depth-amount-min").val(ui.values[0]);
		$("#depth-amount-max").val(ui.values[1]);
	}
});
$("#depth-amount-min").val($("#slider-earthquake-depth").slider("values", 0));
$("#depth-amount-max").val($("#slider-earthquake-depth").slider("values", 1));

$("#slider-earthquake-intensity").slider({
	range: true,
	min: 0.0,
	max: 10.0,
	step: 0.5,
	values: [0.0, 10.0],
	slide: function(event, ui) {
		$("#intensity-amount-total").val(ui.values[0] + ui.values[1]);
		$("#intensity-amount-min").val(ui.values[0].toFixed(1));
		$("#intensity-amount-max").val(ui.values[1].toFixed(1));
	}
});
$("#intensity-amount-min").val($("#slider-earthquake-intensity").slider("values", 0).toFixed(1));
$("#intensity-amount-max").val($("#slider-earthquake-intensity").slider("values", 1).toFixed(1));

$(':input.single-input').change(function(eventData) {
	var newVal = $(this).val();
	$(this).closest('.inline-list').find('.slider').slider("value", newVal);
});

$(':input.min-input').change(function(eventData) {
	var newVal = $(this).val();
	$(this).closest('.inline-list').find('.slider').slider("values", 0, newVal);
});

$(':input.max-input').change(function(eventData) {
	var newVal = $(this).val();
	$(this).closest('.inline-list').find('.slider').slider("values", 1, newVal);
});