import {
  addItemRequest,
  addItemSuccess,
  addItemFailure,
  removeItemRequest,
  removeItemSuccess,
  removeItemFailure,
  clearCart,
} from './actions';
import {
  ADD_ITEM_REQUEST,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_FAILURE,
  REMOVE_ITEM_REQUEST,
  REMOVE_ITEM_SUCCESS,
  REMOVE_ITEM_FAILURE,
  CLEAR_CART,
} from './actionTypes';

describe('Cart Actions', () => {
  describe('Cart add item', () => {
    it('returns the correct addItemRequest action', () => {
      const key = '50001';
      const expectedOutput = {
        type: ADD_ITEM_REQUEST,
        key,
      };

      expect(addItemRequest(key)).toEqual(expectedOutput);
    });

    it('returns the correct addItemSuccess action', () => {
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
        type: ADD_ITEM_SUCCESS,
        payload,
      };

      expect(addItemSuccess(payload)).toEqual(expectedOutput);
    });

    it('returns the correct addItemFailure action', () => {
      const payload = 'There was an error';
      const expectedOutput = {
        type: ADD_ITEM_FAILURE,
        payload,
      };

      expect(addItemFailure(payload)).toEqual(expectedOutput);
    });
  });

  describe('Cart remove item', () => {
    it('returns the correct removeItemRequest action', () => {
      const key = '50001';
      const expectedOutput = {
        type: REMOVE_ITEM_REQUEST,
        key,
      };

      expect(removeItemRequest(key)).toEqual(expectedOutput);
    });

    it('returns the correct removeItemSuccess action', () => {
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
        type: REMOVE_ITEM_SUCCESS,
        payload,
      };

      expect(removeItemSuccess(payload)).toEqual(expectedOutput);
    });

    it('returns error if it fails', () => {
      const payload = 'There was an error';
      const expectedOutput = {
        type: REMOVE_ITEM_FAILURE,
        payload,
      };

      expect(removeItemFailure(payload)).toEqual(expectedOutput);
    });
  });

  describe('Clear Cart', () => {
    it('returns the correct clearCart action', () => {
      const expectedOutput = {
        type: CLEAR_CART,
      };

      expect(clearCart()).toEqual(expectedOutput);
    });
  });
});
