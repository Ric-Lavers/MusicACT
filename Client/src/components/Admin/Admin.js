import React from 'react';
import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';
import { PostList } from './Posts';

const admin = () => (
  <Admin
    restClient={jsonServerRestClient('http://jsonplaceholder.typicode.com')}
  >
    <Resource name="posts" list={PostList} />
  </Admin>
);

export default admin;
