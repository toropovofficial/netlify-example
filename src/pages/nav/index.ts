import template from './index.pug';
import Block from '../../utils/block';

export class Nav extends Block {
  constructor() {
    super('section', {});
  }

  render() {
    return this.compile(template, {});
  }
}

export function NavIint() {
  const nav = new Nav();
  if (nav.element) {
    document.body.append(nav.element);
  }
}
