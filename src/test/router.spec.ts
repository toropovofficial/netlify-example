import { expect } from 'chai';
import Router from '../utils/Router';
import Messenger from '../pages/Messenger/index';

describe('Router', () => {
  it('route', () => {
    const router = new Router('#root');
    const test = router.use('dd', Messenger);
    expect(test).to.be.eq(123);
  });
});
