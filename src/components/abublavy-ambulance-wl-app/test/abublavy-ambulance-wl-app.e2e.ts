import { newE2EPage } from '@stencil/core/testing';

describe('abublavy-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<abublavy-ambulance-wl-app></abublavy-ambulance-wl-app>');

    const element = await page.find('abublavy-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
