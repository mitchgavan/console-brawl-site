import { PropTypes } from 'react';
import Head from 'next/head';
import stylesheet from '../styles/index.scss';

const AppHead = props => (
  <div>
    <Head>
      <title>Console Brawl - {props.title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,600" rel="stylesheet" />
    </Head>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
  </div>
);

const { string } = PropTypes;

AppHead.propTypes = {
  title: string.isRequired,
};

export default AppHead;
