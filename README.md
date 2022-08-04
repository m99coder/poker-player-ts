# Poker Player implementation with TypeScript

TypeScript client skeleton for Lean Poker For more information visit: <http://leanpoker.org>

## How to get started

```shell
npm install
npm start
```

## Example calls

```shell
# get version
curl -d 'action=version' http://localhost:1337/

# bet
curl -d 'action=bet_request&game_state={
  "players":[
    {
      "name":"Player 1",
      "stack":1000,
      "status":"active",
      "bet":0,
      "hole_cards":[],
      "version":"Version name 1",
      "id":0
    },
    {
      "name":"Player 2",
      "stack":1000,
      "status":"active",
      "bet":0,
      "hole_cards":[],
      "version":"Version name 2",
      "id":1
    }
  ],
  "tournament_id":"550d1d68cd7bd10003000003",
  "game_id":"550da1cb2d909006e90004b1",
  "round":0,
  "bet_index":0,
  "small_blind":10,
  "orbits":0,
  "dealer":0,
  "community_cards":[],
  "current_buy_in":0,
  "pot":0,
  "in_action":0
}' http://localhost:1337/

# showdown
curl -d 'action=showdown&game_state={
  "players":[
    {
      "name":"Player 1",
      "stack":1000,
      "status":"active",
      "bet":0,
      "hole_cards":[],
      "version":"Version name 1",
      "id":0
    },
    {
      "name":"Player 2",
      "stack":1000,
      "status":"active",
      "bet":0,
      "hole_cards":[],
      "version":"Version name 2",
      "id":1
    }
  ],
  "tournament_id":"550d1d68cd7bd10003000003",
  "game_id":"550da1cb2d909006e90004b1",
  "round":0,
  "bet_index":0,
  "small_blind":10,
  "orbits":0,
  "dealer":0,
  "community_cards":[],
  "current_buy_in":0,
  "pot":0,
  "in_action":0
}' http://localhost:1337/
```

```shell
curl -X POST -H --silent \
  --data-urlencode "action=bet_request" \
  --data-urlencode "game_state=$(cat state.json)" \
  http://localhost:1337/
```
