import { newSpecPage } from '@stencil/core/testing';
import { AbublavyAmbulanceWlList } from '../abublavy-ambulance-wl-list';

describe('abublavy-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AbublavyAmbulanceWlList],
      html: `<abublavy-ambulance-wl-list></abublavy-ambulance-wl-list>`,
    });

    const wlList = page.rootInstance as AbublavyAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length;

    const items = page.root.shadowRoot.querySelectorAll('md-list-item');
    expect(items.length).toEqual(expectedPatients);
  });
});
