import { removeItem } from './actions';
import { REMOVE_ITEM } from './actionTypes';

describe('Products Actions', () => {
  describe('Products remove item', () => {
    it('returns the correct removeItem action', () => {
      const subtotal = 0;
      const shipping = 15;
      const payload = {
        cart: [],
        cartCount: 0,
        subtotal,
        total: subtotal > 0 ? subtotal + shipping : 0,
        shipping: subtotal > 0 ? shipping : 0,
      };
      const expectedOutput = {
        type: REMOVE_ITEM,
        payload,
      };

      expect(removeItem(payload)).toEqual(expectedOutput);
    });
  });
});
