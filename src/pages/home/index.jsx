import { connect } from 'react-redux';

function Home({count, add}) {

  return <div>
    Home
    <button onClick={() => add()}>async add</button>
    <p>{count}</p>
  </div>
}

const mapStateToProps =  (state) => {
  return {
    count: state.homeReducer
  }
}

const mapDispatchToProps = dispatch => ({
  add: () => dispatch({type: 'INCREMENT_ASYNC'})
})


export default connect(mapStateToProps, mapDispatchToProps)(Home);