// Підключення з node_modules
import * as noUiSlider from 'nouislider';

// Підключення стилів з scss/base/forms/range.scss 
// у файлі scss/forms/forms.scss

// Підключення стилів з node_modules
// import 'nouislider/dist/nouislider.css';

export function rangeInit() {
	const priceSlider = document.querySelector('#range');
	const priceSliderValueStart = document.getElementById('value');
	if (priceSlider) {
		let textFrom = priceSlider.getAttribute('data-from');
		let textTo = priceSlider.getAttribute('data-to');
		noUiSlider.create(priceSlider, {
			start: [224, 500], // [0,200000]
			// snap: true,
			connect: true,
			range: {
				'min': [0],
				'max': [500]
			}
		});

		var snapValues = [
			document.getElementById('slider-snap-value-lower'),
			document.getElementById('slider-snap-value-upper')
		];
		
		priceSlider.noUiSlider.on('update', function (values, handle) {
				snapValues[handle].innerHTML = Math.round(values[handle]);
		});
		
		// const priceStart = document.getElementById('price-start');
		// const priceEnd = document.getElementById('price-end');
		// priceStart.addEventListener('change', setPriceValues);
		// priceEnd.addEventListener('change', setPriceValues);
		

		// priceSlider.noUiSlider.on('update', function (values, handle) {
		// 	priceSliderValueStart.innerHTML = Math.round(values[handle]);
		// });

		function setPriceValues() {
			let priceStartValue;
			let priceEndValue;
			if (priceStart.value != '') {
				priceStartValue = priceStart.value;
			}
			if (priceEnd.value != '') {
				priceEndValue = priceEnd.value;
			}
			priceSlider.noUiSlider.set([priceStartValue, priceEndValue]);
		}
	}
}
rangeInit();
