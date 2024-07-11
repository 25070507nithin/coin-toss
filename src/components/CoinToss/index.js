// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    total: 0,
    heads: 0,
    tails: 0,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  onTossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    this.setState(prevState => ({total: prevState.total + 1}))
    if (tossResult === 0) {
      this.setState(prevState => ({heads: prevState.heads + 1}))
      this.setState({
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      })
    } else {
      this.setState(prevState => ({tails: prevState.tails + 1}))
      this.setState({
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      })
    }
  }

  render() {
    const {total, heads, tails, imageUrl} = this.state
    return (
      <div className="bg-container">
        <div className="coin-toss-container">
          <h1 className="main-heading">Coin Toss Game</h1>
          <p className="head-tail">Heads (or) Tails</p>
          <img src={imageUrl} className="coin-image" alt="toss result" />
          <button
            onClick={this.onTossCoin}
            type="button"
            className="toss-button"
          >
            Toss coin
          </button>
          <div className="total-container">
            <p>Total:{total}</p>
            <p>Heads:{heads}</p>
            <p>Tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
