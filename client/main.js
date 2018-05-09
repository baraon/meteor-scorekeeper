import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

const players = [{
  _id: '1',
  name: 'Baraon',
  score: 99
}, {
  _id: '2',
  name: 'Erin',
  score: 99
}, {
  _id: '3',
  name: 'Ben',
  score: 98
}];

const renderPlayers = function (playersList) {
  return playersList.map(function (player) {
    return <p key={player._id}>{player.name} has {player.score} point(s).</p>;
  });
};

Meteor.startup(function () {
  let title = 'Score keep';
  let name = 'Baraon'
  let jsx = (
    <div>
      <h1>{title}</h1>
      <p>Hello {name}</p>
      <p>This is another p.</p>
      {renderPlayers(players)}
    </div>
  );
  ReactDOM.render(jsx, document.getElementById('app'));
});
