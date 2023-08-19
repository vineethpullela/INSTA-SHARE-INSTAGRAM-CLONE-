import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'

import MyProfile from './components/MyProfile'

import UserProfile from './components/UserProfile'

import SearchContext from './context/SearchContext'

import './App.css'

class App extends Component {
  state = {searchText: ''}

  updateSearchText = text => {
    this.setState({searchText: text})
  }

  render() {
    const {searchText} = this.state
    return (
      <SearchContext.Provider
        value={{searchText, updateSearchText: this.updateSearchText}}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/users/:userId" component={UserProfile} />
          <ProtectedRoute exact path="/my-profile" component={MyProfile} />
          <Route to="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </SearchContext.Provider>
    )
  }
}

export default App
