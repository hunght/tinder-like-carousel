import {createSelector} from 'reselect';
import {join, values, compose, pick} from 'ramda';

const processUsers = (users = []) =>
  users.map(user => ({
    ...user,
    address: compose(
      join(' '),
      values,
      pick(['street', 'city', 'state']),
    )(user.location || {}),
    fullname: compose(
      join(' '),
      values,
      pick(['title', 'first', 'last']),
    )(user.name || {}),
  }));

export const getUserDataPolished = createSelector(
  state => state.app.users || [],
  processUsers,
);

export const getFavoriteDataPolished = createSelector(
  state => state.app.favorite || [],
  processUsers,
);
