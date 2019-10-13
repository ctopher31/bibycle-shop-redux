import { addItem } from './actions';
import { ADD_ITEM } from './actionTypes';

describe('Products Actions', () => {
  describe('Products add item', () => {
    it('returns the correct addItem action', () => {
      const subtotal = 32.95;
      const shipping = 15;
      const payload = {
        cart: [
          {
            number: '51001',
            name: 'widget',
            price: 35.57,
            salePrice: 32.95,
            onSale: true,
          },
        ],
        cartCount: 1,
        subtotal,
        total: subtotal > 0 ? subtotal + shipping : 0,
        shipping: subtotal > 0 ? shipping : 0,
      };
      const expectedOutput = {
        type: ADD_ITEM,
        payload,
      };

      expect(addItem(payload)).toEqual(expectedOutput);
    });
  });
});
