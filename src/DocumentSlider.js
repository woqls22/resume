import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Typography } from '@material-ui/core'
import img1 from "../src/resources/docs2.png"
import img2 from "../src/resources/docs3.png"

export default function DocumentSlider(props)
{
    var items = [
        {
            url:img1,
        },
        {
            url:img2,
        },
        {
            url:"https://github.com/woqls22/StockNews/raw/master/BackEnd/PythonScripts/Resources/Demo.gif",
        },
        {
            url:"http://www.boannews.com/media/upFiles2/2020/09/685273073_63.jpg",
        }
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item url ={item.url} key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <div style={{marginLeft:"24rem", marginRight:"100rem", marginTop:"3rem"}}>
         <Paper>
            <img  src = {props.url}  alt="project" height="500px" width="800px" />
        </Paper>
        </div>
    
    )
}