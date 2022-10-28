import { MoreThanFivePipe } from './more-than-five.pipe';

describe('MoreThanFivePipe', () => {
  it('create an instance', () => {
    const pipe = new MoreThanFivePipe();
    expect(pipe).toBeTruthy();
  });
});
