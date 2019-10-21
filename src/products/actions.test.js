import { getProducts } from './actions';
import { GET_PRODUCTS } from './actionTypes';

describe('Products Actions', () => {
  describe('Products add item', () => {
    it('returns the correct addItem action', () => {
      const payload = {
        items: [
          {
            number: '51001',
            name: 'widget',
            price: 35.57,
            salePrice: 32.95,
            onSale: true,
          },
        ],
      };
      const expectedOutput = {
        type: GET_PRODUCTS,
        payload,
      };

      expect(getProducts(payload)).toEqual(expectedOutput);
    });
  });
});
