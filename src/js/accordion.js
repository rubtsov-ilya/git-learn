document.addEventListener('DOMContentLoaded', () => {
	const accordions = document.querySelectorAll('[data-accordion-item]');
	const accordionControls = document.querySelectorAll('.accordion__control');
	const accordionContents = document.querySelectorAll('.accordion__content');
	accordions.forEach(el => {
		el.addEventListener('click', (e) => {
			const self = e.currentTarget;
			const selfControl = self.querySelector('.accordion__control');
			const selfContent = self.querySelector('.accordion__content');
			if (!self.classList.contains('open')) {
				for (accordionEl of accordions ) {
					accordionEl.classList.remove('open');
	
				}
				for (accordionControl of accordionControls ) {
					accordionControl.setAttribute('aria-expanded', false);
	
				}
				for (accordionContent of accordionContents ) {
					accordionContent.setAttribute('aria-hidden', true);
					accordionContent.style.maxHeight = null;
				}
				self.classList.toggle('open');
				selfControl.setAttribute('aria-expanded', true);
				selfContent.setAttribute('aria-hidden', false);
				selfContent.style.maxHeight = selfContent.scrollHeight + 'px';
			} else {
				for (accordionEl of accordions ) {
					accordionEl.classList.remove('open');
	
				}
				for (accordionControl of accordionControls ) {
					accordionControl.setAttribute('aria-expanded', false);
	
				}
				for (accordionContent of accordionContents ) {
					accordionContent.setAttribute('aria-hidden', true);
					accordionContent.style.maxHeight = null;
				}
			}

			//если нужно раздельный аккордион, то вот этот код открыть
			/* self.classList.toggle('open');
			if (self.classList.contains('open')) {
				control.setAttribute('aria-expanded', true);
				content.setAttribute('aria-hidden', false);
				content.style.maxHeight = content.scrollHeight + 'px';
			} else {
				control.setAttribute('aria-expanded', false);
				content.setAttribute('aria-hidden', true);
				content.style.maxHeight = null;
			} */
			//до сюда
		})
	});
});