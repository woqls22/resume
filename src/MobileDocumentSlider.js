import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Typography } from '@material-ui/core'
import img1 from "../src/resources/docs2.png"
import img2 from "../src/resources/docs3.png"

export default function MobileDocumentSlider(props)
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
        <div style={{marginLeft:"auto", marginRight:"auto", marginTop:"3rem",display:"table"}}>
         <Paper>
            <img  src = {props.url}  alt="project"  width="370px" />
        </Paper>
        </div>
    
    )
}