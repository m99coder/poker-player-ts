import { GameState } from './GameState'
import { Card, Evaluator } from 'deuces.js'
// fix for wrong export
// import * as Deck from 'deuces.js/lib/Deck'

export class Player {
  private encodeCard(card: Card): string {
    const rank = card.rank === '10' ? 'T' : card.rank
    return `${rank}${card.suit[0]}`
  }

  public betRequest(gameState: GameState, betCallback: (bet: number) => void): void {
    // this will fold all the time
    betCallback(0)

    // encode hole cards
    const hand =
      gameState.players[gameState.in_action].hole_cards
        .map(c => Card.newCard(this.encodeCard(c)))

    // encode community cards
    const board =
      gameState.community_cards
        .map(c => Card.newCard(this.encodeCard(c)))

    // evaluate rank
    // Hand strength is valued on a scale of 1 to 7462,
    // where 1 is a Royal Flush and 7462 is unsuited 7-5-4-3-2,
    // as there are only 7642 distinctly ranked hands in poker.
    const evaluator = new Evaluator()
    let rank = evaluator.evaluate(board, hand)
    let rankClass = evaluator.get_rank_class(rank)
    let percentage = 1.0 - evaluator.get_five_card_rank_percentage(rank)

    // some output
    console.log('Hole cards')
    Card.print_pretty_cards(hand, true)

    console.log('\nFlop')
    Card.print_pretty_cards(board, true)
    console.log(`Rank for your hand is: ${rank} (${evaluator.class_to_string(rankClass)})`)
    console.log(percentage)

    // turn
    console.log('\nTurn')
    board.push(Card.newCard('4h'))
    Card.print_pretty_cards(board, true)

    rank = evaluator.evaluate(board, hand)
    rankClass = evaluator.get_rank_class(rank)
    percentage = 1.0 - evaluator.get_five_card_rank_percentage(rank)
    console.log(`Rank for your hand is: ${rank} (${evaluator.class_to_string(rankClass)})`)
    console.log(percentage)

    // river
    console.log('\nRiver')
    board.push(Card.newCard('6d'))
    Card.print_pretty_cards(board, true)

    rank = evaluator.evaluate(board, hand)
    rankClass = evaluator.get_rank_class(rank)
    percentage = 1.0 - evaluator.get_five_card_rank_percentage(rank)
    console.log(`Rank for your hand is: ${rank} (${evaluator.class_to_string(rankClass)})`)
    console.log(percentage)

    // summary
    // console.log('\nSummary')
    // evaluator.hand_summary(board, [hand])
  }

  public showdown(_gameState: GameState): void {
    // for implementing learning algorithms only
  }
}

export default Player
