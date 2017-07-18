import ActiveBidItem from 'desktop/apps/auction2/components/layout/active_bids/ActiveBidItem'
import BidStatus from 'desktop/components/bid_status/react'
import MeQuery from 'desktop/apps/auction2/utils/queries/me'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import block from 'bem-cn'
import get from 'lodash.get'
import metaphysics from 'lib/metaphysics.coffee'
import { connect } from 'react-redux'
import { data as sd } from 'sharify'

class MyActiveBids extends Component {
  static propTypes = {
    lotStandings: PropTypes.array,
    saleId: PropTypes.string.isRequired,
    user: PropTypes.object
  }

  state = {
    lotStandings: []
  }

  componentWillMount () {
    this.setState({
      lotStandings: this.props.lotStandings
    })
  }

  componentDidMount () {
    this.pollInterval = setInterval(this.getFreshData, sd.ACTIVE_BIDS_POLL_INTERVAL)
  }

  componentWillUnmount () {
    this.clearInterval(this.pollInterval)
  }

  getFreshData = async () => {
    const { saleId, user } = this.props

    const { me } = await metaphysics({
      query: MeQuery(saleId),
      req: {
        user
      }
    })

    this.setState({
      lotStandings: me.lot_standings
    })
  }

  render () {
    const lotStandings = get(this.state, 'lotStandings', false) || this.props.lotStandings || []
    const b = block('auction2-my-active-bids')

    if (!lotStandings.length) {
      return null
    }

    return (
      <div className={b()}>
        <h2>
          Your Active Bids
        </h2>

        { lotStandings
          .filter(bid => bid.sale_artwork)
          .map((bid, key) => {
            return (
              <ActiveBidItem
                {...bid.sale_artwork}
                BidStatus={BidStatus}
                bid={bid}
                key={key}
              />
            )
          })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { app } = state

  return {
    lotStandings: app.me.lot_standings,
    saleId: app.auction.get('id'),
    user: app.user
  }
}

export default connect(
  mapStateToProps
)(MyActiveBids)
