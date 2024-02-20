import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'

const initialSlidesList = [
  {
    id: 'cc6e1752-a063-11ec-b909-0242ac120002',
    heading: 'Welcome',
    description: 'Rahul',
  },
  {
    id: 'cc6e1aae-a063-11ec-b909-0242ac120002',
    heading: 'Agenda',
    description: 'Technologies in focus',
  },
  {
    id: 'cc6e1e78-a063-11ec-b909-0242ac120002',
    heading: 'Cyber Security',
    description: 'Ethical Hacking',
  },
  {
    id: 'cc6e1fc2-a063-11ec-b909-0242ac120002',
    heading: 'IoT',
    description: 'Wireless Technologies',
  },
  {
    id: 'cc6e20f8-a063-11ec-b909-0242ac120002',
    heading: 'AI-ML',
    description: 'Cutting-Edge Technology',
  },
  {
    id: 'cc6e2224-a063-11ec-b909-0242ac120002',
    heading: 'Blockchain',
    description: 'Emerging Technology',
  },
  {
    id: 'cc6e233c-a063-11ec-b909-0242ac120002',
    heading: 'XR Technologies',
    description: 'AR/VR Technologies',
  },
]

class NxtSlides extends Component {
  state = {
    slidesList: initialSlidesList,
    head: true,
    desc: true,
    activeSlide: initialSlidesList[0],
  }

  onChangeHeading = () => {
    this.setState(prevState => ({head: !prevState.head}))
  }

  onChangeDescription = () => {
    this.setState(prevState => ({desc: !prevState.desc}))
  }

  changeHeading = event => {
    const {activeSlide, slidesList} = this.state
    const newSlides = [...slidesList]
    const updateActive = {...activeSlide, heading: event.target.value}
    const findIndex = newSlides.findIndex(each => each.id === updateActive.id)
    newSlides.splice(findIndex, 1, updateActive)
    // console.log(slidesList)
    this.setState({slidesList: newSlides, activeSlide: updateActive})
  }

  changeDescription = event => {
    const {activeSlide, slidesList} = this.state
    const newSlides = [...slidesList]
    const updateActive = {...activeSlide, description: event.target.value}
    const findIndex = newSlides.findIndex(each => each.id === updateActive.id)
    newSlides.splice(findIndex, 1, updateActive)
    // console.log(slidesList)
    this.setState({slidesList: newSlides, activeSlide: updateActive})
  }

  addNewTab = () => {
    const {activeSlide, slidesList} = this.state
    const newSlides = [...slidesList]
    const updateActive = {
      id: uuidv4(),
      heading: 'Heading',
      description: 'Description',
    }
    // console.log(updateActive)
    const findIndex = newSlides.findIndex(each => each.id === activeSlide.id)
    newSlides.splice(findIndex + 1, 0, updateActive)
    console.log(slidesList)

    this.setState({slidesList: newSlides, activeSlide: updateActive})
  }

  render() {
    const {slidesList, activeSlide, head, desc} = this.state
    return (
      <div className="nxtSlidesContainer">
        <nav className="navbar">
          <img
            className="navImage"
            src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-logo.png"
            alt="nxt slides logo"
          />
          <h1>Nxt Slides</h1>
        </nav>
        <div className="displayContainer">
          <div className="sideNavbar">
            <button
              onClick={this.addNewTab}
              className="newButton"
              type="button"
            >
              <img
                className="plusIcon"
                src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
                alt="new plus icon"
              />{' '}
              New
            </button>
            <ol className="cardsListContainer">
              {slidesList.map((each, index) => (
                <li
                  className="listItem"
                  testid={`slideTab${index}`}
                  onClick={() => {
                    this.setState({activeSlide: slidesList[index]})
                  }}
                  key={each.id}
                >
                  {' '}
                  <p>{index + 1}</p>
                  <div className="eachCard">
                    <h1 className="heading">{each.heading}</h1>
                    <p className="description">{each.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="slideDisplayContainer">
            <div className="slideDisplay">
              {head ? (
                <h1 onClick={this.onChangeHeading} className="CardHeading">
                  {activeSlide.heading}
                </h1>
              ) : (
                <input
                  onBlur={this.onChangeHeading}
                  className="input"
                  type="text"
                  value={activeSlide.heading}
                  onChange={this.changeHeading}
                />
              )}{' '}
              {desc ? (
                <p
                  onClick={this.onChangeDescription}
                  className="cardDescription"
                >
                  {activeSlide.description}
                </p>
              ) : (
                <input
                  className="input"
                  type="text"
                  onBlur={this.onChangeDescription}
                  onChange={this.changeDescription}
                  value={activeSlide.description}
                />
              )}{' '}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NxtSlides
