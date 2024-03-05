import { newSpecPage } from '@stencil/core/testing';
import { AbublavyAmbulanceWlApp } from '../abublavy-ambulance-wl-app';

describe('abublavy-ambulance-wl-app', () => {
  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [AbublavyAmbulanceWlApp],
      html: `<abublavy-ambulance-wl-app base-path="/"></abublavy-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget();
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual('abublavy-ambulance-wl-editor');
  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [AbublavyAmbulanceWlApp],
      html: `<abublavy-ambulance-wl-app base-path="/ambulance-wl/"></abublavy-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget();
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual('abublavy-ambulance-wl-list');
  });
});
