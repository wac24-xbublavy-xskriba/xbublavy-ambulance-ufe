import { newSpecPage } from '@stencil/core/testing';
import { AbublavyAmbulanceWlList } from '../abublavy-ambulance-wl-list';

describe('abublavy-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AbublavyAmbulanceWlList],
      html: `<abublavy-ambulance-wl-list></abublavy-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <abublavy-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </abublavy-ambulance-wl-list>
    `);
  });
});
