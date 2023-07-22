import React, {useState, useEffect} from "react";
import "./Starred.css";

const Starred=(()=> {
    const[starred, setstarred]=useState([]);
    const[v,setv]=useState(1);
    const webApi = async()=>{
        if(v==1){
            const res = await fetch("https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc")
            const Data = await res.json();

            setstarred(Data.items)
        }
        else{
            const stored = "https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page="+v
            const res = await fetch(stored)
            const Data = await res.json();
            setstarred(Data.items)
        }
    }
    useEffect(()=>{
        webApi()
    },[v])

    const back=(()=>{
        if(v>0){
            setv(v-1)
        }
    })

    const forword=(()=>{
        setv(v+1)
    })

    console.log(v);
    console.log(starred);
  return(
    <>
      <h2>The most starred Github repos </h2>
    {
        starred.map((ele,indx)=>{
            return (
                <div key={indx} >
                <div className="container1">
                <div className="container2">
                <div className="section">{ele.name}</div>
                <div className="section">{ele.description}</div>
                <div className="section">{ele. stars}</div>
                <div className="section">{ele.issues}</div>
                <div className="section">{ele.owner.avatar}</div>
                
                </div>
                
                </div>
                
                
                
                </div>
            )

        })
    }

    </>
  )
})

export default Starred;
