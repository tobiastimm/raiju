// @flow

import * as React from 'react';

interface Sample {
  type: string | undefined;
  name?: string;
  click(): void;
  callback: () => void;
}

type SampleType = {
  myType: string;
  callback: () => void;
};

export class Test extends React.Component<{bar: string}, {}>{
  render(){
    return (
      <div foo={this.props.bar} bar={true} baz={'str'} boz={"other str"}></div>
    );
  }
}


const reg = /\.(js|ts|mjs)$/;

const bla = true === "bla" ? "blub" : "foo";

for (var i = test; i < 10; i++) {}

while (true) {}

do {} while (true);

import * as styles from './mission.scss';

// this is a comment!
export default function MissionIcon({ key, title }) {

  const string = 'string';
  const number = 20;
  const blue = true;

  return <i class={classnames(
    styles['mission__icon'],
    {
      [styles['mission__icon-letter']]: title.match(A_HEBREW_LETTER),
      [styles['mission__icon-first']]: !key,
    }
  )}>{title}</i>;
}

@connect(
  ({ artists }) => ({ artists }),
  dispatch => bindActionCreators({ getArtists, getArtist, addArtist, editArtist, removeArtist }, dispatch)
)
export default class AdminArtists extends Component {

  componentWillMount = () => {
    this.props.getArtists();
  }

  render = () => {
    console.log(this.props.artists);
    return <div><div><div></div></div></div>;
  }
}
