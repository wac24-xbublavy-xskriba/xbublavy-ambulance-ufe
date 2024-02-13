import { newE2EPage } from '@stencil/core/testing';

describe('abublavy-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<abublavy-ambulance-wl-list></abublavy-ambulance-wl-list>');

    const element = await page.find('abublavy-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
