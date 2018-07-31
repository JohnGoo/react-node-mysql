import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

const PlayerAPI = {
	data: [{
		number: 0,
		name: 'eqwe',
		position: 'dsdsf'
	}, {
		number: 2,
		name: 'John',
		position: 'gfh'
	}, {
		number: 43,
		name: 'Tom',
		position: 'tryt'
	}, {
		number: 23,
		name: 'Hua',
		position: 'bgh'
	}, {
		number: 45,
		name: 'wang',
		position: 'htj'
	}],
	all() {
		return this.data;
	},
	get(num) {
		return this.data.filter(p => p.number === num)[0];
	}
}

const FullRoster = () => (
  <div>
    <ul>
      {
        PlayerAPI.all().map(p => (
          <li key={p.number}>
            <Link to={`/roster/${p.number}`}>{p.name}</Link>
          </li>
        ))
      }
    </ul>
  </div>
)

const Player = (props) => {
		console.log(props);
	
  const player = PlayerAPI.get(
    parseInt(props.match.params.number, 10)
  )
  if (!player) {
    return <div>Sorry, but the player was not found</div>
  }
  return (
    <div>
      <h1>{player.name} (#{player.number})</h1>
      <h2>{player.position}</h2>
    </div>
	)
}

export const Home = () => {
  return (
   	<div>
	    <h1>Welcome to the Tornadoes Website!</h1>
	  </div>
  )
}

export const Roster = () => (
  <div>
    <h2>This is a roster page!</h2>
    <Switch>
      <Route exact path='/roster' component={FullRoster}/>
      <Route path='/roster/:number' component={Player}/>
    </Switch>
  </div>
)

export const Schedule = () => {
  return (
   	<div>
	    <ul>
	      <li>6/5 @ Evergreens</li>
	      <li>6/8 vs Kickers</li>
	      <li>6/14 @ United</li>
	    </ul>
	  </div>
  )
}