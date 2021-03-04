import axios from '../components/base_url';
import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import PlayCircleFilledOutlinedIcon from '@material-ui/icons/PlayCircleFilledOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbUpAltRoundedIcon from '@material-ui/icons/ThumbUpAltRounded';
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
import ThumbDownAltRoundedIcon from '@material-ui/icons/ThumbDownAltRounded';
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';
import styles from './Rows.module.scss'


const img_url = "https://image.tmdb.org/t/p/w500/"
const strShorter = function truncate(short, n){
    return short?.length > n ? short.substr(0, n-1) + "..." : short;}



function Rows( {title, url, rowName} ) {
    const [request, setRequest] = useState([]);
     const [features, setFeatures ] = useState({ 
        transform: 'scale(1.3)',
        zIndex: '9999',
        position: 'absolute'

    })

    useEffect(() => {
        async function fetchRowItems() {
            const req = await axios.get(url);
            setRequest(req.data.results)
            return req;
        }
        fetchRowItems();
//        console.log(request)
    },[url])

/* 
     function hoverHandler(e) {
          setTimeout(() => {



            

            !!!! BRO STAY SOLID !!!!
            !!!! TRY CSS.TEXT DOM MANUPILATION ON CARDS 
            !!! CSSSTYLEDECLARATION SETPROPERTY()

            CHECK THIS OUT TOO 


            var Link = React.createClass({
  getInitialState: function(){
    return {hover: false}
  },
  toggleHover: function(){
    this.setState({hover: !this.state.hover})
  },
  render: function() {
    var linkStyle;
    if (this.state.hover) {
      linkStyle = {backgroundColor: 'red'}
    } else {
      linkStyle = {backgroundColor: 'blue'}
    }
    return(
      <div>
        <a style={linkStyle} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>Link</a>
      </div>
    )
}


    AND THISSS

    const useFade = () => {
  const [ fade, setFade ] = useState(false);

  const onMouseEnter = () => {
    setFade(true);
  };

  const onMouseLeave = () => {
    setFade(false);
  };

  const fadeStyle = !fade ? {
    opacity: 1, transition: 'all .2s ease-in-out',
  } : {
    opacity: .5, transition: 'all .2s ease-in-out',
  };

  return { fadeStyle, onMouseEnter, onMouseLeave };
};

const ListItem = ({ style }) => {
  const { fadeStyle, ...fadeProps } = useFade();

  return (
    <Paper
      style={{...fadeStyle, ...style}}
      {...fadeProps}
    >
      {...}
    </Paper>
  );
};



    CHECK OUT FOR CSS MODULES



         
    }, 500)}  */

/*     function hoverLeaveHandler(e) {
         setTimeout(() => {

              document.getElementsByClassName(`${e.target.nextSibling.className}`)[0].style.visibility = 'hidden'
              e.target.style.position = 'unset'
             e.target.style.maxHeight = '300px' , 500)


    } */
    
// style={features}

    return (
        <div className={`${rowName}_container`}>
            <h2 className={styles.row_title}> {title} </h2>
                <div className={styles.container}>
                        <div id="myRow" className={styles.row}> 
                            {request.slice(0,20).map((card) => (
                            <div className={styles.parent}> 
                                <div id="card" key={card.id} className={styles.card}>
                                    <img className={styles.posters} src={`${img_url}${card.poster_path}`}/>
                                        <div className={styles.features} >
                                                <div className={styles.buttons}>
                                                    <PlayCircleFilledOutlinedIcon fontSize="large"/>
                                                    <AddCircleOutlineOutlinedIcon fontSize="large" />
                                                    <ThumbUpAltOutlinedIcon fontSize="large" />
                                                    <ThumbDownAltOutlinedIcon fontSize="large" />
                                                    <KeyboardArrowDownOutlinedIcon fontSize="large" />
                                                </div>
                                                <div className={styles.name}>{card.name ? card.name : card.title}</div>
                                                <p className={styles.overview}> {strShorter(card.overview, 120)} </p>
                                        </div>
                                </div>
                            </div>   
                            ))}
                        </div> 

                </div>
        </div>
    )
}

export default Rows
