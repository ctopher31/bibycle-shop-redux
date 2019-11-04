import { getProductsSuccess, getProductsFailure } from './actions';
import { GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILURE } from './actionTypes';

describe('Products Actions', () => {
  describe('Get Products', () => {
    it('returns the correct getProductsSuccess action', () => {
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
        type: GET_PRODUCTS_SUCCESS,
        payload,
      };

      expect(getProductsSuccess(payload)).toEqual(expectedOutput);
    });

    it('returns the correct getProductsFailure action', () => {
      const payload = 'There was an error';
      const expectedOutput = {
        type: GET_PRODUCTS_FAILURE,
        payload,
      };

      expect(getProductsFailure(payload)).toEqual(expectedOutput);
    });
  });
});
