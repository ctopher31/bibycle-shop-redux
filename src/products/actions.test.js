import { addItem } from './actions';

import { ADD_ITEM } from './actionTypes';

describe('Products Actions', () => {
  describe('Products add item', () => {
    it('returns the correct addItem action', () => {
      const key = '5001';
      const shipping = 15;
      const expectedOutput = {
        type: ADD_ITEM,
        key: '5001',
        shipping: 15,
      };
      expect(addItem(key, shipping)).toEqual(expectedOutput);
    });
  });
});
