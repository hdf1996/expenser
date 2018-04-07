import { Fragment } from 'react';
import './base.scss'
import Card from '../components/Card';
import Header from '../components/Header';
import FloatButton from '../components/FloatButton';

export default () => (
  <Fragment>
    {[1, 2].map(() => <Card/>)}

    <FloatButton />
  </Fragment>
)
