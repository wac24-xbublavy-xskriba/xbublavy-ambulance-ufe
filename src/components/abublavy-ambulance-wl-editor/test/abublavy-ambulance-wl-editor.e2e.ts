import { newE2EPage } from '@stencil/core/testing';

describe('abublavy-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<abublavy-ambulance-wl-editor></abublavy-ambulance-wl-editor>');

    const element = await page.find('abublavy-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
