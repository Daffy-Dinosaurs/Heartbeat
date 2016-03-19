import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

describe('App Component', () => {
	let component;

	beforeEach(() => {
		component = renderComponent(App);
	});

	it('shows a comment box', () => {
		expect(component.find('.main')).to.exist;
	});

	it('show a class comment list', () => {
		expect(component.find('.globe')).to.exist;
	});

});
