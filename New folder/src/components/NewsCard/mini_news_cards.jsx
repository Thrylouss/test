import {useEffect, useState} from "react";
import axios from "axios";
import '../components.css'
import {GetNews} from "../../features/GetNews/GetNews.jsx";


export default function MiniNewsCard(){
    const {miniNews} = GetNews()

    return (
        <>
            <div className='mini-news'>
                {miniNews.map((miniNew, index) => (
                    <div className='mini-news-card' key={index} style={{backgroundImage: `url(${miniNew.image})`}}>
                        <div className='mini-news-card-content'>
                            <p>{miniNew.created_at}</p>
                            <h1>{miniNew.title}</h1>
                            <br/>
                            <br/>
                            <p className='text'>{miniNew.content.slice(0, 300)}...</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}